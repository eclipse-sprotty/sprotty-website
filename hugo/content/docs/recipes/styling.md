---
title: 'Styling'
---
{{< toc >}}
Sprotty is designed to be highly customizable. Styling of diagram elements is done using CSS, preferably using CSS classes. There are several ways to apply styles to an element depending on the level of granularity you need.

## Predefined Styling

### Available Views

Sprotty comes with a handful of views that can be used to represent nodes, edges, and labels of your diagram. These views correspond to the most common SVG elements such as `rect`, `circle`, `text`, and `path`.

The following views can be used for visualizing nodes and ports:

* `CircularNodeView`: A circular representation of a node. Produces a `circle` SVG element.
* `RectangularNodeView`: A rectangular representation of a node. Produces a `rect` SVG element.
* `DiamondNodeView`: A diamond-shaped representation of a node. Produces a `polygon` SVG element.

For representing edges, the following views are available:

* `PolylineEdgeView`: A succession of straight lines between two nodes. Produces a `path` SVG element.
* `JumpingPolylineEdgeView`:  A succession of straight lines between two nodes with an arc where two or more edges intersect. Produces a `path` SVG element.
* `PolylineEdgeViewWithGapsOnIntersections`: A succession of straight lines between two nodes with a gap where two or more edges intersect. Produces a `path` SVG element.
* `BezierCurveEdgeView`: An succession of Bezier curves. Produces a `path` SVG element.

For representing labels, the following view is available:

* `SLabelView`: A simple text label. Produces a `text` SVG element.

### Default CSS Classes

Those default views assume that your are using the default implementations of diagram elements, namely `SGraphImpl`, `SNodeImpl`, `SPortImpl`, `SEdgeImpl`, and `SLabelImpl`.

The default views listed above use the following CSS classes to style the SVG elements:

* `sprotty-graph`: class for the root SVG element of the diagram.
* `sprotty-node`: class for the SVG element representing a node.
* `sprotty-port`: class for the SVG element representing a port.
* `sprotty-edge`: class for the SVG element representing an edge.
* `sprotty-label`: class for the SVG element representing a label.

By using those CSS classes, you can easily style all nodes, ports, edges, and labels of your diagram in a uniform way.

## Using Subtypes for Styling

When dealing with diagrams with different types of nodes, ports, edges, or labels, it is common to want different styling for each type. Using the default CSS classes is not enough in this case as it would apply the same style to all nodes, ports, edges, or labels.

By convention, Sprotty uses the `type` property, which is a string of the shape `main-type:sub-type`, to distinguish between different types of diagram elements. For example, a node of type `node:my-node` has the main type `node` and the sub-type `my-node`.

Using this convention, you can add a CSS class for each diagram element sub-type. For example:

* A node of type `node:my-node` using the `RectangularNodeView` would have the following CSS classes: `sprotty-node` and `my-node`.
* A node of type `node:my-other-node` using the `RectangularNodeView` would have the following CSS classes: `sprotty-node` and `my-other-node`.

This allows for more control over the styling of your diagram elements.

## Styling on a Per-Element Basis

If the granularity of elements base type and sub-type is not enough for your use case, you can also style each diagram element individually. This can be done by adding a `cssClasses` property to the `SModelElement` that you want to style. This property should be an array of strings representing the CSS classes you want to apply to the element.

```typescript
const myNode: SNode = {
    id: 'node1',
    type: 'node:my-node',
    cssClasses: ['special-node', 'some-other-css-class']
    ...
};
```

Assuming that this node is implementing the `RectangularNodeView`, the resulting SVG element would have the following CSS classes: `sprotty-node`, `my-node`, `special-node`, and `some-other-css-class`.

## Styling from Custom Views

The highest level of control over the styling of your diagram elements is achieved by creating custom views. By creating a custom view, you can define the exact SVG elements that should be used to represent your diagram elements and apply any CSS classes you want.

To add a class to an SVG element, you need to use the `class-my-class={boolean}` convention inside of the SVG element. For example:

```typescript
<rect class-my-class={true}>
```

Sprotty will internally convert this to the expected class attribute if the boolean is `true`.

This convention can be used to apply CSS classes to the SVG elements if a certain condition is met. For example, you could use this to apply a CSS class to an element if a certain property meets a condition:

```typescript
class MyNodeImpl extends SNodeImpl {
    value: number;
}

class MyNodeView extends ShapeView {
    render(node: MyNodeImpl, context: RenderingContext, args?: ViewArgs): VNode | undefined {
        return <g>
            <rect
                x="0"
                y="0"
                width={node.size.width}
                height={node.size.height} 
                class-sprotty-node={true}
                class-low-value={node.value < 10}
                class-high-value={node.value >= 10} 
            />
            {context.renderChildren(node)}
        </g>;
    }
}
```

## Styling on User Interaction

Taking advantage of the conditional CSS classes, you can also apply styles to your diagram elements based on user interaction. For example, you could apply a CSS class to a node when it is selected. Without going into the details of how to handle user interaction, let's look at how Sprotty's default views handle this.

`SNodeImpl` has the default feature `selectFeature`, meaning that when a node is selected, its `selected` property is set to `true`. This property can be used in the corresponding view to add a CSS class to the selected element. For example in the `RectangularNodeView`:

```typescript
export class RectangularNodeView extends ShapeView {
    render(node: Readonly<SShapeElementImpl & Hoverable & Selectable>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        if (!this.isVisible(node, context)) {
            return undefined;
        }
        return <g>
            <rect class-sprotty-node={node instanceof SNodeImpl} class-sprotty-port={node instanceof SPortImpl}
                  class-mouseover={node.hoverFeedback} class-selected={node.selected}
                  x="0" y="0" width={Math.max(node.size.width, 0)} height={Math.max(node.size.height, 0)}></rect>
            {context.renderChildren(node)}
        </g>;
    }
}
```

Note the `class-selected={node.selected}`. This will apply the CSS class `selected` to the SVG element when the `selected` property of the node is `true`.

Similarly, you can see that the `class-mouseover={node.hoverFeedback}` applies the CSS class `mouseover` to the SVG element when the `hoverFeedback` property of the node is `true`. For this the `hoverFeedbackFeature` must be enabled on the node.
