import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

import { Construct } from 'constructs';

export class DmsVpcRoleStack extends cdk.Stack {

  dsmAssumeRolePolicy: iam.Policy;
  dmsVpcRole: iam.Role;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    //   const dmsAssumeRolePolicy = new iam.Policy(this, 'DmsVpcRolePolicy', {
    this.dsmAssumeRolePolicy = new iam.Policy(this, 'DmsVpcRolePolicy', {
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['sts:AssumeRole'],
          resources: ['*'],
        }),
      ],
    });

    // Create the IAM role for DMS
    this.dmsVpcRole = new iam.Role(this, 'DmsVpcRole', {
      roleName: 'dms-vpc-role',
      description: 'Service role for AWS DMS VPC management',
      assumedBy: new iam.ServicePrincipal('dms.amazonaws.com'),
    });

    // Attach the existing policy to the new role
    this.dmsVpcRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonDMSVPCManagementRole'));
    this.dmsVpcRole.attachInlinePolicy(this.dsmAssumeRolePolicy);
  }
}
