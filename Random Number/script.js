let xLabel = document.getElementById("xLabel");
let yLabel = document.getElementById("yLabel");
let zLabel = document.getElementById("zLabel");

let generate = document.getElementById("submit");
generate.onclick = function(){
    let x = Math.floor(Math.random() * 5) + 1
    let y = Math.floor(Math.random() * 5) + 1
    let z = Math.floor(Math.random() * 5) + 1
    

    xLabel.innerHTML = "X: " + x;
    yLabel.innerHTML = "Y: " + y;
    zLabel.innerHTML = "Z: " + z;

};