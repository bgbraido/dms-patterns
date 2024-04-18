

import * as dms from 'aws-cdk-lib/aws-dms';
import { Construct } from 'constructs';
import { ReplicationTypes, TableMappings, TaskSettings } from './core';
import { EndpointType, MySqlEndpoint, MySqlSettings } from './endpoints';

export interface MySql2MySqlProps {
    /**
     * The name of the source database
     */
    readonly sourceDatabaseName: string;
    /**
     * The settings for the source database
     */
    readonly sourceEndpointSettings: MySqlSettings;
    /**
     * The name of the target database
     */
    readonly targetDatabaseName: string;
    /**
     * The settings for the target database
     */
    readonly targetEndpointSettings: MySqlSettings;
    /**
     * The replication instance class to use
     * @default dms.t2.small
     */
    readonly replicationInstanceClass?: string;
    /**
     * The table mappings to be used for the replication.
     */
    readonly tableMappings: TableMappings;
    /**
     * Optional JSON settings for AWS DMS Serverless replications.
     */
    readonly taskSettings?: TaskSettings;
    /**
     * Replication Instance created in the State Stack
     */
    readonly replicationInstance: dms.CfnReplicationInstance;
    /*
    * Optional JSON settings for AWS DMS Serverless replications.
    * @default {
    *  Logging:
    *    {
    *     EnableLogging: true,
    *    },
    * }
    */
    readonly replicationSettings?: any;
    /*
    * The compute configuration for the replication.
    */
    readonly computeConfig?: dms.CfnReplicationConfig.ComputeConfigProperty;
    /*
     * The replication identifier.
     */
    readonly replicationConfigIdentifier: string;
    /*
     * The replicationType identifier.
     */
    readonly replicationType: ReplicationTypes;
}

export class MySql2MySql extends Construct {

    // readonly replicationInstance: dms.CfnReplicationInstance;
    // replicationTask: dms.CfnReplicationTask;
    source: MySqlEndpoint;
    target: MySqlEndpoint;

    constructor(scope: Construct, id: string, props: MySql2MySqlProps) {
        super(scope, id);

        this.source = new MySqlEndpoint(this, 'SourceEndpoint', {
            endpointType: EndpointType.SOURCE,
            databaseName: props.sourceDatabaseName,
            endpointIdentifier: `${scope}-mysqlSourceEndpoint`,
            mySqlEndpointSettings: props.sourceEndpointSettings,
        });

        this.target = new MySqlEndpoint(this, 'SourceEndpoint', {
            endpointType: EndpointType.TARGET,
            databaseName: props.targetDatabaseName,
            endpointIdentifier: `${scope}-mysqlTargetEndpoint`,
            mySqlEndpointSettings: props.targetEndpointSettings,
        });


        const replicationSettings = props.replicationSettings || {
            Logging:
            {
                EnableLogging: true,
            },
        };

        new dms.CfnReplicationConfig(this, 'ReplicationConfig', {
            computeConfig: props.computeConfig,
            replicationConfigIdentifier: props.replicationConfigIdentifier,
            replicationSettings: replicationSettings,
            replicationType: props.replicationType,
            sourceEndpointArn: this.source.ref,
            tableMappings: props.tableMappings.format(),
            targetEndpointArn: this.target.ref,
        });
    }
}