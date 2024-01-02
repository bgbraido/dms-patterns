
import * as cdk from 'aws-cdk-lib';
import { AwsSolutionsChecks } from 'cdk-nag';
import { S32Rds } from '../src/dms-patterns/s32rds';
import { S32S3 } from '../src/dms-patterns/s32s3';

test('S32Rds CDK Nag tests', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  new S32Rds(stack, 'S32RDS', {
    bucketName: 'arn:aws:s3:::my-bucket',
  });

  cdk.Aspects.of(stack).add(new AwsSolutionsChecks());
});

test('S32S3 CDK Nag tests', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  new S32S3(stack, 'S32S3', {
    bucketName: 'arn:aws:s3:::my-bucket',
  });

  cdk.Aspects.of(stack).add(new AwsSolutionsChecks());
});