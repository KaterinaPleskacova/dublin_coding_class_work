var name = "katerina";
var age = 33;
var houseNumber = "33"; 

if (name == age) {
    console.log("name and age equal");
} else {
    console.log("name and age do not equal");
}

if (houseNumber == age) {
    console.log("houseNumber and age are equal"); //double equals will compare only value, not type
} else {
    console.log("houseNumber and age are not equal")
}

if (houseNumber === age) {
    console.log("houseNumber and age are equal");
} else {
    console.log("houseNumber and age are not equal") //triple equals looks at type and value
}

if (name !== houseNumber) {
    console.log("yes they are different");
} else {
    console.log("they are equal");
}

