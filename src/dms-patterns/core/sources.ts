import { aws_dms as dms } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface SourceEndPointProps extends Omit<dms.CfnEndpointProps, 'endpointType'> { }

export class SourceEndPoint extends dms.CfnEndpoint {
  constructor(scope: Construct, id: string, props: SourceEndPointProps) {

    super(scope, id, {
      endpointType: 'source',
      ...props,
    });
  }
}

export class S3SourceEndpointSettings {
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

export interface S3SourceEndpointProps extends Omit<SourceEndPointProps, 'engineName'> {}

export class S3SourceEndpoint extends SourceEndPoint {
  constructor(scope: Construct, id: string, props: S3SourceEndpointProps) {

    super(scope, id, {
      engineName: 's3',
      s3Settings: props.s3Settings as dms.CfnEndpoint.S3SettingsProperty,
    });
  }
}

export interface S3SourceProps {
  bucketArn: string;
  s3EndpointSettings: S3SourceEndpointSettings;
}

export class S3Source extends Construct {

  endpoint: S3SourceEndpoint;

  constructor(scope: Construct, id: string, props: S3SourceProps) {
    super(scope, id);

    const serviceAccessRole = new iam.Role(this, 'ServiceAccessRole', {
      assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
      description: 'Role for DMS to access S3',
      inlinePolicies: {
        S3Access: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['iam:PassRole'],
              effect: iam.Effect.ALLOW,
              resources: [props.bucketArn], // TODO on what resources should we limit this?
            }),
            new iam.PolicyStatement({
              actions: [
                's3:ListBucket',
                's3:GetObject',
                's3:GetBucketLocation',
              ],
              effect: iam.Effect.ALLOW,
              resources: [props.bucketArn],
            }),
          ],
        }),
      },
    });

    this.endpoint = new dms.CfnEndpoint(this, 'S3SourceEndpoint', {
      endpointType: 'source',
      engineName: 's3',
      s3Settings: {
        serviceAccessRoleArn: serviceAccessRole.roleArn,
        cdcPath: props.s3EndpointSettings.cdcPath,
        csvDelimiter: props.s3EndpointSettings.csvDelimiter,
        csvRowDelimiter: props.s3EndpointSettings.csvRowDelimiter,
        externalTableDefinition: props.s3EndpointSettings.externalTableDefinition,
        ignoreHeaderRows: props.s3EndpointSettings.ignoreHeaderRows,
        bucketFolder: props.s3EndpointSettings.bucketFolder,
      },
    });
  }
}
