---
title: Enemy Reference
description: reference for the enc_enemy struct
---

# Enemies And Recruits  <Badge type="tip" text="^3.1.0" />
<sup>Written by zelzmiy <br>
Reference: `@Engine/scripts/encounter/enc_enemy`</sup>

## Enemy Constructor

An enemy struct contains meta-information about an enemy.

To create an enemy, create a script with a constructor function inheriting from `enc_enemy()`:

```gml
function enc_my_enemy() : enc_enemy() constructor {
    name = "cool_enemy"
    obj = o_my_enemy // object inheriting o_actor_e
    turn_object = o_turn_cool_enemy // turn object
}
```

::: tip
for more info on `turn_object`,
see [Turn Objects](./turn-objects.md)
:::

### Optional Overrides

#### Sprites

|Name|Default|
|:--:|:-----:|
|`s_idle`|`spr_e_virovirokun_idle`|
|`s_spare`|`spr_e_virovirokun_spare`|
|`s_hurt`|`spr_e_virovirokun_hurt`|

#### Stats

|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|hp|`real`|170||
|max_hp|`real`|170||
|attack|`real`|0|Unused, doesn't affect anything|
|defense|`real`|0|When attacked, will reduce incoming damage by 3x the value|
|status_effect|`string`|""|e.g: "(Tired)" for tired enemies, decorative, drawn next to the enemy name|
|carrying_money|`real`|0|The amount of money the enemy will drop when defeated|
|element|`string`|`undefined`|Does nothing on it's own, if the party has weapons with elemental damage multiplier it will check against this string.|

#### Acts

`acts` is an optional override, ACTs are unique for each enemy, by default every enemy has the following act:

```gml
acts = [
        {
            name: loc("enc_act_check"),
            desc: "Useless analysis",
            party: [], // the names of the other party members in the ACT, e.g. "ralsei"
            tp_cost: 0, // optional, 0 by default
            color: c_white, // color of the act. can be callable
            
            enabled: true, // optional, true by default. can also be callable
            perform_act_anim: true, // optional, true by default
            return_to_idle_sprites: true, // optional, true by default
            
            exec: function(enemy_slot, user_index) {
                encounter_scene_dialogue("* Empty CHECK text.")
            },
            exec_args: []
        },
    ]
```

#### Events

Enemy events are nearly identical and called on the same frame as [Encounter Set Events](./encounter-sets.md#events).
The exception is `ev_party_turn` which has been removed,
and the added `ev_pre_dialogue`, which is triggered before the dialogue bubble appears.

#### Mercy

|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|mercy|`real`|0|Starting mercy|
|mercy_add_pity_percent|`real`|20|The mercy gained when trying to SPARE an enemy who's name isn't YELLOW|
|can_spare|`bool`|`true`||
|no_mercy_text|`string`|"* But you couldn't spare it, for some reason."||

#### Tired
|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|tired|`bool`|`false`||
|low_hp_tired|`bool`|`true`|Whether the enemy should turn tired when hp is low|
|low_hp_tired_threshold|`Real` [0, 1]|1/2|If the hp is below this threshold, the enemy will become tired if low_hp_tired is true|

#### Dialogue Bubble
|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|dialogue|`string` or callable|"Test"|Can accept enemy slot as arg0|
|dia_bubble_off_x|`Real`|0||
|dia_bubble_off_y|`Real`|0||
|dia_bubble_off_type|Enum `BUBBLE_RELATIVE`|`BUBBLE_RELATIVE.TO_DEFAULT_POS`|
|dia_bubble_sprites|[Asset.GMSprite, Asset.GMSprite]|`[spr_ui_enc_dialogue_box, spr_ui_enc_dialogue_spike]`|

#### Recruit

```gml
    recruit = new enemy_recruit()
```

See: Right below us.

## Recruit Constructor
