let node = {
    people: 5
};

// array starts with position 0, we have four positions
const tram = [node, node, node, node];

console.log(tram);

for (let position = 0; position <= tram.length - 1; position++) {
    console.log(`check bad behavior at node:${position}`,  tram[position]);
}


function checkQualityUserCamera(num) {
    // doesnt matter how this function works
    console.log("I am checking your products now", num);
}

const products = [1, 2, 3, 4, 5, 6, 7];

//position = 0
//num = position
//num = 0 - and so on 

for (let position = 0; position < products.length; position++) {
    checkQualityUserCamera(position);
}