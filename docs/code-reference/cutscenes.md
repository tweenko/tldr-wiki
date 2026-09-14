---
title: Cutscene code reference
lang: en
---

::: warning
This article is a stub!
:::

# Cutscene functions
<sup>Written by vanpassinby</sup>

## `cutscene_create`
```tlf:no-line-numbers
function cutscene_create(local = true, autoset = true) -> Struct.cutscene
```

| Argument | Type(s) | Meaning |
| - | - | - |
| <span class="arg">local</span> | <span class="keyword">Bool</span> | Toggles whether the cutscene is destroyed when leaving the room |
| <span class="arg">autoset</span> | <span class="keyword">Bool</span> | Toggles whether this cutscene gets set as the current cutscene or not |

This function creates a <span class="func">cutscene</span> struct instance.


## `cutscene_play`
```tlf:no-line-numbers
cutscene_play(cutscene = global.current_cutscene) -> Undefined
```

| Argument | Type(s) | Meaning |
| - | - | - |
| <span class="arg">cutscene</span> | <span class="keyword">Struct.cutscene</span> | The cutscene that should be played |

This function plays a <span class="func">cutscene</span> struct (previously defined with <span class="func">cutscene_create<span style="color:#bbbbbb">()</span></span>).

---

# Cutscene event functions

## `cutscene_actor_dialogue`
```tlf:no-line-numbers
function cutscene_actor_dialogue(dialogue, actor_inst, prefix = "", postfix = "{p}{e}", wait = true, coming_from = ACTORDIALOGUE_SIDE.FROM_LEFT) -> Undefined
```
| Argument | Type(s) | Meaning |
| - | - | - |
| <span class="arg">dialogue</span> | <span class="keyword">String</span><br><span class="keyword">Array&lt;String&gt;</span> | The dialogue that you want to display. <br><br>If this argument is an <span class="keyword">Array&lt;String&gt;</span>, then the dialogue will span as many pages as the array's length. |
| <span class="arg">actor_inst</span> | <span class="keyword">Asset.GMObject</span><br><span class="keyword">Id.Instance</span> | The actor that this speech bubble will be assigned to. Must be a child of <span class="constant">o_actor</span>. |
| <span class="arg">prefix</span> | <span class="keyword">String</span> | A string that will be appended at the start of the dialogue. |
| <span class="arg">postfix</span> | <span class="keyword">String</span> | A string that will be appended at the end of the dialogue. |
| <span class="arg">wait</span> | <span class="keyword">Bool</span> | Whether the cutscene should wait until the speech bubble is destroyed. |
| <span class="arg">coming_from</span> | <span class="keyword">Enum.ACTORDIALOGUE_SIDE</span> | Which side the speech bubble should be coming from. |

This function creates a speech bubble during a cutscene. This function is usually used during [battle encounters](../battle-system/battle-system-intro.md).
## `cutscene_actor_move`
```tlf:no-line-numbers
function cutscene_actor_move(target, movement, wait = true) -> Undefined
```

| Argument | Type(s) | Meaning |
| - | - | - |
| <span class="arg">target</span> | <span class="keyword">Asset.GMObject</span><br><span class="keyword">Id.Instance</span> | The instance to move. Must be a child of <span class="constant">o_actor</span>. |
| <span class="arg">movement</span> | <span class="keyword">Struct.actor_movement</span><br><span class="keyword">Array&lt;Struct.actor_movement&gt;</span> | The movement that <span class="arg">target</span> should follow. |
| <span class="arg">wait</span> | <span class="keyword">Bool</span> | Whether the cutscene should wait until the movement is finished or not. |

## `cutscene_anim`
```tlf:no-line-numbers
cutscene_anim(local = true, autoset = true) -> Struct.cutscene
```

| Argument | Type(s) | Meaning |
| - | - | - |

## `cutscene_animate`
```tlf:no-line-numbers
function cutscene_animate(val1, val2, frames, ease_type, inst, var_name) -> Undefined
```
| Argument | Type(s) | Meaning |
| - | - | - |
| <span class="arg">val1</span> | <span class="keyword">Real</span> | The variable's initial value. |
| <span class="arg">val2</span> | <span class="keyword">Real</span> | The variable's target value. |
| <span class="arg">frames</span> | <span class="keyword">Real</span> | How long it takes for the variable to get from <span class="arg">val1</span> to <span class="arg">val2</span>. (in frames) |
| <span class="arg">ease_type</span> | <span class="keyword">Enum.anime_curve</span><br><span class="keyword">String</span><br><span class="keyword">Struct.AnimCurve</span><br><span class="keyword">Struct.AnimCurveChannel</span><br><span class="keyword">Function(Real)</span> -> <span class="keyword">Real</span> | The animation's easing curve.<br><br>If this argument is a <span class="keyword">Function</span>, the input will only take in values between 0 and 1. |
| <span class="arg">inst</span> | <span class="keyword">Asset.GMObject</span><br><span class="keyword">Id.Instance</span><br><span class="keyword">Struct</span> | The instance/struct holding the variable you want to animate |
| <span class="arg">var_name</span> | <span class="keyword">String</span> | The variable's name, as a string (case-sensitive) |

This function animates a <span class="keyword">Real</span> variable between 2 values inside a cutscene.
Here is a use example: 
```gml
cutscene_create();
cutscene_animate(0, 1, 60, anime_curve.cubic_in_out, o_fun_meter, "percent");
cutscene_play();
```
The code snippet above creates a cutscene that animates <span class="constant">o_fun_meter</span>.<span class="arg">percent</span> from 0 to 1 in a smooth manner, and plays it.

::: warning
The cutscene will NOT wait for any animations created with this function to end.
:::

## `cutscene_audio_play`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_camera_pan`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_choicer`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_debug_message`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_dialogue`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_event_isvalid`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_func`
```tlf:no-line-numbers
cutscene_func(func, args = [])

func: Function - The function that should be called during the cutscene.
args: Array - An array containing arguments that will be fed into `func`.
```
This function calls an external function or method inside a cutscene.

::: tip
With this function, you can run cutscenes inside cutscenes, like so:
```gml
cutscene_create();
// Insert cutscene code here
cutscene_func(function(){
    cutscene_create();
    // Any cutscene code defined over here will run in parallel with the main cutscene, once it is run. 
    cutscene_play();
})
cutscene_play();
```
:::

## `cutscene_instance_create`
```tlf:no-line-numbers
cutscene_instance_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_party_follow`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_party_interpolate`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_player_canmove`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_set_partysprite`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_set_variable`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true) -> Struct.cutscene

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_sleep`
```tlf:no-line-numbers
cutscene_sleep(frames)

frames: Real - How long the cutscene should pause for (in frames).
```

## `cutscene_wait_dialogue_boxes`
```tlf:no-line-numbers
cutscene_wait_dialogue_boxes()

local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_wait_dialogue_finish`
```tlf:no-line-numbers
cutscene_create(local = true, autoset = true)
W
local: Bool - Toggles whether the cutscene is destroyed when leaving the room.
autoset: Bool - Toggles whether this cutscene gets set as the current cutscene or not.
```

## `cutscene_wait_until`
```tlf:no-line-numbers
cutscene_wait_until(resume_condition, arguments = [])

resume_condition: Function -> Bool - A function/method that should return true for the cutscene to continue.
arguments: Array - An array of arguments to be fed into resume_condition.
```
