export interface ObjectLocator {
  readonly schemaName: string;
  readonly tableName?: string;
}

export interface RuleProps {
  readonly ruleId?: string;
  readonly ruleAction?: string;
  readonly ruleName?: string;
  // readonly objectLocator: ObjectLocator;
  readonly loadOrder?: number;
  readonly filters?: any[]; // Define a type for the filters based on your needs
}

export class Rule {
  ruleId?: string;
  ruleAction?: string;
  ruleName?: string;
  // objectLocator: ObjectLocator;
  loadOrder?: number;
  filters?: any[]; // Define a type for the filters based on your needs

  constructor(props: RuleProps) {
    this.ruleId = props.ruleId || undefined;
    this.ruleName = props.ruleName || undefined;
    this.ruleAction = props.ruleAction;
    // this.objectLocator = props.objectLocator;
    this.loadOrder = props.loadOrder;
    this.filters = props.filters;
  }

  // add a virtual function format
  public format(): any {
    return '';
  }

}

export class TableMappings {

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

  public format(): any {
    return { rules: this.rules.map(rules => rules.format()) };
  }

  public toJSON(): string {
    return JSON.stringify(
      this.format(), null, 4);
  }

}

export class TaskSettings {

  public toJSON(): string {
    return JSON.stringify(
      {}, null, 4);
  }

}
