

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceOne() {
    image1.src = "images/overgrown.png";
    image2.src = "images/gardening.png";
    image3.src = "images/bloom.png";
}

function showSequenceTwo() {
    image1.src = "images/gardening.png";
    image2.src = "images/bloom.png";
    image3.src = "images/overgrown.png";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);