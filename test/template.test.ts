
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Postgres2S3Stack } from './stacks';

const app = new cdk.App();
const postgres2S3 = new Postgres2S3Stack(app, 'S32Rds');


test('postgres2S3 contains a replicationconfig', () => {
  const template = Template.fromStack(postgres2S3);
  expect(template.resourceCountIs('AWS::DMS::ReplicationConfig', 1));
});