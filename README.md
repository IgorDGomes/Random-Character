# Random-Character

This [Random-Character](https://github.com/IgorDGomes/Random-Character) was made as a challenge to try out my understanding about if statement using javascript, the backend is developed with typescript for a better error handling and express.


## Table of Contents

- [Preview](#preview)
- [About](#about)
- [Built with](#built-with)
- [API](#api)
- [Credits](#credits)


## Preview

### Desktop

<details>
<summary>Main page</summary>

[![Desktop Preview](./assets/Desktop_Preview.png)](https://igordgomes.github.io/Random-Character/)

</details>

### Tablet

<details>
<summary>Main page</summary>

[![Tablet Preview](./assets/Tablet_Preview.png)](https://igordgomes.github.io/Random-Character/)

</details>

### Mobile

<details>
<summary>Main page</summary>

[![Phone Preview](./assets/Mobile_Preview.png)](https://igordgomes.github.io/Random-Character/)

</details>

## About

This project was made to easily create a character for a RPG game, each characteristic has randomly generated output, among the options your character can have:

### Characteristics

<details>
<summary>Hair Type</summary>

---

  - Curly

  - Wavy

  - Straight

  - Bald
</details>

<details>
<summary>Hair Color</summary>

---

  - Black

  - Brown

  - Blonde

  - White

  - Ginger
</details>

<details>
<summary>Eye Color</summary>

---

  - Black

  - Blue

  - Green

  - Grey

  - Purple

  - Red

  - White

  - Brown

  - Yellow

  - Pink

  - Orange
</details>

<details>
<summary>Race</summary>

---

  - Elf

  - Human

  - Orc

  - Dwarf

  - Night Elf

  - DragonBorn

  - Fairy

  - Goblin

  - Half
</details>

<details>
<summary>Class</summary>

---

  - Soldier

  - Knight

  - Barbarian

  - Paladin

  - Black Mage

  - White Mage

  - Red Mage

  - Rogue

  - Archer

  - Engineer

  - Fighter

  - Summoner

  - Tamer

  - No Class

  - 2 random classes

  - 3 random classes

  - 2 classes of your choice

  - 3 classes of your choice

  - ?
</details>

<details>
<summary>Sex</summary>

---

  - Male

  - Female
</details>


## Built with

- HTML
- CSS
- Javascript


## API

Go to the server folder and install dependencies, run `npm run dev` on the terminal, and it will be available for use.

`Server runs on port 127.0.0.1:1436 with CORS enabled`

### Tech

- Express
- Typescript

### Example:

**Body**

| Key                  | Value         
|----------------------|----------------------
| `hairType`           | `selected`
| `hairColor`          | `selected`
| `eyeColor`           | `selected`
| `race`               | `selected`
| `classSelection`     | `selected`
| `sex`                | `selected`


**RESPONSE**

```json
{
  "hairType": "Bald",
  "hairColor": "Ginger",
  "eyeColor": "Red",
  "race": "Dwarf",
  "classSelection": "Barbarian",
  "sex": "Male"
}
```


## Credits

[Designer --> Denisa](https://dribbble.com/DenTg)