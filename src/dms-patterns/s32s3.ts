import { Construct } from 'constructs';
import { S3Source } from './core/sources';
import { S3Target } from './core/targets';

export interface S32S3Props {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketName: string;
}

export class S32S3 extends Construct {

  constructor(scope: Construct, id: string, props: S32S3Props) {
    super(scope, id);

    new S3Source(this, 'S3Source', {
      bucketName: props.bucketName,
    });

    new S3Target(this, 'S3Target', {
      bucketName: props.bucketName,
    });

  }
}