import { Construct } from 'constructs';
import { ReplicationTypes } from './core';
import { DMSReplicationConfig } from './core/serverless';
import { S3Source, S3SourceEndpointSettings } from './core/sources';
import { TableMappings } from './core/table-mappings';
import { S3Target, S3TargetEndpointSettings } from './core/targets';

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

}

export class S32S3 extends Construct {

  constructor(scope: Construct, id: string, props: S32S3Props) {
    super(scope, id);

    const s3source = new S3Source(this, 'S3Source', {
      bucketArn: props.sourceBucketArn,
      s3EndpointSettings: props.sourceEndpointSettings,
    });

    const s3target = new S3Target(this, 'S3Target', {
      bucketArn: props.sourceBucketArn,
      s3EndpointSettings: props.targetEndpointSettings,
    });

    new DMSReplicationConfig(this, 'ComputeConfig', {
      computeConfig: {
        MaxCapacityUnits: 1,
      },
      sourceEndpointArn: s3source.endpoint.ref,
      targetEndpointArn: s3target.endpoint.ref,
      tableMappings: props.tableMappings.toJSON(), // Convert the table mappings to JSON
      replicationType: ReplicationTypes.FULL_LOAD,
      replicationConfigIdentifier: 'S32S3',
    });

  }
}