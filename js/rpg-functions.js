
// Hair

const hairTypeList = ['Curly', 'Wavy', 'Straight', 'Bald'];

function generateHairType() {
    let randomHairType = Math.floor(Math.random() * 4);
    const hairType = hairTypeList[randomHairType];
    return hairType;
}

const hairColorList = ['Black', 'Brown', 'Blonde', 'White', 'Ginger'];

function generateHairColor() {
    let randomHairColor = Math.floor(Math.random() * 5);
    const hairColor = hairColorList[randomHairColor];
    return hairColor;
}

// Eyes

const eyeColorList = ['Black', 'Blue', 'Green', 'Grey', 'Purple', 'Red', 'White', 'Brown', 'Yellow', 'Pink', 'Orange'];

function generateEyeColor() {
    let randomEyeColor = Math.floor(Math.random() * 11);
    const eyeColor = eyeColorList[randomEyeColor];
    return eyeColor;
}

// Race

const raceList = ['Elf', 'Human', 'Orc', 'Dwarf', 'Night Elf', 'DragonBorn', 'Fairy', 'Goblin', 'Half'];

function generateRace() {
    let randomRace = Math.floor(Math.random() * 9);
    const race = raceList[randomRace];
    if (race === 'Half') {
        let randomHalfMainRace = Math.floor(Math.random() * 8);
        const halfMainRace = raceList[randomHalfMainRace];
        let randomHalfSecondRace = Math.floor(Math.random() * 8);
        const halfSecondRace = raceList[randomHalfSecondRace];

        if (randomHalfMainRace === randomHalfSecondRace) {
            return halfMainRace;
        } else {
            const combinedRace = halfMainRace + ' and ' + halfSecondRace;
            return combinedRace;
        }
    }
    return race;
}

// Class

const classList = ['Soldier', 'Knight', 'Barbarian', 'Paladin', 'Black Mage', 'White Mage', 'Red Mage', 'Rogue', 'Archer', 'Engineer', 'Fighter', 'Summoner', 'Tamer', 'No Class', 'More Than 1 Class'];

function generateClass() {
    let randomClass = Math.floor(Math.random() * 15);
    const classType = classList[randomClass];

    if (classType === 'More Than 1 Class') {
        let randomDice = Math.floor(Math.random() * 6 + 1);
        let randomNegativeDice = Math.floor(Math.random() * 7 + 1);
        const dice = randomDice - randomNegativeDice;

        // Condition to 2 classes
        if (dice > -3) {
            let randomFirstClass = Math.floor(Math.random() * 13);
            let randomSecondClass = Math.floor(Math.random() * 13);

            if (randomFirstClass === randomSecondClass) {
                return classList[randomFirstClass];
            }

            const multiClassType = classList[randomFirstClass] + ' and ' + classList[randomSecondClass];
            return multiClassType;
        }
        
        if (dice === -3) {
            return 'Your character have 2 classes of your choice';
        }
        
        // Condition to 3 classes
        if (dice >= -5) {
            
            const randomClasses = [];
            while (randomClasses.length < 3) {
                const randomClass = Math.floor(Math.random() * 13);
                if (!randomClasses.includes(randomClass)) {
                    randomClasses.push(randomClass);                    
                }
            }

            if (randomClasses.length === 1) {
                return classList[randomClasses[0]];
            }

            if (randomClasses.length === 2) {
                return classList[randomClasses[0]] + ' and ' + classList[randomClasses[1]];
            }
            
            return classList[randomClasses[0]] + ', ' + classList[randomClasses[1]] + ' and ' + classList[randomClasses[2]];
            
        }
        
        if (dice === -6) {
            const luck = Math.floor(Math.random() * 2);
            const randomNumber = Math.floor(Math.random() * 1000000);
            
            if (luck === 1) {
                if (randomNumber === 1436) {
                    return 'Your character have the ability to have all the classes';
                }
                
                return 'Your character have 3 classes of your choice';
            }
            
            return 'Your character have 2 classes of your choice';
        }
    }
    return classType;
}

// Sex

const sexList = ['Male', 'Female'];

function generateSex() {
    let randomSex = Math.floor(Math.random() * 2);
    const sex = sexList[randomSex];
    return sex;
}


// Export functions as an object
export const rpgFunctions = {
    generateHairType,
    generateHairColor,
    generateEyeColor,
    generateRace,
    generateClass,
    generateSex,
}