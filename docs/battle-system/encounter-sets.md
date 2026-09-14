---
title: Encounter Set Reference
description: reference for the enc_set struct
---

# Encounter Sets  <Badge type="tip" text="^3.1.0" />

<sup>Written by zelzmiy <br>
Reference: `@Engine/scripts/encounter/enc_sets`</sup>

---

An encounter set contains all information about a battle encounter.

To create an encounter, create a script with a constructor function inheriting from `enc_set()`:

```gml
function enc_my_encounter() : enc_set() constructor {    
    debug_name = "cool_encounter"
    enemies = [
        new my_enemy(),
    ]
    enemies_pos = [[0, 0, true]] // [x, y, relative] OR just a function that returns [x, y]
}
```

The enemies in `enemies` are expected to inherit [enc_enemy](./enemy-reference).

`enemies_pos` is a list of positions `[Real, Real, Bool]` that defines the enemy positions, if the third argument is true it is relative to the "natural" spawning position of the enemy, or `270, 130 - (20 * # of enemies) + (40 * enemy index)`.
If it is callable, the function takes in the index of the enemy.

## Optional Overrides

::: tip
If you're unsure what an override does, mess with it until you figure it out. or ask for help :\)
:::

### Functions

`flavor`: The flavor text at the start of a turn, can be a string, or callable. Defaults to a function returning "* undefined", takes no arguments.

`win_condition`: If this is true, the battle will end. Best left alone, by default checks every enemy is still fighting (not spared/downed).

`target_calculation`: Defaults to `ENC_TARGET.RANDOM`, can also be `ENC_TARGET.ALL`, `ENC_TARGET.ANY`. If it is callable, it should return an array of indexes of party members who are targeted. `RANDOM` chooses one party member each turn, `ANY` chooses one party member each time the soul takes damage, `ALL` is self-explanatory.

`target_recalculate_condition`: This is checked each time an enemy attack starts, defaults to `undefined`. If it is callable it takes array of indexes that are the current targets. Normally, if the target calculation is `ALL` or `ANY` they are never recalculated, and if it is `RANDOM` it recalculates if the target is downed.

### Events

The following events are available as overrides in the encounter set, by default they are all undefined, and none take arguments. These are called in order.

```gml
// called 1 frame after o_enc is created
ev_init =           -1 
// called when your party starts choosing their actions (Fight / ACT / Spare etc.)
ev_party_turn =     -1
// Called after you finish doing the above
ev_party_exec =     -1
// created before dialogue begins, also before turn objects are created.
ev_pre_dialogue =   -1
// created after the turn objects and dialogue bubbles are created.
ev_dialogue =       -1
// Called when the turn begins
ev_turn =           -1
// Called when the box is finished transitioning, and all the turn objects are created and initialized.
ev_turn_start =     -1
// Called after the turn is over, the turn counter has been incremented.
ev_post_turn =      -1
// Called after the battle is over, and the enemies has been killed/spared.
ev_win =            -1
```

::: info 
for a complete order of events, see [Event Order](./battle-system-intro.md#event-order).
:::

### Music Overrides

|Name|Type|Default|
|:--:|:--:|:-----:|
|`bgm`|`Asset.GMSound`|`mus_battle`|
|`bgm_pitch`|`Real`|1|
|`bgm_gain`|`Real`|1|

### Miscellaneous 

|Name|Type|Default|Notes|
|:--:|:--:|:-----:|-----|
|`bg_grid`|Enum: `ENC_BG`|`ENC_BG.GRID`|Can be `ENC_BG.GRID` or `ENC_BG.NONE`. add new backgrounds in `o_eff_bg`.|
|`can_change_turnlen`|`bool`|`true`|If you can change the turn length by defending, this is not implemented.|
|`display_target`|`bool`|`false`|whether to display the targets of the enemy's attack, like in chapter 1.|
|`enc_var_struct`|struct|`{}`|overrides properties in `o_enc`, for example setting this to `{tp_constrict: true}` will cause the battle to be in darkness mode.|
|`party_actions`|struct|A struct with `party_name: struct` the default party action.|By defaults has each party member with an R-Action/S-Action type. these inherit from `item_s_defaultaction`, which itself is an `item_spell`. See the page on items for more information.|
