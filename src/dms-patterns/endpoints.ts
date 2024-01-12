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
export function createS3AccessRole(scope: Construct, bucketArn: string): iam.Role {
  const serviceAccessRole = new iam.Role(scope, 'ServiceAccessRole', {
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
export function secretsManagerAccessRole(scope: Construct, region: string): iam.Role {

  const role = new iam.Role(scope, 'dms-secretsmgr-access-role', {
    assumedBy: new iam.ServicePrincipal(`dms.${region}.amazonaws.com`),
  });

  role.addToPolicy(
    new iam.PolicyStatement({
      resources: ['*'],
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
        serviceAccessRoleArn: createS3AccessRole(scope, props.bucketArn).roleArn,
      },
    });
  }
}


export interface S3SourceEndpointSettings { }

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

export interface S3TargetEndpointSettings extends Pick<dms.CfnEndpoint.S3SettingsProperty, 'bucketFolder' | 'csvDelimiter' | 'csvNullValue' | 'csvRowDelimiter' | 'dataFormat' | 'serviceAccessRoleArn'> { }

export interface S3TargetEndpointProps {
  bucketArn: string;
  s3TargetEndpointSettings?: S3TargetEndpointSettings;
}

export class S3TargetEndpoint extends S3EndpointBase {

  constructor(scope: Construct, id: string, props: S3TargetEndpointProps) {
    super(scope, id, {
      bucketArn: props.bucketArn,
      s3Settings: props.s3TargetEndpointSettings,
      endpointType: EndpointType.TARGET,
    });
  }
}

export interface PostgreSqlSettings extends Required<Pick<dms.CfnEndpoint.PostgreSqlSettingsProperty, 'secretsManagerSecretId' >> {}


export interface PostgresSourceProps extends Required<Pick<dms.CfnEndpoint, 'endpointType' | 'databaseName' | 'username' | 'password' >>, Partial<Pick<dms.CfnEndpoint, 'port'>> {
  postgresSourceEndpointSettings: PostgreSqlSettings;
}

export class PostgreSQLEndpoint extends dms.CfnEndpoint {


  constructor(scope: Construct, id: string, props: PostgresSourceProps) {
    props.port = props.port || 5432;
    super(scope, id, {
      endpointType: props.endpointType,
      engineName: EndpointEngine.POSTGRES,
      databaseName: props.databaseName,
      port: props.port || 5432,
      postgreSqlSettings: {
        ...props.postgresSourceEndpointSettings,
        secretsManagerAccessRoleArn: secretsManagerAccessRole(scope, cdk.Stack.of(scope).region).roleArn,
      },
    });
  }
}


export interface MySqlSettings extends Pick<dms.CfnEndpoint.MySqlSettingsProperty, 'secretsManagerSecretId'> { }
export interface MySqlSourceProps extends Pick<dms.CfnEndpoint, 'endpointType' | 'databaseName' | 'password' | 'port'> {
  MySqlSourceEndpointSettings: MySqlSettings;
}

export class MySqlEndpoint extends dms.CfnEndpoint {

  constructor(scope: Construct, id: string, props: MySqlSourceProps) {
    super(scope, id, {
      endpointType: props.endpointType,
      engineName: EndpointEngine.MYSQL,
      mySqlSettings: {
        ...props.MySqlSourceEndpointSettings,
        secretsManagerAccessRoleArn: secretsManagerAccessRole(scope, cdk.Stack.of(scope).region).roleArn,
      },
    });
  }
}


