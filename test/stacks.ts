
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { S32Rds, S32S3 } from '../src/dms-patterns';
import { TableMappings } from '../src/dms-patterns/core';
import { S3DataType, S3Schema } from '../src/dms-patterns/core/table-mappings';

// A stack for testing the S32Rds construct
export class S32RDSStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // A bucket
    const bucket = new s3.Bucket(this, 'SourceBucket', {});
    bucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);

    const tableMappings = new TableMappings(
      [],
    );

    // The S32Rds construct
    new S32Rds(this, 'S32Rds', {
      bucketArn: bucket.bucketArn,
      tableMappings: tableMappings,
    });

  }
}

// A stack for testing the S32S3 construct
export class S32S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Source Bucket
    const sourceBucket = new s3.Bucket(this, 'SourceBucket');
    const targetBucket = new s3.Bucket(this, 'TargetBucket');
    sourceBucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
    targetBucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);

    const tableMappings = new TableMappings(
      [],
    );

    const schema = new S3Schema(
      [{
        TableName: 'weather',
        TablePath: 'weather',
        TableOwner: 'weather',
        TableColumns: [
          {
            ColumnName: 'ID',
            ColumnType: S3DataType.INT8,
            ColumnIsPk: true,
          },
          {
            ColumnName: 'Humidity',
            ColumnType: S3DataType.NUMERIC,
            ColumnPrecision: 3,
            ColumnScale: 1,
          },
          {
            ColumnName: 'Temperature',
            ColumnType: S3DataType.NUMERIC,
            ColumnPrecision: 3,
            ColumnScale: 1,
          },
        ],
      }],
    );

    new S32S3(this, 'S32S3', {
      sourceBucketArn: sourceBucket.bucketArn,
      sourceEndpointSettings: {
        externalTableDefinition: schema.toJSON(),
      },
      targetBucketArn: targetBucket.bucketArn,
      tableMappings: tableMappings,
    });

  }
}

// this is for testing purposes only. TODO to be removed.
const app = new cdk.App();
// new S32RDSStack(app, 'S32Rds', {
//   env: {
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: 'eu-west-1',
//   },
// });

new S32S3Stack(app, 'S32S3', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'eu-west-1',
  },
});