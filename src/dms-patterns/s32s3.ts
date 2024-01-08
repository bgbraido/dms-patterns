import { Construct } from 'constructs';
import { TableMappings } from './core';
import { TaskSettings } from './core/';
import { S3Source, S3SourceEndpointSettings } from './endpoints/sources';
import { S3Target, S3TargetEndpointSettings } from './endpoints/targets';

export interface S32S3Props {
  /**
   * The arn of the S3 bucket to be used as source.
   */
  readonly sourceBucketArn: string;
  /**
   * The settings for the source s3 endpoint.
   */
  readonly sourceEndpointSettings?: S3SourceEndpointSettings;
  /**
   * The arn of the S3 bucket to be used as target.
   */
  readonly targetBucketArn: string;
  /**
   * The settings for the source s3 endpoint.
   */
  readonly targetEndpointSettings?: S3TargetEndpointSettings;
  /**
   * The table mappings to be used for the replication.
   */
  readonly tableMappings: TableMappings;
  /**
   * Optional JSON settings for AWS DMS Serverless replications.
   */
  readonly taskSettings?: TaskSettings;

}

export class S32S3 extends Construct {

  // readonly replicationInstance: dms.CfnReplicationInstance;
  // replicationTask: dms.CfnReplicationTask;
  target: S3Target;
  source: S3Source;

  constructor(scope: Construct, id: string, props: S32S3Props) {
    super(scope, id);

    this.source = new S3Source(this, 'S3Source', {
      bucketArn: props.sourceBucketArn,
      s3SourceEndpointSettings: props.sourceEndpointSettings,
    });

    this.target = new S3Target(this, 'S3Target', {
      bucketArn: props.sourceBucketArn,
      s3TargetEndpointSettings: props.targetEndpointSettings,
    });

    // As of 08-01-2024, AWS DMS Serverless does not support S3 as a source, just as a target.
    // new DMSReplicationConfig(this, 'ComputeConfig', {
    //   computeConfig: {
    //     MaxCapacityUnits: 1,
    //   },
    //   sourceEndpointArn: s3source.endpoint.ref,
    //   targetEndpointArn: s3target.endpoint.ref,
    //   tableMappings: props.tableMappings.toJSON(), // Convert the table mappings to JSON
    //   replicationType: ReplicationTypes.FULL_LOAD,
    //   replicationConfigIdentifier: 'S32S3',
    // });

    // As of 08-01-2024, AWS DMS Serverless does not support S3 as a source, just as a target.
    // new dms.CfnReplicationConfig(this, 'ReplicationConfig', {
    //   computeConfig: {
    //     maxCapacityUnits: 1,
    //     minCapacityUnits: 2,
    //     multiAz: false,
    //   },
    //   // replicationConfigIdentifier: 'replicationConfigIdentifier',
    //   // replicationSettings: replicationSettings,
    //   replicationType: ReplicationTypes.FULL_LOAD,
    //   sourceEndpointArn: s3source.endpoint.ref,
    //   tableMappings: props.tableMappings.toJSON(),
    //   targetEndpointArn: s3target.endpoint.ref,
    // });

    // this.replicationInstance = new dms.CfnReplicationInstance(this, 'MyCfnReplicationInstance', {
    //   replicationInstanceClass: 'replicationInstanceClass',
    //   // the properties below are optional
    //   allocatedStorage: 123,
    //   multiAz: false,
    //   publiclyAccessible: false,
    //   // replicationInstanceIdentifier: 'replicationInstanceIdentifier',
    //   // resourceIdentifier: 'resourceIdentifier',
    //   // vpcSecurityGroupIds: ['vpcSecurityGroupIds'],
    // });

    // this.replicationTask = new dms.CfnReplicationTask(this, 'replicationTask', {
    //   replicationInstanceArn: this.replicationInstance.ref,
    //   // replicationTaskIdentifier,
    //   migrationType: ReplicationTypes.FULL_LOAD,
    //   sourceEndpointArn: s3source.endpoint.ref,
    //   targetEndpointArn: s3target.endpoint.ref,
    //   replicationTaskSettings: props.taskSettings? props.taskSettings.toJSON() : undefined,
    //   tableMappings: props.tableMappings.toJSON(),
    // });

  }
}