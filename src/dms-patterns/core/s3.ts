// all these classes suffer from https://github.com/aws/jsii/issues/3468

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

export interface TableColumnProps {
  readonly columnName: string;
  readonly columnType: S3DataType;
  readonly columnLength?: number;
  readonly columnNullable?: boolean;
  readonly columnIsPk?: boolean;
  readonly columnDateFormat?: string;
  readonly columnPrecision?: number;
  readonly columnScale?: number;
}

export class TableColumn {

  columnName: string;
  columnType: S3DataType;
  columnLength?: number;
  columnNullable?: boolean;
  columnIsPk?: boolean;
  columnDateFormat?: string;
  columnPrecision?: number;
  columnScale?: number;

  constructor(props: TableColumnProps) {
    this.columnName = props.columnName;
    this.columnType = props.columnType;
    this.columnLength = props.columnLength;
    this.columnNullable = props.columnNullable;
    this.columnIsPk = props.columnIsPk;
    this.columnDateFormat = props.columnDateFormat;
    this.columnPrecision = props.columnPrecision;
    this.columnScale = props.columnScale;
  }

  public format(): any {
    return {
      ColumnName: this.columnName,
      ColumnType: this.columnType,
      ColumnLength: this.columnLength ? this.columnLength.toString() : undefined,
      ColumnNullable: typeof this.columnNullable !== 'undefined' ? String(this.columnNullable) : undefined,
      ColumnIsPk: typeof this.columnIsPk !== 'undefined' ? String(this.columnIsPk) : undefined,
      ColumnDateFormat: this.columnDateFormat,
      ColumnPrecision: this.columnPrecision ? this.columnPrecision.toString() : undefined,
      ColumnScale: this.columnScale ? this.columnScale.toString() : undefined,
    };
  }

}

export interface TableProps {
  readonly tableName: string;
  readonly tablePath: string;
  readonly tableOwner: string;
  readonly tableColumns: TableColumn[];
}

export class Table {

  tableName: string;
  tablePath: string;
  tableOwner: string;
  tableColumns: TableColumn[];

  constructor(props: TableProps) {
    this.tableName = props.tableName;
    this.tablePath = props.tablePath;
    this.tableOwner = props.tableOwner;
    this.tableColumns = props.tableColumns;
  }

  public format(): any {
    return {
      TableName: this.tableName,
      TablePath: this.tablePath,
      TableOwner: this.tableOwner,
      TableColumns: this.tableColumns.map(column => column.format()),
      TableColumnsTotal: this.tableColumns.length.toString(),
    };
  }
}

export class S3Schema {

  tables: Table[] = [];

  public constructor(tables: Table[] = []) {
    this.tables = tables;
  }

  public addTable(table: Table) {
    this.tables.push(table);
  }

  public format(): any {
    return {
      TableCount: this.tables.length.toString(),
      Tables: this.tables.map(table => table.format()),
    };
  }

  public toJSON(): string {
    return JSON.stringify(this.format(), null, 4);
  }
}
