import { rpgFunctions } from "./rpg-functions.js";

const character = document.querySelector(".character");
const button = document.querySelector(".btn");

character.innerHTML = (`
    <span>Hair Type: <span class="generated">${rpgFunctions.generateHairType()},</span></span> 
    <span>Hair Color: <span class="generated">${rpgFunctions.generateHairColor()},</span></span> 
    <span>Eye Color: <span class="generated">${rpgFunctions.generateEyeColor()},</span></span> 
    <span>Race: <span class="generated">${rpgFunctions.generateRace()},</span></span> 
    <span>Class: <span class="generated">${rpgFunctions.generateClass()},</span></span> 
    <span>Sex: <span class="generated">${rpgFunctions.generateSex()}</span>!</span>
`);

// Button Generate New Character

button.addEventListener('click', () => {
    return character.innerHTML = (`
        <span>Hair Type: <span class="generated">${rpgFunctions.generateHairType()},</span></span> 
        <span>Hair Color: <span class="generated">${rpgFunctions.generateHairColor()},</span></span> 
        <span>Eye Color: <span class="generated">${rpgFunctions.generateEyeColor()},</span></span> 
        <span>Race: <span class="generated">${rpgFunctions.generateRace()},</span></span> 
        <span>Class: <span class="generated">${rpgFunctions.generateClass()},</span></span> 
        <span>Sex: <span class="generated">${rpgFunctions.generateSex()}</span>!</span>
    `);
});


const heroSection = document.querySelector("#hero");
const heroWidth = heroSection.getBoundingClientRect().width;
const heroHeight = heroSection.getBoundingClientRect().height;

let mouseX = 0, mouseY = 0;
let diceX0 = 0, diceY0 = 0, diceX = 0, diceY = 0, auxX = 0, auxY = 0;
let r =-10;
let b = 0.05;

// const smoothness = 0.5;
const smoothness = 0.05;

let isMouseMoving = false;
let idle;

function dicePosition(dice0, dice1, mouse, d) {
    let det = r ** 2 + 5 * r + 2;
    let x = dice1 - dice0;
    let du = (1.1 ** r) * (mouse + d - dice1);
    let diceX = dice1 + b * du;
    
    return diceX
}

// function diceYPosition(dice0, dice1, mouse) {
//     let det = r ** 2 + 5 * r + 2;
//     let x = dice1 - dice0;
//     let du = ((3 * r + 2) / det) * (mouse - dice1);
//     let diceX = dice1 + x + b * du;
    
//     return diceX
// }
    
    function updateDicePosition() {
        const dice = document.querySelector('.dice');
        
        if (isMouseMoving) {
            dice.style.transition = `none`
            auxX = diceX;
            auxY = diceY;
            diceX = dicePosition(diceX0, diceX, mouseX, 200);
            diceY = dicePosition(diceY0, diceY, mouseY, 0);
            diceX0 = auxX;
            diceY0 = auxY;
    } else {
        dice.style.transition = `all 1s ease-in-out`
        diceX = heroWidth / 2;
        diceY = heroHeight;
    }
    
    
    dice.style.transform = `translate(${diceX - 300}px, ${diceY - 95}px)`;
    
    requestAnimationFrame(updateDicePosition);
}

function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    isMouseMoving = true;

    clearTimeout(idle);
    
    idle = setTimeout(() => {
        isMouseMoving = false;
    }, 5000);
}

heroSection.addEventListener('mousemove', handleMouseMove);

updateDicePosition();








// const heroSection = document.querySelector("#hero");
// const heroWidth = heroSection.getBoundingClientRect().width;
// const heroHeight = heroSection.getBoundingClientRect().height;

// let mouseX = 0, mouseY = 0;
// let diceX = 0, diceY = 0;

// const smoothness = 0.05;

// let isMouseMoving = false;
// let idle;

// function lerp(start, end, s) {
//     return start + (end - start) * s;
// }


// function updateDicePosition() {
//     const dice = document.querySelector('.dice');
    
//     if (isMouseMoving) {
//         dice.style.transition = `none`
//         diceX = lerp(diceX, mouseX, smoothness) + 10;
//         diceY = lerp(diceY, mouseY, smoothness);
//     } else {
//         dice.style.transition = `all 1s ease-in-out`
//         diceX = heroWidth / 2;
//         diceY = heroHeight;
//     }
    
    
//     dice.style.transform = `translate(${diceX - 300}px, ${diceY - 95}px)`;
    
//     requestAnimationFrame(updateDicePosition);
// }

// function handleMouseMove(event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//     isMouseMoving = true;

//     clearTimeout(idle);
    
//     idle = setTimeout(() => {
//         isMouseMoving = false;
//     }, 2000);
// }

// heroSection.addEventListener('mousemove', handleMouseMove);

// updateDicePosition();