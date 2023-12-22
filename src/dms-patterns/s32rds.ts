import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface S32RDSProps {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  bucketArn: string;
}

export class S32RDS extends Construct {

  constructor(scope: Construct, id: string, props: S32RDSProps) {
    super(scope, id);

    // const bucket = s3.Bucket.fromBucketArn(this, 'Bucket', props.bucketArn);
    s3.Bucket.fromBucketArn(this, 'Bucket', props.bucketArn);

  }
}