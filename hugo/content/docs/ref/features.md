---
title: 'Features'
---
{{< toc >}}

Features can be viewed as a set of functionalities that a given element can support. They can enrich the behavior and usability of the diagram model.

SModelElements can have default features that will apply to all model elements that are instance of this SModelElement.Default features are specified in the `DEFAULT_FEATURES` field, which can be overridden in inherited classes. This way, the default features will be enabled for all instances of the class.

Let's have a look at the `SNodeImpl` class and how it implements default features:

```typescript
export class SNodeImpl extends SConnectableElementImpl implements Selectable, Fadeable, Hoverable {
    static readonly DEFAULT_FEATURES = [connectableFeature, deletableFeature, selectFeature, boundsFeature,
        moveFeature, layoutContainerFeature, fadeFeature, hoverFeedbackFeature, popupFeature];
    ...
}
```

It is possible to fine-tune the behavior in the [dependency injection container]({{< ref "/docs/concepts/extension-points">}}#dependency-injection) by enabling or disabling features for a given model element type.

```typescript
configureElement('my-node-type', SNodeImpl, RectangularNodeView, {enable: [layoutableChildFeature], disable: [moveFeature]})
```

To ensure that the required additional properties are present on the model element, Sprotty comes with a set of interfaces to ensure correct implementation in the model element class. These interfaces must extend `SModelExtension`.

## alignFeature

Controls the position adjustment of an element. It is given by the `alignment: Point` property of an element.
It applies a `translate` to the svg element. This translation is applied in addition to the translation that may be applied by the layout engine.

*Interface:* `Alignable`

```typescript
export interface Alignable extends SModelExtension {
    alignment: Point
}
```

## boundsFeature

Controls if the bounds of an element can be calculated and updated. The element needs a `position` and `size`.

*Interface:* `BoundsAware`

```typescript
export interface BoundsAware extends SModelExtension{
    bounds: Bounds
}
```

## connectableFeature

Controls if an element can be connected to other elements. To be connectable, the element must be an `SRoutableElementImpl` and have a role of source or target.

*Interface:* `Connectable`

```typescript

export interface Connectable extends SModelExtension{
    canConnect(routable: SRoutableElementImpl, role: 'source' | 'target'): boolean
}
```

## creatingOnDragFeature

Controls if an element is created on drag. The element needs to implement a `createAction` method that returns an `Action` that creates the element.

*Interface:* `CreatingOnDrag`

```typescript
export interface CreatingOnDrag extends SModelExtension {
    createAction(id: string): Action
}
```

## decorationFeature

Controls if an element is a decoration. It is generally used to show error or warning markers on model elements.

*Interface*: `Decoration`

```typescript
export interface Decoration extends SModelExtension {}
```

## deletableFeature

Controls if an element can be deleted from the diagram. To be deletable, an element needs to be an `SChildElementImpl`.

*Interface:* `Deletable`

```typescript
export interface Deletable extends SModelExtension {}
```

## edgeLayoutFeature

Controls if an element is layoutable on an edge. The element must be an `SChildElementImpl`, its parent must be an `SRoutableElementImpl`, the element must have the `edgePlacement` property, and must have the `boundsFeature`. This is commonly used for labels that are displayed on an edge.

```typescript
edgePlacement: {
    position: number, // between 0 and 1, from the source (0) to the target (1)
    side: 'bottom' | 'top' | 'left' | 'right' | 'on',
    rotate: boolean,
    offset: number,
    moveMode: 'edge' | 'free' | 'none'
}
```

*Interface:* `EdgeLayoutable`

```typescript
export interface EdgeLayoutable extends SModelExtension {
    edgePlacement: EdgePlacement
}
```

## editFeature

Controls if an edge routing can be edited. The edge must be an `SRoutableElementImpl`.

## editLabelFeature

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

## expandFeature

Controls if an element can be expanded. The element must have the property `expanded`.

*Interface:* `Expandable`

```typescript
export interface Expandable extends SModelExtension {
    expanded: boolean
}
```

## exportFeature

Controls if an element can be exported. It is enabled by default to the `ViewportRootElement` making the entire diagram exportable.

## fadeFeature

Controls if an element can change its opacity. The element must have the `opacity` property.

*Interface:* `Fadeable`

```typescript
export interface Fadeable extends SModelExtension {
    opacity: number
}
```

## hoverFeedbackFeature

Controls if the element can show hover feedback. The element must have the `hoverFeedback` property.

*Interface:* `Hoverable`

```typescript
export interface Hoverable extends SModelExtension {
    hoverFeedback: boolean
}
```

## layoutableChildFeature

Controls if an element obeys its parent's layout options. The element must use the `boundsFeature`.

*Interface:* `LayoutableChild`

```typescript
export interface LayoutableChild extends SModelExtension, BoundsAware {
    layoutOptions?: ModelLayoutOptions
}
```

## layoutContainerFeature

Controls if an element can layout its children. The element must have the `layout` property.

*Interface:* `LayoutContainer`

```typescript
export interface LayoutContainer extends LayoutableChild {
    layout: string
}
```

## moveFeature

Controls if an element is moveable. The element must have the `position` property.

*Interface:* `Locateable`

```typescript

export interface Locateable extends SModelExtension {
    position: Point
}
```

## nameFeature

Controls if an element has a name. This feature is used during renaming to change the name attribute on the model element.

*Interface:* `Nameable`

```typescript
export interface Nameable extends SModelExtension {
    name: string
}
```

## openFeature

Controls if an element can be opened.

## popupFeature

Controls if an element display a popup on hover.

## selectFeature

Controls if an element can be selected. When an element is selected, its `selected` property is set to `true`.

*Interface:* `Selectable`

```typescript
export interface Selectable extends SModelExtension {
    selected: boolean
}
```

## viewportFeature

Controls if an element is a viewport. The element must be a `SModelRootImpl` and have the `zoom` and `scroll` properties.

## withEditLabelFeature

Controls if an element has an editable label. The element must have the `editableLabel` property.

*Interface:* `WithEditableLabel`

```typescript
export interface WithEditableLabel extends SModelExtension {
    readonly editableLabel?: EditableLabel & SModelElementImpl;
}
```
