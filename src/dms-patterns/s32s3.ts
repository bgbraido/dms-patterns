import { Construct } from 'constructs';
import { S3SourceEndpoint } from './core/sources';
import { S3Target } from './core/targets';

export interface S32S3Props {
  /**
   * The name of the S3 bucket to be used as source.
   */
  readonly sourceBucket: string;
  /**
   * The name of the S3 bucket to be used as target.
   */
  readonly targetBucket: string;

}

export class S32S3 extends Construct {

  constructor(scope: Construct, id: string, props: S32S3Props) {
    super(scope, id);

    new S3SourceEndpoint(this, 'S3Source', {
      bucketName: props.sourceBucket,
    });

    new S3Target(this, 'S3Target', {
      bucketName: props.targetBucket,
    });

  }
}