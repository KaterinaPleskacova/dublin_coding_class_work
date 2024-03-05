var person = {
    name: 'katerina',
    age: 33,
    salary: 23459493773950503500000
}

checkAge(person.age);

console.log(person.salary.toFixed(2));

//class work:

var firstName = "Katerina";
var lastName = "Pleskacova";
var fullName = firstName + " " + lastName;

console.log(fullName);

var text = "Dublin Coding School";

console.log(text.replace("Coding", "CODING"));
console.log(text);

var text2 = "Dublin Coding School";
var words = text2.split(" ");
var reverseWords = words.reverse();
var reversedString = reverseWords.join(" ");

console.log(reversedString);