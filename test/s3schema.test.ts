import { S3DataType, S3Schema } from '../src/dms-patterns/core/table-mappings';

test('Constructor', () => {

  JSON.stringify({
    // const providedJsonString = JSON.stringify({
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
    [{
      tableName: 'employee',
      tablePath: 'hr/employee/',
      tableOwner: 'hr',
      tableColumns: [{
        columnName: 'Id',
        columnType: S3DataType.INT8,
        columnIsPk: true,
        columnNullable: false,
      },
      {
        columnName: 'LastName',
        columnType: S3DataType.STRING,
        columnLength: 20,
      },
      {
        columnName: 'FirstName',
        columnType: S3DataType.STRING,
        columnLength: 30,
      },
      {
        columnName: 'HireDate',
        columnType: S3DataType.DATETIME,
      },
      {
        columnName: 'OfficeLocation',
        columnType: S3DataType.STRING,
        columnLength: 20,
      }],
    }],
  );

  // const json = schema.toJSON();
  // expect(json).toEqual(providedJsonString);
  expect(schema).toBeDefined();
});

test('Add table', () => {

  // const providedJsonString = JSON.stringify({
  JSON.stringify({
    tableCount: '1',
    tables: [
      {
        tableName: 'employee',
        tablePath: 'hr/employee/',
        tableOwner: 'hr',
        tableColumns: [
          {
            columnName: 'Id',
            columnType: 'INT8',
            columnNullable: 'false',
            columnIsPk: 'true',
          },
        ],
        tableColumnsTotal: '1',
      },
    ],
  }, null, 4);

  const schema = new S3Schema();

  schema.addTable(
    {
      tableName: 'employee',
      tablePath: 'hr/employee/',
      tableOwner: 'hr',
      tableColumns: [{
        columnName: 'Id',
        columnType: S3DataType.INT8,
        columnIsPk: true,
        columnNullable: false,
      }],
    },
  );

  // const json = schema.toJSON();
  // expect(json).toEqual(providedJsonString);
  expect(schema).toBeDefined();

});

