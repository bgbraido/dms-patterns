/**
 * As of 2024-02-01, AWS DMS Serverless replication is not supported by the aws-cdk-lib.
 *
 * see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html
 *
 * Note that AWS DMS Serverless only supports a subset of the endpoint types that AWS DMS standard supports.
 * see https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Serverless.Components.html
 * and https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Serverless.Limitations.html
 */


import { CfnResource, ITaggable, Resource, TagManager, TagType } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Interface that defines the properties for configuring AWS DMS Serverless replication.
 */
export interface DMSReplicationConfigComputeConfig {
  /**
     * A list of custom DNS name servers supported for AWS DMS Serverless replication to access the source or target database.
     * This list overrides the default name servers supported by AWS DMS Serverless replication.
     * You can specify up to four comma-separated internet addresses for DNS name servers.
     * Example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"
     *
     * @default - No custom DNS name servers specified.
     */
  DnsNameServers?: string;

  /**
     * The ARN of the AWS KMS key used for encrypting data during AWS DMS Serverless replication.
     * If not specified, AWS DMS uses the default encryption key associated with your AWS account.
     *
     * @default - Default AWS KMS encryption key is used.
     */
  KmsKeyId?: string;

  /**
     * The list of VPC security group IDs associated with the AWS DMS Serverless replication.
     *
     * @default - No VPC security group IDs specified.
     */
  VpcSecurityGroupIds?: string[];

  /**
     * Specifies the maximum AWS DMS capacity units (DCUs) for the replication.
     * Allowed values include 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384.
     *
     * @required
     */
  MaxCapacityUnits: number;

  /**
     * Specifies the minimum AWS DMS capacity units (DCUs) for the replication.
     * Allowed values are the same as MaxCapacityUnits.
     *
     * @default 1 if not specified.
     */
  MinCapacityUnits?: number;

  /**
     * Specifies the Availability Zone for the AWS DMS Serverless replication.
     * Cannot be set if MultiAZ is true.
     *
     * @default - Random system-chosen Availability Zone.
     */
  AvailabilityZone?: string;

  /**
     * Specifies the preferred maintenance window for the AWS DMS Serverless replication in UTC.
     *
     * @default - Random 30-minute window within an 8-hour block per AWS Region.
     */
  PreferredMaintenanceWindow?: string;

  /**
     * Specifies whether the AWS DMS Serverless replication is a Multi-AZ deployment.
     *
     * @default false
     */
  MultiAZ?: boolean;

  /**
     * Specifies the ReplicationSubnetGroupId associated with the AWS DMS Serverless replication.
     *
     * @default - No ReplicationSubnetGroupId specified.
     */
  ReplicationSubnetGroupId?: string;
}

/**
 * Interface representing properties for configuring an AWS DMS (Database Migration Service) Serverless replication.
 */
export interface DMSReplicationConfigProps {

  /**
    * Configuration parameters for provisioning an AWS DMS Serverless replication.
    */
  computeConfig?: DMSReplicationConfigComputeConfig;

  /**
    * The Amazon Resource Name (ARN) of this AWS DMS Serverless replication configuration.
    */
  replicationConfigArn?: string;

  /**
    * A unique identifier for the replication configuration.
    * This identifier can be used for actions and identifying specific replications.
    */
  replicationConfigIdentifier: string;

  /**
    * Optional JSON settings for AWS DMS Serverless replications.
    */
  replicationSettings?: string;

  /**
    * The type of AWS DMS Serverless replication to provision.
    * Possible values: "full-load", "cdc", "full-load-and-cdc".
    */
  replicationType: string;

  /**
    * Optional unique value or name for a given resource.
    */
  resourceIdentifier?: string;

  /**
    * The Amazon Resource Name (ARN) of the source endpoint.
    */
  sourceEndpointArn: string;

  /**
    * Optional JSON settings for specifying supplemental data.
    */
  supplementalSettings?: string;

  /**
    * JSON table mappings for AWS DMS Serverless replications.
    */
  tableMappings: string;

  /**
    * The Amazon Resource Name (ARN) of the target endpoint.
    */
  targetEndpointArn: string;
}


export class DMSReplicationConfig extends Resource implements ITaggable {
  public readonly tags = new TagManager(TagType.KEY_VALUE, 'AWS::DMS::ReplicationConfig');

  constructor(scope: Construct, id: string, props: DMSReplicationConfigProps) {

    super(scope, id);

    new CfnResource(this, 'ReplicationConfig', {
      type: 'AWS::DMS::ReplicationConfig',
      properties: {
        ComputeConfig: props.computeConfig,
        ReplicationConfigArn: props.replicationConfigArn,
        ReplicationConfigIdentifier: props.replicationConfigIdentifier,
        ReplicationSettings: props.replicationSettings,
        ReplicationType: props.replicationType,
        ResourceIdentifier: props.resourceIdentifier,
        SourceEndpointArn: props.sourceEndpointArn,
        SupplementalSettings: props.supplementalSettings,
        TableMappings: props.tableMappings,
        TargetEndpointArn: props.targetEndpointArn,
        Tags: this.tags.renderedTags,
      },
    });
  }
}
