import { Construct } from 'constructs';
import { DMSReplicationConfig } from './core/serverless';
import { S3Source } from './core/sources';

export interface S32RdsProps {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketArn: string;
}

export class S32Rds extends Construct {

  constructor(scope: Construct, id: string, props: S32RdsProps) {
    super(scope, id);

    const s3source = new S3Source(this, 'S3Source', {
      bucketArn: props.bucketArn,
      s3EndpointSettings: {
        cdcPath: 'cdc',
        csvDelimiter: ',',
        csvRowDelimiter: '\n',
      },
    });

    // new RdsTarget(this, 'RdsTarget', {
    //   engine: 'postgres',
    // });

    const tablemapping = '1';

    new DMSReplicationConfig(this, 'ComputeConfig', {
      computeConfig: {
        MaxCapacityUnits: 1,
      },
      sourceEndpointArn: s3source.endpoint.arn,
      targetEndpointArn: s3source.endpoint.arn,
      tableMappings: tablemapping,
      replicationType: 'full-load',
      replicationConfigIdentifier: 'test',
    });
  }
}