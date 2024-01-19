
import * as cdk from 'aws-cdk-lib';
import * as dms from 'aws-cdk-lib/aws-dms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { MySql2S3 } from '../src/dms-patterns';
import { CapacityUnits, TableMappings } from '../src/dms-patterns/core';


export class MySql2S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const tableMappings = new TableMappings(
      [],
    );

    const bucket = new s3.Bucket(this, 'Bucket');
    bucket.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);

    const replicationSubnetGroup = new dms.CfnReplicationSubnetGroup(this, 'ReplicationSubnetGroup', {
      replicationSubnetGroupDescription: 'ReplicationSubnetGroup',
      replicationSubnetGroupIdentifier: 'mysqlreplicationsubnetid',
      subnetIds: [
        'subnet-xxxxxxxxxxxxxxxxx',
        'subnet-yyyyyyyyyyyyyyyyy',
        'subnet-zzzzzzzzzzzzzzzzz',
      ],
    });

    const computeConfig: dms.CfnReplicationConfig.ComputeConfigProperty = {
      minCapacityUnits: CapacityUnits._1,
      maxCapacityUnits: CapacityUnits._2,
      multiAz: false,
      replicationSubnetGroupId: replicationSubnetGroup.replicationSubnetGroupIdentifier,
    };

    const mySql2S3 = new MySql2S3(this, 'mysql2S3', {
      databaseName: 'xxxxxxx',
      mySqlSourceEndpointSettings: {
        secretsManagerSecretId: 'arn:aws:secretsmanager:xxxxxxxxxxxxxxxxx',
      },
      bucketArn: bucket.bucketArn,
      tableMappings: tableMappings,
      computeConfig: computeConfig,
      replicationConfigIdentifier: 'mysql2s3Test',
    });

    mySql2S3.node.addDependency(replicationSubnetGroup);

  }
}

const app = new cdk.App();
// new Postgres2S3Stack(app, 'Postgres2S3Stack', {
//   env: {
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: 'eu-west-1',
//   },
// });
new MySql2S3Stack(app, 'MySql2S3Stack2', {

  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'eu-west-1',
  },
});