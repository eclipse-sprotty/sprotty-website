---
title: 'SModel'
weight: 300
---

The `SModel` (short for `SprottyModel`) is the core data structure of Sprotty. It is a tree of model elements that can be rendered by a View. The root of the model is **always** an instance of `SModelRootImpl` or one of its derived class.

Classes are disambiguated from their corresponding interfaces with the suffix `Impl`.

## Model Elements

### SModelElementImpl

This is the base class for **all** elements of the diagram model. This ensures that all elements in the model have a `type` and an `id`.

*Properties:*

* `type: string`: The type of the element. This is used to determine the corresponding view.
* `id: string`: The unique identifier of the element.
* `features: FeatureSet` - *optional*: A set of features that are supported by the element.
* `cssClasses: string[]` - *optional*: A list of CSS classes that should be applied to the element.

### SParentElementImpl

A parent element may contain children elements, thus the diagram model forms a tree.

*Properties:*

* `children: SChildElementImpl[]`: The children of the element. Defaults to an empty array.

*Inheritance:*

[`SModelElementImpl`](#smodelelementimpl)

### SChildElementImpl

A child element is contained in a parent element. All elements except for the model root are derived from `SChildElementImpl`. Every child element is also a parent element, thus it can contain children elements itself.

*Properties:*

* `parent: SParentElementImpl`: The parent of the element.

*Inheritance:*

 [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

### SModelRootImpl

This is the base class for the root element of the diagram model. It inherits from `SParentElementImpl`, therefore, actual model elements are contained in its `children` property.

*Properties:*

* `canvasBounds: Bounds`: The bounds of the canvas. This is used to determine the size of the diagram. Defaults to `Bounds.EMPTY` (i.e. `{x: 0, y: 0, width: -1, height: -1}`).
* `revision: number`- *optional*: The revision number of the model. This is incremented whenever the model is changed.

*Inheritance:*

 [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

### ModelIndexImpl

An index of all model elements. It is used to optimize the lookup of elements by their `id`.

## Graph Elements

The base architecture of Sprotty does not assume that the visualization is based on nodes and edges. However, since it is a very common use-case, Sprotty provides a set of classes that can be used to build a graph-based diagram.

### SGraphImpl

Root element of the diagram model.

*Properties:*

* `layoutOptions: ModelLayoutOptions` - *optional*: Options for the layout of the diagram.

*Inheritance:*

[`ViewportRootModel`](#viewportrootelement) &rarr; [`SModelRootImpl`](#smodelrootimpl) &rarr; [`SParentElement`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

### SNodeImpl

Model element for **Nodes**, which are the main entity in a graph. A node can be connected to another node via an edge. Such connection can be direct (i.e. the source or target of the edge is the node itself) or indirect (i.e. the source or target of the edge is a child port of the node).

*Properties*:

* `children: SChildElementImpl[]`
* `layout: string` - *optional*
* `selected: boolean`: Indicates if the node is selected. Defaults to `false`.
* `hoverFeedback: boolean`: Indicates if the node should show hover feedback. Defaults to `false`.
* `opacity: number`: The opacity of the node. Defaults to `1`.

*Inheritance:*

[`SConnectableElementImpl`](#sconnectableelementimpl) &rarr; [`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [connectableFeature](#connectablefeature)
* [deletableFeature](#deletablefeature)
* [selectFeature](#selectfeature)
* [boundsFeature](#boundsfeature)
* [moveFeature](#movefeature)
* [layoutContainerFeature](#layoutcontainerfeature)
* [fadeFeature](#fadefeature)
* [hoverFeedbackFeature](#hoverfeedbackfeature)
* [popupFeature](#popupfeature)

### SPortImpl

A port is a connection point for edges. It should **always** be contained in an SNodeImpl.

*Properties:*

* `selected: boolean`: Indicates if the port is selected. Defaults to `false`.
* `hoverFeedback: boolean`: Indicates if the port should show hover feedback. Defaults to `false`.
* `opacity: number`: The opacity of the port. Defaults to `1`.

*Inheritance:*

[`SConnectableElementImpl`](#sconnectableelementimpl) &rarr; [`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [connectableFeature](#connectablefeature)
* [selectFeature](#selectfeature)
* [boundsFeature](#boundsfeature)
* [fadeFeature](#fadefeature)
* [hoverFeedbackFeature](#hoverfeedbackfeature)

### SEdgeImpl

These are the connectors for the diagram model. An edge has a source and a target. Each of which can either be a node or a port. The source and target elements are referenced by their `id` and can be resolved via the `index` stored in the root element.

*Properties;*

* `selected: boolean`: Indicates if the edge is selected. Defaults to `false`.
* `hoverFeedback: boolean`: Indicates if the edge should show hover feedback. Defaults to `false`.
* `opacity: number`: The opacity of the edge. Defaults to `1`.

*Inheritance:*

[`SRoutableElementImpl`](#sroutableelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [editFeature](#editfeature)
* [deletableFeature](#deletablefeature)
* [selectFeature](#selectfeature)
* [fadeFeature](#fadefeature)
* [hoverFeedbackFeature](#hoverfeedbackfeature)

### SLabelImpl

A label can be attached to a node, port, or edge.

*Properties:*

* `text: string`: The text of the label.
* `selected: boolean`: Indicates if the label is selected. Defaults to `false`.
* `alignment: Point`: The alignment of the label. Defaults to `Point.ORIGIN`.
* `opacity: number`: The opacity of the label. Defaults to `1`.
* `edgePlacement: EdgePlacement` - *optional*: The placement of the label on an edge. Defaults to `EdgePlacement.NONE`.

*Inheritance:*

[`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [boundsFeature](#boundsfeature)
* [alignFeature](#alignfeature)
* [layoutableChildFeature](#layoutablechildfeature)
* [edgeLayoutFeature](#edgelayoutfeature)
* [fadeFeature](#fadefeature)

### SCompartmentImpl

A compartment is used to group multiple child elements of a node, such as labels. Usually, a `vbox` of `hbox` layout is used to arrange these children.

*Properties*:

* `layout: string` - *optional*: The layout of the compartment.
* `opacity: number`: The opacity of the compartment. Defaults to `1`.

*Inheritance:*

[`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [boundsFeature](#boundsfeature)
* [layoutContainerFeature](#layoutcontainerfeature)
* [layoutableChildFeature](#layoutablechildfeature)
* [fadeFeature](#fadefeature)

### SGraphIndex

A specialized model index that tracks outgoing and incoming edges.

*Inheritance:*

[`ModelIndexImpl`](#modelindeximpl)

### ViewportRootElement

Model root element that defines a viewport, so it transforms the coordinate system of its children with a scroll and zoom factor.

*Properties:*

* `scroll: Point`: The scroll offset of the viewport. Defaults to `{x: 0, y: 0}`.
* `zoom: number`: The zoom factor of the viewport. Defaults to `1`.
* `position: Point`: The position of the viewport. Defaults to `{x: 0, y: 0}`.
* `size: Dimension`: The size of the viewport. Defaults to `{width: -1, height: -1}`.

*Inheritance:*
[`SModelRootImpl`](#smodelrootimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

### SConnectableElementImpl

A connectable element is on that can have outgoing and incoming edges. It can be the source or target element of an edge. There are two kinds of connectable elements: nodes and ports.

*Properties:*

* `strokeWidth: number`: The stroke width of the element. Defaults to `0`.

*Inheritance:*

[`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

### SShapeElementImpl

Abstract class for elements with a position and size.

*Properties:*

* `position: Point`: The position of the element. Defaults to `{x: 0, y: 0}`.
* `size: Dimension`: The size of the element. Defaults to `{width: -1, height: -1}`.
* `layoutOptions: ModelLayoutOptions` - *optional*: Options for the layout of the element.

*Inheritance:*

[`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

### SRoutableElementImpl

Abstract class for edges.

*Properties:*

* `routerKind: string` - *optional*: The kind of router to use for the edge.
* `routingPoints: Point[]` - *optional*: The routing points of the edge. Defaults to an empty array.
* `sourceId: string`: The id of the source element.
* `targetId: string`: The id of the target element.
* `sourceAnchorCorrection: number` - *optional*: The correction of the source anchor. Defaults to `0`.
* `targetAnchorCorrection: number` - *optional*: The correction of the target anchor. Defaults to `0`.

*Inheritance:*

[`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

## Classes Inheritance

{{< mermaid class="text-center">}}
flowchart TD;
SModelElementImpl
SParentElementImpl
SChildElementImpl
SModelRootImpl
ModelIndexImpl
SGraphImpl
ViewportRootElement
SNodeImpl
SConnectableElementImpl
SShapeElementImpl
SPortImpl
SEdgeImpl
SRoutableElementImpl
SLabelImpl
SCompartmentImpl
SGraphIndex

SParentElementImpl --> SModelElementImpl
SChildElementImpl --> SParentElementImpl
SModelRootImpl --> SParentElementImpl
SGraphImpl --> ViewportRootElement
ViewportRootElement --> SModelRootImpl
SNodeImpl --> SConnectableElementImpl
SConnectableElementImpl --> SShapeElementImpl
SShapeElementImpl --> SChildElementImpl
SPortImpl --> SConnectableElementImpl
SEdgeImpl --> SRoutableElementImpl
SRoutableElementImpl --> SChildElementImpl
SLabelImpl --> SShapeElementImpl
SCompartmentImpl --> SShapeElementImpl
SGraphIndex --> ModelIndexImpl
{{< /mermaid>}}

## Features

Features can be viewed as a set of functionalities that a given element can support. They can enrich the behavior and usability of the diagram model. SModelElements can have default features that will apply to all model elements that are instance of this SModelElement.

Features can be added in a inherited class by setting the `DEFAULT_FEATURES` field. This way, the default features will be enabled for all instances of the class.

Let's have a look at the `SNodeImpl` class and how it implements default features:

```typescript
export class SNodeImpl extends SConnectableElementImpl implements Selectable, Fadeable, Hoverable {
    static readonly DEFAULT_FEATURES = [connectableFeature, deletableFeature, selectFeature, boundsFeature,
        moveFeature, layoutContainerFeature, fadeFeature, hoverFeedbackFeature, popupFeature];
    ...
}
```

It is possible to fine-tune the behavior in the [dependency injection container](../dependency_injection/#the-container) by enabling or disabling features for a given model element type.

```typescript
configureElement('my-node-type', SNodeImpl, RectangularNodeView, {enable: [layoutableChildFeature], disable: [moveFeature]})
```

To ensure that the required additional properties are present on the model element, Sprotty comes with a set of interfaces known as `SModelExtension`.

### alignFeature

Controls the position adjustment of an element. It is given by the `alignment: Point` property of an element.
It applies a `translate` to the svg element.

*Interface:* `Alignable`

```typescript
export interface Alignable extends SModelExtension {
    alignment: Point
}
```

### boundsFeature

Controls if the bounds of an element can be calculated and updated. The element needs a `position` and `size`.

*Interface:* `BoundsAware`

```typescript
export interface BoundsAware extends SModelExtension{
    bounds: Bounds
}
```

### connectableFeature

Controls if an element can be connected to other elements. To be connectable, the element must be an `SRoutableElementImpl` and have a role of source or target.

*Interface:* `Connectable`

```typescript

export interface Connectable extends SModelExtension{
    canConnect(routable: SRoutableElementImpl, role: 'source' | 'target'): boolean
}
```

### creatingOnDragFeature

Controls if an element is created on drag. The element needs to implement a `createAction` method that returns an `Action` that creates the element.

*Interface:* `CreatingOnDrag`

```typescript
export interface CreatingOnDrag extends SModelExtension {
    createAction(id: string): Action
}
```

### decorationFeature

Controls if an element is a decoration.

*Interface*: `Decoration`

```typescript
export interface Decoration extends SModelExtension {}
```

### deletableFeature

Controls if an element can be deleted from the diagram. To be deletable, an element needs to be an `SChildElementImpl`.

*Interface:* `Deletable`

```typescript
export interface Deletable extends SModelExtension {}
```

### edgeLayoutFeature

Controls if an element is layoutable on an edge. The element must be an `SChildElementImpl`, its parent must be an `SRoutableElementImpl`, the element must have the `edgePlacement` property, and must have the `boundsFeature`. This is commonly used for labels that are displayed on an edge.

```typescript
edgePlacement: {
    position: number, // between 0 and 1, from the source (0) to the target (1)
    side: 'bottom' | 'top' | 'left' | 'right' | 'on',
    rotate: boolean
}
```

*Interface:* `EdgeLayoutable`

```typescript
export interface EdgeLayoutable extends SModelExtension {
    edgePlacement: EdgePlacement
}
```

### editFeature

Controls if an edge routing can be edited. The edge must be an `SRoutableElementImpl`.

### editLabelFeature

Controls if a label can be edited. The label must have the `text` property.

*Interface:* `EditableLabel`

```typescript
export interface EditableLabel extends SModelExtension {
    text: string
    readonly isMultiline?: boolean
    readonly editControlDimension?: Dimension
    readonly editControlPositionCorrection?: Point
}
```

### expandFeature

Controls if an element can be expanded. The element must have the property `expanded`.

*Interface:* `Expandable`

```typescript
export interface Expandable extends SModelExtension {
    expanded: boolean
}
```

### exportFeature

Controls if an element can be exported.

### fadeFeature

Controls if an element can change its opacity. The element must have the `opacity` property.

*Interface:* `Fadeable`

```typescript
export interface Fadeable extends SModelExtension {
    opacity: number
}
```

### hoverFeedbackFeature

Controls if the element can show hover feedback. The element must have the `hoverFeedback` property.

*Interface:* `Hoverable`

```typescript
export interface Hoverable extends SModelExtension {
    hoverFeedback: boolean
}
```

### layoutableChildFeature

Controls if an element obeys its parent's layout options. The element must use the `boundsFeature`.

*Interface:* `LayoutableChild`

```typescript
export interface LayoutableChild extends SModelExtension, BoundsAware {
    layoutOptions?: ModelLayoutOptions
}
```

### layoutContainerFeature

Controls if an element can layout its children. The element must have the `layout` property.

*Interface:* `LayoutContainer`

```typescript
export interface LayoutContainer extends LayoutableChild {
    layout: string
}
```

### moveFeature

Controls if an element is moveable. The element must have the `position` property.

*Interface:* `Locateable`

```typescript

export interface Locateable extends SModelExtension {
    position: Point
}
```

### nameFeature

Controls if an element has a name.

*Interface:* `Nameable`

```typescript
export interface Nameable extends SModelExtension {
    name: string
}
```

### openFeature

Controls if an element can be opened.

### popupFeature

Controls if an element display a popup on hover.

### selectFeature

Controls if an element can be selected. When an element is selected, its `selected` property is set to `true`.

*Interface:* `Selectable`

```typescript
export interface Selectable extends SModelExtension {
    selected: boolean
}
```

### viewportFeature

Controls if an element is a viewport. The element must be a `SModelRootImpl` and have the `zoom` and `scroll` properties.

### withEditLabelFeature

Controls if an element has an editable label. The element must have the `editableLabel` property.

*Interface:* `WithEditableLabel`

```typescript
export interface WithEditableLabel extends SModelExtension {
    readonly editableLabel?: EditableLabel & SModelElementImpl;
}
```
