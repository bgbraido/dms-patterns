
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { EndpointType, MicrosoftSQLServerEndpoint } from '../src/dms-patterns';


export class MicrosoftSqlServerStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const demovpc = ec2.Vpc.fromLookup(this, 'Vpc', {
            vpcId: 'vpc-0b2bce2bc48143495',
        });
        const demoSG = new ec2.SecurityGroup(this, 'DemoSG', {
            vpc: demovpc,

        });

        const demoCredentials = rds.Credentials.fromGeneratedSecret('demoCredentials');
        // const demoSecret = demoCredentials.secretName;

        // const masterSecret = new Secret(this, 'MasterSecret', {
        //     secretName: 'verax',
        //     description: 'Details from Verax database',
        //     secretObjectValue: {
        //         ['password']: new cdk.SecretValue('ChangeOnConsole'),
        //     }
        // });
        // const demoDBSecret = new rds.DatabaseSecret(this, 'DemoDBSecret', {
        //     secretName: 'demoDBSecret',
        //     masterSecret: masterSecret,
        //     username: 'sa',
        //     dbname: 'demodb',
        // });

        const sqlserverDemo = new rds.DatabaseInstance(this, 'SqlServerDemo', {
            vpc: demovpc,
            engine: rds.DatabaseInstanceEngine.sqlServerSe({
                version: rds.SqlServerEngineVersion.VER_16_00_4085_2_V1
            }),
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.SMALL),
            securityGroups: [demoSG],
            multiAz: false,
            deletionProtection: false,
            databaseName: 'demodb',
            credentials: demoCredentials,
            vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },

        });

        // const tableMappings = new TableMappings(
        //     [
        //         new SelectionRule(
        //             {
        //                 objectLocator: {
        //                     schemaName: 'demodb',
        //                     tableName: 'experiment',
        //                 },
        //                 ruleAction: SelectionAction.INCLUDE,
        //             },
        //         ),
        //     ],
        // );

        // const replicationSettings = {
        //     Logging:
        //     {
        //         EnableLogging: true,
        //     },
        // };

        // const demoDMSSubnetGroup = new dms.CfnReplicationSubnetGroup(this, 'DemoDMSSubnetGroup', {
        //     replicationSubnetGroupDescription: 'demoDMSSubnetGroup',
        //     replicationSubnetGroupIdentifier: 'demoDMSSubnetGroup', // must be lowercase
        //     subnetIds: [
        //         'subnet-0f3d836133c912613',
        //         'subnet-0db796d2d21db0328',
        //     ],
        // });

        const rdsSecurityGroup = ec2.SecurityGroup.fromSecurityGroupId(this, 'rdsSecurityGroup', 'sg-0e04f567d82d2cbc7');
        rdsSecurityGroup.addIngressRule(
            demoSG,
            ec2.Port.tcp(1433),
            'Allow inbound traffic from the replication security group',
        );

        new MicrosoftSQLServerEndpoint(this, 'MicrosoftSqlServerEndpoint', {
            endpointIdentifier: 'DemoMS-SQLServer',
            endpointType: EndpointType.SOURCE,
            microsoftSqlServerEndpointSettings: {
                secretsManagerSecretId: sqlserverDemo.secret?.secretArn!
            }

        })
    }
}


const app = new cdk.App();
// new Postgres2S3Stack(app, 'Postgres2S3Stack', {
//   env: {
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: 'eu-west-1',
//   },
// });
new MicrosoftSqlServerStack(app, 'MicrosoftSqlServerStack', {

    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_REGION,
    },
});

