import { Construct } from 'constructs';
import { aws_dms as dms } from 'aws-cdk-lib';

export interface SourceS3Props {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketName: string;
}

export class SourceS3 extends Construct {

    settings: dms.CfnEndpoint.S3SettingsProperty;

    constructor(scope: Construct, id: string, props: SourceS3Props) {
      super(scope, id);

      this.settings = {
        bucketName: props.bucketName,
        bucketFolder: 'bucketFolder',
        compressionType: 'compressionType',
        csvDelimiter: 'csvDelimiter',
        csvRowDelimiter: 'csvRowDelimiter',
        externalTableDefinition: 'externalTableDefinition',
        serviceAccessRoleArn: 'serviceAccessRoleArn'
    };
    }
}