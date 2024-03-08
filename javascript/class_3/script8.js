let input = "Thursday";
let age = 40;

// AND &&

// true + false = false
if (age === 40 && input === "Monday") {
    console.log("You will never reach this place");
} else {
    console.log("Looks like your input is not Thursday");
};

// true + true = true
if (age === 40 && input === "Thursday") {
    console.log("Okay, your data matches your condition");
} else {
    console.log("You will never reach this place");
};

// false + true = false
if (age === 33 && input === "Thursday") {
    console.log("You will never reach this place");
} else {
    console.log("Looks like your age is different than 40");
};

// true + true = true
if (age !== 33 && input !== "Monday") {
    console.log("Okay, you got it right again.");
} else {
    console.log("Looks like your age is different than 40");
};

// false + false = false
if (age === 33 && input === "Monday") {
    console.log("You will never reach this place");
} else {
    console.log("Both your data is wrong");
};

// OR ||
// ! not

const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const isValentinesDay = month === 2 && date === 14;

if (isValentinesDay) {
    console.log('Today is Valetines Day')
} else {
    console.log(`Today is not Valentines day. Today is ${today}`);
};

if (month === 2 && date === 14) {
    console.log('Today is Valentines');
} else {
    console.log(`Today is not Valentines day. Today is ${today}`);
};

function reversedOrder(value) {

    const yourWords = value.split(" ");

    if (yourWords.length <=2 || yourWords.length > 10) {
        return value;
    } else {
        const reversedWords = yourWords.reverse();
        const newWords = reversedWords.join(" ");
        return newWords;
    }

};

console.log(reversedOrder('Does it work really?'));
console.log(reversedOrder('Does it?'));

function logEvent(eventName, occured) {

    const today = new Date();
    const eventDate = new Date(occured);

    if (eventDate <= today) {
        console.log(`Event ${eventName} occured on ${occured}`);
    } else {
        console.log(`Event ${eventName} is planned for ${occured}`);
    }
};

logEvent("computer restart", '2024-03-08');
logEvent("last login", '2024-03-06');
 