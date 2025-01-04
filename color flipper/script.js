const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}






























// const body = document.getElementsByTagName("body")[0]
// body.style.background = "white"

// function changeColor (name){
//     body.style.backgroundColor = name;
// }
// document.getElementById("green").onclick = () => changeColor("green");
// document.getElementById("red").onclick = () => changeColor("red");
// document.getElementById("blue").onclick = () => changeColor("blue");
// document.getElementById("yellow").onclick = () => changeColor("yellow");

// function randomColor() {
//     const red = Math.round(Math.random() * 255)
//     const green = Math.round(Math.random() * 255)
//     const blue = Math.round(Math.random() * 255)

//     const color = `rgb(${red}, ${green}, ${blue})`
    
//     body.style.backgroundColor = color;
// }

// randomColor()