// Loops operation - if you need anoperation and you need to repeat it a number of times,
// we need to use loops for that

for (let i = 0; i < 10; i++) {
    console.log("repeat: " + i);
}

let count = 0;

while (count < 5) {
    console.log("count: " + count);
    count++;
}

//count 0
//count = 0 + 1

//count = 1
//count = 1 + 1 // 2

//count = 2
//count = 2 + 1 // 3
count = (count + 1);

/* while (count > 0 OR true) -- this will take up all of your PC's memory and processor,
will count forever and will freeze your PC */

console.log("this cannot be shown until count is 5");

let num = 0;

// you  first execute a piece of code and then place the condition
do {
    console.log("I am first executed: " + num);
    num++;
}
    while (num <= 5);


// in the flow of the for operation I can add if statements
// 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // the operation will be disrupted at this point
    }
    if (i % 2 === 0) {
    console.log("even number: " + i)
    continue;
    }
}

function getDiscount(price, day) {
    const fee = 1;
    switch (day) {
        case "Monday":
            price = (price / 100) * 90;
            break;
        default:
            price = price + fee;
            break;
    }
    return price;
}

const finalPrice = getDiscount(1000, "Monday");
console.log("final price on a specific day:", finalPrice);

console.log(getDiscount(1000, "Monday"));
console.log(getDiscount(1000, "Tuesday"));