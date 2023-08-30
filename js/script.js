

var timer = 60;
var score = 0;
var hitRnd = 0;
var rn;

function incrScore() {
  score += 10;
  document.querySelector("#scr").textContent = score;
};

function makeBubble() {
    var bubbles = "";
    var minB = 1 ;
    var maxB = 400;
    for(var i = 1; i<=maxB; i++){
        rn = Math.floor(Math.random()* (maxB - minB +1)) + minB;
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = bubbles; 
};

function getNewHit() {
    hitRnd = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRnd;
};

function runTimer() {
    var setTimer = setInterval(function (){
        if(timer > 0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
    }
    else{
        clearInterval(setTimer);
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over !!!</h1>`;
      }
    }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", 
    function(detail) {
        var clickedNo = Number(detail.target.textContent); 
        if(clickedNo === hitRnd){
            incrScore();
            makeBubble();
            getNewHit();
        }

    });

    getNewHit();
runTimer();
makeBubble();
// incrScore();