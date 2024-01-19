import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { ReplicationTypes, TableMappings, TaskSettings } from './core';
import { S3SourceEndpoint, S3SourceEndpointSettings, S3TargetEndpoint, S3TargetEndpointSettings } from './endpoints';

export interface S32s3Props {
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

export class S32s3 extends Construct {

  readonly replicationInstance: dms.CfnReplicationInstance;
  replicationTask: dms.CfnReplicationTask;
  source: S3SourceEndpoint;
  target: S3TargetEndpoint;

  constructor(scope: Construct, id: string, props: S32s3Props) {
    super(scope, id);

    this.source = new S3SourceEndpoint(this, 'S3Source', {
      bucketArn: props.sourceBucketArn,
      s3SourceEndpointSettings: props.sourceEndpointSettings,
    });

    this.target = new S3TargetEndpoint(this, 'S3Target', {
      bucketArn: props.targetBucketArn,
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
      sourceEndpointArn: this.source.ref,
      targetEndpointArn: this.target.ref,
      replicationTaskSettings: props.taskSettings? props.taskSettings.toJSON() : undefined,
      tableMappings: props.tableMappings.toJSON(),
    });

  }
}