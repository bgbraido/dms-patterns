
// https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Selections.html

import { Rule, RuleProps, ObjectLocator } from './base';

export enum SelectionAction {
  INCLUDE = 'include',
  EXCLUDE = 'exclude',
  EXPLICIT = 'explicit',
}

export interface SelectionObjectLocator extends ObjectLocator {
  tableType?: 'table' | 'view' | 'all';
}

export interface SelectionRuleProps extends RuleProps {
  objectLocator: SelectionObjectLocator;
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs
  ruleAction: SelectionAction;
}

export class SelectionRule extends Rule {
  ruleName: any;
  objectLocator: SelectionObjectLocator;
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs
  ruleAction: SelectionAction;
  ruleType: string = 'selection';

  constructor(props: SelectionRuleProps) {
    super(props);
    this.objectLocator = props.objectLocator;
    this.loadOrder = props.loadOrder;
    this.filters = props.filters;
    this.ruleAction = props.ruleAction;
  }

  public format(): any {
    return {
      'rule-type': this.ruleType,
      'rule-id': this.ruleId,
      'rule-name': this.ruleName,
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