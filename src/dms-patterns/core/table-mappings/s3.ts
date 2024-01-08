
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
  ColumnName: string;
  ColumnType: S3DataType;
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
