export interface ObjectLocator {
}

export interface RuleProps {
  ruleId?: string;
  ruleAction: string;
  ruleName: string;
  objectLocator: ObjectLocator;
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs
}

export class Rule {
  ruleId?: string;
  ruleAction: string;
  ruleName: string;
  objectLocator: ObjectLocator;
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs

  constructor(props: RuleProps) {
    this.ruleId = props.ruleId || undefined;
    this.ruleAction = props.ruleAction;
    this.ruleName = props.ruleName;
    this.objectLocator = props.objectLocator;
    this.loadOrder = props.loadOrder;
    this.filters = props.filters;
  }

  // add a virtual function format
  public format(): any {
    return '';
  }

}

export class Rules {

  rules: Rule[] = [];

  constructor(
    rules: Rule[] = [],
  ) {
    rules.forEach(rule => this.addRule(rule));
  }

  public addRule(rule: Rule) {
    rule.ruleId = rule.ruleId || String(this.rules.length + 1);
    this.rules.push(rule);
  }

  public toJSON(): string {
    return JSON.stringify(
      { rules: this.rules.map(rules => rules.format()) }, null, 4);
  }

}

