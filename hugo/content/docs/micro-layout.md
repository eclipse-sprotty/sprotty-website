---
title: Micro-layout
weight: 400
---

The **micro-layout** refers to the layout of elements inside of a node, i.e. the layout of nested labels, buttons, etc. It is not to be confused with the **macro-layout** which refers to the layout of the entire graph, e.g. the position of nodes.

## Layout Configuration
Each element inheriting from `SNode` or `SCompartment` can have a property `layout` that specifies the layout of its children elements. Sprotty implements three layout configurations by default:
* `hbox`: children elements are arranged horizontally
* `vbox`: children elements are arranged vertically
* `stack`: children elements are stacked on top of each other

The [Class Diagram example](https://github.com/eclipse-sprotty/sprotty/tree/master/examples/classdiagram/) is a good starting point for understanding the layout configuration.
Let's focus on `node0` which represents the class `Foo`:

![node0](/micro-layout-node0.png)

```typescript
const node0: SNode & Expandable = {
    id: 'node0',
    type: 'node:class',
    expanded: false,
    position: {
        x: 100,
        y: 100
    },
    layout: 'vbox',
    children: 
...
}
```
`node0` has its `layout` property set to `vbox` meaning that its children will be arranged vertically. In this example, children are added to / removed from `node0` depending on its expansion state. For simplicity, let's consider that the node is expanded so we have all of its children present.
`node0` has three children with id:
* `node0_header`
* `node0_attrs`
* `node0_ops`

![node0_layout](/micro-layout-node0-layout.png)

```typescript
// node0_header
<SCompartment>{
    id: 'node0_header',
    type: 'comp:header',
    layout: 'hbox',
    children: [
        {
            id: 'node0_icon',
            type: 'icon',
            layout: 'stack',
            layoutOptions: {
                hAlign: 'center',
                resizeContainer: false
                },
            children: [
                <SLabel>{
                    id: 'node0_icon',
                    type: 'label:icon',
                    text: 'C'
                    }
            ]
        },
        <SLabel>{
            id: 'node0_classname',
            type: 'label:heading',
            text: 'Foo'
        },
        {
            id: 'node0_expand',
            type: 'button:expand'
        }
    ]
}

// node0_attrs
<SCompartment> {
    id: 'node0_attrs',
    type: 'comp:comp',
    layout: 'vbox',
    children: [
        <SLabel> {
            id: 'node0_op2',
            type: 'label:text',
            text: 'name: string'
        }
    ],
}

// node0_ops
<SCompartment> {
    id: 'node0_ops',
    type: 'comp:comp',
    layout: 'vbox',
    children: [
        <SLabel> {
            id: 'node0_op0',
            type: 'label:text',
            text: '+ foo(): integer'
        }, 
        <SLabel> {
            id: 'node0_op1',
            type: 'label:text',
            text: '# bar(x: string): void'
        }
    ],
}
```

Those three children are of type `SCompartment`, meaning that they can also implement a layout strategy for their children.

For example, the `node0_header` has a `hbox` layout, so its children will be arranged horizontally. Its child `node0_icon` has a `stack` layout and its children will be stacked on top of it.

Now is a good time to modify the layout in the example and see how the rendering reacts!
Alternatively, you could also implement your own micro-layout engine and inject it via [Dependency Injection](// link to dependency injection documentation)


## Layout Options
It is possible to fine-tune the micro-layout by using the property `layoutOptions`.

### Alignment
You can control how children are aligned with the following properties:
* `hAlign: 'left' | 'center' | 'right'` for the horizontal alignment (not available for layout `hbox`)
* `vAlign: 'top' | 'center' | 'bottom'` for the vertical alignment (not available for layout `vbox`)

### Padding
Padding for a container is controlled by the following properties:
* `paddingTop: number` for the padding at the top of the container (in pixels)
* `paddingRight: number` for the padding at the right of the container (in pixels)
* `paddingBottom: number` for the padding at the bottom of the container (in pixels)
* `paddingLeft: number` for the padding at left top of the container (in pixels)
* `paddingFactor: number` to define a factor for the padding depending on the size of the container

### Size
The size of a container is generally decided depending on the size of its children. However, we can control some aspects of it with:
* `minWidth: number` to set the minimal width of a container (in pixels)
* `minHeight: number` to set the minimal height of a container (in pixels)
* `resizeContainer: boolean` to indicate if the size of a container is dependent on the size of its children
