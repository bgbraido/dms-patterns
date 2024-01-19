
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MySql2S3Stack } from '../examples/mysql2s3-stack';

const app = new cdk.App();
const mySql2S3 = new MySql2S3Stack(app, 'Mysql2S3Stack');


test('mySql2S3 contains two endpoints and a replicationconfig', () => {
  const template = Template.fromStack(mySql2S3);
  expect(template.resourceCountIs('AWS::DMS::ReplicationConfig', 1));
  expect(template.resourceCountIs('AWS::DMS::Endpoint', 2));
});