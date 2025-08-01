
[sprotty](../globals) / InternalBoundsAware

# Interface: InternalBoundsAware

Defined in: [packages/sprotty/src/features/bounds/model.ts:37](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L37)

Model elements that implement this interface have a position and a size.
Note that this definition differs from the one in `sprotty-protocol` because this is
used in the _internal model_, while the other is used in the _external model_.

Feature extension interface for [boundsFeature](../Variable.boundsFeature).

## Extended by

- [`InternalLayoutableChild`](../Interface.InternalLayoutableChild)

## Properties

### bounds

> **bounds**: `Bounds`

Defined in: [packages/sprotty/src/features/bounds/model.ts:38](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L38)
