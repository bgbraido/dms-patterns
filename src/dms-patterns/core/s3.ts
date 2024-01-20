
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
  readonly ColumnName: string;
  readonly ColumnType: S3DataType;
  readonly ColumnLength?: number;
  readonly ColumnNullable?: boolean;
  readonly ColumnIsPk?: boolean;
  readonly ColumnDateFormat?: string;
  readonly ColumnPrecision?: number;
  readonly ColumnScale?: number;
}

export interface TableProps {
  readonly TableName: string;
  readonly TablePath: string;
  readonly TableOwner: string;
  readonly TableColumns: TableColumn[];
}

export class Table {

  TableName: string;
  TablePath: string;
  TableOwner: string;
  TableColumns: TableColumn[];

  constructor(props: TableProps) {
    this.TableName = props.TableName;
    this.TablePath = props.TablePath;
    this.TableOwner = props.TableOwner;
    this.TableColumns = props.TableColumns;
  }

  public format(): any {
    return {
      TableName: this.TableName,
      TablePath: this.TablePath,
      TableOwner: this.TableOwner,
      TableColumns: this.TableColumns.map(column => {
        return {
          ColumnName: column.ColumnName,
          ColumnType: column.ColumnType,
          ColumnLength: column.ColumnLength ? column.ColumnLength.toString() : undefined,
          ColumnNullable: typeof column.ColumnNullable !== 'undefined' ? String(column.ColumnNullable) : undefined,
          ColumnIsPk: typeof column.ColumnIsPk !== 'undefined' ? String(column.ColumnIsPk) : undefined,
          ColumnPrecision: column.ColumnPrecision ? column.ColumnPrecision.toString() : undefined,
          ColumnScale: column.ColumnScale ? column.ColumnScale.toString() : undefined,
        };
      }),
      TableColumnsTotal: this.TableColumns.length.toString(),
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
