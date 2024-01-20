

import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { ReplicationTypes, TableMappings, TaskSettings } from './core';
import { EndpointType, MySqlEndpoint, MySqlSettings, S3TargetEndpoint, S3TargetEndpointSettings } from './endpoints';

export interface MySql2S3Props {

  /*
   * The name of the S3 bucket to be used as data source.
   */
  readonly databaseName: string;
  /*
   * The settings for the source mysql endpoint.
   */
  readonly mySqlSourceEndpointSettings: MySqlSettings;
  /*
   * The arn of the S3 bucket to be used as target.
   */
  readonly bucketArn: string;
  /*
   * The settings for the source s3 endpoint.
   */
  readonly s3targetEndpointSettings?: S3TargetEndpointSettings;
  /*
   * The table mappings to be used for the replication.
   */
  readonly tableMappings: TableMappings;
  /*
   * Optional JSON settings for AWS DMS Serverless replications.
   */
  readonly taskSettings?: TaskSettings;
  /*
   * Optional JSON settings for AWS DMS Serverless replications.
   * @default {
   *  Logging:
   *    {
   *     EnableLogging: true,
   *    },
   * }
   */
  readonly replicationSettings?: any;
  /*
   * The compute configuration for the replication.
   */
  readonly computeConfig?: dms.CfnReplicationConfig.ComputeConfigProperty;
  /*
   * The replication identifier.
   */
  readonly replicationConfigIdentifier: string;
}

export class MySql2S3 extends Construct {

  // readonly replicationInstance: dms.CfnReplicationInstance;
  // replicationTask: dms.CfnReplicationTask;
  source: MySqlEndpoint;
  target: S3TargetEndpoint;

  constructor(scope: Construct, id: string, props: MySql2S3Props) {
    super(scope, id);

    this.source = new MySqlEndpoint(this, 'SourceEndpoint', {
      endpointType: EndpointType.SOURCE,
      databaseName: props.databaseName,
      endpointIdentifier: `${scope}-mysqlEndpoint`,
      mySqlSourceEndpointSettings: props.mySqlSourceEndpointSettings,
    });

    this.target = new S3TargetEndpoint(this, 'S3Target', {
      bucketArn: props.bucketArn,
      s3TargetEndpointSettings: props.s3targetEndpointSettings,
    });


    const replicationSettings = props.replicationSettings || {
      Logging:
      {
        EnableLogging: true,
      },
    };

    new dms.CfnReplicationConfig(this, 'ReplicationConfig', {
      computeConfig: props.computeConfig,
      replicationConfigIdentifier: props.replicationConfigIdentifier,
      replicationSettings: replicationSettings,
      replicationType: ReplicationTypes.FULL_LOAD,
      sourceEndpointArn: this.source.ref,
      tableMappings: props.tableMappings.format(),
      targetEndpointArn: this.target.ref,
    });
  }
}