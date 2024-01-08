import { Construct } from 'constructs';
import { ReplicationTypes } from './core';
import { DMSReplicationConfig } from './core/serverless';
import { S3Source } from './core/sources';
import { TableMappings } from './core/table-mappings';


export interface S32RdsProps {
  /**
   * The name of the S3 bucket to be used as data source.
   */
  readonly bucketArn: string;
  /**
   * The table mappings to be used for the replication.
   */
  readonly tableMappings: TableMappings;

}

export class S32Rds extends Construct {

  constructor(scope: Construct, id: string, props: S32RdsProps) {
    super(scope, id);

    const s3source = new S3Source(this, 'S3Source', {
      bucketArn: props.bucketArn,
      s3EndpointSettings: {
        cdcPath: 'cdc',
        csvDelimiter: ',',
        csvRowDelimiter: '\n',
      },
    });

    // new RdsTarget(this, 'RdsTarget', {
    //   engine: 'postgres',
    // });

    new DMSReplicationConfig(this, 'ComputeConfig', {
      computeConfig: {
        MaxCapacityUnits: 1,
      },
      sourceEndpointArn: s3source.endpoint.ref,
      targetEndpointArn: s3source.endpoint.ref,
      tableMappings: props.tableMappings.toJSON(), // Convert the table mappings to JSON
      replicationType: ReplicationTypes.FULL_LOAD,
      replicationConfigIdentifier: 'S32RDS',
    });
  }
}
