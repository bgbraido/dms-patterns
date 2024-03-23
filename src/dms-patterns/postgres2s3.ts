

import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { ReplicationTypes, TableMappings, TaskSettings } from './core';
import { EndpointType, PostgreSQLEndpoint, PostgreSqlSettings, S3TargetEndpoint, S3TargetEndpointSettings } from './endpoints';

export interface Postgres2S3Props {

  /*
   * The name of the S3 bucket to be used as data source.
   */
  readonly databaseName: string;
  /*
   * The settings for the source postgres endpoint.
   */
  readonly postgresEndpointSettings: PostgreSqlSettings;
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

export class Postgres2S3 extends Construct {

  // readonly replicationInstance: dms.CfnReplicationInstance;
  // replicationTask: dms.CfnReplicationTask;
  source: PostgreSQLEndpoint;
  target: S3TargetEndpoint;

  constructor(scope: Construct, id: string, props: Postgres2S3Props) {
    super(scope, id);

    this.source = new PostgreSQLEndpoint(this, 'PostgreEndpoint', {
      endpointType: EndpointType.SOURCE,
      databaseName: props.databaseName,
      endpointIdentifier: `${scope}-postgresEndpoint`,
      postgresEndpointSettings: props.postgresEndpointSettings,
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
      tableMappings: {
        rules: [{
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': '%',
            'table-name': 'experiment',
          },
          'rule-action': 'include',
        }],
      },
      targetEndpointArn: this.target.ref,
    });
  }
}