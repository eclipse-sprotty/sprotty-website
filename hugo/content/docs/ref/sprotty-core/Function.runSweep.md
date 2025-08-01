
[sprotty](../globals) / runSweep

# Function: runSweep()

> **runSweep**(`eventQueue`): [`Intersection`](../Interface.Intersection)[]

Defined in: [packages/sprotty/src/features/edge-intersection/sweepline.ts:125](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-intersection/sweepline.ts#L125)

Performs the main sweep algorithm on the specified event queue.

An empty priority queue is created to store segments encountered.
An item is removed from the priority queue if the vertex is the left endpoint
of a segment, we test it against every other segment in the segment queue for
intersections with any intersection recorded. We then add the vertex (and it's
associated right endpoint) to the segment queue.
If we encounter a right endpoint we remove the first item from the segment queue.

Each pair of segments are only tested once. And only segments that overlap on the
x plane are tested against each other.

## Parameters

### eventQueue

`TinyQueue`\<[`SweepEvent`](../Class.SweepEvent)\>

the event queue.

## Returns

[`Intersection`](../Interface.Intersection)[]

the identified intersections.
