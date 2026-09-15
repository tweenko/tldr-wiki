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
see [Turn Objects](./turn-objects.md).
:::

### Optional Overrides

#### Sprites

|Name|Default|
|:--:|:-----:|
|<span class="arg">s_idle</span>|<span class="constant">spr_e_virovirokun_idle</span>|
|<span class="arg">s_spare</span>|<span class="constant">spr_e_virovirokun_spare</span>|
|<span class="arg">s_hurt</span>|<span class="constant">spr_e_virovirokun_hurt</span>|

#### Stats

|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|<span class="arg">hp</span>|<span class="keyword">Real</span>|170||
|<span class="arg">max_hp</span>|<span class="keyword">Real</span>|170||
|<span class="arg">attack</span>|<span class="keyword">Real</span>|0|Unused, doesn't affect anything|
|<span class="arg">defense</span>|<span class="keyword">Real</span>|0|When attacked, will reduce incoming damage by 3x the value|
|<span class="arg">status_effect</span>|<span class="keyword">String</span>|<span class="string">""</span>|e.g: <span class="string">"(Tired)"</span> for tired enemies, decorative, drawn next to the enemy name|
|<span class="arg">carrying_money</span>|<span class="keyword">Real</span>|0|The amount of money the enemy will drop when defeated|
|<span class="arg">element</span>|<span class="keyword">String</span> or<br><span class="keyword">Undefined</span>|<span class="constant">undefined</span>|Does nothing on it's own, if the party has weapons with elemental damage multiplier it will check against this string.|

#### Acts

<span class="arg">acts</span> is an optional override, ACTs are unique for each enemy, by default every enemy has the following act:

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
The exception is <span class="arg">ev_party_turn</span> which has been removed,
and the added <span class="arg">ev_pre_dialogue</span>, which is triggered before the dialogue bubble appears.

#### Mercy

|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|<span class="arg">mercy</span>|<span class="keyword">Real</span>|0|Starting mercy|
|<span class="arg">mercy_add_pity_percent</span>|<span class="keyword">Real</span>|20|The mercy gained when trying to spare an enemy who is not at max mercy.|
|<span class="arg">can_spare</span>|<span class="keyword">Bool</span>|<span class="constant">true</span>||
|<span class="arg">no_mercy_text</span>|<span class="keyword">String</span>|<span class="string">"* But you couldn't spare it, for some reason."</span>||

#### Tired
|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|<span class="arg">tired</span>|<span class="keyword">Bool</span>|<span class="constant">false</span>||
|<span class="arg">low_hp_tired</span>|<span class="keyword">Bool</span>|<span class="constant">true</span>|Whether the enemy should turn tired when <span class="arg">hp</span> is low|
|<span class="arg">low_hp_tired_threshold</span>|<span class="keyword">Real</span> [0, 1]|0.5|If <span class="arg">hp</span> is below this threshold, the enemy will become tired if <span class="arg">low_hp_tired</span> is <span class="constant">true</span>|

#### Dialogue Bubble
|Name|Type|Default|Note|
|:--:|:--:|:-----:|:---|
|<span class="arg">dialogue</span>|<span class="keyword">String</span> or callable|<span class="string">"Test"</span>|Can accept enemy slot as arg0|
|<span class="arg">dia_bubble_off_x</span>|<span class="keyword">Real</span>|0||
|<span class="arg">dia_bubble_off_y</span>|<span class="keyword">Real</span>|0||
|<span class="arg">dia_bubble_off_type</span>|<span class="keyword">Enum.<br>BUBBLE_RELATIVE</span>|<span class="constant">BUBBLE_RELATIVE.<br>TO_DEFAULT_POS</span>|
|<span class="arg">dia_bubble_sprites</span>|[<span class="keyword">Asset.GMSprite</span>, <span class="keyword">Asset.GMSprite</span>]|[<span class="constant">spr_ui_enc_dialogue_box</span>, <span class="constant">spr_ui_enc_dialogue_spike</span>]|

#### Recruit

```gml:no-line-numbers
    recruit = new enemy_recruit()
```

See: Right below us.

## Recruit Constructor
