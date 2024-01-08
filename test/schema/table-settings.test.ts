import { SelectionAction, SelectionRule } from '../../src/dms-patterns/core/table-mappings';
import { TableMappings } from '../../src/dms-patterns/core/table-mappings/base';

import { TableSettings } from '../../src/dms-patterns/core/table-mappings/table-settings';


test('Wildcards', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'table-settings',
        'rule-id': '8',
        'rule-name': '8',
        'object-locator': {
          'schema-name': 'ipipeline-prod',
          'table-name': '%',
        },
        'parallel-load': {
          'type': 'partitions-auto',
          'number-of-partitions': 16,
          'collection-count-from-metadata': 'true',
          'max-records-skip-per-page': 1000000,
          'batch-size': 50000,
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TableSettings({
        ruleName: '8',
        ruleId: '8',
        objectLocator: {
          schemaName: 'ipipeline-prod',
          tableName: '%',
        },
        parallelLoad: {
          type: 'partitions-auto',
          numberOfPartitions: 16,
          collectionCountFromMetadata: true,
          maxRecordsSkipPerPage: 1000000,
          batchSize: 50000,
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});


test('Load a table segmented by partitions', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'SALES',
        },
        'parallel-load': {
          type: 'partitions-auto',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'SALES',
        },
        parallelLoad: {
          type: 'partitions-auto',
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table segmented by subpartitions', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'SALES',
        },
        'parallel-load': {
          type: 'subpartitions-auto',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'SALES',
        },
        parallelLoad: {
          type: 'subpartitions-auto',
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table segmented by a list of partitions', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'SALES',
        },
        'parallel-load': {
          type: 'partitions-list',
          partitions: [
            'ABCD',
            'EFGH',
            'IJKL',
            'MNOP',
            'QRST',
            'UVWXYZ',
          ],
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'SALES',
        },
        parallelLoad: {
          type: 'partitions-list',
          partitions: [
            'ABCD',
            'EFGH',
            'IJKL',
            'MNOP',
            'QRST',
            'UVWXYZ',
          ],
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load an Oracle table segmented by a selected list of partitions and subpartitions', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'SALES',
        },
        'parallel-load': {
          type: 'partitions-list',
          partitions: [
            'ABCD',
            'EFGH',
            'IJKL',
            'MNOP',
            'QRST',
            'UVWXYZ',
          ],
          subpartitions: [
            '01234',
            '56789',
          ],
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'SALES',
        },
        parallelLoad: {
          type: 'partitions-list',
          partitions: [
            'ABCD',
            'EFGH',
            'IJKL',
            'MNOP',
            'QRST',
            'UVWXYZ',
          ],
          subpartitions: [
            '01234',
            '56789',
          ],
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load two tables: One segmented by ranges and another segmented by partitions', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'SALES',
        },
        'parallel-load': {
          type: 'ranges',
          columns: [
            'SALES_NO',
            'REGION',
          ],
          boundaries: [
            [
              '1000',
              'NORTH',
            ],
            [
              '3000',
              'WEST',
            ],
          ],
        },
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '3',
        'rule-name': '3',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'ORDERS',
        },
        'parallel-load': {
          type: 'partitions-auto',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'SALES',
        },
        parallelLoad: {
          type: 'ranges',
          columns: [
            'SALES_NO',
            'REGION',
          ],
          boundaries: [
            [
              '1000',
              'NORTH',
            ],
            [
              '3000',
              'WEST',
            ],
          ],
        },
      }),
      new TableSettings({
        ruleName: '3',
        ruleId: '3',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'ORDERS',
        },
        parallelLoad: {
          type: 'partitions-auto',
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table segmented by ranges of column values', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'HR',
          'table-name': 'SALES',
        },
        'parallel-load': {
          type: 'ranges',
          columns: [
            'SALES_NO',
            'REGION',
          ],
          boundaries: [
            [
              '1000',
              'NORTH',
            ],
            [
              '3000',
              'WEST',
            ],
          ],
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'HR',
          tableName: 'SALES',
        },
        parallelLoad: {
          type: 'ranges',
          columns: [
            'SALES_NO',
            'REGION',
          ],
          boundaries: [
            [
              '1000',
              'NORTH',
            ],
            [
              '3000',
              'WEST',
            ],
          ],
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table with LOBs using limited LOB mode', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'INV',
          'table-name': 'ITEMS',
        },
        'lob-settings': {
          'bulk-max-size': '100000',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'INV',
          tableName: 'ITEMS',
        },
        lobSettings: {
          bulkMaxSize: 100000,
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table with LOBs using standard full LOB mode', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'INV',
          'table-name': 'ITEMS',
        },
        'lob-settings': {
          'mode': 'unlimited',
          'bulk-max-size': '0',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'INV',
          tableName: 'ITEMS',
        },
        lobSettings: {
          mode: 'unlimited',
          bulkMaxSize: 0,
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table with LOBs using combination full LOB mode', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'INV',
          'table-name': 'ITEMS',
        },
        'lob-settings': {
          'mode': 'unlimited',
          'bulk-max-size': '100000',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'INV',
          tableName: 'ITEMS',
        },
        lobSettings: {
          mode: 'unlimited',
          bulkMaxSize: 100000,
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Load a table with LOBs using the task LOB settings', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'selection',
        'rule-id': '1',
        'rule-name': '1',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'rule-action': 'include',
      },
      {
        'rule-type': 'table-settings',
        'rule-id': '2',
        'rule-name': '2',
        'object-locator': {
          'schema-name': 'INV',
          'table-name': 'ITEMS',
        },
        'lob-settings': {
          'mode': 'none',
          'bulk-max-size': '100000',
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: '%',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TableSettings({
        ruleName: '2',
        ruleId: '2',
        objectLocator: {
          schemaName: 'INV',
          tableName: 'ITEMS',
        },
        lobSettings: {
          mode: 'none',
          bulkMaxSize: 100000,
        },
      }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});
