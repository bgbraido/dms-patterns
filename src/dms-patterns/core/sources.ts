import { aws_dms as dms } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export enum AWSDMSDataType {
  BYTE = 'BYTE',
  DATE = 'DATE',
  TIME = 'TIME',
  DATETIME = 'DATETIME',
  INT1 = 'INT1',
  INT2 = 'INT2',
  INT4 = 'INT4',
  INT8 = 'INT8',
  NUMERIC = 'NUMERIC',
  REAL4 = 'REAL4',
  REAL8 = 'REAL8',
  STRING = 'STRING',
  UINT1 = 'UINT1',
  UINT2 = 'UINT2',
  UINT4 = 'UINT4',
  UINT8 = 'UINT8',
  BLOB = 'BLOB',
  CLOB = 'CLOB',
  BOOLEAN = 'BOOLEAN'
}

export interface TableColumn {
  ColumnName: string;
  ColumnType: AWSDMSDataType;
  ColumnLength?: number;
  ColumnNullable?: boolean;
  ColumnIsPk?: boolean;
  ColumnDateFormat?: string;
}

export interface Table {
  TableName: string;
  TablePath: string;
  TableOwner: string;
  TableColumns: TableColumn[];
}

export class DMSS3Schema {

  tableCount: number = 0;
  tables: Table[] = [];

  public constructor(tables: Table[] = []) {
    this.tables = tables;
  }

  public addTable(table: Table) {
    this.tables.push(table);
  }

  public toJSON(): string {

    const formattedTables = this.tables.map(table => {
      return {
        TableName: table.TableName,
        TablePath: table.TablePath,
        TableOwner: table.TableOwner,
        TableColumns: table.TableColumns.map(column => {
          return {
            ColumnName: column.ColumnName,
            ColumnType: column.ColumnType,
            ColumnLength: column.ColumnLength ? column.ColumnLength.toString() : undefined,
            ColumnNullable: typeof column.ColumnNullable !== 'undefined' ? String(column.ColumnNullable) : undefined,
            ColumnIsPk: typeof column.ColumnIsPk !== 'undefined' ? String(column.ColumnIsPk) : undefined,
          };
        }),
        TableColumnsTotal: table.TableColumns.length.toString(),
      };
    });

    return JSON.stringify(
      {
        TableCount: this.tables.length.toString(),
        Tables: formattedTables,
      }, null, 4);
  }
}

export interface S3SourceProps {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketName: string;
  /**
   * Specifies the folder path of CDC files.
   *
   * For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `CdcPath` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set [`PreserveTransactions`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions) to `true` , AWS DMS verifies that you have set this parameter to a folder path on your S3 target where AWS DMS can save the transaction order for the CDC load. AWS DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by [`BucketFolder`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder) and [`BucketName`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName) .
   *
   * For example, if you specify `CdcPath` as `MyChangedData` , and you specify `BucketName` as `MyTargetBucket` but do not specify `BucketFolder` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyChangedData` .
   *
   * If you specify the same `CdcPath` , and you specify `BucketName` as `MyTargetBucket` and `BucketFolder` as `MyTargetData` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyTargetData/MyChangedData` .
   *
   * For more information on CDC including transaction order on an S3 target, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .
   *
   * > This setting is supported in AWS DMS versions 3.4.2 and later.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcpath
   */
  readonly cdcPath?: string;
  /**
   * The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvdelimiter
   */
  readonly csvDelimiter?: string;
  /**
   * The delimiter used to separate rows in the .csv file for both source and target.
   *
   * The default is a carriage return ( `\n` ).
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter
   */
  readonly csvRowDelimiter?: string;
  /**
   * The external table definition.
   *
   * Conditional: If `S3` is used as a source then `ExternalTableDefinition` is required.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-externaltabledefinition
   */
  readonly externalTableDefinition?: string;
  /**
   * When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
   *
   * The default is 0.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-ignoreheaderrows
   */
  readonly ignoreHeaderRows?: number;
  /**
   * A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.
   *
   * The role must allow the `iam:PassRole` action. It enables AWS DMS to read and write objects from an S3 bucket.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-serviceaccessrolearn
   */
  readonly serviceAccessRoleArn?: string;
  /**
   * MG not sure about this one, but in the console we need to specify it.
   *
   * An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.
   *
   * For full load mode, AWS DMS converts source records into .csv files and loads them to the *BucketFolder/TableID* path. AWS DMS uses the Redshift `COPY` command to upload the .csv files to the target table. The files are deleted once the `COPY` operation has finished. For more information, see [COPY](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html) in the *Amazon Redshift Database Developer Guide* .
   *
   * For change-data-capture (CDC) mode, AWS DMS creates a *NetChanges* table, and loads the .csv files to this *BucketFolder/NetChangesTableID* path.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-bucketfolder
   */
  readonly bucketFolder?: string;

}

export class S3Source extends Construct {

  settings: dms.CfnEndpoint.S3SettingsProperty;

  constructor(scope: Construct, id: string, props: S3SourceProps) {
    super(scope, id);

    // TODO come up with sensible defaults for dates.

    const bucketArn = `arn:aws:s3:::${props.bucketName}`;

    const serviceAccessRole = new iam.Role(this, 'ServiceAccessRole', {
      assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
      description: 'Role for DMS to access S3',
      inlinePolicies: {
        S3Access: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['iam:PassRole'],
              effect: iam.Effect.ALLOW,
              resources: [bucketArn], // TODO on what resources should we limit this?
            }),
            new iam.PolicyStatement({
              actions: [
                's3:ListBucket',
                's3:GetObject',
                's3:GetBucketLocation',
              ],
              effect: iam.Effect.ALLOW,
              resources: [bucketArn],
            }),
          ],
        }),
      },
    });

    this.settings = {
      ...props,
      serviceAccessRoleArn: serviceAccessRole.roleArn,
    };
  }
}