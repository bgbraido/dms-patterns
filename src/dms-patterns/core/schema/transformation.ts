import { Rule, RuleProps } from './base';

export enum TransformationAction {
  ADD_COLUMN = 'add-column',
  INCLUDE_COLUMN = 'include-column',
  REMOVE_COLUMN = 'remove-column',
  RENAME = 'rename',
  CONVERT_LOWERCASE = 'convert-lowercase',
  CONVERT_UPPERCASE = 'convert-uppercase',
  ADD_PREFIX = 'add-prefix',
  REMOVE_PREFIX = 'remove-prefix',
  REPLACE_PREFIX = 'replace-prefix',
  ADD_SUFFIX = 'add-suffix',
  REMOVE_SUFFIX = 'remove-suffix',
  REPLACE_SUFFIX = 'replace-suffix',
  DEFINE_PRIMARY_KEY = 'define-primary-key',
  CHANGE_DATA_TYPE = 'change-data-type',
  ADD_BEFORE_IMAGE_COLUMNS = 'add-before-image-columns'
}

export enum TransformationTarget {
  SCHEMA = 'schema',
  TABLE = 'table',
  COLUMN = 'column',
  TABLE_TABLESPACE = 'table-tablespace',
  INDEX_TABLESPACE = 'index-tablespace'
}

export interface DataTypeParams {
  type: string;
  precision?: number;
  scale?: number | string;
  length?: number;
}

export interface PrimaryKeyDefinition {
  name: string;
  origin?: 'primary-key' | 'unique-index';
  columns: string[];
}

export interface BeforeImageDefinition {
  columnPrefix?: string;
  columnSuffix?: string;
  columnFilter: 'pk-only' | 'non-lob' | 'all';
}

export interface TransformationObjectLocator {
  schemaName: string;
  tableName?: string;
  tableTablespaceName?: string;
  indexTablespaceName?: string;
  columnName?: string;
  dataType?: DataTypeParams;
}

export interface TransformationRuleProps extends RuleProps {
  ruleTarget: TransformationTarget;
  objectLocator: TransformationObjectLocator;
  ruleAction: TransformationAction;
  value?: string;
  oldValue?: string;
  dataType?: DataTypeParams;
  expression?: string;
  primaryKeyDef?: PrimaryKeyDefinition;
  beforeImageDef?: BeforeImageDefinition;
}

export class TransformationRule extends Rule {
  ruleType: string = 'transformation';
  ruleTarget: TransformationTarget;
  objectLocator: TransformationObjectLocator;
  ruleAction: TransformationAction;
  value?: string;
  oldValue?: string;
  dataType?: DataTypeParams;
  expression?: string;
  primaryKeyDef?: PrimaryKeyDefinition;
  beforeImageDef?: BeforeImageDefinition;

  constructor(props: TransformationRuleProps) {
    super(props);
    this.ruleTarget = props.ruleTarget;
    this.objectLocator = props.objectLocator;
    this.ruleAction = props.ruleAction;
    this.value = props.value;
    this.oldValue = props.oldValue;
    this.dataType = props.dataType;
    this.expression = props.expression;
    this.primaryKeyDef = props.primaryKeyDef;
    this.beforeImageDef = props.beforeImageDef;
  }

  public format(): any {
    return {
      'rule-type': this.ruleType,
      'rule-id': this.ruleId,
      'rule-name': this.ruleName,
      'rule-action': this.ruleAction,
      'rule-target': this.ruleTarget,
      'object-locator': {
        'schema-name': this.objectLocator.schemaName,
        'table-name': typeof this.objectLocator.tableName !== 'undefined' ? String(this.objectLocator.tableName) : undefined,
        'table-tablespace-name': typeof this.objectLocator.tableTablespaceName !== 'undefined' ? String(this.objectLocator.tableTablespaceName) : undefined,
        'index-table-space-name': typeof this.objectLocator.indexTablespaceName !== 'undefined' ? String(this.objectLocator.indexTablespaceName) : undefined,
        'column-name': typeof this.objectLocator.columnName !== 'undefined' ? String(this.objectLocator.columnName) : undefined,
        'data-type': typeof this.objectLocator.dataType !== 'undefined' ? String(this.objectLocator.dataType) : undefined,
      },
      'value': this.value,
      'old-value': typeof this.oldValue !== 'undefined' ? String(this.oldValue) : undefined,
      'data-type': typeof this.dataType !== 'undefined' ? String(this.dataType) : undefined,
      'expression': typeof this.expression !== 'undefined' ? String(this.expression) : undefined,
      'primary-key': typeof this.primaryKeyDef !== 'undefined' ? this.primaryKeyDef : undefined,
      'before-image': typeof this.beforeImageDef !== 'undefined' ? this.beforeImageDef : undefined,
    };
  }
}