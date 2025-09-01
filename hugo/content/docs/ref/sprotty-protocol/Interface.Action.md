
[sprotty-protocol](../globals) / Action

# Interface: Action

Defined in: [actions.ts:39](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L39)

An action describes a change to the model declaratively.
It is a plain data structure, and as such transferable between server and client.

## Extended by

- [`RequestAction`](../Interface.RequestAction)
- [`ResponseAction`](../Interface.ResponseAction)
- [`SetBoundsAction`](../Interface.SetBoundsAction)
- [`LoggingAction`](../Interface.LoggingAction)
- [`CenterAction`](../Interface.CenterAction)
- [`FitToScreenAction`](../Interface.FitToScreenAction)
- [`SetViewportAction`](../Interface.SetViewportAction)
- [`BringToFrontAction`](../Interface.BringToFrontAction)
- [`UndoAction`](../Interface.UndoAction)
- [`RedoAction`](../Interface.RedoAction)
- [`MoveAction`](../Interface.MoveAction)
- [`HoverFeedbackAction`](../Interface.HoverFeedbackAction)
- [`CreateElementAction`](../Interface.CreateElementAction)
- [`DeleteElementAction`](../Interface.DeleteElementAction)
- [`ApplyLabelEditAction`](../Interface.ApplyLabelEditAction)
- [`ReconnectAction`](../Interface.ReconnectAction)

## Properties

### kind

> **kind**: `string`

Defined in: [actions.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L40)
