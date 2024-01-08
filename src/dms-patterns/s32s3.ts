import { Construct } from 'constructs';
import { TableMappings } from './core/table-mappings';

export interface S32S3Props {
  /**
   * The arn of the S3 bucket to be used as source.
   */
  readonly sourceBucketArn: string;
  /**
   * The arn of the S3 bucket to be used as target.
   */
  readonly targetBucketArn: string;
  /**
   * The table mappings to be used for the replication.
   */
  readonly tableMappings: TableMappings;

}

export class S32S3 extends Construct {

  constructor(scope: Construct, id: string, props: S32S3Props) {
    super(scope, id);

    // new S3SourceEndpoint(this, 'S3Source', {
    //   bucketArn: props.sourceBucketArn,
    // });

    // new S3Target(this, 'S3Target', {
    //   bucketName: props.targetBucket,
    // });

  }
}