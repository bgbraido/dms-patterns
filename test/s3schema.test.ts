import { S3DataType, S3Schema, Table, TableColumn } from '../src/dms-patterns/core/table-mappings';

test('Constructor', () => {

  const providedJsonString = JSON.stringify({
    TableCount: '1',
    Tables: [
      {
        TableName: 'employee',
        TablePath: 'hr/employee/',
        TableOwner: 'hr',
        TableColumns: [
          {
            ColumnName: 'Id',
            ColumnType: 'INT8',
            ColumnNullable: 'false',
            ColumnIsPk: 'true',
          },
          {
            ColumnName: 'LastName',
            ColumnType: 'STRING',
            ColumnLength: '20',
          },
          {
            ColumnName: 'FirstName',
            ColumnType: 'STRING',
            ColumnLength: '30',
          },
          {
            ColumnName: 'HireDate',
            ColumnType: 'DATETIME',
          },
          {
            ColumnName: 'OfficeLocation',
            ColumnType: 'STRING',
            ColumnLength: '20',
          },
        ],
        TableColumnsTotal: '5',
      },
    ],
  }, null, 4);

  const schema = new S3Schema(
    [new Table({
      tableName: 'employee',
      tablePath: 'hr/employee/',
      tableOwner: 'hr',
      tableColumns: [new TableColumn({
        columnName: 'Id',
        columnType: S3DataType.INT8,
        columnIsPk: true,
        columnNullable: false,
      }),
      new TableColumn({
        columnName: 'LastName',
        columnType: S3DataType.STRING,
        columnLength: 20,
      }),
      new TableColumn({
        columnName: 'FirstName',
        columnType: S3DataType.STRING,
        columnLength: 30,
      }),
      new TableColumn({
        columnName: 'HireDate',
        columnType: S3DataType.DATETIME,
      }),
      new TableColumn({
        columnName: 'OfficeLocation',
        columnType: S3DataType.STRING,
        columnLength: 20,
      })],
    })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);
});

test('Add table', () => {

  const providedJsonString = JSON.stringify({
    TableCount: '1',
    Tables: [
      {
        TableName: 'employee',
        TablePath: 'hr/employee/',
        TableOwner: 'hr',
        TableColumns: [
          {
            ColumnName: 'Id',
            ColumnType: 'INT8',
            ColumnNullable: 'false',
            ColumnIsPk: 'true',
          },
        ],
        TableColumnsTotal: '1',
      },
    ],
  }, null, 4);

  const schema = new S3Schema();
  schema.addTable(
    new Table({
      tableName: 'employee',
      tablePath: 'hr/employee/',
      tableOwner: 'hr',
      tableColumns: [new TableColumn({
        columnName: 'Id',
        columnType: S3DataType.INT8,
        columnIsPk: true,
        columnNullable: false,
      })],
    }));

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

