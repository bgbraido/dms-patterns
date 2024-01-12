

import { Construct } from 'constructs';
import { TableMappings, TaskSettings } from './core';
import { EndpointType, PostgreSQLEndpoint, PostgreSqlSettings, S3TargetEndpoint, S3TargetEndpointSettings } from './endpoints';


export interface Postgres2S3Props {

  /*
   * The name of the S3 bucket to be used as data source.
   */
  readonly databaseName: string;
  /*
   * User name for the source endpoint.
   */
  readonly username: string;
  /*
   * Password for the source endpoint.
   */
  readonly password: string;
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
      postgresSourceEndpointSettings: props.postgresEndpointSettings,
      username: props.username,
      password: props.password,
    });

    this.target = new S3TargetEndpoint(this, 'S3Target', {
      bucketArn: props.bucketArn,
      s3TargetEndpointSettings: props.s3targetEndpointSettings,
    });


    // As of 08-01-2024, AWS DMS Serverless does not support S3 as a source, just as a target.
    // new dms.CfnReplicationConfig(this, 'ReplicationConfig', {
    //   computeConfig: {
    //     minCapacityUnits: CapacityUnits._1,
    //     maxCapacityUnits: CapacityUnits._2,
    //     multiAz: false,
    //   },
    //   replicationConfigIdentifier: 'replicationConfigIdentifier',
    //   // replicationSettings: replicationSettings,
    //   replicationType: ReplicationTypes.FULL_LOAD,
    //   sourceEndpointArn: this.target.endpoint.ref, // this.source.endpoint.ref, // TODO
    //   tableMappings: { rules: [] },
    //   targetEndpointArn: this.target.endpoint.ref,
    // });

  }
}