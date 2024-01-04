
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { S32Rds } from '../src/dms-patterns/s32rds';


export class S32RDSStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const s32rdsBucket = new s3.Bucket(this, 'MyBucket', {
      encryption: s3.BucketEncryption.KMS_MANAGED,
      accessControl: s3.BucketAccessControl.PUBLIC_READ_WRITE,
    });

    s32rdsBucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
    new S32Rds(this, 'S32Rds', {
      bucketName: s32rdsBucket.bucketName,
    });

  }
}

export class S32S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s32s3bucket = new s3.Bucket(this, 'MyBucket');
    s32s3bucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);

  }
}

