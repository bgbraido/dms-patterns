import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface S32RdsProps {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketArn: string;
}

export class S32Rds extends Construct {

  constructor(scope: Construct, id: string, props: S32RdsProps) {
    super(scope, id);

    // const bucket = s3.Bucket.fromBucketArn(this, 'Bucket', props.bucketArn);
    s3.Bucket.fromBucketArn(this, 'Bucket', props.bucketArn);

  }
}