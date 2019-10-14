# Motivation

0. Pure CSS is good and powerful 
1. Modularity - UI and UX are separate instances both independent of BL
2. DOM is immutable

# Realization Core

```mermaid
graph LR
User((User))
label["&lt;label>"]
input["&lt;input value=...>"]
Browser((Browser))
element["&lt;element style=...>"]

User --interacts--> label
label --changes--> input
input --fires--> Browser
Browser --changes by CSS--> element
element --shown to--> User
```

```mermaid
sequenceDiagram
participant User
participant label as <label>
participant input as <input value=...>
participant Browser
participant element as <element style=...>

User ->> label :interacts
label ->> input :changes
input ->> Browser :fires
Browser ->> element :changes by CSS
element ->> User :shown to
```




# Research Overview

## [Dropdown](dropdown-radio/index.html)

1 enum state, 3*`<input type=radio>`. 

Substitution for not designable `<select>`.

## [Toggler](toggler/index.html)

1 boolean state, 1*`<input type=checkout>`.

Show/hide further elements.

## [Views](views/index.html)

1 boolean state, 1*`<input type=checkout>`.

Switching view between table with reordered columns and flow tile with specific item layout.

TBD: Like Google Drive's main page