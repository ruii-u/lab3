

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

function showStoryOne() {
    image1.src = "images/overgrown.png";
    image2.src = "images/gardening.png";
    image3.src = "images/bloom.png";

    text1.innerHTML="The garden had been forgotten and covered in weeds."
    text2.innerHTML="Two gardeners began clearing the garden and planting flowers."
    text3.innerHTML="With their care, the garden came back to life in full bloom!!"
}

function showStoryTwo() {
    image1.src = "images/gardening.png";
    image2.src = "images/bloom.png";
    image3.src = "images/overgrown.png";

    text1.innerHTML="Two gardeners worked together to create a beautiful garden."
    text2.innerHTML="Their hard work paid off as the flowers bloomed."
    text3.innerHTML="Over time, the garden was forgotten and began to look like a forbidden place."
}

let btn1 = document.getElementById("story-one");
btn1.addEventListener("click", showStoryOne);


let btn2 = document.getElementById("story-two");
btn2.addEventListener("click", showStoryTwo);