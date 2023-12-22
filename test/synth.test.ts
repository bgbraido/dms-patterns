
import * as cdk from 'aws-cdk-lib';
import { S32Rds } from '../src/dms-patterns/s32rds';

test('App can be synthesized', () => {

  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  new S32Rds(stack, 'S32RDS', {
    bucketArn: 'arn:aws:s3:::my-bucket',
  });

  app.synth();
});

