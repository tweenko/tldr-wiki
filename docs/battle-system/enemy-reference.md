---
title: Enemy Reference
description: reference for the enc_enemy struct
---

# Encounter Sets  <Badge type="tip" text="^3.1.0" />

<sup>Written by zelzmiy <br>
Reference: `@Engine/scripts/encounter/enc_enemy`</sup>

---

## Enemy Constructor

An enemy struct contains meta-information about an enemy.

To create an enemy, create a script with a constructor function inheriting from `enc_enemy()`:

```gml
function enc_my_enemy() : enc_enemy() constructor {
    name = "cool_enemy"
    obj = o_my_enemy // object inheriting o_actor_e
    turn_object = o_turn_cool_enemy // turn object (see [Turn Objects](./turn-objects.md))
}
```

::: tip
for more info on `turn_object`,
see [Turn Objects](./turn-objects.md)
:::

## Recruit Constructor 