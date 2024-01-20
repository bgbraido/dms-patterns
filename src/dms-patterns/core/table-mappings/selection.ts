
// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Selections.html

import { ObjectLocator, Rule, RuleProps } from './base';

export enum SelectionAction {
  INCLUDE = 'include',
  EXCLUDE = 'exclude',
  EXPLICIT = 'explicit',
}

export interface SelectionObjectLocator extends ObjectLocator {
  readonly tableType?: 'table' | 'view' | 'all';
}

export interface SelectionRuleProps extends RuleProps {
  readonly objectLocator: SelectionObjectLocator;
}

export class SelectionRule extends Rule {
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs
  ruleType: string = 'selection';
  objectLocator: SelectionObjectLocator;


  constructor(props: SelectionRuleProps) {
    super(props);
    this.objectLocator = props.objectLocator;
    this.loadOrder = props.loadOrder;
    this.filters = props.filters;
    this.ruleAction = props.ruleAction as SelectionAction;
  }

  public format(): any {

    return {
      'rule-type': this.ruleType,
      'rule-id': this.ruleId,
      'rule-name': this.ruleName || this.ruleId,
      'object-locator': {
        'schema-name': this.objectLocator.schemaName,
        'table-name': this.objectLocator.tableName,
        'table-type': typeof this.objectLocator.tableType !== 'undefined' ? String(this.objectLocator.tableType) : undefined,
      },
      'rule-action': this.ruleAction,
      'load-order': typeof this.loadOrder !== 'undefined' ? String(this.loadOrder) : undefined,
    };
  }
}