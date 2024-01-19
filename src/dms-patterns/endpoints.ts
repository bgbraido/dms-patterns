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


export interface S3EndpointBaseProps extends Pick<dms.CfnEndpoint, 'endpointType'> {
  bucketArn: string;
  s3Settings?: dms.CfnEndpoint.S3SettingsProperty;
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
export interface S3SourceEndpointSettings extends Pick<dms.CfnEndpoint.S3SettingsProperty,
'bucketFolder' |
'bucketName' |
'cdcPath' |
'csvDelimiter' |
'csvNullValue' |
'csvRowDelimiter' |
'ignoreHeaderRows' |
'rfc4180' > {}


export interface S3SourceEndpointProps {
  bucketArn: string;
  s3SourceEndpointSettings?: S3SourceEndpointSettings;
}


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
export interface S3TargetEndpointSettings extends Pick<dms.CfnEndpoint.S3SettingsProperty,
'csvNullValue' |
'addColumnName' |
'bucketFolder' |
'bucketName' |
'cannedAclForObjects' |
'cdcInsertsOnly' |
'cdcInsertsAndUpdates' |
'cdcPath' |
'cdcMaxBatchInterval' |
'cdcMinFileSize' |
'preserveTransactions' |
'includeOpForFullLoad' |
'compressionType' |
'csvDelimiter' |
'csvRowDelimiter' |
'maxFileSize' |
'rfc4180' |
'encryptionMode' |
'serverSideEncryptionKmsKeyId' |
'dataFormat' |
'encodingType' |
'dictPageSizeLimit' |
'rowGroupLength' |
'dataPageSize' |
'parquetVersion' |
'enableStatistics' |
'timestampColumnName' |
'useTaskStartTimeForFullLoadTimestamp' |
'parquetTimestampInMillisecond' > {}


export interface S3TargetEndpointProps {
  bucketArn: string;
  s3TargetEndpointSettings?: S3TargetEndpointSettings;
}

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

export interface PostgreSqlSettings extends Required<Pick<dms.CfnEndpoint.PostgreSqlSettingsProperty, 'secretsManagerSecretId'>>, Partial<Pick<dms.CfnEndpoint.PostgreSqlSettingsProperty,
'captureDdls' |
// "consumeMonotonicEvents" |
'ddlArtifactsSchema' |
'executeTimeout' |
'failTasksOnLobTruncation' |
// "fetchCacheSize" |
'heartbeatFrequency' |
'heartbeatSchema' |
// "mapJsonbAsClob" |
// "mapLongVarcharAs" |
// "mapUnboundedNumericAsString" |
'mapBooleanAsBoolean' |
'pluginName' |
'slotName' >> {}


export interface PostgresSourceProps extends Required<Pick<dms.CfnEndpoint, 'endpointType' | 'databaseName' | 'endpointIdentifier'>>, Partial<Pick<dms.CfnEndpoint, 'port' | 'sslMode'>> {
  postgresSourceEndpointSettings: PostgreSqlSettings;
}

export class PostgreSQLEndpoint extends dms.CfnEndpoint {

  constructor(scope: Construct, id: string, props: PostgresSourceProps) {

    const secretArn = props.postgresSourceEndpointSettings.secretsManagerSecretId;
    const secretsManagerAccessRole = createSecretsManagerAccessRole(scope, cdk.Stack.of(scope).region, secretArn, props.endpointIdentifier);

    props.port = props.port || 5432;
    super(scope, id, {
      endpointType: props.endpointType,
      endpointIdentifier: props.endpointIdentifier,
      engineName: EndpointEngine.POSTGRES,
      databaseName: props.databaseName,
      sslMode: props.sslMode,
      postgreSqlSettings: {
        ...props.postgresSourceEndpointSettings,
        secretsManagerAccessRoleArn: secretsManagerAccessRole.roleArn,
        secretsManagerSecretId: secretArn,
      },
    });
  }
}

// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html
export interface MySqlSettings extends Required<Pick<dms.CfnEndpoint.MySqlSettingsProperty, 'secretsManagerSecretId'>>, Partial<Pick<dms.CfnEndpoint.MySqlSettingsProperty,
'eventsPollInterval' |
'afterConnectScript' |
'serverTimezone' |
'afterConnectScript' |
'cleanSourceMetadataOnMismatch'
>> { }
export interface MySqlSourceProps extends Required<Pick<dms.CfnEndpoint, 'endpointType' | 'databaseName' | 'endpointIdentifier'>> {
  mySqlSourceEndpointSettings: MySqlSettings;
}

export class MySqlEndpoint extends dms.CfnEndpoint {

  constructor(scope: Construct, id: string, props: MySqlSourceProps) {

    const secretArn = props.mySqlSourceEndpointSettings.secretsManagerSecretId;
    const secretsManagerAccessRole = createSecretsManagerAccessRole(scope, cdk.Stack.of(scope).region, secretArn, props.endpointIdentifier);

    super(scope, id, {
      endpointType: props.endpointType,
      engineName: EndpointEngine.MYSQL,
      mySqlSettings: {
        ...props.mySqlSourceEndpointSettings,
        secretsManagerAccessRoleArn: secretsManagerAccessRole.roleArn,
        secretsManagerSecretId: secretArn,
      },
    });
  }
}


