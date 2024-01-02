# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S32Rds <a name="S32Rds" id="dms-patterns.S32Rds"></a>

#### Initializers <a name="Initializers" id="dms-patterns.S32Rds.Initializer"></a>

```typescript
import { S32Rds } from 'dms-patterns'

new S32Rds(scope: Construct, id: string, props: S32RdsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S32Rds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dms-patterns.S32Rds.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dms-patterns.S32Rds.Initializer.parameter.props">props</a></code> | <code><a href="#dms-patterns.S32RdsProps">S32RdsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dms-patterns.S32Rds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dms-patterns.S32Rds.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="dms-patterns.S32Rds.Initializer.parameter.props"></a>

- *Type:* <a href="#dms-patterns.S32RdsProps">S32RdsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S32Rds.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="dms-patterns.S32Rds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dms-patterns.S32Rds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dms-patterns.S32Rds.isConstruct"></a>

```typescript
import { S32Rds } from 'dms-patterns'

S32Rds.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dms-patterns.S32Rds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S32Rds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="dms-patterns.S32Rds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### S32RdsProps <a name="S32RdsProps" id="dms-patterns.S32RdsProps"></a>

#### Initializer <a name="Initializer" id="dms-patterns.S32RdsProps.Initializer"></a>

```typescript
import { S32RdsProps } from 'dms-patterns'

const s32RdsProps: S32RdsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dms-patterns.S32RdsProps.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the S3 bucket to be used as data source. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="dms-patterns.S32RdsProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the S3 bucket to be used as data source.

---



