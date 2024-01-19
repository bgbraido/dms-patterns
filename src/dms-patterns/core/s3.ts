
export enum S3DataType {
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
  readonly columnName: string;
  readonly columnType: S3DataType;
  readonly columnLength?: number;
  readonly columnNullable?: boolean;
  readonly columnIsPk?: boolean;
  readonly columnDateFormat?: string;
  readonly columnPrecision?: number;
  readonly columnScale?: number;
}

export interface Table {
  readonly tableName: string;
  readonly tablePath: string;
  readonly tableOwner: string;
  readonly tableColumns: TableColumn[];
}

export class S3Schema {

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
        TableName: table.tableName,
        TablePath: table.tablePath,
        TableOwner: table.tableOwner,
        // TableColumns: table.tableColumns.map(column => {
        //   return {
        //     ColumnName: column.columnName,
        //     ColumnType: column.columnType,
        //     ColumnLength: column.columnLength ? column.columnLength.toString() : undefined,
        //     ColumnNullable: typeof column.columnNullable !== 'undefined' ? String(column.columnNullable) : undefined,
        //     ColumnIsPk: typeof column.columnIsPk !== 'undefined' ? String(column.columnIsPk) : undefined,
        //     ColumnPrecision: column.columnPrecision ? column.columnPrecision.toString() : undefined,
        //     ColumnScale: column.columnScale ? column.columnScale.toString() : undefined,
        //   };
        // }),
        TableColumnsTotal: table.tableColumns.length.toString(),
      };
    });

    return JSON.stringify(
      {
        TableCount: this.tables.length.toString(),
        Tables: formattedTables,
      }, null, 4);
  }
}
