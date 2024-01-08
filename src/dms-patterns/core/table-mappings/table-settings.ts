import { ObjectLocator, Rule, RuleProps } from './base';

// Define the rule type enum
export enum RuleType {
  TABLE_SETTINGS = 'table-settings'
}

// Define the object locator interface
export interface TableSettingsObjectLocator extends ObjectLocator{
  schemaName: string;
  tableName: string;
}

// Define the parallel load interface
export interface ParallelLoad {
  type: 'partitions-auto' | 'subpartitions-auto' | 'partitions-list' | 'ranges' | 'none';
  numberOfPartitions?: number;
  collectionCountFromMetadata?: boolean;
  maxRecordsSkipPerPage?: number;
  batchSize?: number;
  partitions?: string[];
  subpartitions?: string[];
  columns?: string[];
  boundaries?: any[][]; // Define a type based on your needs
}

// Define the LOB settings interface
export interface LobSettings {
  mode?: 'limited' | 'unlimited' | 'none';
  bulkMaxSize?: number;
}

// // Define the main parameters interface
// export interface RuleParameters {
//   'rule-type': RuleType;
//   'rule-id': number;
//   'rule-name': string;
//   'object-locator': ObjectLocator;
//   'parallel-load'?: ParallelLoad;
//   'lob-settings'?: LobSettings;
// }


// Define the TableSettings properties
export interface TableSettingsProps extends RuleProps {
  objectLocator: TableSettingsObjectLocator;
  parallelLoad?: ParallelLoad;
  lobSettings?: LobSettings;
}

export class TableSettings extends Rule {
  objectLocator: TableSettingsObjectLocator;
  parallelLoad?: ParallelLoad;
  lobSettings?: LobSettings;
  ruleType: string = 'table-settings';

  constructor(props: TableSettingsProps) {
    super(props);
    this.objectLocator = props.objectLocator;
    this.parallelLoad = props.parallelLoad;
    this.lobSettings = props.lobSettings;
  }

  public format(): any {
    return {
      'rule-type': this.ruleType,
      'rule-id': String(this.ruleId), // Assuming ruleId is a number; convert it to string if necessary
      'rule-name': String(this.ruleName), // Assuming ruleName is a string; convert it to string if necessary
      'object-locator': {
        'schema-name': this.objectLocator.schemaName,
        'table-name': this.objectLocator.tableName,
      },
      'parallel-load': typeof this.parallelLoad === 'undefined' ? undefined : {
        'type': this.parallelLoad.type,
        'partitions': this.parallelLoad.partitions,
        'subpartitions': this.parallelLoad.subpartitions,
        'columns': this.parallelLoad.columns,
        'boundaries': this.parallelLoad.boundaries,
        'number-of-partitions': this.parallelLoad.numberOfPartitions,
        'collection-count-from-metadata': typeof this.parallelLoad.collectionCountFromMetadata === 'undefined' ? undefined : String(this.parallelLoad.collectionCountFromMetadata),
        'max-records-skip-per-page': this.parallelLoad.maxRecordsSkipPerPage,
        'batch-size': this.parallelLoad.batchSize,
      },
      'lob-settings': typeof this.lobSettings === 'undefined' ? undefined : {
        'mode': this.lobSettings.mode,
        'bulk-max-size': typeof this.lobSettings.bulkMaxSize === 'undefined' ? undefined : String(this.lobSettings.bulkMaxSize),
      },
    };
  }
}