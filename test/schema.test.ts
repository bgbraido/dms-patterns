import { AWSDMSDataType, DMSS3Schema, RuleAction, RulesSchema } from '../src/dms-patterns/core/schema';

test('DMSS3Schema Constructor', () => {

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

  const schema = new DMSS3Schema(
    [{
      TableName: 'employee',
      TablePath: 'hr/employee/',
      TableOwner: 'hr',
      TableColumns: [{
        ColumnName: 'Id',
        ColumnType: AWSDMSDataType.INT8,
        ColumnIsPk: true,
        ColumnNullable: false,
      },
      {
        ColumnName: 'LastName',
        ColumnType: AWSDMSDataType.STRING,
        ColumnLength: 20,
      },
      {
        ColumnName: 'FirstName',
        ColumnType: AWSDMSDataType.STRING,
        ColumnLength: 30,
      },
      {
        ColumnName: 'HireDate',
        ColumnType: AWSDMSDataType.DATETIME,
      },
      {
        ColumnName: 'OfficeLocation',
        ColumnType: AWSDMSDataType.STRING,
        ColumnLength: 20,
      }],
    }],
  );

  const json = schema.toJSON();

  expect(json).toEqual(providedJsonString);
});


test('DMSS3Schema add table', () => {

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

  const schema = new DMSS3Schema();

  schema.addTable(
    {
      TableName: 'employee',
      TablePath: 'hr/employee/',
      TableOwner: 'hr',
      TableColumns: [{
        ColumnName: 'Id',
        ColumnType: AWSDMSDataType.INT8,
        ColumnIsPk: true,
        ColumnNullable: false,
      }],
    },
  );

  const json = schema.toJSON();

  expect(json).toEqual(providedJsonString);
});


test('Migrate all tables in a schema', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
      ],
    }, null, 4);

  const schema = new RulesSchema(
    [{
      ruleName: '1',
      ruleId: '1',
      objectLocator: {
        schemaName: 'Test',
        tableName: '%',
      },
      ruleAction: RuleAction.INCLUDE,
    }],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});


test('Example Migrate some tables in a schema', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'selection',
          'rule-id': '2',
          'rule-name': '2',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': 'DMS%',
          },
          'rule-action': 'exclude',
        },
      ],
    }, null, 4);

  const schema = new RulesSchema();

  schema.addRule({
    ruleName: '1',
    ruleId: '1',
    objectLocator: {
      schemaName: 'Test',
      tableName: '%',
    },
    ruleAction: RuleAction.INCLUDE,
  });
  schema.addRule({
    ruleName: '2',
    ruleId: '2',
    objectLocator: {
      schemaName: 'Test',
      tableName: 'DMS%',
    },
    ruleAction: RuleAction.EXCLUDE,
  });

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});


test('Example Migrate a specified single table in single schema', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'NewCust',
            'table-name': 'Customer',
          },
          'rule-action': 'explicit',
        },
      ],
    }, null, 4);

  const schema = new RulesSchema(
    [{
      ruleName: '1',
      ruleId: '1',
      objectLocator: {
        schemaName: 'NewCust',
        tableName: 'Customer',
      },
      ruleAction: RuleAction.EXPLICIT,
    }],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Example Migrate tables in a set order', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': 'loadsecond',
          },
          'rule-action': 'include',
          'load-order': '2',
        },
        {
          'rule-type': 'selection',
          'rule-id': '2',
          'rule-name': '2',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': 'loadfirst',
          },
          'rule-action': 'include',
          'load-order': '1',
        },
      ],
    }, null, 4);

  const schema = new RulesSchema(
    [{
      ruleName: '1',
      ruleId: '1',
      objectLocator: {
        schemaName: 'Test',
        tableName: 'loadsecond',
      },
      ruleAction: RuleAction.INCLUDE,
      loadOrder: 2,
    },
    {
      ruleName: '2',
      ruleId: '2',
      objectLocator: {
        schemaName: 'Test',
        tableName: 'loadfirst',
      },
      ruleAction: RuleAction.INCLUDE,
      loadOrder: 1,
    }],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Example Migrate some views in a schema', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '2',
          'rule-name': '2',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': 'view_DMS%',
            'table-type': 'view',
          },
          'rule-action': 'include',
        },
      ],
    }, null, 4);

  const schema = new RulesSchema(
    [{
      ruleName: '2',
      ruleId: '2',
      objectLocator: {
        schemaName: 'Test',
        tableName: 'view_DMS%',
        tableType: 'view',
      },
      ruleAction: RuleAction.INCLUDE,
    }],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Example Migrate all tables and views in a schema', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '3',
          'rule-name': '3',
          'object-locator': {
            'schema-name': 'report',
            'table-name': '%',
            'table-type': 'all',
          },
          'rule-action': 'include',
        },
      ],
    }, null, 4);

  const schema = new RulesSchema(
    [
      {
        ruleName: '3',
        ruleId: '3',
        objectLocator: {
          schemaName: 'report',
          tableName: '%',
          tableType: 'all',
        },
        ruleAction: RuleAction.INCLUDE,
      },
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});