---
title: "Actions"
---

{{< toc >}}

## Action

An `Action` represents an interaction with the diagram. It is a plain data structure and is transferable between the client and the server.
It holds information about the type of action in the `kind` property, which is a unique string identifier for the action type.

A basic `Action` is a "fire and forget" message and does not require a response. If a response is required, the [`RequestAction`](#requestaction) interface should be used.

```typescript
export interface Action {
  kind: string;
}
```

## RequestAction

A `RequestAction` should ultimately be answered by a [`ResponseAction`](#responseaction). The `requestId` property is used to match the request with the response.

```typescript
export interface RequestAction extends Action {
  requestId: string;
}
```

## ResponseAction

A `ResponseAction` is sent as a response to a [`RequestAction`](#requestaction). The `responseId` property is used to match the response with the request.

```typescript
export interface ResponseAction extends Action {
  responseId: string;
}
```

## RejectAction

A `RejectAction` should be fired to indicate when a request has failed. It contains a `message` property with a human-readable error message and an optional `detail` property with additional information.

```typescript
export interface RejectAction extends ResponseAction {
    kind: typeof RejectAction.KIND // 'rejectRequest'
    message: string
    detail?: JsonAny
}
```

## RequestModelAction

A `RequestModelAction` is used by the client to request the server to request a model. This is usually the first message to be sent to the source and is also used to initiate the communication.

```typescript
export interface RequestModelAction extends RequestAction<SetModelAction> {
    kind: typeof RequestModelAction.KIND // 'requestModel'
    options?: JsonMap
}
```

## SetModelAction

A `SetModelAction` is used by the server to send the client the model to be set. If a model is already present, it will be replaced by the one held in the `newRoot` property.

```typescript
export interface SetModelAction extends ResponseAction {
    kind: typeof SetModelAction.KIND // 'setModel'
    newRoot: SModelRoot
}
```

Associated Command: `SetModelCommand`

## UpdateModelAction

An `UpdateModelAction` is used to update the model on the client side. If no model is present, it behaves as a [`SetModelAction`](#setmodelaction). If a model is present, the `newRoot` property is used to update the model. The `matches` property is used to match the new model elements with the existing ones. If `animate` is set to `true`, the model update will be animated. The `cause` property can be used to specify the action that caused the model update.

```typescript
export interface UpdateModelAction {
    kind: typeof UpdateModelAction.KIND // 'updateModel'
    newRoot?: SModelRoot
    matches?: Match[]
    animate?: boolean
    cause?: Action
}

Associated Command: `UpdateModelCommand`

## RequestPopupModelAction

A `RequestPopupModelAction` is triggered when the mouse pointer overs an element and the client requests the server to provide a popup model for the element. The `elementId` property is used to identify the element being hovered, and the `bounds` property is used to specify the bounds of the popup.

```typescript
export interface RequestPopupModelAction extends RequestAction<SetPopupModelAction> {
    kind: typeof RequestPopupModelAction.KIND // 'requestPopupModel'
    elementId: string
    bounds: Bounds
}
```

## SetPopupModelAction

A `SetPopupModelAction` is used by the server to send the client the popup model to be set. The `newRoot` property holds the popup model. An `EMPTY_ROOT` can be used as the `newRoot` to remove the popup.

```typescript
export interface SetPopupModelAction extends ResponseAction {
    kind: typeof SetPopupModelAction.KIND // 'setPopupModel'
    newRoot: SModelRoot
}
```

Associated Command: `SetPopupModelCommand`

## SetBoundsAction

A `SetBoundsAction` is used to set the bounds of the elements in the model. The `bounds` property holds an array of `ElementAndBounds` objects, each of which contains the `elementId` and the `position` and `size` of the element.

```typescript
export interface SetBoundsAction extends Action {
    kind: typeof SetBoundsAction.KIND // 'setBounds'
    bounds: ElementAndBounds[]
}
```

Associated Command: `SetBoundsCommand`

## RequestBoundsAction

A `RequestBoundsAction` is sent from the server to the client to request the bounds of all elements in the model. The model is rendered invisibly so that the bounds can be derived from the DOM.

```typescript
export interface RequestBoundsAction extends RequestAction<ComputedBoundsAction> {
    kind: typeof RequestBoundsAction.KIND
    newRoot: SModelRoot
}
```

Associated Command: `RequestBoundsCommand`

## ComputedBoundsAction

A `ComputedBoundsAction` is used by the client to send the server the computed bounds of the elements in the model as a response to a [`RequestBoundsAction`](#requestboundsaction).  

```typescript
export interface ComputedBoundsAction extends ResponseAction {
    kind: typeof ComputedBoundsAction.KIND
    bounds: ElementAndBounds[]
    revision?: number
    alignments?: ElementAndAlignment[]
}
```

## LoggingAction

A `LoggingAction` is used to transmit logging data from one place to another.

```typescript
export interface LoggingAction extends Action {
    kind: typeof LoggingAction.KIND;
    severity: string
    time: string
    caller: string
    message: string
    params: string[]
}
```

## SelectAction

A `SelectAction` is triggered when the user changes the selection in the diagram. The `selectedElementsIDs` property holds the IDs of the elements that have been selected, and the `deselectedElementsIDs` property holds the IDs of the elements that have been deselected.

The action can be forwarded to the server so it can react to the selection change.

This action can also be sent from the server to the client to update the selection state programmatically.

```typescript
export interface SelectAction {
    kind: typeof SelectAction.KIND
    selectedElementsIDs: string[]
    deselectedElementsIDs: string[]
}
```

Associated Command: `SelectCommand`

## SelectAllAction

A `SelectAllAction` is used to select or deselect all elements in the model. The `select` property is used to specify whether the elements should be selected or deselected.

```typescript
export interface SelectAllAction {
    kind: typeof SelectAllAction.KIND
    select: boolean
}
```

Associated Command: `SelectAllCommand`

## GetSelectionAction

A `GetSelectionAction` is used to request the server to send the client the current selection state.

```typescript
export interface GetSelectionAction extends RequestAction<SelectionResult> {
    kind: typeof GetSelectionAction.KIND
}
```

Associated Command: `GetSelectionCommand`

## SelectionResult

A `SelectionResult` is the response from a [`GetSelectionAction`](#getselectionaction). It contains the `selectedElementsIDs` property, which holds the IDs of the selected elements.

```typescript
export interface SelectionResult extends ResponseAction {
    kind: typeof SelectionResult.KIND
    selectedElementsIDs: string[]
}
```

## CollapseExpandAction

A `CollapseExpandAction` is sent from the client to the server to recalculate the diagram when the expansion state of elements change on the client side. The `expandIds` property holds the IDs of the elements that have been expanded, and the `collapseIds` property holds the IDs of the elements that have been collapsed.

```typescript
export interface CollapseExpandAction {
    kind: typeof CollapseExpandAction.KIND
    expandIds: string[]
    collapseIds: string[]
}
```

## CollapseExpandAllAction

A `CollapseExpandAllAction` is used to collapse or expand all elements in the model. The `expand` property is used to specify whether the elements should be expanded or collapsed.

```typescript
export interface CollapseExpandAllAction {
    kind: typeof CollapseExpandAllAction.KIND
    expand: boolean
}
```

## OpenAction

An `OpenAction` is triggered when the user double-clicks an element which has the `openFeature` enabled. What should happen when this action is fired is highly application-specific and should be implemented on a per-application basis. The `elementId` property holds the ID of the element that has been double-clicked.

```typescript
export interface OpenAction {
    kind: typeof OpenAction.KIND
    elementId: string
}
```

## LayoutAction

A `LayoutAction` is used to trigger a layout calculation on the entire diagram or on a subset of elements.

```typescript
export interface LayoutAction {
    kind: typeof LayoutAction.KIND
    layoutType?: string
    elementIds?: string[]
}
```

## CenterAction

A `CenterAction` is used to center the view on a set of elements. The `elementIds` property holds the IDs of the elements to center on. The `animate` property is used to specify whether the centering should be animated. The `retainZoom` property is used to specify whether the zoom level should be retained, otherwise the zoom level is reset to its initial value. The `zoomScale` property is used to specify the zoom level.

If `elementIds` is empty, the action centers on the entire diagram.

```typescript
export interface CenterAction extends Action {
    kind: typeof CenterAction.KIND
    elementIds: string[]
    animate: boolean
    retainZoom: boolean
    zoomScale?: number
}
```

Associated Command: `CenterCommand`

## FitToScreenAction

A `FitToScreenAction` is used to fit the selected set of elements to the current available drawing area. The `elementIds` property holds the IDs of the elements to fit to the screen. The `padding` property is used to specify the padding around the elements. The `maxZoom` property is used to specify the maximum zoom level. The `animate` property is used to specify whether the fit to screen should be animated.

If `elementIds` is empty, the action fits the entire diagram to the screen.

```typescript
export interface FitToScreenAction extends Action {
    kind: typeof FitToScreenAction.KIND;
    elementIds: string[]
    padding?: number
    maxZoom?: number
    animate: boolean
}
```

Associated Command: `FitToScreenCommand`

## SetViewportAction

A `SetViewportAction` is used to set the viewport scroll and zoom values of the diagram. The `elementId` property holds the ID of the viewport to manipulate (usually the root element). The `newViewport` property holds the new scroll and zoom values. The `animate` property is used to specify whether the centering should be animated.

```typescript
export interface SetViewportAction extends Action {
    kind: typeof SetViewportAction.KIND;
    elementId: string
    newViewport: Viewport
    animate: boolean
}
```

Associated Command: `SetViewportCommand`

## GetViewportAction

A `GetViewportAction` is used to request the current viewport scroll and zoom values, and canvas bounds.

```typescript
export interface GetViewportAction extends RequestAction<ViewportResult> {
    kind: typeof GetViewportAction.KIND;
}
```

Associated Command: `GetViewportCommand`

## ViewportResult

A `ViewportResult` is the response from a [`GetViewportAction`](#getviewportaction). It contains the `viewport` property, which holds the scroll and zoom values, and the `canvasBounds` property, which holds the canvas bounds.

```typescript
export interface ViewportResult extends ResponseAction {
    kind: typeof ViewportResult.KIND;
    viewport: Viewport
    canvasBounds: Bounds
}
```

## BringToFrontAction

A `BringToFrontAction` is used to bring a set of elements to the front. The `elementIDs` property holds the IDs of the elements to bring to the front.

SVG elements are rendered using the "painter algorithm" meaning that the rendering obeys the order of the elements in the DOM. This action manipulates the order of the elements in the DOM so that they are placed at the end and therefore rendered on top of other elements.

```typescript
export interface BringToFrontAction extends Action {
    kind: typeof BringToFrontAction.KIND;
    elementIDs: string[]
}
```

## UndoAction

An `UndoAction` is used to undo the last operation on the stack of operations.

```typescript
export interface UndoAction extends Action {
    kind: typeof UndoAction.KIND;
}
```

## RedoAction

A `RedoAction` is used to redo the last undone operation.

```typescript
export interface RedoAction extends Action {
    kind: typeof RedoAction.KIND;
}
```

## MoveAction

A `MoveAction` is used to move a set of elements to new positions. The `moves` property holds the moves to be performed. The `animate` property is used to specify whether the moves should be animated. The `finished` property is used to specify whether the moves are finished. The `stoppable` property is used to specify whether the moves can be stopped.

```typescript
export interface MoveAction extends Action {
    kind: typeof MoveAction.KIND
    moves: ElementMove[]
    animate: boolean
    finished: boolean
    stoppable: boolean
}
```

Associated Command: `MoveCommand`

## HoverFeedbackAction

A `HoverFeedbackAction` is triggered when the mouse pointer hovers over an element. The `mouseoverElement` property holds the ID of the element the mouse is over, and the `mouseIsOver` property is used to specify whether the mouse is over the element.

```typescript
export interface HoverFeedbackAction extends Action {
    kind: typeof HoverFeedbackAction.KIND
    mouseoverElement: string
    mouseIsOver: boolean
}
```

Associated Command: `HoverFeedbackCommand`

## CreateElementAction

A `CreateElementAction` is used to create a new element in the model. The `containerId` property holds the ID of the container (a.k.a the parent element) in which the new element should be created, and the `elementSchema` property holds the schema of the new element.

```typescript
export interface CreateElementAction extends Action {
    kind: typeof CreateElementAction.KIND
    containerId: string
    elementSchema: SModelElement
}
```

Associated Command: `CreateElementCommand`

## DeleteElementAction

A `DeleteElementAction` is used to delete a set of elements from the model. The `elementIds` property holds the IDs of the elements to be deleted.

```typescript
export interface DeleteElementAction extends Action {
    kind: typeof DeleteElementAction.KIND
    elementIds: string[]
}
```

Associated Command: `DeleteElementCommand`

## ApplyLabelEditAction

An `ApplyLabelEditAction` is used to apply a label edit to a label element. The `labelId` property holds the ID of the label to be edited, and the `text` property holds the new text for the label.

```typescript
export interface ApplyLabelEditAction extends Action {
    kind: typeof ApplyLabelEditAction.KIND;
    labelId: string,
    text: string
}
```

Associated Command: `ApplyLabelEditCommand`

## ReconnectAction

A `ReconnectAction` is used to change the source and target of a routable element (e.g. edge). The `routableId` property holds the ID of the routable element, and the `newSourceId` and `newTargetId` properties hold the IDs of the new source and target elements.

```typescript
export interface ReconnectAction extends Action {
    kind: typeof ReconnectAction.KIND
    routableId: string
    newSourceId?: string
    newTargetId?: string
}
```

Associated Command: `ReconnectCommand`

## InitializeCanvasBoundsAction

An `InitializeCanvasBoundsAction` is used to set the initial bounds of the canvas. The `newCanvasBounds` property holds the new bounds for the canvas.

```typescript
export interface InitializeCanvasBoundsAction extends Action {
    kind: typeof InitializeCanvasBoundsAction.KIND
    newCanvasBounds: Bounds
}
```

Associated Command: `InitializeCanvasBoundsCommand`

## SetUIExtensionVisibilityAction

A `SetUIExtensionVisibilityAction` is used to set the visibility of a UI extension. The `extensionId` property holds the ID of the extension, and the `visible` property is used to specify whether the extension should be visible. The `contextElementsId` property holds the IDs of the elements that are subject to the action, for example the label target by an edit.

```typescript
export interface SetUIExtensionVisibilityAction extends Action {
    kind: typeof SetUIExtensionVisibilityAction.KIND;
    extensionId: string
    visible: boolean
    contextElementsId: string[]
}
```

Associated Command: `SetUIExtensionVisibilityCommand`

## EditLabelAction

An `EditLabelAction` is used to trigger the editing of a label. The `labelId` property holds the ID of the label to be edited.

```typescript
export interface EditLabelAction extends Action {
    kind: typeof EditLabelAction.KIND
    labelId: string
}
```

## SwitchEditModeAction

A `SwitchEditModeAction` is used to switch the edit mode, for example when moving an edge routing handle. The `elementsToActivate` property holds the IDs of the elements to activate, and the `elementsToDeactivate` property holds the IDs of the elements to deactivate.

```typescript
export interface SwitchEditModeAction extends Action {
    kind: typeof SwitchEditModeAction.KIND;
    elementsToActivate: string[]
    elementsToDeactivate: string[]
}
```

Associated Command: `SwitchEditModeCommand`

## AddRemoveBezierSegmentAction

An `AddRemoveBezierSegmentAction` is used to add or remove a bezier segment from an edge. The `targetId` property holds the ID of the edge, and the `actionTask` property is used to specify whether the segment should be added or removed.

```typescript
export interface AddRemoveBezierSegmentAction extends Action {
    kind: typeof AddRemoveBezierSegmentAction.KIND
    targetId: string
    actionTask: 'add' | 'remove'
}
```

Associated Command: `AddRemoveBezierSegmentCommand`

## CommitModelAction

A `CommitModelAction` is used to commit the current model state to the model source. The SModel (internal model) contains transitional states such as intermediate move positions, added handles, etc. When a user interaction that spans multiple commands finishes, the `CommitModelAction` is fired to write the final state to the model source.

```typescript
export interface CommitModelAction extends Action {
    kind: typeof CommitModelAction.KIND
}
```

Associated Command: `CommitModelCommand`

## RequestExportSvgAction

A `RequestExportSvgAction` is used to request the server to export the diagram to an SVG string.

```typescript
export interface RequestExportSvgAction extends RequestAction<ExportSvgAction> {
    kind: typeof RequestExportSvgAction.KIND
}
```

Associated Command: `ExportSvgCommand`

## ExportSvgAction

An `ExportSvgAction` is used to send the SVG string of the exported diagram as a response to a [`RequestExportSvgAction`](#requestexportsvgaction).

```typescript
export interface ExportSvgAction extends ResponseAction {
    kind: typeof ExportSvgAction.KIND
    svg: string
}
```
