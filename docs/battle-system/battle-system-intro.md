---
title: Battle System Intro
description: An overview of the battle system.
---

# Battle System Intro <Badge type="tip" text="^3.1.0" />

<sup>Written by zelzmiy</sup>

---
**Encounters consists of 6 things:**

1. The enemy struct
2. The encounter set struct
3. The actor objects
4. The turn objects
5. The bullet objects
6. Engine objects

The enemy and encounter set structs define meta information about the enemy and encounter.
They include what enemies take part in the encounter, the background of the encounter, the enemy's stats and ACTs, and dialogue. See [Encounter Sets](./encounter-sets.md) for more info.

The enemy and bullet objects are GameMaker objects that define how enemies and bullets are drawn, how they move, and how much damage they deal. See [Actors](../Not-Written) for more info.

Turn objects define what bullet patterns an enemy will spawn at the start of their turn. During an encounter, every enemy in the encounter will create their turn object at the beginning of the dodging phase. See [Turn Objects](./turn-objects.md) for more info.

Engine Objects, such as `o_enc_soul` (the player controlled soul) and `o_enc_box` (the battle box).
It is recommended that you do not edit these objects directly[^1], but rather adjust their properties in the turn object. See [Adjusting The Battle Box](#adjusting-the-battle-box) for more info.

## Starting an Encounter

To start an encounter, call `enc_start(enc_set)`.
This can done directly inside of a cutscene, or for most basic enemies on collision
with an object parented to `o_actor_e`.

`o_actor_e` objects have an `encounter` variable when placed in the world, to start an encounter
on collision with the actor, set it to a `new enc_set()`
![Encounter Variable](../assets/screenshot_encounter_variable.png)

::: tip {no-title}
See `room_test_movement` for an example
:::

## Event Order

STUB

## Adjusting the Battle Box

STUB

[^1]: Unless you know what you're doing, of course.