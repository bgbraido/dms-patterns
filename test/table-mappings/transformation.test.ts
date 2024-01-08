import { SelectionAction, SelectionRule, TableMappings, TransformationAction, TransformationRule, TransformationTarget } from '../../src/dms-patterns/core/table-mappings';

test('Rename a schema', () => {

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
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'rename',
          'rule-target': 'schema',
          'object-locator': {
            'schema-name': 'Test',
          },
          'value': 'Test1',
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
    }),
    new TransformationRule(
      {
        ruleName: '2',
        ruleId: '2',
        ruleAction: TransformationAction.RENAME,
        ruleTarget: TransformationTarget.SCHEMA,
        objectLocator: {
          schemaName: 'Test',
        },
        value: 'Test1',
      })],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Rename a table', () => {

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
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'rename',
          'rule-target': 'table',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': 'Actor',
          },
          'value': 'Actor1',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'Test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.RENAME,
          ruleTarget: TransformationTarget.TABLE,
          objectLocator: {
            schemaName: 'Test',
            tableName: 'Actor',
          },
          value: 'Actor1',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Rename a column', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'transformation',
          'rule-id': '4',
          'rule-name': '4',
          'rule-action': 'rename',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'test',
            'table-name': 'Actor',
            'column-name': 'first_name',
          },
          'value': 'fname',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '4',
          ruleId: '4',
          ruleAction: TransformationAction.RENAME,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'test',
            tableName: 'Actor',
            columnName: 'first_name',
          },
          value: 'fname',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Rename an Oracle table tablespace', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'Play',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'rename',
          'rule-target': 'table-tablespace',
          'object-locator': {
            'schema-name': 'Play',
            'table-name': 'Actor',
            'table-tablespace-name': 'SetSpace',
          },
          'value': 'SceneTblSpace',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'Play',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.RENAME,
          ruleTarget: TransformationTarget.TABLE_TABLESPACE,
          objectLocator: {
            schemaName: 'Play',
            tableName: 'Actor',
            tableTablespaceName: 'SetSpace',
          },
          value: 'SceneTblSpace',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Rename an Oracle index tablespace', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'Play',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'rename',
          'rule-target': 'table-tablespace',
          'object-locator': {
            'schema-name': 'Play',
            'table-name': 'Actor',
            'table-tablespace-name': 'SetISpace',
          },
          'value': 'SceneIdxSpace',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'Play',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.RENAME,
          ruleTarget: TransformationTarget.TABLE_TABLESPACE,
          objectLocator: {
            schemaName: 'Play',
            tableName: 'Actor',
            tableTablespaceName: 'SetISpace',
          },
          value: 'SceneIdxSpace',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test(' Add a column', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'test',
            'table-name': 'actor',
          },
          'value': 'last_updated',
          'data-type': {
            type: 'datetime',
            precision: 6,
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.ADD_COLUMN,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'test',
            tableName: 'actor',
          },
          value: 'last_updated',
          dataType: {
            type: 'datetime',
            precision: 6,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Remove a column', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'remove-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'test',
            'table-name': 'Actor',
            'column-name': 'col%',
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.REMOVE_COLUMN,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'test',
            tableName: 'Actor',
            columnName: 'col%',
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Convert to lowercase', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        }, {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'convert-lowercase',
          'rule-target': 'table',
          'object-locator': {
            'schema-name': 'test',
            'table-name': 'ACTOR',
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.CONVERT_LOWERCASE,
          ruleTarget: TransformationTarget.TABLE,
          objectLocator: {
            schemaName: 'test',
            tableName: 'ACTOR',
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Add a prefix', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        }, {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-prefix',
          'rule-target': 'table',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'value': 'DMS_',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.ADD_PREFIX,
          ruleTarget: TransformationTarget.TABLE,
          objectLocator: {
            schemaName: 'test',
            tableName: '%',
          },
          value: 'DMS_',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Replace a prefix', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        },
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'replace-prefix',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': '%',
            'table-name': '%',
            'column-name': '%',
          },
          'value': 'NewPre_',
          'old-value': 'Pre_',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.REPLACE_PREFIX,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: '%',
            tableName: '%',
            columnName: '%',
          },
          value: 'NewPre_',
          oldValue: 'Pre_',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Remove a suffix', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'rule-action': 'include',
        }, {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'remove-suffix',
          'rule-target': 'table',
          'object-locator': {
            'schema-name': 'test',
            'table-name': '%',
          },
          'value': '_DMS',
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.REMOVE_SUFFIX,
          ruleTarget: TransformationTarget.TABLE,
          objectLocator: {
            schemaName: 'test',
            tableName: '%',
          },
          value: '_DMS',
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test(' Define a primary key', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'inventory',
            'table-name': '%',
          },
          'rule-action': 'include',
        }, {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'define-primary-key',
          'rule-target': 'table',
          'object-locator': {
            'schema-name': 'inventory',
            'table-name': 'ITEM',
          },
          'primary-key-def': {
            name: 'ITEM-primary-key',
            columns: [
              'ITEM-NAME',
              'BOM-MODEL-NUM',
              'BOM-PART-NUM',
            ],
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'inventory',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.DEFINE_PRIMARY_KEY,
          ruleTarget: TransformationTarget.TABLE,
          objectLocator: {
            schemaName: 'inventory',
            tableName: 'ITEM',
          },
          primaryKeyDef: {
            name: 'ITEM-primary-key',
            columns: [
              'ITEM-NAME',
              'BOM-MODEL-NUM',
              'BOM-PART-NUM',
            ],
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Define a unique index', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'inventory',
            'table-name': '%',
          },
          'rule-action': 'include',
        }, {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'define-primary-key',
          'rule-target': 'table',
          'object-locator': {
            'schema-name': 'inventory',
            'table-name': 'ITEM',
          },
          'primary-key-def': {
            name: 'ITEM-unique-idx',
            origin: 'unique-index',
            columns: [
              'ITEM-NAME',
              'BOM-MODEL-NUM',
              'BOM-PART-NUM',
            ],
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'inventory',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.DEFINE_PRIMARY_KEY,
          ruleTarget: TransformationTarget.TABLE,
          objectLocator: {
            schemaName: 'inventory',
            tableName: 'ITEM',
          },
          primaryKeyDef: {
            name: 'ITEM-unique-idx',
            origin: 'unique-index',
            columns: [
              'ITEM-NAME',
              'BOM-MODEL-NUM',
              'BOM-PART-NUM',
            ],
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Change data type of target column', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'transformation',
          'rule-id': '1',
          'rule-name': 'RuleName 1',
          'rule-action': 'change-data-type',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'dbo',
            'table-name': 'dms',
            'column-name': 'SALE_AMOUNT',
          },
          'data-type': {
            type: 'int8',
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: 'RuleName 1',
          ruleId: '1',
          ruleAction: TransformationAction.CHANGE_DATA_TYPE,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'dbo',
            tableName: 'dms',
            columnName: 'SALE_AMOUNT',
          },
          dataType: {
            type: 'int8',
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Add a before image column', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
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
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-before-image-columns',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': '%',
            'table-name': 'employees',
          },
          'before-image-def': {
            'column-prefix': 'BI_',
            'column-suffix': '',
            'column-filter': 'pk-only',
          },
        },
      ],
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
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: '%',
            tableName: 'employees',
          },
          ruleAction: TransformationAction.ADD_BEFORE_IMAGE_COLUMNS,
          beforeImageDef: {
            columnPrefix: 'BI_',
            columnSuffix: '',
            columnFilter: 'pk-only',
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Adding a column using an expression', () => {

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
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'Test',
            'table-name': 'ITEM',
          },
          'value': 'FULL_NAME',
          'expression': "$FIRST_NAME||'_'||$LAST_NAME",
          'data-type': {
            type: 'string',
            length: 50,
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new SelectionRule({
        ruleName: '1',
        ruleId: '1',
        objectLocator: {
          schemaName: 'Test',
          tableName: '%',
        },
        ruleAction: SelectionAction.INCLUDE,
      }),
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.ADD_COLUMN,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'Test',
            tableName: 'ITEM',
          },
          value: 'FULL_NAME',
          expression: "$FIRST_NAME||'_'||$LAST_NAME",
          dataType: {
            type: 'string',
            length: 50,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Flagging target records using an expression', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'transformation',
        'rule-id': '2',
        'rule-name': '2',
        'rule-action': 'add-column',
        'rule-target': 'column',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'value': 'Operation',
        'expression': "operation_indicator('D', 'U', 'I')",
        'data-type': {
          type: 'string',
          length: 50,
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: '%',
            tableName: '%',
          },
          ruleAction: TransformationAction.ADD_COLUMN,
          value: 'Operation',
          expression: "operation_indicator('D', 'U', 'I')",
          dataType: {
            type: 'string',
            length: 50,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Add a before image column using the stream position value from the source', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': '%',
            'table-name': '%',
          },
          'value': 'transact_id',
          'expression': '$AR_H_STREAM_POSITION',
          'data-type': {
            type: 'string',
            length: 50,
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: '%',
            tableName: '%',
          },
          ruleAction: TransformationAction.ADD_COLUMN,
          value: 'transact_id',
          expression: '$AR_H_STREAM_POSITION',
          dataType: {
            type: 'string',
            length: 50,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Add a before column with unique incrementing number from the source.', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': '%',
            'table-name': '%',
          },
          'value': 'transact_id',
          'expression': '$AR_H_CHANGE_SEQ',
          'data-type': {
            type: 'string',
            length: 50,
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: '%',
            tableName: '%',
          },
          ruleAction: TransformationAction.ADD_COLUMN,
          value: 'transact_id',
          expression: '$AR_H_CHANGE_SEQ',
          dataType: {
            type: 'string',
            length: 50,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Adding a new string column to the target table using a case condition', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'public',
            'table-name': 'employee',
          },
          'value': 'emp_seniority',
          'expression': ' CASE WHEN round($emp_salary)>=20000 THEN ‘SENIOR’ ELSE ‘JUNIOR’ END',
          'data-type': {
            type: 'string',
            length: 50,
          },

        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.ADD_COLUMN,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'public',
            tableName: 'employee',
          },
          value: 'emp_seniority',
          expression: ' CASE WHEN round($emp_salary)>=20000 THEN ‘SENIOR’ ELSE ‘JUNIOR’ END',
          dataType: {
            type: 'string',
            length: 50,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Adding a new date column to the target table', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'public',
            'table-name': 'employee',
          },
          'value': 'createdate',
          'expression': 'datetime ()',
          'data-type': {
            type: 'datetime',
            precision: 6,
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.ADD_COLUMN,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'public',
            tableName: 'employee',
          },
          value: 'createdate',
          expression: 'datetime ()',
          dataType: {
            type: 'datetime',
            precision: 6,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Adding a new numeric column to the target table', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [
        {
          'rule-type': 'transformation',
          'rule-id': '2',
          'rule-name': '2',
          'rule-action': 'add-column',
          'rule-target': 'column',
          'object-locator': {
            'schema-name': 'public',
            'table-name': 'employee',
          },
          'value': 'rounded_emp_salary',
          'expression': 'round($emp_salary)',
          'data-type': {
            type: 'int8',
          },
        },
      ],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleAction: TransformationAction.ADD_COLUMN,
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'public',
            tableName: 'employee',
          },
          value: 'rounded_emp_salary',
          expression: 'round($emp_salary)',
          dataType: {
            type: 'int8',
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Adding a new string column to the target table using the hash function', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'transformation',
        'rule-id': '2',
        'rule-name': '2',
        'rule-action': 'add-column',
        'rule-target': 'column',
        'object-locator': {
          'schema-name': 'public',
          'table-name': 'employee',
        },
        'value': 'hashed_emp_number',
        'expression': 'hash_sha256($emp_number)',
        'data-type': {
          type: 'string',
          length: 64,
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: 'public',
            tableName: 'employee',
          },
          ruleAction: TransformationAction.ADD_COLUMN,
          value: 'hashed_emp_number',
          expression: 'hash_sha256($emp_number)',
          dataType: {
            type: 'string',
            length: 64,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});

test('Adding metadata to a target table using expressions', () => {

  const providedJsonString = JSON.stringify(
    {
      rules: [{
        'rule-type': 'transformation',
        'rule-id': '2',
        'rule-name': '2',
        'rule-action': 'add-column',
        'rule-target': 'column',
        'object-locator': {
          'schema-name': '%',
          'table-name': '%',
        },
        'value': 'schema_name',
        'expression': '$AR_M_SOURCE_SCHEMA',
        'data-type': {
          type: 'string',
          length: 50,
        },
      }],
    }, null, 4);

  const schema = new TableMappings(
    [
      new TransformationRule(
        {
          ruleName: '2',
          ruleId: '2',
          ruleTarget: TransformationTarget.COLUMN,
          objectLocator: {
            schemaName: '%',
            tableName: '%',
          },
          ruleAction: TransformationAction.ADD_COLUMN,
          value: 'schema_name',
          expression: '$AR_M_SOURCE_SCHEMA',
          dataType: {
            type: 'string',
            length: 50,
          },
        }),
    ],
  );

  const json = schema.toJSON();
  expect(json).toEqual(providedJsonString);

});


