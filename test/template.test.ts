
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { S32RDSStack, S32S3Stack } from './stacks';

const app = new cdk.App();


test('S32Rds refers an s3 bucket', () => {
  const s32rds = new S32RDSStack(app, 'S32Rds');
  const template = Template.fromStack(s32rds);
  // stack should have a resource of type AWS::S3::Bucket
  expect(template.resourceCountIs('AWS::S3::Bucket', 1));
});

test('S32S3 refers an s3 bucket', () => {
  const s32s3 = new S32S3Stack(app, 'S32S3');
  const template = Template.fromStack(s32s3);
  expect(template.resourceCountIs('AWS::S3::Bucket', 1));
});
