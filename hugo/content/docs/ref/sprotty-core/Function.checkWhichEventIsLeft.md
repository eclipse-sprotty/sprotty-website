
[sprotty](../globals) / checkWhichEventIsLeft

# Function: checkWhichEventIsLeft()

> **checkWhichEventIsLeft**(`e1`, `e2`): `-1` \| `1`

Defined in: [packages/sprotty/src/features/edge-intersection/sweepline.ts:77](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-intersection/sweepline.ts#L77)

Returns which of the two events is left.
This is used to classify the endpoints of a segment when generating the
event queue.

## Parameters

### e1

[`SweepEvent`](../Class.SweepEvent)

### e2

[`SweepEvent`](../Class.SweepEvent)

## Returns

`-1` \| `1`
