const body = document.getElementById("my-body");
//body.textContent = "new content";



function changeColorOdd() {
    const array = document.getElementsByClassName("text"); // not a single element but an array of elements
// I am asking JS to run the code in the block until the end of the array
for (let index = 0; index < array.length; index++) {
    if (index % 2 === 0) {
        array[index].style.color = "black";
    }
}
}

changeColorOdd();

const first = document.querySelector(".text"); // will select only first element of the selector
first.style.border = "1px solid red";

/* const all = document.querySelectorAll(".text"); // will select all elements of the selector to an array
all.forEach(element => {
    element.style.color = "purple";
}); */

first.innerHTML = "<b>hey this is something strong</b>"; //replace the text of the first paragraph
first.classList.add("myStyledParagraph"); // add a class to the element


function hide() {
    const remove = document.getElementById('pWithRemove');
    remove.style.display = "none";
}

function hideMe() {
    const buttonRemove = document.getElementById("buttonRemove");
    buttonRemove.style.display = "none";
}

const buttonRemove = document.getElementById("buttonRemove");
buttonRemove.addEventListener("click", function() { 
    hideMe();
});

// I can create a new element for my page in JS, it is created but not seen on the page
let newElement = document.createElement("div");
newElement.innerHTML = "<p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque numquam quibusdam, neque maxime.</p>";
// this way I have to attach it to the body or whereever I want it to show on my page
document.body.appendChild(newElement);

// I have to run the function again so I have the color change effect again
changeColorOdd();

