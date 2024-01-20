import { S3DataType, S3Schema, Table } from '../src/dms-patterns/core/table-mappings';

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
      TableName: 'employee',
      TablePath: 'hr/employee/',
      TableOwner: 'hr',
      TableColumns: [{
        ColumnName: 'Id',
        ColumnType: S3DataType.INT8,
        ColumnIsPk: true,
        ColumnNullable: false,
      },
      {
        ColumnName: 'LastName',
        ColumnType: S3DataType.STRING,
        ColumnLength: 20,
      },
      {
        ColumnName: 'FirstName',
        ColumnType: S3DataType.STRING,
        ColumnLength: 30,
      },
      {
        ColumnName: 'HireDate',
        ColumnType: S3DataType.DATETIME,
      },
      {
        ColumnName: 'OfficeLocation',
        ColumnType: S3DataType.STRING,
        ColumnLength: 20,
      }],
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
      TableName: 'employee',
      TablePath: 'hr/employee/',
      TableOwner: 'hr',
      TableColumns: [{
        ColumnName: 'Id',
        ColumnType: S3DataType.INT8,
        ColumnIsPk: true,
        ColumnNullable: false,
      }],
    }));

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

