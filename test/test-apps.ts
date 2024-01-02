import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';


export const s32rdsApp = new cdk.App();
export const s32rdsStack = new cdk.Stack(s32rdsApp, 'S32RDS');
const s32rdsBucket = new s3.Bucket(s32rdsStack, 'MyBucket', {
  encryption: s3.BucketEncryption.KMS_MANAGED,
  accessControl: s3.BucketAccessControl.PUBLIC_READ_WRITE,
});
s32rdsBucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);


export const s32s3App = new cdk.App();
export const s32s3Stack = new cdk.Stack(s32rdsApp, 'S32S3');
const s32s3bucket = new s3.Bucket(s32s3Stack, 'MyBucket');
s32s3bucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
