import { SelectionAction, SelectionRule, TransformationAction, TransformationRule, TransformationTarget } from '../../src/dms-patterns/core/schema';
import { Rules } from '../../src/dms-patterns/core/schema/base';

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

  const schema = new Rules(
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