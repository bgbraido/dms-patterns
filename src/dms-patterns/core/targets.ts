import { aws_dms as dms } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface TargetS3Props {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketName: string;
        /**
         * An optional parameter to set a folder name in the S3 bucket.
         *
         * If provided, tables are created in the path `*bucketFolder* / *schema_name* / *table_name* /` . If this parameter isn't specified, the path used is `*schema_name* / *table_name* /` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder
         */
        readonly bucketFolder?: string;
}

export class TargetS3 extends Construct {

      settings: dms.CfnEndpoint.S3SettingsProperty;

      constructor(scope: Construct, id: string, props: TargetS3Props) {
        super(scope, id);

        this.settings = {
          bucketName: props.bucketName,
          bucketFolder: props.bucketFolder,
          compressionType: 'compressionType',
          csvDelimiter: 'csvDelimiter',
          csvRowDelimiter: 'csvRowDelimiter',
          externalTableDefinition: 'externalTableDefinition',
          serviceAccessRoleArn: 'serviceAccessRoleArn'
      }
  }
}

export interface RdsTargetProps {
    engine: string;
}

export class RdsTarget extends Construct {


  constructor(scope: Construct, id: string, props: RdsTargetProps) {
    super(scope, id);

    if (props.engine == 'postgres') {
        console.log('postgres');
        // const settings: dms.CfnDataProvider.PostgreSqlSettingsProperty = {
        //     password: 'password',
        //     port: 5432,
        //     serverName: 'serverName',
        //     username: 'username'
        // };
    }
}
}