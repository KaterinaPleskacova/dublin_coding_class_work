console.log("Hello world!");

var name = "Katerina"; // typeof - string  (set of characters, text)
console.log(typeof name);

var age = 33;
console.log(typeof age);

var salary = 454039.573
console.log(typeof salary);

var collection = [];
console.log(typeof collection);

var object = {
    name: "Katerina",
    age: 33,
    salary: 454039.573,
    collection: {},
    address: null,
};


// flow programming logic
if(object.age > 18) {
    console.log(`you can drink a guiness`);
} else {
    console.log(`you cannot drink`);
}

function checkAge(age) {
    if(object.age > 18) {
        console.log(`you can drink a guiness`);
    } else {
        console.log(`you cannot drink`);
    }
}

console.log(typeof object);
// console.log(object.address.line1); - this is not a defined value because address is null

console.log(JSON.stringify(object));

let messageToEditor = "Hello World";
console.log(messageToEditor);

messageToEditor = "another value";
console.log(messageToEditor);

let messagetoeditor = "Goodbye Moon";
console.log(messagetoeditor);

const message = "Hello";
// message = "World"; - I cannot reassign values for const