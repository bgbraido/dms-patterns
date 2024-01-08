import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class S3SourceTarget extends Construct {

  /**
 * Creates IAM role to allow dm service to access S3
 * see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty.html#serviceaccessrolearn
 * @param bucketArn
 * @returns iam.Role
 */
  public createS3AccessRole(bucketArn: string): iam.Role {
    const serviceAccessRole = new iam.Role(this, 'ServiceAccessRole', {
      assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
      description: 'Role for DMS to access S3',
      inlinePolicies: {
        S3Access: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['iam:PassRole'],
              effect: iam.Effect.ALLOW,
              resources: [bucketArn], // TODO on what resources should we limit this?
            }),
          ],
        }),
      },
    });
    return serviceAccessRole;
  }
}