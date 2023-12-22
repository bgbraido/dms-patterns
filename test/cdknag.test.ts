
import * as cdk from 'aws-cdk-lib';
import { AwsSolutionsChecks } from 'cdk-nag';
import { S32Rds } from '../src/dms-patterns/s32rds';

test('CDK Nag tests', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  new S32Rds(stack, 'S32RDS', {
    bucketArn: 'arn:aws:s3:::my-bucket',
  });

  cdk.Aspects.of(stack).add(new AwsSolutionsChecks());
});

