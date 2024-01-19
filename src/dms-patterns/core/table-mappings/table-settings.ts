import { ObjectLocator, Rule, RuleProps } from './base';

// Define the rule type enum
export enum RuleType {
  TABLE_SETTINGS = 'table-settings'
}

// Define the object locator interface
export interface TableSettingsObjectLocator extends ObjectLocator{
}

// Define the parallel load interface
export interface ParallelLoad {
  readonly type: 'partitions-auto' | 'subpartitions-auto' | 'partitions-list' | 'ranges' | 'none';
  readonly numberOfPartitions?: number;
  readonly collectionCountFromMetadata?: boolean;
  readonly maxRecordsSkipPerPage?: number;
  readonly batchSize?: number;
  readonly partitions?: string[];
  readonly subpartitions?: string[];
  readonly columns?: string[];
  readonly boundaries?: any[][]; // Define a type based on your needs
}

// Define the LOB settings interface
export interface LobSettings {
  readonly mode?: 'limited' | 'unlimited' | 'none';
  readonly bulkMaxSize?: number;
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
  readonly parallelLoad?: ParallelLoad;
  readonly lobSettings?: LobSettings;
  readonly objectLocator: TableSettingsObjectLocator;
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