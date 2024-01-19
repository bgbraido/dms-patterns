import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { ReplicationTypes, TaskSettings } from './core';
import { TableMappings } from './core/table-mappings';
import { EndpointType, PostgreSQLEndpoint, PostgreSqlSettings, S3SourceEndpoint } from './endpoints';


export interface S32RdsProps {
  /**
    * The name of the S3 bucket to be used as data source.
    */
  readonly databaseName: string;
  /**
    * The settings for the source s3 endpoint.
    */
  readonly postgresEndpointSettings: PostgreSqlSettings;
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketArn: string;
  /**
   * The table mappings to be used for the replication.
   */
  readonly tableMappings: TableMappings;
  /**
   * Optional JSON settings for AWS DMS Serverless replications.
   */
  readonly taskSettings?: TaskSettings;
}

export class S32Rds extends Construct {

  readonly replicationInstance: dms.CfnReplicationInstance;

  source: S3SourceEndpoint;
  target: PostgreSQLEndpoint;

  constructor(scope: Construct, id: string, props: S32RdsProps) {
    super(scope, id);

    this.source = new S3SourceEndpoint(this, 'S3Source', {
      bucketArn: props.bucketArn,
      s3SourceEndpointSettings: {},
    });

    this.target = new PostgreSQLEndpoint(this, 'PostgreEndpoint', {
      endpointType: EndpointType.SOURCE,
      databaseName: props.databaseName,
      endpointIdentifier: `${scope}-postgresEndpoint`,
      postgresSourceEndpointSettings: {
        secretsManagerSecretId: 'secretsManagerSecretId',
      },
    });

    const taskSettings = props.taskSettings || new TaskSettings();

    // new dms.CfnReplicationConfig(this, 'ComputeConfig', {
    //   computeConfig: {
    //     MaxCapacityUnits: 1,
    //   },
    //   sourceEndpointArn: this.source.ref,
    //   targetEndpointArn: this.target.ref,
    //   tableMappings: props.tableMappings.toJSON(), // Convert the table mappings to JSON
    //   replicationType: ReplicationTypes.FULL_LOAD,
    //   replicationConfigIdentifier: 'S32RDS',
    // });

    this.replicationInstance = new dms.CfnReplicationInstance(this, 'MyCfnReplicationInstance', {
      replicationInstanceClass: 'replicationInstanceClass',
      // the properties below are optional
      // allocatedStorage: 1,
      multiAz: false,
      publiclyAccessible: false,
      // replicationInstanceIdentifier: 'replicationInstanceIdentifier',
      // resourceIdentifier: 'resourceIdentifier',
      // vpcSecurityGroupIds: ['vpcSecurityGroupIds'],
    });

    new dms.CfnReplicationTask(this, 'replicationTask', {
      replicationInstanceArn: this.replicationInstance.ref,
      // replicationTaskIdentifier,
      migrationType: ReplicationTypes.FULL_LOAD,
      sourceEndpointArn: this.source.ref,
      targetEndpointArn: this.target.ref,
      replicationTaskSettings: taskSettings.toJSON(),
      tableMappings: props.tableMappings.toJSON(),
    });

  }
}
