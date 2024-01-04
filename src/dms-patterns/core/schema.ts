
export enum AWSDMSDataType {
  BYTE = 'BYTE',
  DATE = 'DATE',
  TIME = 'TIME',
  DATETIME = 'DATETIME',
  INT1 = 'INT1',
  INT2 = 'INT2',
  INT4 = 'INT4',
  INT8 = 'INT8',
  NUMERIC = 'NUMERIC',
  REAL4 = 'REAL4',
  REAL8 = 'REAL8',
  STRING = 'STRING',
  UINT1 = 'UINT1',
  UINT2 = 'UINT2',
  UINT4 = 'UINT4',
  UINT8 = 'UINT8',
  BLOB = 'BLOB',
  CLOB = 'CLOB',
  BOOLEAN = 'BOOLEAN'
}

export interface TableColumn {
  ColumnName: string;
  ColumnType: AWSDMSDataType;
  ColumnLength?: number;
  ColumnNullable?: boolean;
  ColumnIsPk?: boolean;
  ColumnDateFormat?: string;
}

export interface Table {
  TableName: string;
  TablePath: string;
  TableOwner: string;
  TableColumns: TableColumn[];
}

export class DMSS3Schema {

  tables: Table[] = [];

  public constructor(tables: Table[] = []) {
    this.tables = tables;
  }

  public addTable(table: Table) {
    this.tables.push(table);
  }

  public toJSON(): string {

    const formattedTables = this.tables.map(table => {
      return {
        TableName: table.TableName,
        TablePath: table.TablePath,
        TableOwner: table.TableOwner,
        TableColumns: table.TableColumns.map(column => {
          return {
            ColumnName: column.ColumnName,
            ColumnType: column.ColumnType,
            ColumnLength: column.ColumnLength ? column.ColumnLength.toString() : undefined,
            ColumnNullable: typeof column.ColumnNullable !== 'undefined' ? String(column.ColumnNullable) : undefined,
            ColumnIsPk: typeof column.ColumnIsPk !== 'undefined' ? String(column.ColumnIsPk) : undefined,
          };
        }),
        TableColumnsTotal: table.TableColumns.length.toString(),
      };
    });

    return JSON.stringify(
      {
        TableCount: this.tables.length.toString(),
        Tables: formattedTables,
      }, null, 4);
  }
}

// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Selections.html
export enum RuleAction {
  INCLUDE = 'include',
  EXCLUDE = 'exclude',
  EXPLICIT = 'explicit',
}

export interface ObjectLocator {
  schemaName: string;
  tableName: string;
  tableType?: 'table' | 'view' | 'all';
}


export interface RuleSchema {
  ruleName: string;
  ruleId?: string;
  ruleAction: RuleAction;
  objectLocator: ObjectLocator;
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs
}

export class RulesSchema {

  rules: RuleSchema[] = [];

  constructor(
    rules: RuleSchema[] = [],
  ) {
    this.rules = rules;
  }

  public addRule(rule: RuleSchema) {
    rule.ruleId = rule.ruleId || String(this.rules.length + 1);
    this.rules.push(rule);
  }

  public toJSON(): string {

    const formattedRules = this.rules.map(rules => {
      return {
        'rule-type': 'selection',
        'rule-id': rules.ruleId,
        'rule-name': rules.ruleName,
        'object-locator': {
          'schema-name': rules.objectLocator.schemaName,
          'table-name': rules.objectLocator.tableName,
          'table-type': typeof rules.objectLocator.tableType !== 'undefined' ? String(rules.objectLocator.tableType) : undefined,
        },
        'rule-action': rules.ruleAction,
        'load-order': typeof rules.loadOrder !== 'undefined' ? String(rules.loadOrder) : undefined,
      };
    });

    return JSON.stringify(
      {
        rules: formattedRules,
      }, null, 4);
  }

}