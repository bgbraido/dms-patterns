import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

import { Construct } from 'constructs';

// This stack creates the DMS VPC role and the DMS Cloudwatch role.
export class DmsVpcRoleStack extends cdk.Stack {

  dmsVpcRole: iam.Role;
  dmsCloudwatchRole: iam.Role;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dsmAssumeRolePolicy = new iam.Policy(this, 'DmsVpcRolePolicy', {
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['sts:AssumeRole'],
          resources: ['*'],
        }),
      ],
    });

    this.dmsVpcRole = new iam.Role(this, 'DmsVpcRole', {
      roleName: 'dms-vpc-role',
      description: 'Service role for AWS DMS VPC management',
      assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
    });
    this.dmsVpcRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonDMSVPCManagementRole'));
    this.dmsVpcRole.attachInlinePolicy(dsmAssumeRolePolicy);


    this.dmsCloudwatchRole = new iam.Role(this, 'DmsCloudwatchRole', {
      roleName: 'dms-cloudwatch-logs-role',
      description: 'Service role for AWS DMS Logs',
      assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
    });
    this.dmsCloudwatchRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonDMSCloudWatchLogsRole '));
    this.dmsCloudwatchRole.attachInlinePolicy(dsmAssumeRolePolicy);

  }
}
