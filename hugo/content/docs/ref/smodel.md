---
title: 'SModel'
geekdocToc: 1
---
{{< toc >}}
The `SModel` (short for `SprottyModel`) is the core data structure of Sprotty. It is a tree of model elements that can be rendered by a View. The root of the model is **always** an instance of `SModelRootImpl` or one of its derived class.

First, we need to distinguish between two models: the **internal model** and the **external model**.

The **internal model** is used *only* in the *CommandStack* and the *Viewer*. It is a tree of model elements representing the current state of what is visible in the diagram. After a change has been applied via a *Command*. the *CommandStack* sends an updated version of the internal model to the *Viewer* which in turns renders the updated model using the provided View implementations.

The **external model** is used to transfer information between the model source and the Sprotty frontend. The **external model** must be serializable as JSON so that it can be easily transferred via network messages. Changes to the external model are applied through *Actions*, which contain the external model or parts of it. When the model source resides in the backend, the content of the diagram are controlled by a *DiagramServer*, which holds a copy of the external model.

## External Model

The external model is tree of JSON-serializable objects. To facilitate its implementation, Sprotty provides a set of interfaces (in the *sprotty-protocol* package) that can be used to describe the external model. These interfaces have a class counterpart that is used in the internal model. The complete list of interfaces provided by Sprotty can be found [here](https://github.com/eclipse-sprotty/sprotty/blob/master/packages/sprotty-protocol/src/model.ts).

## Internal Model Elements

The internal model is a tree of model elements implemented as classes. To avoid ambiguity with interfaces used in the external model, classes are named with the suffix *Impl*.

## Classes Inheritance

{{< mermaid class="text-center">}}
flowchart BT;
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

### SModelElementImpl

This is the base class for **all** elements of the diagram model. This ensures that all elements in the model have a `type` and an `id`.

*Properties:*

* `type: string`: The type of the element. This value is used in the Sprotty configuration to specify the corresponding view for all elements of this type.
* `id: string`: The globally unique identifier of the element.
* `features: FeatureSet` - *optional*: A set of [features]({{< ref "/docs/ref/features" >}}) that are enabled on the element. The list of features can be further configured in the [dependency injection container]({{< ref "/docs/concepts/extension-points">}}#dependency-injection).
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
* `revision: number`- *optional*: The revision number of the model. This is incremented by Sprotty whenever the model is changed. This is used in the DiagramServer to ensure that the correct version of the model is used.

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

* [connectableFeature](../{{< ref "/docs/ref/features" >}}#connectablefeature)
* [deletableFeature](../{{< ref "/docs/ref/features" >}}#deletablefeature)
* [selectFeature](../{{< ref "/docs/ref/features" >}}#selectfeature)
* [boundsFeature](../{{< ref "/docs/ref/features" >}}#boundsfeature)
* [moveFeature](../{{< ref "/docs/ref/features" >}}#movefeature)
* [layoutContainerFeature](../{{< ref "/docs/ref/features" >}}#layoutcontainerfeature)
* [fadeFeature](../{{< ref "/docs/ref/features" >}}#fadefeature)
* [hoverFeedbackFeature](../{{< ref "/docs/ref/features" >}}#hoverfeedbackfeature)
* [popupFeature](../{{< ref "/docs/ref/features" >}}#popupfeature)

### SPortImpl

A port is a connection point for edges. It should **always** be contained in an SNodeImpl.

*Properties:*

* `selected: boolean`: Indicates if the port is selected. Defaults to `false`.
* `hoverFeedback: boolean`: Indicates if the port should show hover feedback. Defaults to `false`.
* `opacity: number`: The opacity of the port. Defaults to `1`.

*Inheritance:*

[`SConnectableElementImpl`](#sconnectableelementimpl) &rarr; [`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [connectableFeature](../{{< ref "/docs/ref/features" >}}#connectablefeature)
* [selectFeature](../{{< ref "/docs/ref/features" >}}#selectfeature)
* [boundsFeature](../{{< ref "/docs/ref/features" >}}#boundsfeature)
* [fadeFeature](../{{< ref "/docs/ref/features" >}}#fadefeature)
* [hoverFeedbackFeature](../{{< ref "/docs/ref/features" >}}#hoverfeedbackfeature)

### SEdgeImpl

These are the connectors for the diagram model. An edge has a source and a target. Each of which can either be a node or a port. The source and target elements are referenced by their `id` (inherited from `SRoutableElementImpl`) and can be resolved via the `index` stored in the root element.

*Properties;*

* `selected: boolean`: Indicates if the edge is selected. Defaults to `false`.
* `hoverFeedback: boolean`: Indicates if the edge should show hover feedback. Defaults to `false`.
* `opacity: number`: The opacity of the edge. Defaults to `1`.

*Inheritance:*

[`SRoutableElementImpl`](#sroutableelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [editFeature](../{{<ref "/docs/ref/features" >}}#editfeature)
* [deletableFeature](../{{<ref "/docs/ref/features" >}}#deletablefeature)
* [selectFeature](../{{<ref "/docs/ref/features" >}}#selectfeature)
* [fadeFeature](../{{<ref "/docs/ref/features" >}}#fadefeature)
* [hoverFeedbackFeature](../{{<ref "/docs/ref/features" >}}#hoverfeedbackfeature)

### SLabelImpl

A label represents some text to be displayed and attached to a node, compartment, port, or edge.

*Properties:*

* `text: string`: The text of the label.
* `selected: boolean`: Indicates if the label is selected. Defaults to `false`.
* `alignment: Point`: The alignment of the label. Defaults to `Point.ORIGIN`.
* `opacity: number`: The opacity of the label. Defaults to `1`.
* `edgePlacement: EdgePlacement` - *optional*: The placement of the label on an edge. Defaults to `EdgePlacement.NONE`.
  * `rotate: boolean` - true, if the label should be rotated to touch the edge tangentially
  * `side: EdgeSide` - where is the label relative to the line's direction. Possible values are 'bottom', 'top', 'left', 'right', and 'on'.
  * `position: number` - between 0 (source anchor) and 1 (target anchor)
  * `offset: number` - space between label and edge/connected nodes
  * `moveMode: 'edge' | 'free' | 'none'` - *optional* constrains where the label can be moved when move feature is enabled for the respective Label.
     `edge` means the label can be moved along the edge, `free` means the label can be moved freely, `none` means the label cannot moved.
     Defaults to `edge`.

*Inheritance:*

[`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [boundsFeature](../{{< ref "/docs/ref/features" >}}#boundsfeature)
* [alignFeature](../{{< ref "/docs/ref/features" >}}#alignfeature)
* [layoutableChildFeature](../{{< ref "/docs/ref/features" >}}#layoutablechildfeature)
* [edgeLayoutFeature](../{{< ref "/docs/ref/features" >}}#edgelayoutfeature)
* [fadeFeature](../{{< ref "/docs/ref/features" >}}#fadefeature)

### SCompartmentImpl

A compartment is used to group multiple child elements of a node or compartment, such as labels. Usually, a `vbox` or `hbox` layout is used to arrange these children.

*Properties*:

* `layout: string` - *optional*: The layout of the compartment.
* `opacity: number`: The opacity of the compartment. Defaults to `1`.

*Inheritance:*

[`SShapeElementImpl`](#sshapeelementimpl) &rarr; [`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)

*Default features:*

* [boundsFeature](../{{< ref "/docs/ref/features" >}}#boundsfeature)
* [layoutContainerFeature](../{{< ref "/docs/ref/features" >}}#layoutcontainerfeature)
* [layoutableChildFeature](../{{< ref "/docs/ref/features" >}}#layoutablechildfeature)
* [fadeFeature](../{{< ref "/docs/ref/features" >}}#fadefeature)

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

A connectable element is one that can have outgoing and incoming edges. It can be the source or target element of an edge. There are two kinds of connectable elements: SNodes and SPorts.

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

* `routerKind: string` - *optional*: The kind of router to use for the edge. Sprotty provides an implementation of 'polyline', 'manhattan', and 'bezier' routers.
* `routingPoints: Point[]` - *optional*: The routing points of the edge. Defaults to an empty array.
* `sourceId: string`: The id of the source element.
* `targetId: string`: The id of the target element.
* `sourceAnchorCorrection: number` - *optional*: The correction of the source anchor. This can be used to apply an offset to the anchor position of the source element. Defaults to `0`.
* `targetAnchorCorrection: number` - *optional*: The correction of the target anchor. This can be used to apply an offset to the anchor position of the target element. Defaults to `0`.

To offset the anchor point of an edge

*Inheritance:*

[`SChildElementImpl`](#schildelementimpl) &rarr; [`SParentElementImpl`](#sparentelementimpl) &rarr; [`SModelElementImpl`](#smodelelementimpl)
