import { TableMappings } from '../../src/dms-patterns/core/table-mappings';
import { SelectionAction, SelectionRule } from '../../src/dms-patterns/core/table-mappings/selection';

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

  const schema = new TableMappings(
    [new SelectionRule({
      ruleName: '1',
      ruleId: '1',
      objectLocator: {
        schemaName: 'Test',
        tableName: '%',
      },
      ruleAction: SelectionAction.INCLUDE,
    })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Migrate some tables in a schema', () => {

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

  const schema = new TableMappings();

  schema.addRule(new SelectionRule({
    ruleName: '1',
    ruleId: '1',
    objectLocator: {
      schemaName: 'Test',
      tableName: '%',
    },
    ruleAction: SelectionAction.INCLUDE,
  }));
  schema.addRule(new SelectionRule({
    ruleName: '2',
    ruleId: '2',
    objectLocator: {
      schemaName: 'Test',
      tableName: 'DMS%',
    },
    ruleAction: SelectionAction.EXCLUDE,
  }));

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Migrate a specified single table in single schema', () => {

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

  const schema = new TableMappings(
    [new SelectionRule({
      ruleName: '1',
      // ruleId: '1', // not required
      objectLocator: {
        schemaName: 'NewCust',
        tableName: 'Customer',
      },
      ruleAction: SelectionAction.EXPLICIT,
    })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Migrate tables in a set order', () => {

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

  const schema = new TableMappings(
    [new SelectionRule({
      ruleName: '1',
      ruleId: '1',
      objectLocator: {
        schemaName: 'Test',
        tableName: 'loadsecond',
      },
      ruleAction: SelectionAction.INCLUDE,
      loadOrder: 2,
    }),
    new SelectionRule({
      ruleName: '2',
      ruleId: '2',
      objectLocator: {
        schemaName: 'Test',
        tableName: 'loadfirst',
      },
      ruleAction: SelectionAction.INCLUDE,
      loadOrder: 1,
    })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Migrate some views in a schema', () => {

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

  const schema = new TableMappings(
    [new SelectionRule({
      ruleName: '2',
      ruleId: '2',
      objectLocator: {
        schemaName: 'Test',
        tableName: 'view_DMS%',
        tableType: 'view',
      },
      ruleAction: SelectionAction.INCLUDE,
    })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Migrate all tables and views in a schema', () => {

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

  const schema = new TableMappings(
    [new SelectionRule(
      {
        ruleName: '3',
        ruleId: '3',
        objectLocator: {
          schemaName: 'report',
          tableName: '%',
          tableType: 'all',
        },
        ruleAction: SelectionAction.INCLUDE,
      })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});
