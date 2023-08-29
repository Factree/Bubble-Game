var bubbles = "";
var minB = 1 ;
var maxB = 400;
for(var i = 1; i<=maxB; i++){
    var rn = Math.floor(Math.random()* (maxB - minB +1)) + minB;
    bubbles += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = bubbles;