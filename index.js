let redlight = document.getElementById("stop");
let yellowLight = document.getElementById("Ready");
let GreenLight = document.getElementById("go");
let bulb1 = document.getElementById("red-bulb");
let bulb2 = document.getElementById("yellow-bulb");
let bulb3 = document.getElementById("green-bulb");




function lightstop(){
    redlight.style.backgroundColor = "#cf1124";
    yellowLight.style.backgroundColor = "#1f1d41"
    GreenLight.style.backgroundColor = "#1f1d41"
    bulb1.style.backgroundColor = "#cf1124";
    bulb2.style.backgroundColor = "#4b5069"
    bulb3.style.backgroundColor = "#4b5069"
    

}

function lightReady(){
    redlight.style.backgroundColor = "#1f1d41";
    yellowLight.style.backgroundColor = "#f7c948"
    GreenLight.style.backgroundColor = "#1f1d41"
    bulb1.style.backgroundColor = "#4b5069";
    bulb2.style.backgroundColor = "#f7c948";
    bulb3.style.backgroundColor = "#4b5069";
}

function lightGo(){
    redlight.style.backgroundColor = "#1f1d41";
    yellowLight.style.backgroundColor = "#1f1d41";
    GreenLight.style.backgroundColor = "#199473";
    bulb1.style.backgroundColor = "#4b5069";
    bulb2.style.backgroundColor = "#4b5069";
    bulb3.style.backgroundColor = "#199473";
}