# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsVpcRoleStack <a name="DmsVpcRoleStack" id="dms-patterns.DmsVpcRoleStack"></a>

#### Initializers <a name="Initializers" id="dms-patterns.DmsVpcRoleStack.Initializer"></a>

```typescript
import { DmsVpcRoleStack } from 'dms-patterns'

new DmsVpcRoleStack(scope: Construct, id: string, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.DmsVpcRoleStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.DmsVpcRoleStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.DmsVpcRoleStack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.DmsVpcRoleStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.DmsVpcRoleStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="dms-patterns.DmsVpcRoleStack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.DmsVpcRoleStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="dms-patterns.DmsVpcRoleStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="dms-patterns.DmsVpcRoleStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.DmsVpcRoleStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="dms-patterns.DmsVpcRoleStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="dms-patterns.DmsVpcRoleStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.DmsVpcRoleStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.DmsVpcRoleStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="dms-patterns.DmsVpcRoleStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="dms-patterns.DmsVpcRoleStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="dms-patterns.DmsVpcRoleStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="dms-patterns.DmsVpcRoleStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.DmsVpcRoleStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="dms-patterns.DmsVpcRoleStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="dms-patterns.DmsVpcRoleStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.DmsVpcRoleStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="dms-patterns.DmsVpcRoleStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="dms-patterns.DmsVpcRoleStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="dms-patterns.DmsVpcRoleStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="dms-patterns.DmsVpcRoleStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="dms-patterns.DmsVpcRoleStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="dms-patterns.DmsVpcRoleStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="dms-patterns.DmsVpcRoleStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="dms-patterns.DmsVpcRoleStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="dms-patterns.DmsVpcRoleStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="dms-patterns.DmsVpcRoleStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="dms-patterns.DmsVpcRoleStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="dms-patterns.DmsVpcRoleStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="dms-patterns.DmsVpcRoleStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="dms-patterns.DmsVpcRoleStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="dms-patterns.DmsVpcRoleStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="dms-patterns.DmsVpcRoleStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="dms-patterns.DmsVpcRoleStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="dms-patterns.DmsVpcRoleStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="dms-patterns.DmsVpcRoleStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="dms-patterns.DmsVpcRoleStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="dms-patterns.DmsVpcRoleStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="dms-patterns.DmsVpcRoleStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.DmsVpcRoleStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.DmsVpcRoleStack.isConstruct"></a>

```typescript
import { DmsVpcRoleStack } from 'dms-patterns'

DmsVpcRoleStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.DmsVpcRoleStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="dms-patterns.DmsVpcRoleStack.isStack"></a>

```typescript
import { DmsVpcRoleStack } from 'dms-patterns'

DmsVpcRoleStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.DmsVpcRoleStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="dms-patterns.DmsVpcRoleStack.of"></a>

```typescript
import { DmsVpcRoleStack } from 'dms-patterns'

DmsVpcRoleStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="dms-patterns.DmsVpcRoleStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.dmsCloudwatchRole">dmsCloudwatchRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#dms-patterns.DmsVpcRoleStack.property.dmsVpcRole">dmsVpcRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.DmsVpcRoleStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="dms-patterns.DmsVpcRoleStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="dms-patterns.DmsVpcRoleStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="dms-patterns.DmsVpcRoleStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="dms-patterns.DmsVpcRoleStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="dms-patterns.DmsVpcRoleStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="dms-patterns.DmsVpcRoleStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="dms-patterns.DmsVpcRoleStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="dms-patterns.DmsVpcRoleStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="dms-patterns.DmsVpcRoleStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="dms-patterns.DmsVpcRoleStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="dms-patterns.DmsVpcRoleStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="dms-patterns.DmsVpcRoleStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="dms-patterns.DmsVpcRoleStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="dms-patterns.DmsVpcRoleStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="dms-patterns.DmsVpcRoleStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="dms-patterns.DmsVpcRoleStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="dms-patterns.DmsVpcRoleStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="dms-patterns.DmsVpcRoleStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="dms-patterns.DmsVpcRoleStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="dms-patterns.DmsVpcRoleStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `dmsCloudwatchRole`<sup>Required</sup> <a name="dmsCloudwatchRole" id="dms-patterns.DmsVpcRoleStack.property.dmsCloudwatchRole"></a>

```typescript
public readonly dmsCloudwatchRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `dmsVpcRole`<sup>Required</sup> <a name="dmsVpcRole" id="dms-patterns.DmsVpcRoleStack.property.dmsVpcRole"></a>

```typescript
public readonly dmsVpcRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---


### MySql2S3 <a name="MySql2S3" id="dms-patterns.MySql2S3"></a>

#### Initializers <a name="Initializers" id="dms-patterns.MySql2S3.Initializer"></a>

```typescript
import { MySql2S3 } from 'dms-patterns'

new MySql2S3(scope: Construct, id: string, props: MySql2S3Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySql2S3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.MySql2S3Props">MySql2S3Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.MySql2S3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.MySql2S3.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.MySql2S3.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.MySql2S3Props">MySql2S3Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.MySql2S3.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="dms-patterns.MySql2S3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.MySql2S3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.MySql2S3.isConstruct"></a>

```typescript
import { MySql2S3 } from 'dms-patterns'

MySql2S3.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.MySql2S3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySql2S3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.MySql2S3.property.source">source</a></code> | <code><a href="#dms-patterns.MySqlEndpoint">MySqlEndpoint</a></code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3.property.target">target</a></code> | <code><a href="#dms-patterns.S3TargetEndpoint">S3TargetEndpoint</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.MySql2S3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `source`<sup>Required</sup> <a name="source" id="dms-patterns.MySql2S3.property.source"></a>

```typescript
public readonly source: MySqlEndpoint;
```

- *Type:* <a href="#dms-patterns.MySqlEndpoint">MySqlEndpoint</a>

---

##### `target`<sup>Required</sup> <a name="target" id="dms-patterns.MySql2S3.property.target"></a>

```typescript
public readonly target: S3TargetEndpoint;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpoint">S3TargetEndpoint</a>

---


### MySqlEndpoint <a name="MySqlEndpoint" id="dms-patterns.MySqlEndpoint"></a>

An endpoint for a MySQL source.

This construct creates a role for DMS to access the secrets manager secret.

#### Initializers <a name="Initializers" id="dms-patterns.MySqlEndpoint.Initializer"></a>

```typescript
import { MySqlEndpoint } from 'dms-patterns'

new MySqlEndpoint(scope: Construct, id: string, props: MySqlSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.MySqlEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.MySqlEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.MySqlSourceProps">MySqlSourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.MySqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.MySqlEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.MySqlEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.MySqlSourceProps">MySqlSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.MySqlEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dms-patterns.MySqlEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#dms-patterns.MySqlEndpoint.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#dms-patterns.MySqlEndpoint.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.MySqlEndpoint.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.MySqlEndpoint.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.MySqlEndpoint.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#dms-patterns.MySqlEndpoint.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#dms-patterns.MySqlEndpoint.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#dms-patterns.MySqlEndpoint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#dms-patterns.MySqlEndpoint.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#dms-patterns.MySqlEndpoint.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.MySqlEndpoint.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#dms-patterns.MySqlEndpoint.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#dms-patterns.MySqlEndpoint.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#dms-patterns.MySqlEndpoint.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#dms-patterns.MySqlEndpoint.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="dms-patterns.MySqlEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="dms-patterns.MySqlEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="dms-patterns.MySqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="dms-patterns.MySqlEndpoint.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.MySqlEndpoint.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="dms-patterns.MySqlEndpoint.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.MySqlEndpoint.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="dms-patterns.MySqlEndpoint.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.MySqlEndpoint.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="dms-patterns.MySqlEndpoint.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.MySqlEndpoint.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.MySqlEndpoint.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="dms-patterns.MySqlEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.MySqlEndpoint.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.MySqlEndpoint.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="dms-patterns.MySqlEndpoint.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.MySqlEndpoint.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="dms-patterns.MySqlEndpoint.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.MySqlEndpoint.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.MySqlEndpoint.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="dms-patterns.MySqlEndpoint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="dms-patterns.MySqlEndpoint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.MySqlEndpoint.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="dms-patterns.MySqlEndpoint.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="dms-patterns.MySqlEndpoint.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="dms-patterns.MySqlEndpoint.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="dms-patterns.MySqlEndpoint.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.MySqlEndpoint.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="dms-patterns.MySqlEndpoint.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="dms-patterns.MySqlEndpoint.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="dms-patterns.MySqlEndpoint.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.MySqlEndpoint.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="dms-patterns.MySqlEndpoint.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.MySqlEndpoint.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="dms-patterns.MySqlEndpoint.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="dms-patterns.MySqlEndpoint.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="dms-patterns.MySqlEndpoint.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.MySqlEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#dms-patterns.MySqlEndpoint.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#dms-patterns.MySqlEndpoint.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.MySqlEndpoint.isConstruct"></a>

```typescript
import { MySqlEndpoint } from 'dms-patterns'

MySqlEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.MySqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="dms-patterns.MySqlEndpoint.isCfnElement"></a>

```typescript
import { MySqlEndpoint } from 'dms-patterns'

MySqlEndpoint.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.MySqlEndpoint.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="dms-patterns.MySqlEndpoint.isCfnResource"></a>

```typescript
import { MySqlEndpoint } from 'dms-patterns'

MySqlEndpoint.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="dms-patterns.MySqlEndpoint.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySqlEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.MySqlEndpoint.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.attrExternalId">attrExternalId</a></code> | <code>string</code> | A value that can be used for cross-account validation. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.attrId">attrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.MySqlEndpoint.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.engineName">engineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the `EndpointType` value. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.docDbSettings">docDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty</code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty</code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty</code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty</code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty</code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty</code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty</code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty</code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty</code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty</code> | Settings in JSON format for the source and target MySQL endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty</code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.oracleSettings">oracleSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty</code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.password">password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty</code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.redisSettings">redisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty</code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty</code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.s3Settings">s3Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty</code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.serverName">serverName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty</code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#dms-patterns.MySqlEndpoint.property.username">username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.MySqlEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="dms-patterns.MySqlEndpoint.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="dms-patterns.MySqlEndpoint.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="dms-patterns.MySqlEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="dms-patterns.MySqlEndpoint.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="dms-patterns.MySqlEndpoint.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="dms-patterns.MySqlEndpoint.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrExternalId`<sup>Required</sup> <a name="attrExternalId" id="dms-patterns.MySqlEndpoint.property.attrExternalId"></a>

```typescript
public readonly attrExternalId: string;
```

- *Type:* string

A value that can be used for cross-account validation.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="dms-patterns.MySqlEndpoint.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="dms-patterns.MySqlEndpoint.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.MySqlEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="dms-patterns.MySqlEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

The type of engine for the endpoint, depending on the `EndpointType` value.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="dms-patterns.MySqlEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="dms-patterns.MySqlEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the endpoint database.

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="dms-patterns.MySqlEndpoint.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: IResolvable | DocDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty

Settings in JSON format for the source and target DocumentDB endpoint.

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="dms-patterns.MySqlEndpoint.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: IResolvable | DynamoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty

Settings in JSON format for the target Amazon DynamoDB endpoint.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="dms-patterns.MySqlEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: IResolvable | ElasticsearchSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty

Settings in JSON format for the target OpenSearch endpoint.

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="dms-patterns.MySqlEndpoint.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="dms-patterns.MySqlEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Additional attributes associated with the connection.

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="dms-patterns.MySqlEndpoint.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: IResolvable | GcpMySQLSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty

Settings in JSON format for the source GCP MySQL endpoint.

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="dms-patterns.MySqlEndpoint.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: IResolvable | IbmDb2SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty

Settings in JSON format for the source IBM Db2 LUW endpoint.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="dms-patterns.MySqlEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: IResolvable | KafkaSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty

Settings in JSON format for the target Apache Kafka endpoint.

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="dms-patterns.MySqlEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: IResolvable | KinesisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="dms-patterns.MySqlEndpoint.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="dms-patterns.MySqlEndpoint.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: IResolvable | MicrosoftSqlServerSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="dms-patterns.MySqlEndpoint.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: IResolvable | MongoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty

Settings in JSON format for the source MongoDB endpoint.

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="dms-patterns.MySqlEndpoint.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: IResolvable | MySqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty

Settings in JSON format for the source and target MySQL endpoint.

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="dms-patterns.MySqlEndpoint.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: IResolvable | NeptuneSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty

Settings in JSON format for the target Amazon Neptune endpoint.

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="dms-patterns.MySqlEndpoint.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: IResolvable | OracleSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty

Settings in JSON format for the source and target Oracle endpoint.

---

##### `password`<sup>Optional</sup> <a name="password" id="dms-patterns.MySqlEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used to log in to the endpoint database.

---

##### `port`<sup>Optional</sup> <a name="port" id="dms-patterns.MySqlEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="dms-patterns.MySqlEndpoint.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: IResolvable | PostgreSqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty

Settings in JSON format for the source and target PostgreSQL endpoint.

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="dms-patterns.MySqlEndpoint.property.redisSettings"></a>

```typescript
public readonly redisSettings: IResolvable | RedisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty

Settings in JSON format for the target Redis endpoint.

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="dms-patterns.MySqlEndpoint.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: IResolvable | RedshiftSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty

Settings in JSON format for the Amazon Redshift endpoint.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="dms-patterns.MySqlEndpoint.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="dms-patterns.MySqlEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: IResolvable | S3SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty

Settings in JSON format for the source and target Amazon S3 endpoint.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="dms-patterns.MySqlEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server where the endpoint database resides.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.MySqlEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection.

The default is `none` .

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="dms-patterns.MySqlEndpoint.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: IResolvable | SybaseSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty

Settings in JSON format for the source and target SAP ASE endpoint.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="dms-patterns.MySqlEndpoint.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

One or more tags to be assigned to the endpoint.

---

##### `username`<sup>Optional</sup> <a name="username" id="dms-patterns.MySqlEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to be used to log in to the endpoint database.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySqlEndpoint.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="dms-patterns.MySqlEndpoint.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### Postgres2S3 <a name="Postgres2S3" id="dms-patterns.Postgres2S3"></a>

#### Initializers <a name="Initializers" id="dms-patterns.Postgres2S3.Initializer"></a>

```typescript
import { Postgres2S3 } from 'dms-patterns'

new Postgres2S3(scope: Construct, id: string, props: Postgres2S3Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.Postgres2S3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.Postgres2S3Props">Postgres2S3Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.Postgres2S3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.Postgres2S3.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.Postgres2S3.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.Postgres2S3Props">Postgres2S3Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.Postgres2S3.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="dms-patterns.Postgres2S3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.Postgres2S3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.Postgres2S3.isConstruct"></a>

```typescript
import { Postgres2S3 } from 'dms-patterns'

Postgres2S3.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.Postgres2S3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.Postgres2S3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.Postgres2S3.property.source">source</a></code> | <code><a href="#dms-patterns.PostgreSQLEndpoint">PostgreSQLEndpoint</a></code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3.property.target">target</a></code> | <code><a href="#dms-patterns.S3TargetEndpoint">S3TargetEndpoint</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.Postgres2S3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `source`<sup>Required</sup> <a name="source" id="dms-patterns.Postgres2S3.property.source"></a>

```typescript
public readonly source: PostgreSQLEndpoint;
```

- *Type:* <a href="#dms-patterns.PostgreSQLEndpoint">PostgreSQLEndpoint</a>

---

##### `target`<sup>Required</sup> <a name="target" id="dms-patterns.Postgres2S3.property.target"></a>

```typescript
public readonly target: S3TargetEndpoint;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpoint">S3TargetEndpoint</a>

---


### PostgreSQLEndpoint <a name="PostgreSQLEndpoint" id="dms-patterns.PostgreSQLEndpoint"></a>

An endpoint for a Postgres source.

This construct creates a role for DMS to access the secrets manager secret.

#### Initializers <a name="Initializers" id="dms-patterns.PostgreSQLEndpoint.Initializer"></a>

```typescript
import { PostgreSQLEndpoint } from 'dms-patterns'

new PostgreSQLEndpoint(scope: Construct, id: string, props: PostgresSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.PostgresSourceProps">PostgresSourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.PostgreSQLEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.PostgreSQLEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.PostgreSQLEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.PostgresSourceProps">PostgresSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="dms-patterns.PostgreSQLEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="dms-patterns.PostgreSQLEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="dms-patterns.PostgreSQLEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="dms-patterns.PostgreSQLEndpoint.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.PostgreSQLEndpoint.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="dms-patterns.PostgreSQLEndpoint.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.PostgreSQLEndpoint.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="dms-patterns.PostgreSQLEndpoint.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.PostgreSQLEndpoint.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="dms-patterns.PostgreSQLEndpoint.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.PostgreSQLEndpoint.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.PostgreSQLEndpoint.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="dms-patterns.PostgreSQLEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.PostgreSQLEndpoint.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.PostgreSQLEndpoint.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="dms-patterns.PostgreSQLEndpoint.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.PostgreSQLEndpoint.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="dms-patterns.PostgreSQLEndpoint.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.PostgreSQLEndpoint.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.PostgreSQLEndpoint.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="dms-patterns.PostgreSQLEndpoint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="dms-patterns.PostgreSQLEndpoint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.PostgreSQLEndpoint.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="dms-patterns.PostgreSQLEndpoint.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="dms-patterns.PostgreSQLEndpoint.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="dms-patterns.PostgreSQLEndpoint.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="dms-patterns.PostgreSQLEndpoint.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.PostgreSQLEndpoint.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="dms-patterns.PostgreSQLEndpoint.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="dms-patterns.PostgreSQLEndpoint.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="dms-patterns.PostgreSQLEndpoint.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.PostgreSQLEndpoint.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="dms-patterns.PostgreSQLEndpoint.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.PostgreSQLEndpoint.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="dms-patterns.PostgreSQLEndpoint.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="dms-patterns.PostgreSQLEndpoint.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="dms-patterns.PostgreSQLEndpoint.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.PostgreSQLEndpoint.isConstruct"></a>

```typescript
import { PostgreSQLEndpoint } from 'dms-patterns'

PostgreSQLEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.PostgreSQLEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="dms-patterns.PostgreSQLEndpoint.isCfnElement"></a>

```typescript
import { PostgreSQLEndpoint } from 'dms-patterns'

PostgreSQLEndpoint.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.PostgreSQLEndpoint.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="dms-patterns.PostgreSQLEndpoint.isCfnResource"></a>

```typescript
import { PostgreSQLEndpoint } from 'dms-patterns'

PostgreSQLEndpoint.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="dms-patterns.PostgreSQLEndpoint.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.attrExternalId">attrExternalId</a></code> | <code>string</code> | A value that can be used for cross-account validation. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.attrId">attrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.engineName">engineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the `EndpointType` value. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.docDbSettings">docDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty</code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty</code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty</code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty</code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty</code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty</code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty</code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty</code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty</code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty</code> | Settings in JSON format for the source and target MySQL endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty</code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.oracleSettings">oracleSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty</code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.password">password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty</code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.redisSettings">redisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty</code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty</code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.s3Settings">s3Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty</code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.serverName">serverName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty</code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.username">username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.PostgreSQLEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="dms-patterns.PostgreSQLEndpoint.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="dms-patterns.PostgreSQLEndpoint.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="dms-patterns.PostgreSQLEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="dms-patterns.PostgreSQLEndpoint.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="dms-patterns.PostgreSQLEndpoint.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="dms-patterns.PostgreSQLEndpoint.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrExternalId`<sup>Required</sup> <a name="attrExternalId" id="dms-patterns.PostgreSQLEndpoint.property.attrExternalId"></a>

```typescript
public readonly attrExternalId: string;
```

- *Type:* string

A value that can be used for cross-account validation.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="dms-patterns.PostgreSQLEndpoint.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="dms-patterns.PostgreSQLEndpoint.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.PostgreSQLEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="dms-patterns.PostgreSQLEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

The type of engine for the endpoint, depending on the `EndpointType` value.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="dms-patterns.PostgreSQLEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="dms-patterns.PostgreSQLEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the endpoint database.

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="dms-patterns.PostgreSQLEndpoint.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: IResolvable | DocDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty

Settings in JSON format for the source and target DocumentDB endpoint.

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="dms-patterns.PostgreSQLEndpoint.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: IResolvable | DynamoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty

Settings in JSON format for the target Amazon DynamoDB endpoint.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="dms-patterns.PostgreSQLEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: IResolvable | ElasticsearchSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty

Settings in JSON format for the target OpenSearch endpoint.

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="dms-patterns.PostgreSQLEndpoint.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="dms-patterns.PostgreSQLEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Additional attributes associated with the connection.

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="dms-patterns.PostgreSQLEndpoint.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: IResolvable | GcpMySQLSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty

Settings in JSON format for the source GCP MySQL endpoint.

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="dms-patterns.PostgreSQLEndpoint.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: IResolvable | IbmDb2SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty

Settings in JSON format for the source IBM Db2 LUW endpoint.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="dms-patterns.PostgreSQLEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: IResolvable | KafkaSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty

Settings in JSON format for the target Apache Kafka endpoint.

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="dms-patterns.PostgreSQLEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: IResolvable | KinesisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="dms-patterns.PostgreSQLEndpoint.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="dms-patterns.PostgreSQLEndpoint.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: IResolvable | MicrosoftSqlServerSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="dms-patterns.PostgreSQLEndpoint.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: IResolvable | MongoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty

Settings in JSON format for the source MongoDB endpoint.

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="dms-patterns.PostgreSQLEndpoint.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: IResolvable | MySqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty

Settings in JSON format for the source and target MySQL endpoint.

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="dms-patterns.PostgreSQLEndpoint.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: IResolvable | NeptuneSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty

Settings in JSON format for the target Amazon Neptune endpoint.

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="dms-patterns.PostgreSQLEndpoint.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: IResolvable | OracleSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty

Settings in JSON format for the source and target Oracle endpoint.

---

##### `password`<sup>Optional</sup> <a name="password" id="dms-patterns.PostgreSQLEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used to log in to the endpoint database.

---

##### `port`<sup>Optional</sup> <a name="port" id="dms-patterns.PostgreSQLEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="dms-patterns.PostgreSQLEndpoint.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: IResolvable | PostgreSqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty

Settings in JSON format for the source and target PostgreSQL endpoint.

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="dms-patterns.PostgreSQLEndpoint.property.redisSettings"></a>

```typescript
public readonly redisSettings: IResolvable | RedisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty

Settings in JSON format for the target Redis endpoint.

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="dms-patterns.PostgreSQLEndpoint.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: IResolvable | RedshiftSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty

Settings in JSON format for the Amazon Redshift endpoint.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="dms-patterns.PostgreSQLEndpoint.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="dms-patterns.PostgreSQLEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: IResolvable | S3SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty

Settings in JSON format for the source and target Amazon S3 endpoint.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="dms-patterns.PostgreSQLEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server where the endpoint database resides.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.PostgreSQLEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection.

The default is `none` .

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="dms-patterns.PostgreSQLEndpoint.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: IResolvable | SybaseSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty

Settings in JSON format for the source and target SAP ASE endpoint.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="dms-patterns.PostgreSQLEndpoint.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

One or more tags to be assigned to the endpoint.

---

##### `username`<sup>Optional</sup> <a name="username" id="dms-patterns.PostgreSQLEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to be used to log in to the endpoint database.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.PostgreSQLEndpoint.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="dms-patterns.PostgreSQLEndpoint.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### S32s3 <a name="S32s3" id="dms-patterns.S32s3"></a>

#### Initializers <a name="Initializers" id="dms-patterns.S32s3.Initializer"></a>

```typescript
import { S32s3 } from 'dms-patterns'

new S32s3(scope: Construct, id: string, props: S32s3Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S32s3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.S32s3.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S32s3.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.S32s3Props">S32s3Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.S32s3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.S32s3.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.S32s3.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.S32s3Props">S32s3Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S32s3.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="dms-patterns.S32s3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S32s3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.S32s3.isConstruct"></a>

```typescript
import { S32s3 } from 'dms-patterns'

S32s3.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S32s3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S32s3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.S32s3.property.replicationInstance">replicationInstance</a></code> | <code>aws-cdk-lib.aws_dms.CfnReplicationInstance</code> | *No description.* |
| <code><a href="#dms-patterns.S32s3.property.replicationTask">replicationTask</a></code> | <code>aws-cdk-lib.aws_dms.CfnReplicationTask</code> | *No description.* |
| <code><a href="#dms-patterns.S32s3.property.source">source</a></code> | <code><a href="#dms-patterns.S3SourceEndpoint">S3SourceEndpoint</a></code> | *No description.* |
| <code><a href="#dms-patterns.S32s3.property.target">target</a></code> | <code><a href="#dms-patterns.S3TargetEndpoint">S3TargetEndpoint</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.S32s3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `replicationInstance`<sup>Required</sup> <a name="replicationInstance" id="dms-patterns.S32s3.property.replicationInstance"></a>

```typescript
public readonly replicationInstance: CfnReplicationInstance;
```

- *Type:* aws-cdk-lib.aws_dms.CfnReplicationInstance

---

##### `replicationTask`<sup>Required</sup> <a name="replicationTask" id="dms-patterns.S32s3.property.replicationTask"></a>

```typescript
public readonly replicationTask: CfnReplicationTask;
```

- *Type:* aws-cdk-lib.aws_dms.CfnReplicationTask

---

##### `source`<sup>Required</sup> <a name="source" id="dms-patterns.S32s3.property.source"></a>

```typescript
public readonly source: S3SourceEndpoint;
```

- *Type:* <a href="#dms-patterns.S3SourceEndpoint">S3SourceEndpoint</a>

---

##### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S32s3.property.target"></a>

```typescript
public readonly target: S3TargetEndpoint;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpoint">S3TargetEndpoint</a>

---


### S3EndpointBase <a name="S3EndpointBase" id="dms-patterns.S3EndpointBase"></a>

#### Initializers <a name="Initializers" id="dms-patterns.S3EndpointBase.Initializer"></a>

```typescript
import { S3EndpointBase } from 'dms-patterns'

new S3EndpointBase(scope: Construct, id: string, props: S3EndpointBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3EndpointBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.S3EndpointBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3EndpointBase.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.S3EndpointBaseProps">S3EndpointBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.S3EndpointBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.S3EndpointBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.S3EndpointBase.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.S3EndpointBaseProps">S3EndpointBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3EndpointBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dms-patterns.S3EndpointBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#dms-patterns.S3EndpointBase.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#dms-patterns.S3EndpointBase.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.S3EndpointBase.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.S3EndpointBase.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.S3EndpointBase.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#dms-patterns.S3EndpointBase.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#dms-patterns.S3EndpointBase.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#dms-patterns.S3EndpointBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#dms-patterns.S3EndpointBase.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#dms-patterns.S3EndpointBase.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.S3EndpointBase.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#dms-patterns.S3EndpointBase.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#dms-patterns.S3EndpointBase.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#dms-patterns.S3EndpointBase.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#dms-patterns.S3EndpointBase.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="dms-patterns.S3EndpointBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="dms-patterns.S3EndpointBase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="dms-patterns.S3EndpointBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="dms-patterns.S3EndpointBase.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.S3EndpointBase.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="dms-patterns.S3EndpointBase.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3EndpointBase.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="dms-patterns.S3EndpointBase.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3EndpointBase.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="dms-patterns.S3EndpointBase.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.S3EndpointBase.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3EndpointBase.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="dms-patterns.S3EndpointBase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.S3EndpointBase.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3EndpointBase.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="dms-patterns.S3EndpointBase.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.S3EndpointBase.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="dms-patterns.S3EndpointBase.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.S3EndpointBase.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3EndpointBase.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="dms-patterns.S3EndpointBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="dms-patterns.S3EndpointBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.S3EndpointBase.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="dms-patterns.S3EndpointBase.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="dms-patterns.S3EndpointBase.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="dms-patterns.S3EndpointBase.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="dms-patterns.S3EndpointBase.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.S3EndpointBase.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="dms-patterns.S3EndpointBase.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="dms-patterns.S3EndpointBase.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="dms-patterns.S3EndpointBase.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3EndpointBase.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="dms-patterns.S3EndpointBase.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3EndpointBase.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="dms-patterns.S3EndpointBase.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="dms-patterns.S3EndpointBase.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="dms-patterns.S3EndpointBase.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3EndpointBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#dms-patterns.S3EndpointBase.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#dms-patterns.S3EndpointBase.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.S3EndpointBase.isConstruct"></a>

```typescript
import { S3EndpointBase } from 'dms-patterns'

S3EndpointBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S3EndpointBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="dms-patterns.S3EndpointBase.isCfnElement"></a>

```typescript
import { S3EndpointBase } from 'dms-patterns'

S3EndpointBase.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S3EndpointBase.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="dms-patterns.S3EndpointBase.isCfnResource"></a>

```typescript
import { S3EndpointBase } from 'dms-patterns'

S3EndpointBase.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="dms-patterns.S3EndpointBase.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3EndpointBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.S3EndpointBase.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.S3EndpointBase.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#dms-patterns.S3EndpointBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#dms-patterns.S3EndpointBase.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#dms-patterns.S3EndpointBase.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#dms-patterns.S3EndpointBase.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#dms-patterns.S3EndpointBase.property.attrExternalId">attrExternalId</a></code> | <code>string</code> | A value that can be used for cross-account validation. |
| <code><a href="#dms-patterns.S3EndpointBase.property.attrId">attrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3EndpointBase.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#dms-patterns.S3EndpointBase.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.engineName">engineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the `EndpointType` value. |
| <code><a href="#dms-patterns.S3EndpointBase.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#dms-patterns.S3EndpointBase.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#dms-patterns.S3EndpointBase.property.docDbSettings">docDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty</code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty</code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty</code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.S3EndpointBase.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#dms-patterns.S3EndpointBase.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty</code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty</code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.kafkaSettings">kafkaSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty</code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.kinesisSettings">kinesisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty</code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#dms-patterns.S3EndpointBase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty</code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.mongoDbSettings">mongoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty</code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.mySqlSettings">mySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty</code> | Settings in JSON format for the source and target MySQL endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.neptuneSettings">neptuneSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty</code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.oracleSettings">oracleSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty</code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.password">password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#dms-patterns.S3EndpointBase.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#dms-patterns.S3EndpointBase.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty</code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.redisSettings">redisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty</code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.redshiftSettings">redshiftSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty</code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#dms-patterns.S3EndpointBase.property.s3Settings">s3Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty</code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.serverName">serverName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#dms-patterns.S3EndpointBase.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. |
| <code><a href="#dms-patterns.S3EndpointBase.property.sybaseSettings">sybaseSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty</code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#dms-patterns.S3EndpointBase.property.username">username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.S3EndpointBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="dms-patterns.S3EndpointBase.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="dms-patterns.S3EndpointBase.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="dms-patterns.S3EndpointBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="dms-patterns.S3EndpointBase.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="dms-patterns.S3EndpointBase.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="dms-patterns.S3EndpointBase.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrExternalId`<sup>Required</sup> <a name="attrExternalId" id="dms-patterns.S3EndpointBase.property.attrExternalId"></a>

```typescript
public readonly attrExternalId: string;
```

- *Type:* string

A value that can be used for cross-account validation.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="dms-patterns.S3EndpointBase.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="dms-patterns.S3EndpointBase.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.S3EndpointBase.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="dms-patterns.S3EndpointBase.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

The type of engine for the endpoint, depending on the `EndpointType` value.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="dms-patterns.S3EndpointBase.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="dms-patterns.S3EndpointBase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the endpoint database.

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="dms-patterns.S3EndpointBase.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: IResolvable | DocDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty

Settings in JSON format for the source and target DocumentDB endpoint.

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="dms-patterns.S3EndpointBase.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: IResolvable | DynamoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty

Settings in JSON format for the target Amazon DynamoDB endpoint.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="dms-patterns.S3EndpointBase.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: IResolvable | ElasticsearchSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty

Settings in JSON format for the target OpenSearch endpoint.

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="dms-patterns.S3EndpointBase.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="dms-patterns.S3EndpointBase.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Additional attributes associated with the connection.

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="dms-patterns.S3EndpointBase.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: IResolvable | GcpMySQLSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty

Settings in JSON format for the source GCP MySQL endpoint.

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="dms-patterns.S3EndpointBase.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: IResolvable | IbmDb2SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty

Settings in JSON format for the source IBM Db2 LUW endpoint.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="dms-patterns.S3EndpointBase.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: IResolvable | KafkaSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty

Settings in JSON format for the target Apache Kafka endpoint.

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="dms-patterns.S3EndpointBase.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: IResolvable | KinesisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="dms-patterns.S3EndpointBase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="dms-patterns.S3EndpointBase.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: IResolvable | MicrosoftSqlServerSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="dms-patterns.S3EndpointBase.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: IResolvable | MongoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty

Settings in JSON format for the source MongoDB endpoint.

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="dms-patterns.S3EndpointBase.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: IResolvable | MySqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty

Settings in JSON format for the source and target MySQL endpoint.

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="dms-patterns.S3EndpointBase.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: IResolvable | NeptuneSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty

Settings in JSON format for the target Amazon Neptune endpoint.

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="dms-patterns.S3EndpointBase.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: IResolvable | OracleSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty

Settings in JSON format for the source and target Oracle endpoint.

---

##### `password`<sup>Optional</sup> <a name="password" id="dms-patterns.S3EndpointBase.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used to log in to the endpoint database.

---

##### `port`<sup>Optional</sup> <a name="port" id="dms-patterns.S3EndpointBase.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="dms-patterns.S3EndpointBase.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: IResolvable | PostgreSqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty

Settings in JSON format for the source and target PostgreSQL endpoint.

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="dms-patterns.S3EndpointBase.property.redisSettings"></a>

```typescript
public readonly redisSettings: IResolvable | RedisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty

Settings in JSON format for the target Redis endpoint.

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="dms-patterns.S3EndpointBase.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: IResolvable | RedshiftSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty

Settings in JSON format for the Amazon Redshift endpoint.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="dms-patterns.S3EndpointBase.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="dms-patterns.S3EndpointBase.property.s3Settings"></a>

```typescript
public readonly s3Settings: IResolvable | S3SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty

Settings in JSON format for the source and target Amazon S3 endpoint.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="dms-patterns.S3EndpointBase.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server where the endpoint database resides.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.S3EndpointBase.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection.

The default is `none` .

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="dms-patterns.S3EndpointBase.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: IResolvable | SybaseSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty

Settings in JSON format for the source and target SAP ASE endpoint.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="dms-patterns.S3EndpointBase.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

One or more tags to be assigned to the endpoint.

---

##### `username`<sup>Optional</sup> <a name="username" id="dms-patterns.S3EndpointBase.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to be used to log in to the endpoint database.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3EndpointBase.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="dms-patterns.S3EndpointBase.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### S3SourceEndpoint <a name="S3SourceEndpoint" id="dms-patterns.S3SourceEndpoint"></a>

An endpoint for a S3 source.

This construct creates a role for DMS to access the S3 bucket.

#### Initializers <a name="Initializers" id="dms-patterns.S3SourceEndpoint.Initializer"></a>

```typescript
import { S3SourceEndpoint } from 'dms-patterns'

new S3SourceEndpoint(scope: Construct, id: string, props: S3SourceEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.S3SourceEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3SourceEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.S3SourceEndpointProps">S3SourceEndpointProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.S3SourceEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.S3SourceEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.S3SourceEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.S3SourceEndpointProps">S3SourceEndpointProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dms-patterns.S3SourceEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#dms-patterns.S3SourceEndpoint.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#dms-patterns.S3SourceEndpoint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#dms-patterns.S3SourceEndpoint.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#dms-patterns.S3SourceEndpoint.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.S3SourceEndpoint.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#dms-patterns.S3SourceEndpoint.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#dms-patterns.S3SourceEndpoint.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#dms-patterns.S3SourceEndpoint.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#dms-patterns.S3SourceEndpoint.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="dms-patterns.S3SourceEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="dms-patterns.S3SourceEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="dms-patterns.S3SourceEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="dms-patterns.S3SourceEndpoint.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.S3SourceEndpoint.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="dms-patterns.S3SourceEndpoint.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3SourceEndpoint.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="dms-patterns.S3SourceEndpoint.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3SourceEndpoint.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="dms-patterns.S3SourceEndpoint.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.S3SourceEndpoint.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3SourceEndpoint.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="dms-patterns.S3SourceEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.S3SourceEndpoint.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3SourceEndpoint.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="dms-patterns.S3SourceEndpoint.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.S3SourceEndpoint.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="dms-patterns.S3SourceEndpoint.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.S3SourceEndpoint.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3SourceEndpoint.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="dms-patterns.S3SourceEndpoint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="dms-patterns.S3SourceEndpoint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.S3SourceEndpoint.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="dms-patterns.S3SourceEndpoint.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="dms-patterns.S3SourceEndpoint.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="dms-patterns.S3SourceEndpoint.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="dms-patterns.S3SourceEndpoint.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.S3SourceEndpoint.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="dms-patterns.S3SourceEndpoint.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="dms-patterns.S3SourceEndpoint.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="dms-patterns.S3SourceEndpoint.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3SourceEndpoint.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="dms-patterns.S3SourceEndpoint.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3SourceEndpoint.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="dms-patterns.S3SourceEndpoint.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="dms-patterns.S3SourceEndpoint.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="dms-patterns.S3SourceEndpoint.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#dms-patterns.S3SourceEndpoint.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#dms-patterns.S3SourceEndpoint.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.S3SourceEndpoint.isConstruct"></a>

```typescript
import { S3SourceEndpoint } from 'dms-patterns'

S3SourceEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S3SourceEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="dms-patterns.S3SourceEndpoint.isCfnElement"></a>

```typescript
import { S3SourceEndpoint } from 'dms-patterns'

S3SourceEndpoint.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S3SourceEndpoint.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="dms-patterns.S3SourceEndpoint.isCfnResource"></a>

```typescript
import { S3SourceEndpoint } from 'dms-patterns'

S3SourceEndpoint.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="dms-patterns.S3SourceEndpoint.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.attrExternalId">attrExternalId</a></code> | <code>string</code> | A value that can be used for cross-account validation. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.attrId">attrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.engineName">engineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the `EndpointType` value. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.docDbSettings">docDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty</code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty</code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty</code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty</code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty</code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty</code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty</code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty</code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty</code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty</code> | Settings in JSON format for the source and target MySQL endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty</code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.oracleSettings">oracleSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty</code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.password">password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty</code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.redisSettings">redisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty</code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty</code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.s3Settings">s3Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty</code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.serverName">serverName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty</code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.username">username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.S3SourceEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="dms-patterns.S3SourceEndpoint.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="dms-patterns.S3SourceEndpoint.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="dms-patterns.S3SourceEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="dms-patterns.S3SourceEndpoint.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="dms-patterns.S3SourceEndpoint.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="dms-patterns.S3SourceEndpoint.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrExternalId`<sup>Required</sup> <a name="attrExternalId" id="dms-patterns.S3SourceEndpoint.property.attrExternalId"></a>

```typescript
public readonly attrExternalId: string;
```

- *Type:* string

A value that can be used for cross-account validation.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="dms-patterns.S3SourceEndpoint.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="dms-patterns.S3SourceEndpoint.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.S3SourceEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="dms-patterns.S3SourceEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

The type of engine for the endpoint, depending on the `EndpointType` value.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="dms-patterns.S3SourceEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="dms-patterns.S3SourceEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the endpoint database.

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="dms-patterns.S3SourceEndpoint.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: IResolvable | DocDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty

Settings in JSON format for the source and target DocumentDB endpoint.

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="dms-patterns.S3SourceEndpoint.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: IResolvable | DynamoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty

Settings in JSON format for the target Amazon DynamoDB endpoint.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="dms-patterns.S3SourceEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: IResolvable | ElasticsearchSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty

Settings in JSON format for the target OpenSearch endpoint.

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="dms-patterns.S3SourceEndpoint.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="dms-patterns.S3SourceEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Additional attributes associated with the connection.

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="dms-patterns.S3SourceEndpoint.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: IResolvable | GcpMySQLSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty

Settings in JSON format for the source GCP MySQL endpoint.

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="dms-patterns.S3SourceEndpoint.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: IResolvable | IbmDb2SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty

Settings in JSON format for the source IBM Db2 LUW endpoint.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="dms-patterns.S3SourceEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: IResolvable | KafkaSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty

Settings in JSON format for the target Apache Kafka endpoint.

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="dms-patterns.S3SourceEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: IResolvable | KinesisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="dms-patterns.S3SourceEndpoint.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="dms-patterns.S3SourceEndpoint.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: IResolvable | MicrosoftSqlServerSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="dms-patterns.S3SourceEndpoint.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: IResolvable | MongoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty

Settings in JSON format for the source MongoDB endpoint.

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="dms-patterns.S3SourceEndpoint.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: IResolvable | MySqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty

Settings in JSON format for the source and target MySQL endpoint.

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="dms-patterns.S3SourceEndpoint.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: IResolvable | NeptuneSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty

Settings in JSON format for the target Amazon Neptune endpoint.

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="dms-patterns.S3SourceEndpoint.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: IResolvable | OracleSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty

Settings in JSON format for the source and target Oracle endpoint.

---

##### `password`<sup>Optional</sup> <a name="password" id="dms-patterns.S3SourceEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used to log in to the endpoint database.

---

##### `port`<sup>Optional</sup> <a name="port" id="dms-patterns.S3SourceEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="dms-patterns.S3SourceEndpoint.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: IResolvable | PostgreSqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty

Settings in JSON format for the source and target PostgreSQL endpoint.

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="dms-patterns.S3SourceEndpoint.property.redisSettings"></a>

```typescript
public readonly redisSettings: IResolvable | RedisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty

Settings in JSON format for the target Redis endpoint.

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="dms-patterns.S3SourceEndpoint.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: IResolvable | RedshiftSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty

Settings in JSON format for the Amazon Redshift endpoint.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="dms-patterns.S3SourceEndpoint.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="dms-patterns.S3SourceEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: IResolvable | S3SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty

Settings in JSON format for the source and target Amazon S3 endpoint.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="dms-patterns.S3SourceEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server where the endpoint database resides.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.S3SourceEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection.

The default is `none` .

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="dms-patterns.S3SourceEndpoint.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: IResolvable | SybaseSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty

Settings in JSON format for the source and target SAP ASE endpoint.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="dms-patterns.S3SourceEndpoint.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

One or more tags to be assigned to the endpoint.

---

##### `username`<sup>Optional</sup> <a name="username" id="dms-patterns.S3SourceEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to be used to log in to the endpoint database.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpoint.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="dms-patterns.S3SourceEndpoint.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### S3TargetEndpoint <a name="S3TargetEndpoint" id="dms-patterns.S3TargetEndpoint"></a>

An endpoint for a S3 target.

This construct creates a role for DMS to access the S3 bucket.

#### Initializers <a name="Initializers" id="dms-patterns.S3TargetEndpoint.Initializer"></a>

```typescript
import { S3TargetEndpoint } from 'dms-patterns'

new S3TargetEndpoint(scope: Construct, id: string, props: S3TargetEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.S3TargetEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3TargetEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.S3TargetEndpointProps">S3TargetEndpointProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.S3TargetEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.S3TargetEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.S3TargetEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.S3TargetEndpointProps">S3TargetEndpointProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dms-patterns.S3TargetEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#dms-patterns.S3TargetEndpoint.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#dms-patterns.S3TargetEndpoint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#dms-patterns.S3TargetEndpoint.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#dms-patterns.S3TargetEndpoint.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#dms-patterns.S3TargetEndpoint.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#dms-patterns.S3TargetEndpoint.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#dms-patterns.S3TargetEndpoint.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#dms-patterns.S3TargetEndpoint.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#dms-patterns.S3TargetEndpoint.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="dms-patterns.S3TargetEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="dms-patterns.S3TargetEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="dms-patterns.S3TargetEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="dms-patterns.S3TargetEndpoint.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.S3TargetEndpoint.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="dms-patterns.S3TargetEndpoint.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3TargetEndpoint.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="dms-patterns.S3TargetEndpoint.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3TargetEndpoint.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="dms-patterns.S3TargetEndpoint.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.S3TargetEndpoint.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3TargetEndpoint.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="dms-patterns.S3TargetEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="dms-patterns.S3TargetEndpoint.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3TargetEndpoint.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="dms-patterns.S3TargetEndpoint.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.S3TargetEndpoint.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="dms-patterns.S3TargetEndpoint.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="dms-patterns.S3TargetEndpoint.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="dms-patterns.S3TargetEndpoint.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="dms-patterns.S3TargetEndpoint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="dms-patterns.S3TargetEndpoint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="dms-patterns.S3TargetEndpoint.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="dms-patterns.S3TargetEndpoint.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="dms-patterns.S3TargetEndpoint.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="dms-patterns.S3TargetEndpoint.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="dms-patterns.S3TargetEndpoint.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="dms-patterns.S3TargetEndpoint.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="dms-patterns.S3TargetEndpoint.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="dms-patterns.S3TargetEndpoint.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="dms-patterns.S3TargetEndpoint.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3TargetEndpoint.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="dms-patterns.S3TargetEndpoint.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="dms-patterns.S3TargetEndpoint.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="dms-patterns.S3TargetEndpoint.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="dms-patterns.S3TargetEndpoint.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="dms-patterns.S3TargetEndpoint.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#dms-patterns.S3TargetEndpoint.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#dms-patterns.S3TargetEndpoint.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.S3TargetEndpoint.isConstruct"></a>

```typescript
import { S3TargetEndpoint } from 'dms-patterns'

S3TargetEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S3TargetEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="dms-patterns.S3TargetEndpoint.isCfnElement"></a>

```typescript
import { S3TargetEndpoint } from 'dms-patterns'

S3TargetEndpoint.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S3TargetEndpoint.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="dms-patterns.S3TargetEndpoint.isCfnResource"></a>

```typescript
import { S3TargetEndpoint } from 'dms-patterns'

S3TargetEndpoint.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="dms-patterns.S3TargetEndpoint.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.attrExternalId">attrExternalId</a></code> | <code>string</code> | A value that can be used for cross-account validation. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.attrId">attrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.engineName">engineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the `EndpointType` value. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.docDbSettings">docDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty</code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty</code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty</code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty</code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty</code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty</code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty</code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty</code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty</code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty</code> | Settings in JSON format for the source and target MySQL endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty</code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.oracleSettings">oracleSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty</code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.password">password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty</code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.redisSettings">redisSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty</code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty</code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.s3Settings">s3Settings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty</code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.serverName">serverName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty</code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.username">username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.S3TargetEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="dms-patterns.S3TargetEndpoint.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="dms-patterns.S3TargetEndpoint.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="dms-patterns.S3TargetEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="dms-patterns.S3TargetEndpoint.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="dms-patterns.S3TargetEndpoint.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="dms-patterns.S3TargetEndpoint.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrExternalId`<sup>Required</sup> <a name="attrExternalId" id="dms-patterns.S3TargetEndpoint.property.attrExternalId"></a>

```typescript
public readonly attrExternalId: string;
```

- *Type:* string

A value that can be used for cross-account validation.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="dms-patterns.S3TargetEndpoint.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="dms-patterns.S3TargetEndpoint.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.S3TargetEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="dms-patterns.S3TargetEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

The type of engine for the endpoint, depending on the `EndpointType` value.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="dms-patterns.S3TargetEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="dms-patterns.S3TargetEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the endpoint database.

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="dms-patterns.S3TargetEndpoint.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: IResolvable | DocDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DocDbSettingsProperty

Settings in JSON format for the source and target DocumentDB endpoint.

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="dms-patterns.S3TargetEndpoint.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: IResolvable | DynamoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.DynamoDbSettingsProperty

Settings in JSON format for the target Amazon DynamoDB endpoint.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="dms-patterns.S3TargetEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: IResolvable | ElasticsearchSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.ElasticsearchSettingsProperty

Settings in JSON format for the target OpenSearch endpoint.

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="dms-patterns.S3TargetEndpoint.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="dms-patterns.S3TargetEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Additional attributes associated with the connection.

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="dms-patterns.S3TargetEndpoint.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: IResolvable | GcpMySQLSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.GcpMySQLSettingsProperty

Settings in JSON format for the source GCP MySQL endpoint.

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="dms-patterns.S3TargetEndpoint.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: IResolvable | IbmDb2SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.IbmDb2SettingsProperty

Settings in JSON format for the source IBM Db2 LUW endpoint.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="dms-patterns.S3TargetEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: IResolvable | KafkaSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KafkaSettingsProperty

Settings in JSON format for the target Apache Kafka endpoint.

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="dms-patterns.S3TargetEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: IResolvable | KinesisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.KinesisSettingsProperty

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="dms-patterns.S3TargetEndpoint.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="dms-patterns.S3TargetEndpoint.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: IResolvable | MicrosoftSqlServerSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MicrosoftSqlServerSettingsProperty

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="dms-patterns.S3TargetEndpoint.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: IResolvable | MongoDbSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MongoDbSettingsProperty

Settings in JSON format for the source MongoDB endpoint.

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="dms-patterns.S3TargetEndpoint.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: IResolvable | MySqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.MySqlSettingsProperty

Settings in JSON format for the source and target MySQL endpoint.

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="dms-patterns.S3TargetEndpoint.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: IResolvable | NeptuneSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.NeptuneSettingsProperty

Settings in JSON format for the target Amazon Neptune endpoint.

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="dms-patterns.S3TargetEndpoint.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: IResolvable | OracleSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.OracleSettingsProperty

Settings in JSON format for the source and target Oracle endpoint.

---

##### `password`<sup>Optional</sup> <a name="password" id="dms-patterns.S3TargetEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used to log in to the endpoint database.

---

##### `port`<sup>Optional</sup> <a name="port" id="dms-patterns.S3TargetEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="dms-patterns.S3TargetEndpoint.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: IResolvable | PostgreSqlSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.PostgreSqlSettingsProperty

Settings in JSON format for the source and target PostgreSQL endpoint.

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="dms-patterns.S3TargetEndpoint.property.redisSettings"></a>

```typescript
public readonly redisSettings: IResolvable | RedisSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedisSettingsProperty

Settings in JSON format for the target Redis endpoint.

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="dms-patterns.S3TargetEndpoint.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: IResolvable | RedshiftSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.RedshiftSettingsProperty

Settings in JSON format for the Amazon Redshift endpoint.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="dms-patterns.S3TargetEndpoint.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="dms-patterns.S3TargetEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: IResolvable | S3SettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty

Settings in JSON format for the source and target Amazon S3 endpoint.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="dms-patterns.S3TargetEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server where the endpoint database resides.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.S3TargetEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection.

The default is `none` .

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="dms-patterns.S3TargetEndpoint.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: IResolvable | SybaseSettingsProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_dms.CfnEndpoint.SybaseSettingsProperty

Settings in JSON format for the source and target SAP ASE endpoint.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="dms-patterns.S3TargetEndpoint.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

One or more tags to be assigned to the endpoint.

---

##### `username`<sup>Optional</sup> <a name="username" id="dms-patterns.S3TargetEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to be used to log in to the endpoint database.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpoint.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="dms-patterns.S3TargetEndpoint.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

## Structs <a name="Structs" id="Structs"></a>

### BeforeImageDefinition <a name="BeforeImageDefinition" id="dms-patterns.BeforeImageDefinition"></a>

#### Initializer <a name="Initializer" id="dms-patterns.BeforeImageDefinition.Initializer"></a>

```typescript
import { BeforeImageDefinition } from 'dms-patterns'

const beforeImageDefinition: BeforeImageDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.BeforeImageDefinition.property.columnFilter">columnFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.BeforeImageDefinition.property.columnPrefix">columnPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.BeforeImageDefinition.property.columnSuffix">columnSuffix</a></code> | <code>string</code> | *No description.* |

---

##### `columnFilter`<sup>Required</sup> <a name="columnFilter" id="dms-patterns.BeforeImageDefinition.property.columnFilter"></a>

```typescript
public readonly columnFilter: string;
```

- *Type:* string

---

##### `columnPrefix`<sup>Optional</sup> <a name="columnPrefix" id="dms-patterns.BeforeImageDefinition.property.columnPrefix"></a>

```typescript
public readonly columnPrefix: string;
```

- *Type:* string

---

##### `columnSuffix`<sup>Optional</sup> <a name="columnSuffix" id="dms-patterns.BeforeImageDefinition.property.columnSuffix"></a>

```typescript
public readonly columnSuffix: string;
```

- *Type:* string

---

### DataTypeParams <a name="DataTypeParams" id="dms-patterns.DataTypeParams"></a>

#### Initializer <a name="Initializer" id="dms-patterns.DataTypeParams.Initializer"></a>

```typescript
import { DataTypeParams } from 'dms-patterns'

const dataTypeParams: DataTypeParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.DataTypeParams.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.DataTypeParams.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.DataTypeParams.property.precision">precision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.DataTypeParams.property.scale">scale</a></code> | <code>string \| number</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="dms-patterns.DataTypeParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `length`<sup>Optional</sup> <a name="length" id="dms-patterns.DataTypeParams.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `precision`<sup>Optional</sup> <a name="precision" id="dms-patterns.DataTypeParams.property.precision"></a>

```typescript
public readonly precision: number;
```

- *Type:* number

---

##### `scale`<sup>Optional</sup> <a name="scale" id="dms-patterns.DataTypeParams.property.scale"></a>

```typescript
public readonly scale: string | number;
```

- *Type:* string | number

---

### LobSettings <a name="LobSettings" id="dms-patterns.LobSettings"></a>

#### Initializer <a name="Initializer" id="dms-patterns.LobSettings.Initializer"></a>

```typescript
import { LobSettings } from 'dms-patterns'

const lobSettings: LobSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.LobSettings.property.bulkMaxSize">bulkMaxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.LobSettings.property.mode">mode</a></code> | <code>string</code> | *No description.* |

---

##### `bulkMaxSize`<sup>Optional</sup> <a name="bulkMaxSize" id="dms-patterns.LobSettings.property.bulkMaxSize"></a>

```typescript
public readonly bulkMaxSize: number;
```

- *Type:* number

---

##### `mode`<sup>Optional</sup> <a name="mode" id="dms-patterns.LobSettings.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

### MySql2S3Props <a name="MySql2S3Props" id="dms-patterns.MySql2S3Props"></a>

#### Initializer <a name="Initializer" id="dms-patterns.MySql2S3Props.Initializer"></a>

```typescript
import { MySql2S3Props } from 'dms-patterns'

const mySql2S3Props: MySql2S3Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySql2S3Props.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.mySqlSourceEndpointSettings">mySqlSourceEndpointSettings</a></code> | <code><a href="#dms-patterns.MySqlSettings">MySqlSettings</a></code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.replicationConfigIdentifier">replicationConfigIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.tableMappings">tableMappings</a></code> | <code><a href="#dms-patterns.TableMappings">TableMappings</a></code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.computeConfig">computeConfig</a></code> | <code>aws-cdk-lib.aws_dms.CfnReplicationConfig.ComputeConfigProperty</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.replicationSettings">replicationSettings</a></code> | <code>any</code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.s3targetEndpointSettings">s3targetEndpointSettings</a></code> | <code><a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a></code> | *No description.* |
| <code><a href="#dms-patterns.MySql2S3Props.property.taskSettings">taskSettings</a></code> | <code><a href="#dms-patterns.TaskSettings">TaskSettings</a></code> | *No description.* |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="dms-patterns.MySql2S3Props.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="dms-patterns.MySql2S3Props.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `mySqlSourceEndpointSettings`<sup>Required</sup> <a name="mySqlSourceEndpointSettings" id="dms-patterns.MySql2S3Props.property.mySqlSourceEndpointSettings"></a>

```typescript
public readonly mySqlSourceEndpointSettings: MySqlSettings;
```

- *Type:* <a href="#dms-patterns.MySqlSettings">MySqlSettings</a>

---

##### `replicationConfigIdentifier`<sup>Required</sup> <a name="replicationConfigIdentifier" id="dms-patterns.MySql2S3Props.property.replicationConfigIdentifier"></a>

```typescript
public readonly replicationConfigIdentifier: string;
```

- *Type:* string

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="dms-patterns.MySql2S3Props.property.tableMappings"></a>

```typescript
public readonly tableMappings: TableMappings;
```

- *Type:* <a href="#dms-patterns.TableMappings">TableMappings</a>

---

##### `computeConfig`<sup>Optional</sup> <a name="computeConfig" id="dms-patterns.MySql2S3Props.property.computeConfig"></a>

```typescript
public readonly computeConfig: ComputeConfigProperty;
```

- *Type:* aws-cdk-lib.aws_dms.CfnReplicationConfig.ComputeConfigProperty

---

##### `replicationSettings`<sup>Optional</sup> <a name="replicationSettings" id="dms-patterns.MySql2S3Props.property.replicationSettings"></a>

```typescript
public readonly replicationSettings: any;
```

- *Type:* any

---

##### `s3targetEndpointSettings`<sup>Optional</sup> <a name="s3targetEndpointSettings" id="dms-patterns.MySql2S3Props.property.s3targetEndpointSettings"></a>

```typescript
public readonly s3targetEndpointSettings: S3TargetEndpointSettings;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a>

---

##### `taskSettings`<sup>Optional</sup> <a name="taskSettings" id="dms-patterns.MySql2S3Props.property.taskSettings"></a>

```typescript
public readonly taskSettings: TaskSettings;
```

- *Type:* <a href="#dms-patterns.TaskSettings">TaskSettings</a>

---

### MySqlSettings <a name="MySqlSettings" id="dms-patterns.MySqlSettings"></a>

#### Initializer <a name="Initializer" id="dms-patterns.MySqlSettings.Initializer"></a>

```typescript
import { MySqlSettings } from 'dms-patterns'

const mySqlSettings: MySqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details. |
| <code><a href="#dms-patterns.MySqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | Code to run after connecting. |
| <code><a href="#dms-patterns.MySqlSettings.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#dms-patterns.MySqlSettings.property.eventsPollInterval">eventsPollInterval</a></code> | <code>number</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#dms-patterns.MySqlSettings.property.serverTimezone">serverTimezone</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |
| <code><a href="#dms-patterns.MySqlSettings.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` . |

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="dms-patterns.MySqlSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-secretsmanagersecretid](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-secretsmanagersecretid)

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="dms-patterns.MySqlSettings.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

Code to run after connecting.

This parameter should contain the code itself, not the name of a file containing the code.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-afterconnectscript](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-afterconnectscript)

---

##### `cleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatch" id="dms-patterns.MySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```typescript
public readonly cleanSourceMetadataOnMismatch: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-cleansourcemetadataonmismatch](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-cleansourcemetadataonmismatch)

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="eventsPollInterval" id="dms-patterns.MySqlSettings.property.eventsPollInterval"></a>

```typescript
public readonly eventsPollInterval: number;
```

- *Type:* number

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Example: `eventsPollInterval=5;`

In the example, AWS DMS checks for changes in the binary logs every five seconds.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-eventspollinterval](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-eventspollinterval)

---

##### `serverTimezone`<sup>Optional</sup> <a name="serverTimezone" id="dms-patterns.MySqlSettings.property.serverTimezone"></a>

```typescript
public readonly serverTimezone: string;
```

- *Type:* string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Example: `serverTimezone=US/Pacific;`

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-servertimezone](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-servertimezone)

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.MySqlSettings.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` .

> When `engine_name` is set to S3, the only allowed value is `none` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode)

---

### MySqlSourceProps <a name="MySqlSourceProps" id="dms-patterns.MySqlSourceProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.MySqlSourceProps.Initializer"></a>

```typescript
import { MySqlSourceProps } from 'dms-patterns'

const mySqlSourceProps: MySqlSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.MySqlSourceProps.property.databaseName">databaseName</a></code> | <code>string</code> | The database name on the MongoDB source endpoint. |
| <code><a href="#dms-patterns.MySqlSourceProps.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.MySqlSourceProps.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.MySqlSourceProps.property.mySqlSourceEndpointSettings">mySqlSourceEndpointSettings</a></code> | <code><a href="#dms-patterns.MySqlSettings">MySqlSettings</a></code> | The settings for the source mysql endpoint. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="dms-patterns.MySqlSourceProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name on the MongoDB source endpoint.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename)

---

##### `endpointIdentifier`<sup>Required</sup> <a name="endpointIdentifier" id="dms-patterns.MySqlSourceProps.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier)

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.MySqlSourceProps.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `mySqlSourceEndpointSettings`<sup>Required</sup> <a name="mySqlSourceEndpointSettings" id="dms-patterns.MySqlSourceProps.property.mySqlSourceEndpointSettings"></a>

```typescript
public readonly mySqlSourceEndpointSettings: MySqlSettings;
```

- *Type:* <a href="#dms-patterns.MySqlSettings">MySqlSettings</a>

The settings for the source mysql endpoint.

---

### ObjectLocator <a name="ObjectLocator" id="dms-patterns.ObjectLocator"></a>

#### Initializer <a name="Initializer" id="dms-patterns.ObjectLocator.Initializer"></a>

```typescript
import { ObjectLocator } from 'dms-patterns'

const objectLocator: ObjectLocator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.ObjectLocator.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.ObjectLocator.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="dms-patterns.ObjectLocator.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="dms-patterns.ObjectLocator.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

### ParallelLoad <a name="ParallelLoad" id="dms-patterns.ParallelLoad"></a>

#### Initializer <a name="Initializer" id="dms-patterns.ParallelLoad.Initializer"></a>

```typescript
import { ParallelLoad } from 'dms-patterns'

const parallelLoad: ParallelLoad = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.ParallelLoad.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.boundaries">boundaries</a></code> | <code>any[][]</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.collectionCountFromMetadata">collectionCountFromMetadata</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.maxRecordsSkipPerPage">maxRecordsSkipPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.numberOfPartitions">numberOfPartitions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.partitions">partitions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.ParallelLoad.property.subpartitions">subpartitions</a></code> | <code>string[]</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="dms-patterns.ParallelLoad.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="dms-patterns.ParallelLoad.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `boundaries`<sup>Optional</sup> <a name="boundaries" id="dms-patterns.ParallelLoad.property.boundaries"></a>

```typescript
public readonly boundaries: any[][];
```

- *Type:* any[][]

---

##### `collectionCountFromMetadata`<sup>Optional</sup> <a name="collectionCountFromMetadata" id="dms-patterns.ParallelLoad.property.collectionCountFromMetadata"></a>

```typescript
public readonly collectionCountFromMetadata: boolean;
```

- *Type:* boolean

---

##### `columns`<sup>Optional</sup> <a name="columns" id="dms-patterns.ParallelLoad.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `maxRecordsSkipPerPage`<sup>Optional</sup> <a name="maxRecordsSkipPerPage" id="dms-patterns.ParallelLoad.property.maxRecordsSkipPerPage"></a>

```typescript
public readonly maxRecordsSkipPerPage: number;
```

- *Type:* number

---

##### `numberOfPartitions`<sup>Optional</sup> <a name="numberOfPartitions" id="dms-patterns.ParallelLoad.property.numberOfPartitions"></a>

```typescript
public readonly numberOfPartitions: number;
```

- *Type:* number

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="dms-patterns.ParallelLoad.property.partitions"></a>

```typescript
public readonly partitions: string[];
```

- *Type:* string[]

---

##### `subpartitions`<sup>Optional</sup> <a name="subpartitions" id="dms-patterns.ParallelLoad.property.subpartitions"></a>

```typescript
public readonly subpartitions: string[];
```

- *Type:* string[]

---

### Postgres2S3Props <a name="Postgres2S3Props" id="dms-patterns.Postgres2S3Props"></a>

#### Initializer <a name="Initializer" id="dms-patterns.Postgres2S3Props.Initializer"></a>

```typescript
import { Postgres2S3Props } from 'dms-patterns'

const postgres2S3Props: Postgres2S3Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.Postgres2S3Props.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.postgresEndpointSettings">postgresEndpointSettings</a></code> | <code><a href="#dms-patterns.PostgreSqlSettings">PostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.replicationConfigIdentifier">replicationConfigIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.tableMappings">tableMappings</a></code> | <code><a href="#dms-patterns.TableMappings">TableMappings</a></code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.computeConfig">computeConfig</a></code> | <code>aws-cdk-lib.aws_dms.CfnReplicationConfig.ComputeConfigProperty</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.replicationSettings">replicationSettings</a></code> | <code>any</code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.s3targetEndpointSettings">s3targetEndpointSettings</a></code> | <code><a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a></code> | *No description.* |
| <code><a href="#dms-patterns.Postgres2S3Props.property.taskSettings">taskSettings</a></code> | <code><a href="#dms-patterns.TaskSettings">TaskSettings</a></code> | *No description.* |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="dms-patterns.Postgres2S3Props.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="dms-patterns.Postgres2S3Props.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `postgresEndpointSettings`<sup>Required</sup> <a name="postgresEndpointSettings" id="dms-patterns.Postgres2S3Props.property.postgresEndpointSettings"></a>

```typescript
public readonly postgresEndpointSettings: PostgreSqlSettings;
```

- *Type:* <a href="#dms-patterns.PostgreSqlSettings">PostgreSqlSettings</a>

---

##### `replicationConfigIdentifier`<sup>Required</sup> <a name="replicationConfigIdentifier" id="dms-patterns.Postgres2S3Props.property.replicationConfigIdentifier"></a>

```typescript
public readonly replicationConfigIdentifier: string;
```

- *Type:* string

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="dms-patterns.Postgres2S3Props.property.tableMappings"></a>

```typescript
public readonly tableMappings: TableMappings;
```

- *Type:* <a href="#dms-patterns.TableMappings">TableMappings</a>

---

##### `computeConfig`<sup>Optional</sup> <a name="computeConfig" id="dms-patterns.Postgres2S3Props.property.computeConfig"></a>

```typescript
public readonly computeConfig: ComputeConfigProperty;
```

- *Type:* aws-cdk-lib.aws_dms.CfnReplicationConfig.ComputeConfigProperty

---

##### `replicationSettings`<sup>Optional</sup> <a name="replicationSettings" id="dms-patterns.Postgres2S3Props.property.replicationSettings"></a>

```typescript
public readonly replicationSettings: any;
```

- *Type:* any

---

##### `s3targetEndpointSettings`<sup>Optional</sup> <a name="s3targetEndpointSettings" id="dms-patterns.Postgres2S3Props.property.s3targetEndpointSettings"></a>

```typescript
public readonly s3targetEndpointSettings: S3TargetEndpointSettings;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a>

---

##### `taskSettings`<sup>Optional</sup> <a name="taskSettings" id="dms-patterns.Postgres2S3Props.property.taskSettings"></a>

```typescript
public readonly taskSettings: TaskSettings;
```

- *Type:* <a href="#dms-patterns.TaskSettings">TaskSettings</a>

---

### PostgreSqlSettings <a name="PostgreSqlSettings" id="dms-patterns.PostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="dms-patterns.PostgreSqlSettings.Initializer"></a>

```typescript
import { PostgreSqlSettings } from 'dms-patterns'

const postgreSqlSettings: PostgreSqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Amazon Redshift endpoint connection details. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.captureDdls">captureDdls</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>string</code> | The schema in which the operational DDL database artifacts are created. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.executeTimeout">executeTimeout</a></code> | <code>number</code> | Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | When set to `true` , this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize` . |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>number</code> | Sets the WAL heartbeat frequency (in minutes). |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.heartbeatSchema">heartbeatSchema</a></code> | <code>string</code> | Sets the schema in which the heartbeat artifacts are created. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | When true, lets PostgreSQL migrate the boolean type as boolean. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the plugin to use to create a replication slot. |
| <code><a href="#dms-patterns.PostgreSqlSettings.property.slotName">slotName</a></code> | <code>string</code> | Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance. |

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="dms-patterns.PostgreSqlSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Amazon Redshift endpoint connection details.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-secretsmanagersecretid](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-secretsmanagersecretid)

---

##### `captureDdls`<sup>Optional</sup> <a name="captureDdls" id="dms-patterns.PostgreSqlSettings.property.captureDdls"></a>

```typescript
public readonly captureDdls: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.

You can later remove these artifacts.

If this value is set to `N` , you don't have to create tables or triggers on the source database.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-captureddls](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-captureddls)

---

##### `ddlArtifactsSchema`<sup>Optional</sup> <a name="ddlArtifactsSchema" id="dms-patterns.PostgreSqlSettings.property.ddlArtifactsSchema"></a>

```typescript
public readonly ddlArtifactsSchema: string;
```

- *Type:* string

The schema in which the operational DDL database artifacts are created.

Example: `ddlArtifactsSchema=xyzddlschema;`

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-ddlartifactsschema](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-ddlartifactsschema)

---

##### `executeTimeout`<sup>Optional</sup> <a name="executeTimeout" id="dms-patterns.PostgreSqlSettings.property.executeTimeout"></a>

```typescript
public readonly executeTimeout: number;
```

- *Type:* number

Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.

Example: `executeTimeout=100;`

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-executetimeout](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-executetimeout)

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="dms-patterns.PostgreSqlSettings.property.failTasksOnLobTruncation"></a>

```typescript
public readonly failTasksOnLobTruncation: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

When set to `true` , this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize` .

If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-failtasksonlobtruncation](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-failtasksonlobtruncation)

---

##### `heartbeatFrequency`<sup>Optional</sup> <a name="heartbeatFrequency" id="dms-patterns.PostgreSqlSettings.property.heartbeatFrequency"></a>

```typescript
public readonly heartbeatFrequency: number;
```

- *Type:* number

Sets the WAL heartbeat frequency (in minutes).

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatfrequency](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatfrequency)

---

##### `heartbeatSchema`<sup>Optional</sup> <a name="heartbeatSchema" id="dms-patterns.PostgreSqlSettings.property.heartbeatSchema"></a>

```typescript
public readonly heartbeatSchema: string;
```

- *Type:* string

Sets the schema in which the heartbeat artifacts are created.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatschema](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatschema)

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="dms-patterns.PostgreSqlSettings.property.mapBooleanAsBoolean"></a>

```typescript
public readonly mapBooleanAsBoolean: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

When true, lets PostgreSQL migrate the boolean type as boolean.

By default, PostgreSQL migrates booleans as `varchar(5)` . You must set this setting on both the source and target endpoints for it to take effect.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-mapbooleanasboolean](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-mapbooleanasboolean)

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="dms-patterns.PostgreSqlSettings.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the plugin to use to create a replication slot.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-pluginname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-pluginname)

---

##### `slotName`<sup>Optional</sup> <a name="slotName" id="dms-patterns.PostgreSqlSettings.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.

When used with the `CdcStartPosition` request parameter for the AWS DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of `CdcStartPosition` . If the specified slot doesn't exist or the task doesn't have a valid `CdcStartPosition` setting, DMS raises an error.

For more information about setting the `CdcStartPosition` request parameter, see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native) in the *AWS Database Migration Service User Guide* . For more information about using `CdcStartPosition` , see [CreateReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html) , [StartReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) , and [ModifyReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-slotname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-slotname)

---

### PostgresSourceProps <a name="PostgresSourceProps" id="dms-patterns.PostgresSourceProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.PostgresSourceProps.Initializer"></a>

```typescript
import { PostgresSourceProps } from 'dms-patterns'

const postgresSourceProps: PostgresSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.PostgresSourceProps.property.databaseName">databaseName</a></code> | <code>string</code> | The database name on the MongoDB source endpoint. |
| <code><a href="#dms-patterns.PostgresSourceProps.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#dms-patterns.PostgresSourceProps.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.PostgresSourceProps.property.postgresSourceEndpointSettings">postgresSourceEndpointSettings</a></code> | <code><a href="#dms-patterns.PostgreSqlSettings">PostgreSqlSettings</a></code> | The settings for the source postgres endpoint. |
| <code><a href="#dms-patterns.PostgresSourceProps.property.port">port</a></code> | <code>number</code> | The port value for the source endpoint. |
| <code><a href="#dms-patterns.PostgresSourceProps.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` . |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="dms-patterns.PostgresSourceProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name on the MongoDB source endpoint.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename)

---

##### `endpointIdentifier`<sup>Required</sup> <a name="endpointIdentifier" id="dms-patterns.PostgresSourceProps.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier)

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.PostgresSourceProps.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `postgresSourceEndpointSettings`<sup>Required</sup> <a name="postgresSourceEndpointSettings" id="dms-patterns.PostgresSourceProps.property.postgresSourceEndpointSettings"></a>

```typescript
public readonly postgresSourceEndpointSettings: PostgreSqlSettings;
```

- *Type:* <a href="#dms-patterns.PostgreSqlSettings">PostgreSqlSettings</a>

The settings for the source postgres endpoint.

---

##### `port`<sup>Optional</sup> <a name="port" id="dms-patterns.PostgresSourceProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port value for the source endpoint.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-port](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-port)

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="dms-patterns.PostgresSourceProps.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` .

> When `engine_name` is set to S3, the only allowed value is `none` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode)

---

### PrimaryKeyDefinition <a name="PrimaryKeyDefinition" id="dms-patterns.PrimaryKeyDefinition"></a>

#### Initializer <a name="Initializer" id="dms-patterns.PrimaryKeyDefinition.Initializer"></a>

```typescript
import { PrimaryKeyDefinition } from 'dms-patterns'

const primaryKeyDefinition: PrimaryKeyDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.PrimaryKeyDefinition.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dms-patterns.PrimaryKeyDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.PrimaryKeyDefinition.property.origin">origin</a></code> | <code>string</code> | *No description.* |

---

##### `columns`<sup>Required</sup> <a name="columns" id="dms-patterns.PrimaryKeyDefinition.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="dms-patterns.PrimaryKeyDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `origin`<sup>Optional</sup> <a name="origin" id="dms-patterns.PrimaryKeyDefinition.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

### RuleProps <a name="RuleProps" id="dms-patterns.RuleProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.RuleProps.Initializer"></a>

```typescript
import { RuleProps } from 'dms-patterns'

const ruleProps: RuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.RuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.RuleProps.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.RuleProps.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.RuleProps.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.RuleProps.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.RuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.RuleProps.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.RuleProps.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.RuleProps.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.RuleProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

### S32s3Props <a name="S32s3Props" id="dms-patterns.S32s3Props"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S32s3Props.Initializer"></a>

```typescript
import { S32s3Props } from 'dms-patterns'

const s32s3Props: S32s3Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S32s3Props.property.sourceBucketArn">sourceBucketArn</a></code> | <code>string</code> | The arn of the S3 bucket to be used as source. |
| <code><a href="#dms-patterns.S32s3Props.property.tableMappings">tableMappings</a></code> | <code><a href="#dms-patterns.TableMappings">TableMappings</a></code> | The table mappings to be used for the replication. |
| <code><a href="#dms-patterns.S32s3Props.property.targetBucketArn">targetBucketArn</a></code> | <code>string</code> | The arn of the S3 bucket to be used as target. |
| <code><a href="#dms-patterns.S32s3Props.property.sourceEndpointSettings">sourceEndpointSettings</a></code> | <code><a href="#dms-patterns.S3SourceEndpointSettings">S3SourceEndpointSettings</a></code> | The settings for the source s3 endpoint. |
| <code><a href="#dms-patterns.S32s3Props.property.targetEndpointSettings">targetEndpointSettings</a></code> | <code><a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a></code> | The settings for the source s3 endpoint. |
| <code><a href="#dms-patterns.S32s3Props.property.taskSettings">taskSettings</a></code> | <code><a href="#dms-patterns.TaskSettings">TaskSettings</a></code> | Optional JSON settings for AWS DMS Serverless replications. |

---

##### `sourceBucketArn`<sup>Required</sup> <a name="sourceBucketArn" id="dms-patterns.S32s3Props.property.sourceBucketArn"></a>

```typescript
public readonly sourceBucketArn: string;
```

- *Type:* string

The arn of the S3 bucket to be used as source.

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="dms-patterns.S32s3Props.property.tableMappings"></a>

```typescript
public readonly tableMappings: TableMappings;
```

- *Type:* <a href="#dms-patterns.TableMappings">TableMappings</a>

The table mappings to be used for the replication.

---

##### `targetBucketArn`<sup>Required</sup> <a name="targetBucketArn" id="dms-patterns.S32s3Props.property.targetBucketArn"></a>

```typescript
public readonly targetBucketArn: string;
```

- *Type:* string

The arn of the S3 bucket to be used as target.

---

##### `sourceEndpointSettings`<sup>Optional</sup> <a name="sourceEndpointSettings" id="dms-patterns.S32s3Props.property.sourceEndpointSettings"></a>

```typescript
public readonly sourceEndpointSettings: S3SourceEndpointSettings;
```

- *Type:* <a href="#dms-patterns.S3SourceEndpointSettings">S3SourceEndpointSettings</a>

The settings for the source s3 endpoint.

---

##### `targetEndpointSettings`<sup>Optional</sup> <a name="targetEndpointSettings" id="dms-patterns.S32s3Props.property.targetEndpointSettings"></a>

```typescript
public readonly targetEndpointSettings: S3TargetEndpointSettings;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a>

The settings for the source s3 endpoint.

---

##### `taskSettings`<sup>Optional</sup> <a name="taskSettings" id="dms-patterns.S32s3Props.property.taskSettings"></a>

```typescript
public readonly taskSettings: TaskSettings;
```

- *Type:* <a href="#dms-patterns.TaskSettings">TaskSettings</a>

Optional JSON settings for AWS DMS Serverless replications.

---

### S3EndpointBaseProps <a name="S3EndpointBaseProps" id="dms-patterns.S3EndpointBaseProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S3EndpointBaseProps.Initializer"></a>

```typescript
import { S3EndpointBaseProps } from 'dms-patterns'

const s3EndpointBaseProps: S3EndpointBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3EndpointBaseProps.property.bucketArn">bucketArn</a></code> | <code>string</code> | The arn of the S3 bucket. |
| <code><a href="#dms-patterns.S3EndpointBaseProps.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. |
| <code><a href="#dms-patterns.S3EndpointBaseProps.property.s3Settings">s3Settings</a></code> | <code>aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty</code> | *No description.* |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="dms-patterns.S3EndpointBaseProps.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The arn of the S3 bucket.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="dms-patterns.S3EndpointBaseProps.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="dms-patterns.S3EndpointBaseProps.property.s3Settings"></a>

```typescript
public readonly s3Settings: S3SettingsProperty;
```

- *Type:* aws-cdk-lib.aws_dms.CfnEndpoint.S3SettingsProperty

---

### S3SourceEndpointProps <a name="S3SourceEndpointProps" id="dms-patterns.S3SourceEndpointProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S3SourceEndpointProps.Initializer"></a>

```typescript
import { S3SourceEndpointProps } from 'dms-patterns'

const s3SourceEndpointProps: S3SourceEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpointProps.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S3SourceEndpointProps.property.s3SourceEndpointSettings">s3SourceEndpointSettings</a></code> | <code><a href="#dms-patterns.S3SourceEndpointSettings">S3SourceEndpointSettings</a></code> | *No description.* |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="dms-patterns.S3SourceEndpointProps.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `s3SourceEndpointSettings`<sup>Optional</sup> <a name="s3SourceEndpointSettings" id="dms-patterns.S3SourceEndpointProps.property.s3SourceEndpointSettings"></a>

```typescript
public readonly s3SourceEndpointSettings: S3SourceEndpointSettings;
```

- *Type:* <a href="#dms-patterns.S3SourceEndpointSettings">S3SourceEndpointSettings</a>

---

### S3SourceEndpointSettings <a name="S3SourceEndpointSettings" id="dms-patterns.S3SourceEndpointSettings"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S3SourceEndpointSettings.Initializer"></a>

```typescript
import { S3SourceEndpointSettings } from 'dms-patterns'

const s3SourceEndpointSettings: S3SourceEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | An optional parameter to set a folder name in the S3 bucket. |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.cdcPath">cdcPath</a></code> | <code>string</code> | Specifies the folder path of CDC files. |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | An optional parameter that specifies how AWS DMS treats null values. |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | The delimiter used to separate rows in the .csv file for both source and target. |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature. |
| <code><a href="#dms-patterns.S3SourceEndpointSettings.property.rfc4180">rfc4180</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark. |

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="dms-patterns.S3SourceEndpointSettings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

An optional parameter to set a folder name in the S3 bucket.

If provided, tables are created in the path `*bucketFolder* / *schema_name* / *table_name* /` . If this parameter isn't specified, the path used is `*schema_name* / *table_name* /` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder)

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="dms-patterns.S3SourceEndpointSettings.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

Specifies the folder path of CDC files.

For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `CdcPath` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set [`PreserveTransactions`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions) to `true` , AWS DMS verifies that you have set this parameter to a folder path on your S3 target where AWS DMS can save the transaction order for the CDC load. AWS DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by [`BucketFolder`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder) and [`BucketName`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName) .

For example, if you specify `CdcPath` as `MyChangedData` , and you specify `BucketName` as `MyTargetBucket` but do not specify `BucketFolder` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyChangedData` .

If you specify the same `CdcPath` , and you specify `BucketName` as `MyTargetBucket` and `BucketFolder` as `MyTargetData` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyTargetData/MyChangedData` .

For more information on CDC including transaction order on an S3 target, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .

> This setting is supported in AWS DMS versions 3.4.2 and later.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcpath](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcpath)

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="dms-patterns.S3SourceEndpointSettings.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvdelimiter](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvdelimiter)

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="dms-patterns.S3SourceEndpointSettings.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

An optional parameter that specifies how AWS DMS treats null values.

While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), AWS DMS treats the empty string as the null value instead of `NULL` .

The default value is `NULL` . Valid values include any valid string.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue)

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="dms-patterns.S3SourceEndpointSettings.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

The delimiter used to separate rows in the .csv file for both source and target.

The default is a carriage return ( `\n` ).

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter)

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="dms-patterns.S3SourceEndpointSettings.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.

The default is 0.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-ignoreheaderrows](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-ignoreheaderrows)

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="dms-patterns.S3SourceEndpointSettings.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark.

This formatting complies with RFC 4180. When this value is set to `false` or `n` , string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.

For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, AWS DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.

The default value is `true` . Valid values include `true` , `false` , `y` , and `n` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180)

---

### S3TargetEndpointProps <a name="S3TargetEndpointProps" id="dms-patterns.S3TargetEndpointProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S3TargetEndpointProps.Initializer"></a>

```typescript
import { S3TargetEndpointProps } from 'dms-patterns'

const s3TargetEndpointProps: S3TargetEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpointProps.property.bucketArn">bucketArn</a></code> | <code>string</code> | The arn of the target S3 bucket. |
| <code><a href="#dms-patterns.S3TargetEndpointProps.property.s3TargetEndpointSettings">s3TargetEndpointSettings</a></code> | <code><a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a></code> | The settings for the target s3 endpoint. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="dms-patterns.S3TargetEndpointProps.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The arn of the target S3 bucket.

---

##### `s3TargetEndpointSettings`<sup>Optional</sup> <a name="s3TargetEndpointSettings" id="dms-patterns.S3TargetEndpointProps.property.s3TargetEndpointSettings"></a>

```typescript
public readonly s3TargetEndpointSettings: S3TargetEndpointSettings;
```

- *Type:* <a href="#dms-patterns.S3TargetEndpointSettings">S3TargetEndpointSettings</a>

The settings for the target s3 endpoint.

---

### S3TargetEndpointSettings <a name="S3TargetEndpointSettings" id="dms-patterns.S3TargetEndpointSettings"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S3TargetEndpointSettings.Initializer"></a>

```typescript
import { S3TargetEndpointSettings } from 'dms-patterns'

const s3TargetEndpointSettings: S3TargetEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.addColumnName">addColumnName</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | An optional parameter that, when set to `true` or `y` , you can use to add column name information to the .csv output file. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | An optional parameter to set a folder name in the S3 bucket. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 Developer Guide* . |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is `false` , but when `CdcInsertsAndUpdates` is set to `true` or `y` , only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the `false` setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.cdcPath">cdcPath</a></code> | <code>string</code> | Specifies the folder path of CDC files. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.compressionType">compressionType</a></code> | <code>string</code> | An optional parameter. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | An optional parameter that specifies how AWS DMS treats null values. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | The delimiter used to separate rows in the .csv file for both source and target. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.dataFormat">dataFormat</a></code> | <code>string</code> | The format of the data that you want to use for output. You can choose one of the following:. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | The size of one data page in bytes. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | The maximum size of an encoded dictionary page of a column. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | A value that enables statistics for Parquet pages and row groups. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.encodingType">encodingType</a></code> | <code>string</code> | The type of encoding that you're using:. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | A value that specifies the precision of any `TIMESTAMP` column values that are written to an Amazon S3 object file in .parquet format. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | The version of the Apache Parquet format that you want to use: `parquet_1_0` (the default) or `parquet_2_0` . |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | If this setting is set to `true` , AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by [`CdcPath`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath) . For more information, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) . |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.rfc4180">rfc4180</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | The number of rows in a row group. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | The AWS KMS key ID. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target. |
| <code><a href="#dms-patterns.S3TargetEndpointSettings.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. |

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="dms-patterns.S3TargetEndpointSettings.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

An optional parameter that, when set to `true` or `y` , you can use to add column name information to the .csv output file.

The default value is `false` . Valid values are `true` , `false` , `y` , and `n` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-addcolumnname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-addcolumnname)

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="dms-patterns.S3TargetEndpointSettings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

An optional parameter to set a folder name in the S3 bucket.

If provided, tables are created in the path `*bucketFolder* / *schema_name* / *table_name* /` . If this parameter isn't specified, the path used is `*schema_name* / *table_name* /` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder)

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="dms-patterns.S3TargetEndpointSettings.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 Developer Guide* .

The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cannedaclforobjects](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cannedaclforobjects)

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="dms-patterns.S3TargetEndpointSettings.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is `false` , but when `CdcInsertsAndUpdates` is set to `true` or `y` , only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.

For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the value of the `IncludeOpForFullLoad` parameter. If `IncludeOpForFullLoad` is set to `true` , the first field of every CDC record is set to either `I` or `U` to indicate INSERT and UPDATE operations at the source. But if `IncludeOpForFullLoad` is set to `false` , CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .

> AWS DMS supports the use of the `CdcInsertsAndUpdates` parameter in versions 3.3.1 and later.
>
> `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsandupdates](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsandupdates)

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="dms-patterns.S3TargetEndpointSettings.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the `false` setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.

If `CdcInsertsOnly` is set to `true` or `y` , only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of `IncludeOpForFullLoad` . If `IncludeOpForFullLoad` is set to `true` , the first field of every CDC record is set to I to indicate the INSERT operation at the source. If `IncludeOpForFullLoad` is set to `false` , every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .

> AWS DMS supports the interaction described preceding between the `CdcInsertsOnly` and `IncludeOpForFullLoad` parameters in versions 3.1.4 and later.
>
> `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsonly](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsonly)

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="dms-patterns.S3TargetEndpointSettings.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.

When `CdcMaxBatchInterval` and `CdcMinFileSize` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.

The default value is 60 seconds.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcmaxbatchinterval](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcmaxbatchinterval)

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="dms-patterns.S3TargetEndpointSettings.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.

When `CdcMinFileSize` and `CdcMaxBatchInterval` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.

The default value is 32 MB.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcminfilesize](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcminfilesize)

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="dms-patterns.S3TargetEndpointSettings.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

Specifies the folder path of CDC files.

For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `CdcPath` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set [`PreserveTransactions`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions) to `true` , AWS DMS verifies that you have set this parameter to a folder path on your S3 target where AWS DMS can save the transaction order for the CDC load. AWS DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by [`BucketFolder`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder) and [`BucketName`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName) .

For example, if you specify `CdcPath` as `MyChangedData` , and you specify `BucketName` as `MyTargetBucket` but do not specify `BucketFolder` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyChangedData` .

If you specify the same `CdcPath` , and you specify `BucketName` as `MyTargetBucket` and `BucketFolder` as `MyTargetData` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyTargetData/MyChangedData` .

For more information on CDC including transaction order on an S3 target, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .

> This setting is supported in AWS DMS versions 3.4.2 and later.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcpath](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcpath)

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="dms-patterns.S3TargetEndpointSettings.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

An optional parameter.

When set to GZIP it enables the service to compress the target files. To allow the service to write the target files uncompressed, either set this parameter to NONE (the default) or don't specify the parameter at all. This parameter applies to both .csv and .parquet file formats.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-compressiontype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-compressiontype)

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="dms-patterns.S3TargetEndpointSettings.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvdelimiter](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvdelimiter)

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="dms-patterns.S3TargetEndpointSettings.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

An optional parameter that specifies how AWS DMS treats null values.

While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), AWS DMS treats the empty string as the null value instead of `NULL` .

The default value is `NULL` . Valid values include any valid string.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue)

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="dms-patterns.S3TargetEndpointSettings.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

The delimiter used to separate rows in the .csv file for both source and target.

The default is a carriage return ( `\n` ).

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter)

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="dms-patterns.S3TargetEndpointSettings.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

The format of the data that you want to use for output. You can choose one of the following:.

`csv` : This is a row-based file format with comma-separated values (.csv).
- `parquet` : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dataformat](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dataformat)

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="dms-patterns.S3TargetEndpointSettings.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

The size of one data page in bytes.

This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datapagesize](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datapagesize)

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="dms-patterns.S3TargetEndpointSettings.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

The maximum size of an encoded dictionary page of a column.

If the dictionary page exceeds this, this column is stored using an encoding type of `PLAIN` . This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to `PLAIN` encoding. This size is used for .parquet file format only.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dictpagesizelimit](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dictpagesizelimit)

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="dms-patterns.S3TargetEndpointSettings.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

A value that enables statistics for Parquet pages and row groups.

Choose `true` to enable statistics, `false` to disable. Statistics include `NULL` , `DISTINCT` , `MAX` , and `MIN` values. This parameter defaults to `true` . This value is used for .parquet file format only.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-enablestatistics](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-enablestatistics)

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="dms-patterns.S3TargetEndpointSettings.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

The type of encoding that you're using:.

`RLE_DICTIONARY` uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.
- `PLAIN` doesn't use encoding at all. Values are stored as they are.
- `PLAIN_DICTIONARY` builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-encodingtype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-encodingtype)

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="dms-patterns.S3TargetEndpointSettings.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

The type of server-side encryption that you want to use for your data.

This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS` .

> For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3` . But you can’t change the existing value from `SSE_S3` to `SSE_KMS` .

To use `SSE_S3` , create an AWS Identity and Access Management (IAM) role with a policy that allows `"arn:aws:s3:::*"` to use the following actions: `"s3:PutObject", "s3:ListBucket"`

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-encryptionmode](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-encryptionmode)

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="dms-patterns.S3TargetEndpointSettings.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.

> AWS DMS supports the `IncludeOpForFullLoad` parameter in versions 3.1.4 and later.

For full load, records can only be inserted. By default (the `false` setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If `IncludeOpForFullLoad` is set to `true` or `y` , the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.

> This setting works together with the `CdcInsertsOnly` and the `CdcInsertsAndUpdates` parameters for output to .csv files only. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-includeopforfullload](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-includeopforfullload)

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="dms-patterns.S3TargetEndpointSettings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.

The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-maxfilesize](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-maxfilesize)

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="dms-patterns.S3TargetEndpointSettings.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

A value that specifies the precision of any `TIMESTAMP` column values that are written to an Amazon S3 object file in .parquet format.

> AWS DMS supports the `ParquetTimestampInMillisecond` parameter in versions 3.1.4 and later.

When `ParquetTimestampInMillisecond` is set to `true` or `y` , AWS DMS writes all `TIMESTAMP` columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision.

Currently, Amazon Athena and AWS Glue can handle only millisecond precision for `TIMESTAMP` values. Set this parameter to `true` for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or AWS Glue .

> AWS DMS writes any `TIMESTAMP` column values written to an S3 file in .csv format with microsecond precision.
>
> Setting `ParquetTimestampInMillisecond` has no effect on the string format of the timestamp column value that is inserted by setting the `TimestampColumnName` parameter.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquettimestampinmillisecond](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquettimestampinmillisecond)

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="dms-patterns.S3TargetEndpointSettings.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

The version of the Apache Parquet format that you want to use: `parquet_1_0` (the default) or `parquet_2_0` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquetversion](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquetversion)

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="dms-patterns.S3TargetEndpointSettings.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

If this setting is set to `true` , AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by [`CdcPath`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath) . For more information, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .

> This setting is supported in AWS DMS versions 3.4.2 and later.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-preservetransactions](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-preservetransactions)

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="dms-patterns.S3TargetEndpointSettings.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark.

This formatting complies with RFC 4180. When this value is set to `false` or `n` , string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.

For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, AWS DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.

The default value is `true` . Valid values include `true` , `false` , `y` , and `n` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180)

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="dms-patterns.S3TargetEndpointSettings.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

The number of rows in a row group.

A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.

If you choose a value larger than the maximum, `RowGroupLength` is set to the max row group length in bytes (64 * 1024 * 1024).

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rowgrouplength](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rowgrouplength)

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="dms-patterns.S3TargetEndpointSettings.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

The AWS KMS key ID.

If you are using `SSE_KMS` for the `EncryptionMode` , provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-serversideencryptionkmskeyid](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-serversideencryptionkmskeyid)

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="dms-patterns.S3TargetEndpointSettings.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.

> AWS DMS supports the `TimestampColumnName` parameter in versions 3.1.4 and later.

AWS DMS includes an additional `STRING` column in the .csv or .parquet object files of your migrated data when you set `TimestampColumnName` to a nonblank value.

For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.

For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database.

The string format for this timestamp column value is `yyyy-MM-dd HH:mm:ss.SSSSSS` . By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database.

When the `AddColumnName` parameter is set to `true` , DMS also includes a name for the timestamp column that you set with `TimestampColumnName` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-timestampcolumnname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-timestampcolumnname)

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="dms-patterns.S3TargetEndpointSettings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.

For full load, when `useTaskStartTimeForFullLoadTimestamp` is set to `true` , each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.

When `useTaskStartTimeForFullLoadTimestamp` is set to `false` , the full load timestamp in the timestamp column increments with the time data arrives at the target.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-usetaskstarttimeforfullloadtimestamp](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-usetaskstarttimeforfullloadtimestamp)

---

### SelectionObjectLocator <a name="SelectionObjectLocator" id="dms-patterns.SelectionObjectLocator"></a>

#### Initializer <a name="Initializer" id="dms-patterns.SelectionObjectLocator.Initializer"></a>

```typescript
import { SelectionObjectLocator } from 'dms-patterns'

const selectionObjectLocator: SelectionObjectLocator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.SelectionObjectLocator.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionObjectLocator.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionObjectLocator.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="dms-patterns.SelectionObjectLocator.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="dms-patterns.SelectionObjectLocator.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="dms-patterns.SelectionObjectLocator.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

### SelectionRuleProps <a name="SelectionRuleProps" id="dms-patterns.SelectionRuleProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.SelectionRuleProps.Initializer"></a>

```typescript
import { SelectionRuleProps } from 'dms-patterns'

const selectionRuleProps: SelectionRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.SelectionRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRuleProps.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRuleProps.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRuleProps.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRuleProps.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRuleProps.property.objectLocator">objectLocator</a></code> | <code><a href="#dms-patterns.SelectionObjectLocator">SelectionObjectLocator</a></code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.SelectionRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.SelectionRuleProps.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.SelectionRuleProps.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.SelectionRuleProps.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.SelectionRuleProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `objectLocator`<sup>Required</sup> <a name="objectLocator" id="dms-patterns.SelectionRuleProps.property.objectLocator"></a>

```typescript
public readonly objectLocator: SelectionObjectLocator;
```

- *Type:* <a href="#dms-patterns.SelectionObjectLocator">SelectionObjectLocator</a>

---

### Table <a name="Table" id="dms-patterns.Table"></a>

#### Initializer <a name="Initializer" id="dms-patterns.Table.Initializer"></a>

```typescript
import { Table } from 'dms-patterns'

const table: Table = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.Table.property.tableColumns">tableColumns</a></code> | <code><a href="#dms-patterns.TableColumn">TableColumn</a>[]</code> | *No description.* |
| <code><a href="#dms-patterns.Table.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Table.property.tableOwner">tableOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Table.property.tablePath">tablePath</a></code> | <code>string</code> | *No description.* |

---

##### `tableColumns`<sup>Required</sup> <a name="tableColumns" id="dms-patterns.Table.property.tableColumns"></a>

```typescript
public readonly tableColumns: TableColumn[];
```

- *Type:* <a href="#dms-patterns.TableColumn">TableColumn</a>[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="dms-patterns.Table.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tableOwner`<sup>Required</sup> <a name="tableOwner" id="dms-patterns.Table.property.tableOwner"></a>

```typescript
public readonly tableOwner: string;
```

- *Type:* string

---

##### `tablePath`<sup>Required</sup> <a name="tablePath" id="dms-patterns.Table.property.tablePath"></a>

```typescript
public readonly tablePath: string;
```

- *Type:* string

---

### TableColumn <a name="TableColumn" id="dms-patterns.TableColumn"></a>

#### Initializer <a name="Initializer" id="dms-patterns.TableColumn.Initializer"></a>

```typescript
import { TableColumn } from 'dms-patterns'

const tableColumn: TableColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableColumn.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnType">columnType</a></code> | <code><a href="#dms-patterns.S3DataType">S3DataType</a></code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnDateFormat">columnDateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnIsPk">columnIsPk</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnLength">columnLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnNullable">columnNullable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnPrecision">columnPrecision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.TableColumn.property.columnScale">columnScale</a></code> | <code>number</code> | *No description.* |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="dms-patterns.TableColumn.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="dms-patterns.TableColumn.property.columnType"></a>

```typescript
public readonly columnType: S3DataType;
```

- *Type:* <a href="#dms-patterns.S3DataType">S3DataType</a>

---

##### `columnDateFormat`<sup>Optional</sup> <a name="columnDateFormat" id="dms-patterns.TableColumn.property.columnDateFormat"></a>

```typescript
public readonly columnDateFormat: string;
```

- *Type:* string

---

##### `columnIsPk`<sup>Optional</sup> <a name="columnIsPk" id="dms-patterns.TableColumn.property.columnIsPk"></a>

```typescript
public readonly columnIsPk: boolean;
```

- *Type:* boolean

---

##### `columnLength`<sup>Optional</sup> <a name="columnLength" id="dms-patterns.TableColumn.property.columnLength"></a>

```typescript
public readonly columnLength: number;
```

- *Type:* number

---

##### `columnNullable`<sup>Optional</sup> <a name="columnNullable" id="dms-patterns.TableColumn.property.columnNullable"></a>

```typescript
public readonly columnNullable: boolean;
```

- *Type:* boolean

---

##### `columnPrecision`<sup>Optional</sup> <a name="columnPrecision" id="dms-patterns.TableColumn.property.columnPrecision"></a>

```typescript
public readonly columnPrecision: number;
```

- *Type:* number

---

##### `columnScale`<sup>Optional</sup> <a name="columnScale" id="dms-patterns.TableColumn.property.columnScale"></a>

```typescript
public readonly columnScale: number;
```

- *Type:* number

---

### TableSettingsObjectLocator <a name="TableSettingsObjectLocator" id="dms-patterns.TableSettingsObjectLocator"></a>

#### Initializer <a name="Initializer" id="dms-patterns.TableSettingsObjectLocator.Initializer"></a>

```typescript
import { TableSettingsObjectLocator } from 'dms-patterns'

const tableSettingsObjectLocator: TableSettingsObjectLocator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableSettingsObjectLocator.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsObjectLocator.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="dms-patterns.TableSettingsObjectLocator.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="dms-patterns.TableSettingsObjectLocator.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

### TableSettingsProps <a name="TableSettingsProps" id="dms-patterns.TableSettingsProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.TableSettingsProps.Initializer"></a>

```typescript
import { TableSettingsProps } from 'dms-patterns'

const tableSettingsProps: TableSettingsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableSettingsProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.objectLocator">objectLocator</a></code> | <code><a href="#dms-patterns.TableSettingsObjectLocator">TableSettingsObjectLocator</a></code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.lobSettings">lobSettings</a></code> | <code><a href="#dms-patterns.LobSettings">LobSettings</a></code> | *No description.* |
| <code><a href="#dms-patterns.TableSettingsProps.property.parallelLoad">parallelLoad</a></code> | <code><a href="#dms-patterns.ParallelLoad">ParallelLoad</a></code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.TableSettingsProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.TableSettingsProps.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.TableSettingsProps.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.TableSettingsProps.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.TableSettingsProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `objectLocator`<sup>Required</sup> <a name="objectLocator" id="dms-patterns.TableSettingsProps.property.objectLocator"></a>

```typescript
public readonly objectLocator: TableSettingsObjectLocator;
```

- *Type:* <a href="#dms-patterns.TableSettingsObjectLocator">TableSettingsObjectLocator</a>

---

##### `lobSettings`<sup>Optional</sup> <a name="lobSettings" id="dms-patterns.TableSettingsProps.property.lobSettings"></a>

```typescript
public readonly lobSettings: LobSettings;
```

- *Type:* <a href="#dms-patterns.LobSettings">LobSettings</a>

---

##### `parallelLoad`<sup>Optional</sup> <a name="parallelLoad" id="dms-patterns.TableSettingsProps.property.parallelLoad"></a>

```typescript
public readonly parallelLoad: ParallelLoad;
```

- *Type:* <a href="#dms-patterns.ParallelLoad">ParallelLoad</a>

---

### TransformationObjectLocator <a name="TransformationObjectLocator" id="dms-patterns.TransformationObjectLocator"></a>

#### Initializer <a name="Initializer" id="dms-patterns.TransformationObjectLocator.Initializer"></a>

```typescript
import { TransformationObjectLocator } from 'dms-patterns'

const transformationObjectLocator: TransformationObjectLocator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TransformationObjectLocator.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationObjectLocator.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationObjectLocator.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationObjectLocator.property.dataType">dataType</a></code> | <code><a href="#dms-patterns.DataTypeParams">DataTypeParams</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationObjectLocator.property.indexTablespaceName">indexTablespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationObjectLocator.property.tableTablespaceName">tableTablespaceName</a></code> | <code>string</code> | *No description.* |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="dms-patterns.TransformationObjectLocator.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="dms-patterns.TransformationObjectLocator.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="dms-patterns.TransformationObjectLocator.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="dms-patterns.TransformationObjectLocator.property.dataType"></a>

```typescript
public readonly dataType: DataTypeParams;
```

- *Type:* <a href="#dms-patterns.DataTypeParams">DataTypeParams</a>

---

##### `indexTablespaceName`<sup>Optional</sup> <a name="indexTablespaceName" id="dms-patterns.TransformationObjectLocator.property.indexTablespaceName"></a>

```typescript
public readonly indexTablespaceName: string;
```

- *Type:* string

---

##### `tableTablespaceName`<sup>Optional</sup> <a name="tableTablespaceName" id="dms-patterns.TransformationObjectLocator.property.tableTablespaceName"></a>

```typescript
public readonly tableTablespaceName: string;
```

- *Type:* string

---

### TransformationRuleProps <a name="TransformationRuleProps" id="dms-patterns.TransformationRuleProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.TransformationRuleProps.Initializer"></a>

```typescript
import { TransformationRuleProps } from 'dms-patterns'

const transformationRuleProps: TransformationRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TransformationRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.objectLocator">objectLocator</a></code> | <code><a href="#dms-patterns.TransformationObjectLocator">TransformationObjectLocator</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.ruleTarget">ruleTarget</a></code> | <code><a href="#dms-patterns.TransformationTarget">TransformationTarget</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.beforeImageDef">beforeImageDef</a></code> | <code><a href="#dms-patterns.BeforeImageDefinition">BeforeImageDefinition</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.dataType">dataType</a></code> | <code><a href="#dms-patterns.DataTypeParams">DataTypeParams</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.oldValue">oldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.primaryKeyDef">primaryKeyDef</a></code> | <code><a href="#dms-patterns.PrimaryKeyDefinition">PrimaryKeyDefinition</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRuleProps.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.TransformationRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.TransformationRuleProps.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.TransformationRuleProps.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.TransformationRuleProps.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.TransformationRuleProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `objectLocator`<sup>Required</sup> <a name="objectLocator" id="dms-patterns.TransformationRuleProps.property.objectLocator"></a>

```typescript
public readonly objectLocator: TransformationObjectLocator;
```

- *Type:* <a href="#dms-patterns.TransformationObjectLocator">TransformationObjectLocator</a>

---

##### `ruleTarget`<sup>Required</sup> <a name="ruleTarget" id="dms-patterns.TransformationRuleProps.property.ruleTarget"></a>

```typescript
public readonly ruleTarget: TransformationTarget;
```

- *Type:* <a href="#dms-patterns.TransformationTarget">TransformationTarget</a>

---

##### `beforeImageDef`<sup>Optional</sup> <a name="beforeImageDef" id="dms-patterns.TransformationRuleProps.property.beforeImageDef"></a>

```typescript
public readonly beforeImageDef: BeforeImageDefinition;
```

- *Type:* <a href="#dms-patterns.BeforeImageDefinition">BeforeImageDefinition</a>

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="dms-patterns.TransformationRuleProps.property.dataType"></a>

```typescript
public readonly dataType: DataTypeParams;
```

- *Type:* <a href="#dms-patterns.DataTypeParams">DataTypeParams</a>

---

##### `expression`<sup>Optional</sup> <a name="expression" id="dms-patterns.TransformationRuleProps.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `oldValue`<sup>Optional</sup> <a name="oldValue" id="dms-patterns.TransformationRuleProps.property.oldValue"></a>

```typescript
public readonly oldValue: string;
```

- *Type:* string

---

##### `primaryKeyDef`<sup>Optional</sup> <a name="primaryKeyDef" id="dms-patterns.TransformationRuleProps.property.primaryKeyDef"></a>

```typescript
public readonly primaryKeyDef: PrimaryKeyDefinition;
```

- *Type:* <a href="#dms-patterns.PrimaryKeyDefinition">PrimaryKeyDefinition</a>

---

##### `value`<sup>Optional</sup> <a name="value" id="dms-patterns.TransformationRuleProps.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### Rule <a name="Rule" id="dms-patterns.Rule"></a>

#### Initializers <a name="Initializers" id="dms-patterns.Rule.Initializer"></a>

```typescript
import { Rule } from 'dms-patterns'

new Rule(props: RuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.Rule.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.RuleProps">RuleProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.Rule.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.RuleProps">RuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.Rule.format">format</a></code> | *No description.* |

---

##### `format` <a name="format" id="dms-patterns.Rule.format"></a>

```typescript
public format(): any
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.Rule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Rule.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.Rule.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.Rule.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.Rule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.Rule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.Rule.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.Rule.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.Rule.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.Rule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---


### S3Schema <a name="S3Schema" id="dms-patterns.S3Schema"></a>

#### Initializers <a name="Initializers" id="dms-patterns.S3Schema.Initializer"></a>

```typescript
import { S3Schema } from 'dms-patterns'

new S3Schema(tables?: Table[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3Schema.Initializer.parameter.tables">tables</a></code> | <code><a href="#dms-patterns.Table">Table</a>[]</code> | *No description.* |

---

##### `tables`<sup>Optional</sup> <a name="tables" id="dms-patterns.S3Schema.Initializer.parameter.tables"></a>

- *Type:* <a href="#dms-patterns.Table">Table</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3Schema.addTable">addTable</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3Schema.toJSON">toJSON</a></code> | *No description.* |

---

##### `addTable` <a name="addTable" id="dms-patterns.S3Schema.addTable"></a>

```typescript
public addTable(table: Table): void
```

###### `table`<sup>Required</sup> <a name="table" id="dms-patterns.S3Schema.addTable.parameter.table"></a>

- *Type:* <a href="#dms-patterns.Table">Table</a>

---

##### `toJSON` <a name="toJSON" id="dms-patterns.S3Schema.toJSON"></a>

```typescript
public toJSON(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S3Schema.property.tables">tables</a></code> | <code><a href="#dms-patterns.Table">Table</a>[]</code> | *No description.* |

---

##### `tables`<sup>Required</sup> <a name="tables" id="dms-patterns.S3Schema.property.tables"></a>

```typescript
public readonly tables: Table[];
```

- *Type:* <a href="#dms-patterns.Table">Table</a>[]

---


### SelectionRule <a name="SelectionRule" id="dms-patterns.SelectionRule"></a>

#### Initializers <a name="Initializers" id="dms-patterns.SelectionRule.Initializer"></a>

```typescript
import { SelectionRule } from 'dms-patterns'

new SelectionRule(props: SelectionRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.SelectionRule.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.SelectionRuleProps">SelectionRuleProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.SelectionRule.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.SelectionRuleProps">SelectionRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.SelectionRule.format">format</a></code> | *No description.* |

---

##### `format` <a name="format" id="dms-patterns.SelectionRule.format"></a>

```typescript
public format(): any
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.SelectionRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRule.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRule.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRule.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRule.property.objectLocator">objectLocator</a></code> | <code><a href="#dms-patterns.SelectionObjectLocator">SelectionObjectLocator</a></code> | *No description.* |
| <code><a href="#dms-patterns.SelectionRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.SelectionRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.SelectionRule.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.SelectionRule.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.SelectionRule.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.SelectionRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `objectLocator`<sup>Required</sup> <a name="objectLocator" id="dms-patterns.SelectionRule.property.objectLocator"></a>

```typescript
public readonly objectLocator: SelectionObjectLocator;
```

- *Type:* <a href="#dms-patterns.SelectionObjectLocator">SelectionObjectLocator</a>

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="dms-patterns.SelectionRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---


### TableMappings <a name="TableMappings" id="dms-patterns.TableMappings"></a>

#### Initializers <a name="Initializers" id="dms-patterns.TableMappings.Initializer"></a>

```typescript
import { TableMappings } from 'dms-patterns'

new TableMappings(rules?: Rule[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableMappings.Initializer.parameter.rules">rules</a></code> | <code><a href="#dms-patterns.Rule">Rule</a>[]</code> | *No description.* |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="dms-patterns.TableMappings.Initializer.parameter.rules"></a>

- *Type:* <a href="#dms-patterns.Rule">Rule</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.TableMappings.addRule">addRule</a></code> | *No description.* |
| <code><a href="#dms-patterns.TableMappings.toJSON">toJSON</a></code> | *No description.* |

---

##### `addRule` <a name="addRule" id="dms-patterns.TableMappings.addRule"></a>

```typescript
public addRule(rule: Rule): void
```

###### `rule`<sup>Required</sup> <a name="rule" id="dms-patterns.TableMappings.addRule.parameter.rule"></a>

- *Type:* <a href="#dms-patterns.Rule">Rule</a>

---

##### `toJSON` <a name="toJSON" id="dms-patterns.TableMappings.toJSON"></a>

```typescript
public toJSON(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableMappings.property.rules">rules</a></code> | <code><a href="#dms-patterns.Rule">Rule</a>[]</code> | *No description.* |

---

##### `rules`<sup>Required</sup> <a name="rules" id="dms-patterns.TableMappings.property.rules"></a>

```typescript
public readonly rules: Rule[];
```

- *Type:* <a href="#dms-patterns.Rule">Rule</a>[]

---


### TableSettings <a name="TableSettings" id="dms-patterns.TableSettings"></a>

#### Initializers <a name="Initializers" id="dms-patterns.TableSettings.Initializer"></a>

```typescript
import { TableSettings } from 'dms-patterns'

new TableSettings(props: TableSettingsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableSettings.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.TableSettingsProps">TableSettingsProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.TableSettings.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.TableSettingsProps">TableSettingsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.TableSettings.format">format</a></code> | *No description.* |

---

##### `format` <a name="format" id="dms-patterns.TableSettings.format"></a>

```typescript
public format(): any
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TableSettings.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.objectLocator">objectLocator</a></code> | <code><a href="#dms-patterns.TableSettingsObjectLocator">TableSettingsObjectLocator</a></code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.lobSettings">lobSettings</a></code> | <code><a href="#dms-patterns.LobSettings">LobSettings</a></code> | *No description.* |
| <code><a href="#dms-patterns.TableSettings.property.parallelLoad">parallelLoad</a></code> | <code><a href="#dms-patterns.ParallelLoad">ParallelLoad</a></code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.TableSettings.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.TableSettings.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.TableSettings.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.TableSettings.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.TableSettings.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `objectLocator`<sup>Required</sup> <a name="objectLocator" id="dms-patterns.TableSettings.property.objectLocator"></a>

```typescript
public readonly objectLocator: TableSettingsObjectLocator;
```

- *Type:* <a href="#dms-patterns.TableSettingsObjectLocator">TableSettingsObjectLocator</a>

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="dms-patterns.TableSettings.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `lobSettings`<sup>Optional</sup> <a name="lobSettings" id="dms-patterns.TableSettings.property.lobSettings"></a>

```typescript
public readonly lobSettings: LobSettings;
```

- *Type:* <a href="#dms-patterns.LobSettings">LobSettings</a>

---

##### `parallelLoad`<sup>Optional</sup> <a name="parallelLoad" id="dms-patterns.TableSettings.property.parallelLoad"></a>

```typescript
public readonly parallelLoad: ParallelLoad;
```

- *Type:* <a href="#dms-patterns.ParallelLoad">ParallelLoad</a>

---


### TaskSettings <a name="TaskSettings" id="dms-patterns.TaskSettings"></a>

#### Initializers <a name="Initializers" id="dms-patterns.TaskSettings.Initializer"></a>

```typescript
import { TaskSettings } from 'dms-patterns'

new TaskSettings()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.TaskSettings.toJSON">toJSON</a></code> | *No description.* |

---

##### `toJSON` <a name="toJSON" id="dms-patterns.TaskSettings.toJSON"></a>

```typescript
public toJSON(): string
```




### TransformationRule <a name="TransformationRule" id="dms-patterns.TransformationRule"></a>

#### Initializers <a name="Initializers" id="dms-patterns.TransformationRule.Initializer"></a>

```typescript
import { TransformationRule } from 'dms-patterns'

new TransformationRule(props: TransformationRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TransformationRule.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.TransformationRuleProps">TransformationRuleProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.TransformationRule.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.TransformationRuleProps">TransformationRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.TransformationRule.format">format</a></code> | *No description.* |

---

##### `format` <a name="format" id="dms-patterns.TransformationRule.format"></a>

```typescript
public format(): any
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.TransformationRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.filters">filters</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.loadOrder">loadOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.objectLocator">objectLocator</a></code> | <code><a href="#dms-patterns.TransformationObjectLocator">TransformationObjectLocator</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.ruleTarget">ruleTarget</a></code> | <code><a href="#dms-patterns.TransformationTarget">TransformationTarget</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.beforeImageDef">beforeImageDef</a></code> | <code><a href="#dms-patterns.BeforeImageDefinition">BeforeImageDefinition</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.dataType">dataType</a></code> | <code><a href="#dms-patterns.DataTypeParams">DataTypeParams</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.oldValue">oldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.primaryKeyDef">primaryKeyDef</a></code> | <code><a href="#dms-patterns.PrimaryKeyDefinition">PrimaryKeyDefinition</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationRule.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="dms-patterns.TransformationRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="dms-patterns.TransformationRule.property.filters"></a>

```typescript
public readonly filters: any[];
```

- *Type:* any[]

---

##### `loadOrder`<sup>Optional</sup> <a name="loadOrder" id="dms-patterns.TransformationRule.property.loadOrder"></a>

```typescript
public readonly loadOrder: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="dms-patterns.TransformationRule.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="dms-patterns.TransformationRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `objectLocator`<sup>Required</sup> <a name="objectLocator" id="dms-patterns.TransformationRule.property.objectLocator"></a>

```typescript
public readonly objectLocator: TransformationObjectLocator;
```

- *Type:* <a href="#dms-patterns.TransformationObjectLocator">TransformationObjectLocator</a>

---

##### `ruleTarget`<sup>Required</sup> <a name="ruleTarget" id="dms-patterns.TransformationRule.property.ruleTarget"></a>

```typescript
public readonly ruleTarget: TransformationTarget;
```

- *Type:* <a href="#dms-patterns.TransformationTarget">TransformationTarget</a>

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="dms-patterns.TransformationRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `beforeImageDef`<sup>Optional</sup> <a name="beforeImageDef" id="dms-patterns.TransformationRule.property.beforeImageDef"></a>

```typescript
public readonly beforeImageDef: BeforeImageDefinition;
```

- *Type:* <a href="#dms-patterns.BeforeImageDefinition">BeforeImageDefinition</a>

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="dms-patterns.TransformationRule.property.dataType"></a>

```typescript
public readonly dataType: DataTypeParams;
```

- *Type:* <a href="#dms-patterns.DataTypeParams">DataTypeParams</a>

---

##### `expression`<sup>Optional</sup> <a name="expression" id="dms-patterns.TransformationRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `oldValue`<sup>Optional</sup> <a name="oldValue" id="dms-patterns.TransformationRule.property.oldValue"></a>

```typescript
public readonly oldValue: string;
```

- *Type:* string

---

##### `primaryKeyDef`<sup>Optional</sup> <a name="primaryKeyDef" id="dms-patterns.TransformationRule.property.primaryKeyDef"></a>

```typescript
public readonly primaryKeyDef: PrimaryKeyDefinition;
```

- *Type:* <a href="#dms-patterns.PrimaryKeyDefinition">PrimaryKeyDefinition</a>

---

##### `value`<sup>Optional</sup> <a name="value" id="dms-patterns.TransformationRule.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### CapacityUnits <a name="CapacityUnits" id="dms-patterns.CapacityUnits"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.CapacityUnits._1">_1</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._2">_2</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._4">_4</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._8">_8</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._16">_16</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._32">_32</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._64">_64</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._128">_128</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._192">_192</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._256">_256</a></code> | *No description.* |
| <code><a href="#dms-patterns.CapacityUnits._384">_384</a></code> | *No description.* |

---

##### `_1` <a name="_1" id="dms-patterns.CapacityUnits._1"></a>

---


##### `_2` <a name="_2" id="dms-patterns.CapacityUnits._2"></a>

---


##### `_4` <a name="_4" id="dms-patterns.CapacityUnits._4"></a>

---


##### `_8` <a name="_8" id="dms-patterns.CapacityUnits._8"></a>

---


##### `_16` <a name="_16" id="dms-patterns.CapacityUnits._16"></a>

---


##### `_32` <a name="_32" id="dms-patterns.CapacityUnits._32"></a>

---


##### `_64` <a name="_64" id="dms-patterns.CapacityUnits._64"></a>

---


##### `_128` <a name="_128" id="dms-patterns.CapacityUnits._128"></a>

---


##### `_192` <a name="_192" id="dms-patterns.CapacityUnits._192"></a>

---


##### `_256` <a name="_256" id="dms-patterns.CapacityUnits._256"></a>

---


##### `_384` <a name="_384" id="dms-patterns.CapacityUnits._384"></a>

---


### EndpointEngine <a name="EndpointEngine" id="dms-patterns.EndpointEngine"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.EndpointEngine.MYSQL">MYSQL</a></code> | *No description.* |
| <code><a href="#dms-patterns.EndpointEngine.POSTGRES">POSTGRES</a></code> | *No description.* |
| <code><a href="#dms-patterns.EndpointEngine.S3">S3</a></code> | *No description.* |

---

##### `MYSQL` <a name="MYSQL" id="dms-patterns.EndpointEngine.MYSQL"></a>

---


##### `POSTGRES` <a name="POSTGRES" id="dms-patterns.EndpointEngine.POSTGRES"></a>

---


##### `S3` <a name="S3" id="dms-patterns.EndpointEngine.S3"></a>

---


### EndpointType <a name="EndpointType" id="dms-patterns.EndpointType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.EndpointType.SOURCE">SOURCE</a></code> | *No description.* |
| <code><a href="#dms-patterns.EndpointType.TARGET">TARGET</a></code> | *No description.* |

---

##### `SOURCE` <a name="SOURCE" id="dms-patterns.EndpointType.SOURCE"></a>

---


##### `TARGET` <a name="TARGET" id="dms-patterns.EndpointType.TARGET"></a>

---


### ReplicationTypes <a name="ReplicationTypes" id="dms-patterns.ReplicationTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.ReplicationTypes.FULL_LOAD">FULL_LOAD</a></code> | *No description.* |
| <code><a href="#dms-patterns.ReplicationTypes.CDC">CDC</a></code> | *No description.* |
| <code><a href="#dms-patterns.ReplicationTypes.FULL_LOAD_AND_CDC">FULL_LOAD_AND_CDC</a></code> | *No description.* |

---

##### `FULL_LOAD` <a name="FULL_LOAD" id="dms-patterns.ReplicationTypes.FULL_LOAD"></a>

---


##### `CDC` <a name="CDC" id="dms-patterns.ReplicationTypes.CDC"></a>

---


##### `FULL_LOAD_AND_CDC` <a name="FULL_LOAD_AND_CDC" id="dms-patterns.ReplicationTypes.FULL_LOAD_AND_CDC"></a>

---


### RuleType <a name="RuleType" id="dms-patterns.RuleType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.RuleType.TABLE_SETTINGS">TABLE_SETTINGS</a></code> | *No description.* |

---

##### `TABLE_SETTINGS` <a name="TABLE_SETTINGS" id="dms-patterns.RuleType.TABLE_SETTINGS"></a>

---


### S3DataType <a name="S3DataType" id="dms-patterns.S3DataType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S3DataType.BYTE">BYTE</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.DATE">DATE</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.TIME">TIME</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.DATETIME">DATETIME</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.INT1">INT1</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.INT2">INT2</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.INT4">INT4</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.INT8">INT8</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.NUMERIC">NUMERIC</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.REAL4">REAL4</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.REAL8">REAL8</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.STRING">STRING</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.UINT1">UINT1</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.UINT2">UINT2</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.UINT4">UINT4</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.UINT8">UINT8</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.BLOB">BLOB</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.CLOB">CLOB</a></code> | *No description.* |
| <code><a href="#dms-patterns.S3DataType.BOOLEAN">BOOLEAN</a></code> | *No description.* |

---

##### `BYTE` <a name="BYTE" id="dms-patterns.S3DataType.BYTE"></a>

---


##### `DATE` <a name="DATE" id="dms-patterns.S3DataType.DATE"></a>

---


##### `TIME` <a name="TIME" id="dms-patterns.S3DataType.TIME"></a>

---


##### `DATETIME` <a name="DATETIME" id="dms-patterns.S3DataType.DATETIME"></a>

---


##### `INT1` <a name="INT1" id="dms-patterns.S3DataType.INT1"></a>

---


##### `INT2` <a name="INT2" id="dms-patterns.S3DataType.INT2"></a>

---


##### `INT4` <a name="INT4" id="dms-patterns.S3DataType.INT4"></a>

---


##### `INT8` <a name="INT8" id="dms-patterns.S3DataType.INT8"></a>

---


##### `NUMERIC` <a name="NUMERIC" id="dms-patterns.S3DataType.NUMERIC"></a>

---


##### `REAL4` <a name="REAL4" id="dms-patterns.S3DataType.REAL4"></a>

---


##### `REAL8` <a name="REAL8" id="dms-patterns.S3DataType.REAL8"></a>

---


##### `STRING` <a name="STRING" id="dms-patterns.S3DataType.STRING"></a>

---


##### `UINT1` <a name="UINT1" id="dms-patterns.S3DataType.UINT1"></a>

---


##### `UINT2` <a name="UINT2" id="dms-patterns.S3DataType.UINT2"></a>

---


##### `UINT4` <a name="UINT4" id="dms-patterns.S3DataType.UINT4"></a>

---


##### `UINT8` <a name="UINT8" id="dms-patterns.S3DataType.UINT8"></a>

---


##### `BLOB` <a name="BLOB" id="dms-patterns.S3DataType.BLOB"></a>

---


##### `CLOB` <a name="CLOB" id="dms-patterns.S3DataType.CLOB"></a>

---


##### `BOOLEAN` <a name="BOOLEAN" id="dms-patterns.S3DataType.BOOLEAN"></a>

---


### SelectionAction <a name="SelectionAction" id="dms-patterns.SelectionAction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.SelectionAction.INCLUDE">INCLUDE</a></code> | *No description.* |
| <code><a href="#dms-patterns.SelectionAction.EXCLUDE">EXCLUDE</a></code> | *No description.* |
| <code><a href="#dms-patterns.SelectionAction.EXPLICIT">EXPLICIT</a></code> | *No description.* |

---

##### `INCLUDE` <a name="INCLUDE" id="dms-patterns.SelectionAction.INCLUDE"></a>

---


##### `EXCLUDE` <a name="EXCLUDE" id="dms-patterns.SelectionAction.EXCLUDE"></a>

---


##### `EXPLICIT` <a name="EXPLICIT" id="dms-patterns.SelectionAction.EXPLICIT"></a>

---


### TransformationAction <a name="TransformationAction" id="dms-patterns.TransformationAction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.TransformationAction.ADD_COLUMN">ADD_COLUMN</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.INCLUDE_COLUMN">INCLUDE_COLUMN</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.REMOVE_COLUMN">REMOVE_COLUMN</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.RENAME">RENAME</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.CONVERT_LOWERCASE">CONVERT_LOWERCASE</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.CONVERT_UPPERCASE">CONVERT_UPPERCASE</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.ADD_PREFIX">ADD_PREFIX</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.REMOVE_PREFIX">REMOVE_PREFIX</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.REPLACE_PREFIX">REPLACE_PREFIX</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.ADD_SUFFIX">ADD_SUFFIX</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.REMOVE_SUFFIX">REMOVE_SUFFIX</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.REPLACE_SUFFIX">REPLACE_SUFFIX</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.DEFINE_PRIMARY_KEY">DEFINE_PRIMARY_KEY</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.CHANGE_DATA_TYPE">CHANGE_DATA_TYPE</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationAction.ADD_BEFORE_IMAGE_COLUMNS">ADD_BEFORE_IMAGE_COLUMNS</a></code> | *No description.* |

---

##### `ADD_COLUMN` <a name="ADD_COLUMN" id="dms-patterns.TransformationAction.ADD_COLUMN"></a>

---


##### `INCLUDE_COLUMN` <a name="INCLUDE_COLUMN" id="dms-patterns.TransformationAction.INCLUDE_COLUMN"></a>

---


##### `REMOVE_COLUMN` <a name="REMOVE_COLUMN" id="dms-patterns.TransformationAction.REMOVE_COLUMN"></a>

---


##### `RENAME` <a name="RENAME" id="dms-patterns.TransformationAction.RENAME"></a>

---


##### `CONVERT_LOWERCASE` <a name="CONVERT_LOWERCASE" id="dms-patterns.TransformationAction.CONVERT_LOWERCASE"></a>

---


##### `CONVERT_UPPERCASE` <a name="CONVERT_UPPERCASE" id="dms-patterns.TransformationAction.CONVERT_UPPERCASE"></a>

---


##### `ADD_PREFIX` <a name="ADD_PREFIX" id="dms-patterns.TransformationAction.ADD_PREFIX"></a>

---


##### `REMOVE_PREFIX` <a name="REMOVE_PREFIX" id="dms-patterns.TransformationAction.REMOVE_PREFIX"></a>

---


##### `REPLACE_PREFIX` <a name="REPLACE_PREFIX" id="dms-patterns.TransformationAction.REPLACE_PREFIX"></a>

---


##### `ADD_SUFFIX` <a name="ADD_SUFFIX" id="dms-patterns.TransformationAction.ADD_SUFFIX"></a>

---


##### `REMOVE_SUFFIX` <a name="REMOVE_SUFFIX" id="dms-patterns.TransformationAction.REMOVE_SUFFIX"></a>

---


##### `REPLACE_SUFFIX` <a name="REPLACE_SUFFIX" id="dms-patterns.TransformationAction.REPLACE_SUFFIX"></a>

---


##### `DEFINE_PRIMARY_KEY` <a name="DEFINE_PRIMARY_KEY" id="dms-patterns.TransformationAction.DEFINE_PRIMARY_KEY"></a>

---


##### `CHANGE_DATA_TYPE` <a name="CHANGE_DATA_TYPE" id="dms-patterns.TransformationAction.CHANGE_DATA_TYPE"></a>

---


##### `ADD_BEFORE_IMAGE_COLUMNS` <a name="ADD_BEFORE_IMAGE_COLUMNS" id="dms-patterns.TransformationAction.ADD_BEFORE_IMAGE_COLUMNS"></a>

---


### TransformationTarget <a name="TransformationTarget" id="dms-patterns.TransformationTarget"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.TransformationTarget.SCHEMA">SCHEMA</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationTarget.TABLE">TABLE</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationTarget.COLUMN">COLUMN</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationTarget.TABLE_TABLESPACE">TABLE_TABLESPACE</a></code> | *No description.* |
| <code><a href="#dms-patterns.TransformationTarget.INDEX_TABLESPACE">INDEX_TABLESPACE</a></code> | *No description.* |

---

##### `SCHEMA` <a name="SCHEMA" id="dms-patterns.TransformationTarget.SCHEMA"></a>

---


##### `TABLE` <a name="TABLE" id="dms-patterns.TransformationTarget.TABLE"></a>

---


##### `COLUMN` <a name="COLUMN" id="dms-patterns.TransformationTarget.COLUMN"></a>

---


##### `TABLE_TABLESPACE` <a name="TABLE_TABLESPACE" id="dms-patterns.TransformationTarget.TABLE_TABLESPACE"></a>

---


##### `INDEX_TABLESPACE` <a name="INDEX_TABLESPACE" id="dms-patterns.TransformationTarget.INDEX_TABLESPACE"></a>

---

