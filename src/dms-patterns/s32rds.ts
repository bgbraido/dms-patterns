import { Construct } from 'constructs';
import { SourceS3 } from './core/sources';
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

    new SourceS3(this, 'SourceS3', {
      bucketName: props.bucketName
    });

    new RdsTarget(this, 'RdsTarget', {
      engine: 'postgres'
    });
  }
}