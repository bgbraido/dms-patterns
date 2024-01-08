import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { TaskSettings } from './core';
import { TableMappings } from './core/table-mappings';
import { S3Source } from './endpoints/sources';

export interface S32RdsProps {
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

  constructor(scope: Construct, id: string, props: S32RdsProps) {
    super(scope, id);

    new S3Source(this, 'S3Source', {
      bucketArn: props.bucketArn,
      s3SourceEndpointSettings: {
        externalTableDefinition: '{}',
      },
    });

    // const rdsTarget = new RdsTarget(this, 'RdsTarget', {
    //   engine: 'postgres',
    // });

    // const taskSettings = props.taskSettings || new TaskSettings();

    // new DMSReplicationConfig(this, 'ComputeConfig', {
    //   computeConfig: {
    //     MaxCapacityUnits: 1,
    //   },
    //   sourceEndpointArn: s3source.endpoint.ref,
    //   targetEndpointArn: s3source.endpoint.ref,
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

    // const replicationTask = new dms.CfnReplicationTask(this, 'replicationTask', {
    //   replicationInstanceArn: this.replicationInstance.ref,
    //   // replicationTaskIdentifier,
    //   migrationType: ReplicationTypes.FULL_LOAD,
    //   sourceEndpointArn: s3source.endpoint.ref,
    //   targetEndpointArn: rdsTarget.endpoint.ref,
    //   replicationTaskSettings: taskSettings.toJSON(),
    //   tableMappings: props.tableMappings.toJSON(),
    // });

  }
}
