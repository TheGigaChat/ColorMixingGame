// ColorMixingGame
//functions
const askingTheName = () => {
    const userName = prompt("Hey! I see you first time. How I can call you?");
    const userNameTrimed = userName ? userName.trim()
    : null;
    if (userNameTrimed === null || userNameTrimed === "") {
        const text = "Hmm.. Guess a "
        const text2 = " is suitable for you🤔"
        return alert(text + nameArray + text2);
    } else {
        const text1 = "Wellcome, "
        const text2 = "👋"
        nameArray.splice(0,1,userNameTrimed);
        return alert(text1 + nameArray + text2);
    };
};
const goodbye = () => {
   return alert("Thanks for playing! See you soon👋");
};
const describingTheRulesForThePlayer = () => {
    alert("You have 3 basic colors 'red', 'blue', 'yellow'.");
    alert("Try to mix colors. Just write two colors with the comma ',' and see a result!😮");
    alert("And last thing. If you want to see, which colors you already have, click a 'cancel' button🅰");
};
const winning = () => {
    const text1 = "My congratulations ";
    const text2 = " with Winning!🥳";
    alert(text1 + nameArray[0] + text2);
    alert("Hope it was fun and bye👋");
};
const openGallery = () => {
    const textOne = "You alredy have a ";
    const textTwo = " colors! A total number is 12 colors.😨";
    const textOneTwo = textOne + changingColorsArray.length + textTwo;
    const textTree = "Colors in your palette ";
    const textTreeArray = textTree + changingColorsArray.fill("a",3,0);
    alert(textOneTwo);
    alert(textTreeArray);
};
const mixingRule = () => {
    //functions in the function
    const colorDoesNotExistAlert = () => {
        alert("I don't think that such kind of color will appropriate to your's color palette.🤔");
        alert("Try another colors!😉");
    };
    const newColorAlert = (newColor) => {
        let text2 = `Wow! You had added a new ${newColor} color to your's palette!😮`
        alert(text2);
    };
    const colorAlreadyExistInThePaletteAlert = (newColor) => {
        let text2 = `You already have the ${newColor} color in the palette!🤔`
        alert(text2);
    };
    const capitalizeFirstLetter = (newColor) => {
    return newColor.charAt(0).toUpperCase() + newColor.slice(1).toLowerCase();
    };

    //mixing system
    let newColor;
    if (colorsInput === "red, blue" || colorsInput === "blue, red") {
        if (changingColorsArray.indexOf("purple") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("purple"));

        } else {
            changingColorsArray.push("purple");
            newColorAlert(capitalizeFirstLetter("purple"));
        }
    } else if (colorsInput === "yellow, blue" || colorsInput === "blue, yellow") {
        if (changingColorsArray.indexOf("green") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("green"));

        } else {
            changingColorsArray.push("green");
            newColorAlert(capitalizeFirstLetter("green"));
        }
    } else if (colorsInput === "yellow, red" || colorsInput === "red, yellow") {
        if (changingColorsArray.indexOf("orange") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("orange"));

        } else {
            changingColorsArray.push("orange");
            newColorAlert(capitalizeFirstLetter("orange"));
        }
    } else if (colorsInput === "purple, red" || colorsInput === "red, purple") {
        if (changingColorsArray.indexOf("brickwall") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("brickwall"));

        } else {
            changingColorsArray.push("brickwall");
            newColorAlert(capitalizeFirstLetter("brickwall"));
        }
    } else if (colorsInput === "orange, red" || colorsInput === "red, orange") {
        if (changingColorsArray.indexOf("aerospace orange") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("aerospace orange"));

        } else {
            changingColorsArray.push("aerospace orange");
            newColorAlert(capitalizeFirstLetter("aerospace orange"));
        }
    } else if (colorsInput === "blue, green" || colorsInput === "green, blue") {
        if (changingColorsArray.indexOf("cerulean") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("cerulean"));

        } else {
            changingColorsArray.push("cerulean");
            newColorAlert(capitalizeFirstLetter("cerulean"));
        }
    } else if (colorsInput === "blue, purple" || colorsInput === "purple, blue") {
        if (changingColorsArray.indexOf("crysler blue") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("crysler blue"));

        } else {
            changingColorsArray.push("crysler blue");
            newColorAlert(capitalizeFirstLetter("crysler blue"));
        }
    } else if (colorsInput === "green, yellow" || colorsInput === "yellow, green") {
        if (changingColorsArray.indexOf("apple green") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("apple green"));

        } else {
            changingColorsArray.push("apple green");
            newColorAlert(capitalizeFirstLetter("apple green"));
        }
    } else if (colorsInput === "orange, yellow" || colorsInput === "yellow, orange") {
        if (changingColorsArray.indexOf("gold") != -1) {
            colorAlreadyExistInThePaletteAlert(capitalizeFirstLetter("gold"));

        } else {
            changingColorsArray.push("gold");
            newColorAlert(capitalizeFirstLetter("gold"));
        }
    } else {
        colorDoesNotExistAlert();
    }

};
const winningChecker = () => {
    const text1 = "My congratulations dear ";
    const text2 = "!🥳";

    const win = changingColorsArray.length === 12; 
    if (win) {
        alert("You crushed this game! It's was amazing!🤩");
        alert("Know you have the best Palette for your's arts.🎨");
        alert(text1 + nameArray + text2);
        winArray.push("win");
    };
};


// arrays
/* const basicColorsArray = ["red", "blue", "yellow"]; */
const winArray = [];
const changingColorsArray = ["red", "blue", "yellow"];
/* const finishColorsArray = ["red", "blue", "yellow", "purple", "green", "orange", "brickwall", "aerospace orange", "cerulean", "crysler blue", "apple green", "gold"]; */


// User's Name
const nameArray = ["PlayerOne"];
askingTheName();

/* console.log(typeof winningChecker()); */

let text1 = "Okay, ";
let text2 = "! Let's check your mixing abilities in the wonder 'ColorMixingGame🤯'";
const introduction = confirm(text1 + nameArray + text2);

//initialization
let colorsInput;

if (introduction) {
// start a game 
    describingTheRulesForThePlayer();
    while (true) {
        //winning check
        winningChecker()
        if (winArray.length === 0) {
            let text1 = "For example write: red, blue."
            colorsInput = prompt(text1);
            if (colorsInput === null) {
                //open gallery
                openGallery();
            } else {
                //check and result
                mixingRule(colorsInput);
            }
        } else {
            goodbye();
            break;
        }
    }

} else {
    goodbye()
};