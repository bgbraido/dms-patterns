import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { ReplicationTypes, TableMappings, TaskSettings } from './core';
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

  readonly replicationInstance: dms.CfnReplicationInstance;
  replicationTask: dms.CfnReplicationTask;
  source: S3Source;
  target: S3Target;

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

    this.replicationInstance = new dms.CfnReplicationInstance(this, 'MyCfnReplicationInstance', {
      replicationInstanceClass: 'replicationInstanceClass',
      // the properties below are optional
      allocatedStorage: 123,
      multiAz: false,
      publiclyAccessible: false,
    });

    this.replicationTask = new dms.CfnReplicationTask(this, 'replicationTask', {
      replicationInstanceArn: this.replicationInstance.ref,
      migrationType: ReplicationTypes.FULL_LOAD,
      sourceEndpointArn: this.source.endpoint.ref,
      targetEndpointArn: this.target.endpoint.ref,
      replicationTaskSettings: props.taskSettings? props.taskSettings.toJSON() : undefined,
      tableMappings: props.tableMappings.toJSON(),
    });

  }
}