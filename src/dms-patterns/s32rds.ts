import { Construct } from 'constructs';
import { DMSReplicationConfigComputeConfig } from './core/serverless';
import { S3Source } from './core/sources';
import { RdsTarget } from './core/targets';
export interface S32RdsProps {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketName: string;
}

export class S32Rds extends Construct {

  constructor(scope: Construct, id: string, props: S32RdsProps) {
    super(scope, id);

    new S3Source(this, 'S3Source', {
      bucketName: props.bucketName,
    });

    new RdsTarget(this, 'RdsTarget', {
      engine: 'postgres',
    });

    new DMSReplicationConfigComputeConfig(this, 'ComputeConfig', {
      MaxCapacityUnits: 1,
    });

  }
}