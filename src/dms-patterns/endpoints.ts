import * as cdk from 'aws-cdk-lib';
import { aws_dms as dms } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export enum EndpointEngine {
  MYSQL = 'mysql',
  POSTGRES = 'postgres',
  S3 = 's3',
}

export enum EndpointType {
  SOURCE = 'source',
  TARGET = 'target',
}


/**
 * Creates IAM role to allow dm service to access S3
 * see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty.html#serviceaccessrolearn
 * @param bucketArn
 * @returns iam.Role
*/
export function createCreateS3AccessRole(scope: Construct, bucketArn: string): iam.Role {
  const serviceAccessRole = new iam.Role(scope, 'ServiceAccessRole', {
    assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
    description: 'Role for DMS to access S3',
    inlinePolicies: {
      S3Access: new iam.PolicyDocument({
        statements: [
          new iam.PolicyStatement({
            actions: ['iam:PassRole'],
            effect: iam.Effect.ALLOW,
            resources: ['*'], // TODO on what resources should we limit this?
          }),
          new iam.PolicyStatement({
            actions: ['s3:PutObject', 's3:DeleteObject', 's3:PutObjectTagging', 's3:ListBucket'],
            effect: iam.Effect.ALLOW,
            resources: [bucketArn, `${bucketArn}/*`],
          }),
        ],
      }),
    },
  });
  return serviceAccessRole;
}


/**
  * Creates IAM role to allow dm service to access Secrets Manager
  * see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty.html#serviceaccessrolearn
  * @param region
  * @returns iam.Role
  */
export function createSecretsManagerAccessRole(scope: Construct, region: string, arn: string, identifier: string): iam.Role {

  const role = new iam.Role(scope, `${identifier}-dms-secretsmgr-access-role`, {
    assumedBy: new iam.ServicePrincipal(`dms.${region}.amazonaws.com`),
  });

  role.addToPolicy(
    new iam.PolicyStatement({
      resources: [arn],
      actions: [
        'secretsmanager:GetSecretValue',
        'secretsmanager:DescribeSecret',
        'secretsmanager:ListSecretVersionIds',
        'secretsmanager:ListSecrets',
      ],
    }),
  );

  return role;
}

// jsii does not support MappedTypes yet
// https://github.com/aws/jsii/issues/2901
// So it's not possible to reduce the duplication in the following classes with e.g.
// export interface S3EndpointBaseProps extends Pick<dms.CfnEndpoint, 'endpointType'> {}

export interface S3EndpointBaseProps {
  /**
   * The arn of the S3 bucket
   */
  readonly bucketArn: string;
  /**
   * The type of endpoint.
   */
  readonly endpointType: string;
  /*
   * The settings for the source s3 endpoint.
   */
  readonly s3Settings?: dms.CfnEndpoint.S3SettingsProperty;
}

export class S3EndpointBase extends dms.CfnEndpoint {

  constructor(scope: Construct, id: string, props: S3EndpointBaseProps) {
    super(scope, id, {
      endpointType: props.endpointType,
      engineName: 's3',
      s3Settings: {
        ...props.s3Settings,
        bucketName: s3.Bucket.fromBucketArn(scope, 'Bucket', props.bucketArn).bucketName,
      },
    });
  }
}

// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.S3.html
export interface S3SourceEndpointSettings {
  /**
 * An optional parameter to set a folder name in the S3 bucket.
 *
 * If provided, tables are created in the path `*bucketFolder* / *schema_name* / *table_name* /` . If this parameter isn't specified, the path used is `*schema_name* / *table_name* /` .
 *
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder
 */
  readonly bucketFolder?: string;
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
   * An optional parameter that specifies how AWS DMS treats null values.
   *
   * While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), AWS DMS treats the empty string as the null value instead of `NULL` .
   *
   * The default value is `NULL` . Valid values include any valid string.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue
   */
  readonly csvNullValue?: string;
  /**
   * The delimiter used to separate rows in the .csv file for both source and target.
   *
   * The default is a carriage return ( `\n` ).
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter
   */
  readonly csvRowDelimiter?: string;
  /**
   * When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
   *
   * The default is 0.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-ignoreheaderrows
   */
  readonly ignoreHeaderRows?: number;
  /**
   * For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark.
   *
   * This formatting complies with RFC 4180. When this value is set to `false` or `n` , string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.
   *
   * For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, AWS DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.
   *
   * The default value is `true` . Valid values include `true` , `false` , `y` , and `n` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180
   */
  readonly rfc4180?: boolean | cdk.IResolvable;
}


export interface S3SourceEndpointProps {
  /*
   * The arn of the source S3 bucket
   */
  readonly bucketArn: string;
  /*
   * The settings for the source s3 endpoint.
   */
  readonly s3SourceEndpointSettings?: S3SourceEndpointSettings;
}

/**
 * An endpoint for a S3 source.
 *
 * This construct creates a role for DMS to access the S3 bucket.
 */
export class S3SourceEndpoint extends S3EndpointBase {

  constructor(scope: Construct, id: string, props: S3SourceEndpointProps) {
    super(scope, id, {
      bucketArn: props.bucketArn,
      s3Settings: props.s3SourceEndpointSettings,
      endpointType: EndpointType.SOURCE,
    });
  }
}

// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring
export interface S3TargetEndpointSettings {

  /**
   * An optional parameter that specifies how AWS DMS treats null values.
   *
   * While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), AWS DMS treats the empty string as the null value instead of `NULL` .
   *
   * The default value is `NULL` . Valid values include any valid string.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue
   */
  readonly csvNullValue?: string;
  /**
   * An optional parameter that, when set to `true` or `y` , you can use to add column name information to the .csv output file.
   *
   * The default value is `false` . Valid values are `true` , `false` , `y` , and `n` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-addcolumnname
   */
  readonly addColumnName?: boolean | cdk.IResolvable;
  /**
   * An optional parameter to set a folder name in the S3 bucket.
   *
   * If provided, tables are created in the path `*bucketFolder* / *schema_name* / *table_name* /` . If this parameter isn't specified, the path used is `*schema_name* / *table_name* /` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder
   */
  readonly bucketFolder?: string;
  /**
   * A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 Developer Guide* .
   *
   * The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cannedaclforobjects
   */
  readonly cannedAclForObjects?: string;
  /**
   * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the `false` setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.
   *
   * If `CdcInsertsOnly` is set to `true` or `y` , only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of `IncludeOpForFullLoad` . If `IncludeOpForFullLoad` is set to `true` , the first field of every CDC record is set to I to indicate the INSERT operation at the source. If `IncludeOpForFullLoad` is set to `false` , every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .
   *
   * > AWS DMS supports the interaction described preceding between the `CdcInsertsOnly` and `IncludeOpForFullLoad` parameters in versions 3.1.4 and later.
   * >
   * > `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsonly
   */
  readonly cdcInsertsOnly?: boolean | cdk.IResolvable;
  /**
   * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is `false` , but when `CdcInsertsAndUpdates` is set to `true` or `y` , only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.
   *
   * For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the value of the `IncludeOpForFullLoad` parameter. If `IncludeOpForFullLoad` is set to `true` , the first field of every CDC record is set to either `I` or `U` to indicate INSERT and UPDATE operations at the source. But if `IncludeOpForFullLoad` is set to `false` , CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .
   *
   * > AWS DMS supports the use of the `CdcInsertsAndUpdates` parameter in versions 3.3.1 and later.
   * >
   * > `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsandupdates
   */
  readonly cdcInsertsAndUpdates?: boolean | cdk.IResolvable;
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
   * Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.
   *
   * When `CdcMaxBatchInterval` and `CdcMinFileSize` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.
   *
   * The default value is 60 seconds.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcmaxbatchinterval
   */
  readonly cdcMaxBatchInterval?: number;
  /**
   * Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.
   *
   * When `CdcMinFileSize` and `CdcMaxBatchInterval` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.
   *
   * The default value is 32 MB.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcminfilesize
   */
  readonly cdcMinFileSize?: number;
  /**
   * If this setting is set to `true` , AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by [`CdcPath`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath) . For more information, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .
   *
   * > This setting is supported in AWS DMS versions 3.4.2 and later.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-preservetransactions
   */
  readonly preserveTransactions?: boolean | cdk.IResolvable;
  /**
   * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.
   *
   * > AWS DMS supports the `IncludeOpForFullLoad` parameter in versions 3.1.4 and later.
   *
   * For full load, records can only be inserted. By default (the `false` setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If `IncludeOpForFullLoad` is set to `true` or `y` , the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.
   *
   * > This setting works together with the `CdcInsertsOnly` and the `CdcInsertsAndUpdates` parameters for output to .csv files only. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-includeopforfullload
   */
  readonly includeOpForFullLoad?: boolean | cdk.IResolvable;
  /**
   * An optional parameter.
   *
   * When set to GZIP it enables the service to compress the target files. To allow the service to write the target files uncompressed, either set this parameter to NONE (the default) or don't specify the parameter at all. This parameter applies to both .csv and .parquet file formats.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-compressiontype
   */
  readonly compressionType?: string;
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
   * A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.
   *
   * The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-maxfilesize
   */
  readonly maxFileSize?: number;
  /**
   * For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark.
   *
   * This formatting complies with RFC 4180. When this value is set to `false` or `n` , string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.
   *
   * For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, AWS DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.
   *
   * The default value is `true` . Valid values include `true` , `false` , `y` , and `n` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180
   */
  readonly rfc4180?: boolean | cdk.IResolvable;
  /**
   * The type of server-side encryption that you want to use for your data.
   *
   * This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS` .
   *
   * > For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3` . But you can’t change the existing value from `SSE_S3` to `SSE_KMS` .
   *
   * To use `SSE_S3` , create an AWS Identity and Access Management (IAM) role with a policy that allows `"arn:aws:s3:::*"` to use the following actions: `"s3:PutObject", "s3:ListBucket"`
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-encryptionmode
   */
  readonly encryptionMode?: string;
  /**
   * The AWS KMS key ID.
   *
   * If you are using `SSE_KMS` for the `EncryptionMode` , provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-serversideencryptionkmskeyid
   */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
   * The format of the data that you want to use for output. You can choose one of the following:.
   *
   * - `csv` : This is a row-based file format with comma-separated values (.csv).
   * - `parquet` : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dataformat
   */
  readonly dataFormat?: string;
  /**
   * The type of encoding that you're using:.
   *
   * - `RLE_DICTIONARY` uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.
   * - `PLAIN` doesn't use encoding at all. Values are stored as they are.
   * - `PLAIN_DICTIONARY` builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-encodingtype
   */
  readonly encodingType?: string;
  /**
   * The maximum size of an encoded dictionary page of a column.
   *
   * If the dictionary page exceeds this, this column is stored using an encoding type of `PLAIN` . This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to `PLAIN` encoding. This size is used for .parquet file format only.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dictpagesizelimit
   */
  readonly dictPageSizeLimit?: number;
  /**
   * The number of rows in a row group.
   *
   * A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.
   *
   * If you choose a value larger than the maximum, `RowGroupLength` is set to the max row group length in bytes (64 * 1024 * 1024).
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rowgrouplength
   */
  readonly rowGroupLength?: number;
  /**
   * The size of one data page in bytes.
   *
   * This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datapagesize
   */
  readonly dataPageSize?: number;
  /**
   * The version of the Apache Parquet format that you want to use: `parquet_1_0` (the default) or `parquet_2_0` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquetversion
   */
  readonly parquetVersion?: string;
  /**
   * A value that enables statistics for Parquet pages and row groups.
   *
   * Choose `true` to enable statistics, `false` to disable. Statistics include `NULL` , `DISTINCT` , `MAX` , and `MIN` values. This parameter defaults to `true` . This value is used for .parquet file format only.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-enablestatistics
   */
  readonly enableStatistics?: boolean | cdk.IResolvable;
  /**
   * A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.
   *
   * > AWS DMS supports the `TimestampColumnName` parameter in versions 3.1.4 and later.
   *
   * AWS DMS includes an additional `STRING` column in the .csv or .parquet object files of your migrated data when you set `TimestampColumnName` to a nonblank value.
   *
   * For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.
   *
   * For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database.
   *
   * The string format for this timestamp column value is `yyyy-MM-dd HH:mm:ss.SSSSSS` . By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database.
   *
   * When the `AddColumnName` parameter is set to `true` , DMS also includes a name for the timestamp column that you set with `TimestampColumnName` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-timestampcolumnname
   */
  readonly timestampColumnName?: string;
  /**
   * When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.
   *
   * For full load, when `useTaskStartTimeForFullLoadTimestamp` is set to `true` , each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.
   *
   * When `useTaskStartTimeForFullLoadTimestamp` is set to `false` , the full load timestamp in the timestamp column increments with the time data arrives at the target.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-usetaskstarttimeforfullloadtimestamp
   */
  readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdk.IResolvable;
  /**
   * A value that specifies the precision of any `TIMESTAMP` column values that are written to an Amazon S3 object file in .parquet format.
   *
   * > AWS DMS supports the `ParquetTimestampInMillisecond` parameter in versions 3.1.4 and later.
   *
   * When `ParquetTimestampInMillisecond` is set to `true` or `y` , AWS DMS writes all `TIMESTAMP` columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision.
   *
   * Currently, Amazon Athena and AWS Glue can handle only millisecond precision for `TIMESTAMP` values. Set this parameter to `true` for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or AWS Glue .
   *
   * > AWS DMS writes any `TIMESTAMP` column values written to an S3 file in .csv format with microsecond precision.
   * >
   * > Setting `ParquetTimestampInMillisecond` has no effect on the string format of the timestamp column value that is inserted by setting the `TimestampColumnName` parameter.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquettimestampinmillisecond
   */
  readonly parquetTimestampInMillisecond?: boolean | cdk.IResolvable;
}


export interface S3TargetEndpointProps {
  /**
   * The arn of the target S3 bucket
   */
  readonly bucketArn: string;
  /**
   * The settings for the target s3 endpoint.
   */
  readonly s3TargetEndpointSettings?: S3TargetEndpointSettings;
}

/**
 * An endpoint for a S3 target.
 *
 * This construct creates a role for DMS to access the S3 bucket.
 */
export class S3TargetEndpoint extends S3EndpointBase {

  constructor(scope: Construct, id: string, props: S3TargetEndpointProps) {
    super(scope, id, {
      bucketArn: props.bucketArn,
      s3Settings: {
        ...props.s3TargetEndpointSettings,
        serviceAccessRoleArn: createCreateS3AccessRole(scope, props.bucketArn).roleArn,
      },
      endpointType: EndpointType.TARGET,
    });
  }
}

export interface PostgreSqlSettings {
  /**
   * To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.
   *
   * You can later remove these artifacts.
   *
   * If this value is set to `N` , you don't have to create tables or triggers on the source database.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-captureddls
   */
  readonly captureDdls?: boolean | cdk.IResolvable;
  /**
   * The schema in which the operational DDL database artifacts are created.
   *
   * Example: `ddlArtifactsSchema=xyzddlschema;`
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-ddlartifactsschema
   */
  readonly ddlArtifactsSchema?: string;
  /**
   * Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.
   *
   * Example: `executeTimeout=100;`
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-executetimeout
   */
  readonly executeTimeout?: number;
  /**
   * When set to `true` , this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize` .
   *
   * If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-failtasksonlobtruncation
   */
  readonly failTasksOnLobTruncation?: boolean | cdk.IResolvable;
  /**
   * Sets the WAL heartbeat frequency (in minutes).
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatfrequency
   */
  readonly heartbeatFrequency?: number;
  /**
   * Sets the schema in which the heartbeat artifacts are created.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatschema
   */
  readonly heartbeatSchema?: string;
  /**
   * When true, lets PostgreSQL migrate the boolean type as boolean.
   *
   * By default, PostgreSQL migrates booleans as `varchar(5)` . You must set this setting on both the source and target endpoints for it to take effect.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-mapbooleanasboolean
   */
  readonly mapBooleanAsBoolean?: boolean | cdk.IResolvable;
  /**
   * Specifies the plugin to use to create a replication slot.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-pluginname
   */
  readonly pluginName?: string;
  /**
   * Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.
   *
   * When used with the `CdcStartPosition` request parameter for the AWS DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of `CdcStartPosition` . If the specified slot doesn't exist or the task doesn't have a valid `CdcStartPosition` setting, DMS raises an error.
   *
   * For more information about setting the `CdcStartPosition` request parameter, see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native) in the *AWS Database Migration Service User Guide* . For more information about using `CdcStartPosition` , see [CreateReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html) , [StartReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) , and [ModifyReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html) .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-slotname
   */
  readonly slotName?: string;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Amazon Redshift endpoint connection details.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-secretsmanagersecretid
   */
  readonly secretsManagerSecretId: string;
}

export interface PostgresProps {
  /**
   * The database name on the MongoDB source endpoint.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename
   */
  readonly databaseName: string;
  /**
   * The type of endpoint.
   */
  readonly endpointType: string;
  /**
   * The database endpoint identifier.
   *
   * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier
   */
  readonly endpointIdentifier: string;
  /**
   * The settings for the source postgres endpoint.
   */
  readonly postgresEndpointSettings: PostgreSqlSettings;
  /**
   * The port value for the source endpoint.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-port
   */
  readonly port?: number;
  /**
   * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` .
   *
   * > When `engine_name` is set to S3, the only allowed value is `none` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode
   */
  readonly sslMode?: string;
}

/**
 * An endpoint for a Postgres source.
 * This construct creates a role for DMS to access the secrets manager secret.
 */
export class PostgreSQLEndpoint extends dms.CfnEndpoint {

  constructor(scope: Construct, id: string, props: PostgresProps) {

    const secretArn = props.postgresEndpointSettings.secretsManagerSecretId;
    const secretsManagerAccessRole = createSecretsManagerAccessRole(scope, cdk.Stack.of(scope).region, secretArn, props.endpointIdentifier);

    super(scope, id, {
      endpointType: props.endpointType,
      endpointIdentifier: props.endpointIdentifier,
      engineName: EndpointEngine.POSTGRES,
      databaseName: props.databaseName,
      sslMode: props.sslMode,
      postgreSqlSettings: {
        ...props.postgresEndpointSettings,
        secretsManagerAccessRoleArn: secretsManagerAccessRole.roleArn,
        secretsManagerSecretId: secretArn,
      },
    });
  }
}

// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html
export interface MySqlSettings {
  /**
   * Code to run after connecting.
   *
   * This parameter should contain the code itself, not the name of a file containing the code.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-afterconnectscript
   */
  readonly afterConnectScript?: string;
  /**
   * Cleans and recreates table metadata information on the replication instance when a mismatch occurs.
   *
   * For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-cleansourcemetadataonmismatch
   */
  readonly cleanSourceMetadataOnMismatch?: boolean | cdk.IResolvable;
  /**
   * Specifies how often to check the binary log for new changes/events when the database is idle.
   *
   * The default is five seconds.
   *
   * Example: `eventsPollInterval=5;`
   *
   * In the example, AWS DMS checks for changes in the binary logs every five seconds.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-eventspollinterval
   */
  readonly eventsPollInterval?: number;
  /**
   * Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.
   *
   * Example: `serverTimezone=US/Pacific;`
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-servertimezone
   */
  readonly serverTimezone?: string;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-secretsmanagersecretid
   */
  readonly secretsManagerSecretId: string;
  /**
   * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` .
   *
   * > When `engine_name` is set to S3, the only allowed value is `none` .
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode
   */
  readonly sslMode?: string;
}

export interface MySqlProps {
  /**
   * The database name on the MongoDB source endpoint.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename
   */
  readonly databaseName: string;
  /**
   * The database endpoint identifier.
   *
   * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier
   */
  readonly endpointIdentifier: string;
  /**
   * The type of endpoint.
   */
  readonly endpointType: string;
  /**
   * The settings for the mysql endpoint.
   */
  readonly mySqlEndpointSettings: MySqlSettings;
}

/**
 * An endpoint for a MySQL source.
 * This construct creates a role for DMS to access the secrets manager secret.
 */
export class MySqlEndpoint extends dms.CfnEndpoint {

  constructor(scope: Construct, id: string, props: MySqlProps) {

    const secretArn = props.mySqlEndpointSettings.secretsManagerSecretId;
    const secretsManagerAccessRole = createSecretsManagerAccessRole(scope, cdk.Stack.of(scope).region, secretArn, props.endpointIdentifier);

    super(scope, id, {
      endpointType: props.endpointType,
      engineName: EndpointEngine.MYSQL,
      mySqlSettings: {
        ...props.mySqlEndpointSettings,
        secretsManagerAccessRoleArn: secretsManagerAccessRole.roleArn,
        secretsManagerSecretId: secretArn,
      },
    });
  }
}


