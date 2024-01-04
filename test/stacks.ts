
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { S32Rds, S32S3 } from '../src/dms-patterns';


// A stack for testing the S32Rds construct
export class S32RDSStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // A bucket
    const bucket = new s3.Bucket(this, 'SourceBucket', {});
    bucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);

    // The S32Rds construct
    new S32Rds(this, 'S32Rds', {
      bucketName: bucket.bucketName,
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

    new S32S3(this, 'S32S3', {
      sourceBucket: sourceBucket.bucketName,
      targetBucket: targetBucket.bucketName,
    });

  }
}

