const today = new Date();
console.log("Today is ", today.getDay());

switch(today.getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
}

/* var person = {
    name: String,
    age: Number,
}; */


// new operation is used to create a new instance of a specific object
//const p1 = new person("Katerina", 33)

// OOP - Object Oriented Programming
//interfaces, method, classes, inheretance, design patters, reusabilit, poliforms


const myDate = new Date('1991-02-14');
const dayOfWeek = myDate.getDay();

let dayName;


switch(dayOfWeek) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
}
console.log(myDate, "was on", dayName);



function multiply(a, b, c) {
    result = a * b * c
    return result
};

console.log(multiply(3, 2, 3));


function reverseWordOrder(value) {
    const stringArray = value.split(" ");

    const reversedArray = stringArray.reverse();

    const reversedString = reversedArray.join(" ");

    return reversedString;
};

console.log(reverseWordOrder("I hope this actually works"));

function logUserData(personName, age) {
    console.log(`User ${personName} is ${age} years old`);
};

logUserData("Katerina", 33);