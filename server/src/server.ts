import cors from "cors";
import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 1436

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({
    origin: "https://igordgomes.github.io",
    methods: "POST",
}));

const options = {
    hairType: ['Curly', 'Wavy', 'Straight', 'Bald'],
    hairColor: ['Black', 'Brown', 'Blonde', 'White', 'Ginger'],
    eyeColor: ['Black', 'Blue', 'Green', 'Grey', 'Purple', 'Red', 'White', 'Brown', 'Yellow', 'Pink', 'Orange'],
    race: ['Elf', 'Human', 'Orc', 'Dwarf', 'Night Elf', 'DragonBorn', 'Fairy', 'Goblin', 'Half'],
    classSelection: ['Soldier', 'Knight', 'Barbarian', 'Paladin', 'Black Mage', 'White Mage', 'Red Mage', 'Rogue', 'Archer', 'Engineer', 'Fighter', 'Summoner', 'Tamer', 'No Class', 'More Than 1 Class'],
    sex: ['Male', 'Female']
}

app.post("/", (req: Request, res: Response) => {
    try {
        const selectedAttr = ["hairType", "hairColor", "eyeColor", "race", "classSelection", "sex"];
        const responseData: { [key: string]: string } = {};

        selectedAttr.forEach((attr) => {
            switch (req.body[attr]) {
                case "selected":
                    responseData[attr] = options[attr][Math.floor(Math.random() * options[attr].length)];
                    break;

                case undefined:
                    responseData[attr] = "";
                    break;

                default:
                    break;
            }
        })

        if (responseData.race.trim().toLowerCase() == "half") {
            let randomHalfMainRace = Math.floor(Math.random() * (options.race.length - 1));
            const halfMainRace = options.race[randomHalfMainRace];
            let randomHalfSecondRace = Math.floor(Math.random() * (options.race.length - 1));
            const halfSecondRace = options.race[randomHalfSecondRace];

            if (randomHalfMainRace === randomHalfSecondRace) {
                console.log("Better luck next time!");
                responseData.race = halfMainRace;
            } else {
                const combinedRace = `${halfMainRace} and ${halfSecondRace}`;
                responseData.race = combinedRace;
            }
        }

        if (responseData.classSelection.trim().toLowerCase() == "more than 1 class") {
            let randomDice = Math.floor(Math.random() * 6 + 1);
            let randomNegativeDice = Math.floor(Math.random() * 7 + 1);
            const dice = randomDice - randomNegativeDice;

            // Condition to 2 classes
            if (dice > -3) {
                let randomFirstClass = Math.floor(Math.random() * 13);
                let randomSecondClass = Math.floor(Math.random() * 13);

                if (randomFirstClass === randomSecondClass) {
                    responseData.classSelection = options.classSelection[randomFirstClass];
                }

                const multiClassType = options.classSelection[randomFirstClass] + ' and ' + options.classSelection[randomSecondClass];
                responseData.classSelection = multiClassType;
            }

            if (dice === -3) {
                responseData.classSelection = 'Your character have 2 classes of your choice';
            }

            // Condition to 3 classes
            if (dice >= -5) {

                let randomClasses = [];
                while (randomClasses.length < 3) {
                    let randomClass = Math.floor(Math.random() * 13);
                    if (!randomClasses.includes(randomClass)) {
                        randomClasses.push(randomClass);
                    }
                }

                if (randomClasses.length === 1) {
                    responseData.classSelection = options.classSelection[randomClasses[0]];
                }

                if (randomClasses.length === 2) {
                    responseData.classSelection = options.classSelection[randomClasses[0]] + ' and ' + options.classSelection[randomClasses[1]];
                }

                responseData.classSelection = options.classSelection[randomClasses[0]] + ', ' + options.classSelection[randomClasses[1]] + ' and ' + options.classSelection[randomClasses[2]];

            }

            if (dice === -6) {
                const luck = Math.floor(Math.random() * 2);
                const randomNumber = Math.floor(Math.random() * 1000000);

                if (luck === 1) {
                    if (randomNumber === 1436) {
                        responseData.classSelection = 'Your character have the ability to have all the classes';
                    }

                    responseData.classSelection = 'Your character have 3 classes of your choice';
                }

                responseData.classSelection = 'Your character have 2 classes of your choice';
            }
        }

        return res.status(201).json(responseData);
    } catch (error) {
        console.error("An error occurred: ", error);

        return res.status(500).json({ error: `An error occurred on the server: ${error}` });
    }
});

app.listen(port, () => {
    console.log("Server running on port 1436! \nCORS enabled");
});
