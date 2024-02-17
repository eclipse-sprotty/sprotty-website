---
title: 'SVG Rendering'
---
{{< toc >}}
Sprotty transforms a given `SModel` to its representation in the DOM in the form of a hierarchy of SVG elements. An `SModel` is composed of `SModelElement`s, and each `SModelElement` has a `type` property that is associated to a single corresponding `View`. The `ViewRegistry` keeps a map of the correspondence between an element type and a view. These model elements are organized in the *virtual DOM* before being rendered as actual SVG elements in the DOM.

## Virtual DOM

The virtual DOM is a tree-based, partial or complete representation of the DOM content. In our context, the virtual DOM contains a representation of our diagram SVG elements and their hierarchy. For every update made to the diagram, Sprotty generates a new `SModel` through the `CommandStack` and forwards it to the `Viewer`. Updates are often limited to a specific node or group of nodes and it would be unnecessarily expensive to have to re-render the entire diagram for each update. It is more efficient to apply minimal updates to directly impacted DOM elements. Sprotty relies on [Snabbdom](https://github.com/snabbdom/snabbdom) for handling elements in the *virtual DOM* and applying minimal changes the DOM through *patching*.

## Views

Views are at the center of Sprotty's rendering mechanism. They are classes implementing the `IView` interface and have a `render()` method that describes the SVG elements to be rendered for a given `SModelElement` type. Views use the TSX syntax, which allow combining HTML and TypeScript code to define elements, and therefore needs to reside inside of files with the `.tsx` extension.

Let's have a look at the definition of the `NodeView` from the [Class Diagram example](https://github.com/eclipse-sprotty/sprotty/blob/master/examples/classdiagram/src/views.tsx):

```typescript
@injectable()
export class NodeView extends RectangularNodeView {
    override render(node: Readonly<SNodeImpl>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        if (!this.isVisible(node, context)) {
            return undefined;
        }
        return <g>
            <rect class-sprotty-node={true}
                  class-node-package={node.type === 'node:package'}
                  class-node-class={node.type === 'node:class'}
                  class-mouseover={node.hoverFeedback} class-selected={node.selected}
                  x="0" y="0" width={Math.max(node.size.width, 0)} height={Math.max(node.size.height, 0)}></rect>
            {context.renderChildren(node)}
        </g>;
    }
}
```

The class `NodeView` extends `RectangularNodeView` which is a default `View` in Sprotty, ultimately implementing `IView`. Don't forget to add the class decorator `@injectable()`, which is necessary for the [Dependency Injection]({{< ref "/docs/dependency-injection" >}}) mechanism.

The `render()` method is the core of the `View`. It takes `node` -- that is the model element to be rendered - as an argument, a `RenderingContext`, and an optional `args` object. View implementations should first check whether the `node` should be rendered at all. This is an optimization step, as we only want to render SVG elements that are inside of the visible viewport and not hidden by some other user-defined filter.
Eventually, the `render()` method returns a `VNode` which is [Snabbdom's](https://github.com/snabbdom/snabbdom) virtual representation of a DOM element. This `VNode` can hold one and only one *root element*, therefore we need to group our SVG elements inside of a *container element* `g`.
The SVG elements can be styled using CSS classes using Snabbdom's notation. Classes are dynamically toggled with expressions of the form `class-X={boolean expression}`, with the `class-` prefix followed by the name of the class and a boolean expression to determine if the class should be toggled or not. In our example, the `rect` element created by the `NodeView` could have a class of `sprotty-node`, `node-package`, `node-class`, `mouseover`, `selected`, or any combination of those depending of the respective boolean expressions. It is then easy to style elements with CSS based on class names.

Other attributes like width, height, and position are also defined here. Please note that the position is set at `x="0" y="0"` since the actual position will be determined by the layout engine later on.

Finally, we render children of the node with the `renderChildren()` method from the `RenderingContext`. We strongly advocate for keeping the `View`'s responsibility to render only the SVG that is specific for the given node. Any child (e.g. labels, buttons, children nodes) should be rendered in their own `View`. This keeps the code better organized and removes the complexity of having to implement the layout of nested elements such as labels in the `View` itself and instead delegates this responsibility to the layout engine.

## Layouting

It is important to distinguish two types of layout:

1. The [*client layout*](#client-layout) (or *micro-layout*) which deals with the layout of a node's children.
2. The [*server layout*](#server-layout) (or *macro-layout*) which deals with the overall shape of the diagram, placement of nodes and edges.

### Client Layout

The *client layout*, a.k.a. *micro-layout*, occurs first. In this phase, Sprotty computes the position and size for elements that add some visual information such as labels to nodes and edges. Different layouts are selected using the `layout` property of a `SNode` or `SCompartment`. The values of the `layout` property can be:

* `hbox` for an horizontal layout.
* `vbox` for a vertical layout.
* `stack` for a stacking of children elements.

The micro-layout is computed in two phases:

1. A `RequestBoundAction` is received and the model is rendered invisibly (e.g. by assigning a width and height of zero to the elements). The locally used fonts and CSS styles are applied during this rendering phase. The resulting size information is used to invoke the selected layouts and the updated bounds are written into a `ComputedBoundAction`.
2. The bounds stored in the `ComputedBoundAction` are applied to the model and initiates the visible rendering of the updated model with `SetModelAction` or `UpdateModelAction`.

In depth documentation about the micro-layouting can be found [here]({{< ref "/docs/micro-layout" >}})

## Server Layout

The *server layout*, a.k.a. *macro-layout* takes place **after** the *client layout*. This is configured with an implementation of the `ILayoutEngine` interface. This takes care of the general shape of the diagram and computes the position of nodes and edges. Sprotty provides a [package](https://github.com/eclipse-sprotty/sprotty/tree/master/packages/sprotty-elk) to use the [Eclipse Layout Kernel(ELK)](https://www.eclipse.org/elk/), a JAVA-based automatic layout engine with several standard algorithms, but it is also of course possible to implement your own.
