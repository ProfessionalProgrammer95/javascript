let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');
let blk = document.querySelector('#container');
let division = document.querySelector("div");
let dark = document.querySelectorAll(".dark");

function signal(){
    setTimeout(() => {
        red.style.backgrounColor = "red";
    }, 5000);
    setTimeout(() => {
        yellow.style.backgrounColor = "yellow";
        
    }, 4000);
    setTimeout(() => {
        green.style.backgrounColor = "green";
    }, 12000);
}
// setInterval(() => {
//     setTimeout(function(){
        
//     })
// }, interval);
// setInterval(() => {
//     if(trafficSignal = 0, trafficSignal > 2, trafficSignal++);
// }, 2000);
// let trafficSignalYellow = [
//     "dark",
//     "yellow"
// ];

// let trafficSignalGreen = [
//     "dark",
//     "green"
// ];

setInterval(function() {
    let colors = trafficSignal[Math.floor(Math.random() * trafficSignal.length)];
    division.setAttribute("class", colors );
}, 2000);

// setInterval(function() {
//     let secondSignal = trafficSignalYellow[Math.floor(Math.random() * trafficSignalYellow.length)];
//     division.setAttribute("id", secondSignal );
// }, 1000);

// setInterval(function() {
//     let thirdSignal = trafficSignalGreen[Math.floor(Math.random() * trafficSignalGreen.length)];
//     division.setAttribute("id", thirdSignal );
// }, 1000);
