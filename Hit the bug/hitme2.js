var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box5");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var boardBox = document.getElementById("Board");
var box = document.querySelector(".box");
var bug = document.querySelector(".bug");

function showBugRandomly() {

    var bugPosition = Math.floor(Math.random() * 9) + 1;

    if (bugPosition == 1) {
        document.getElementById("bug1").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug1").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 2) {
        document.getElementById("bug2").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug2").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 3) {
        document.getElementById("bug3").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug3").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 4) {
        document.getElementById("bug4").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug4").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 5) {
        document.getElementById("bug5").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug5").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 6) {
        document.getElementById("bug6").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug6").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 7) {
        document.getElementById("bug7").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug7").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 8) {
        document.getElementById("bug8").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug8").style.visibility = "hidden"
        }, 600);
    }
    if (bugPosition == 9) {
        document.getElementById("bug9").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("bug9").style.visibility = "hidden"
        }, 600);
    }
}

//Remaining time
const startMinuts = 1;
let time = startMinuts * 59;
var count = 0;
const countdown = document.getElementById("Time");
function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    countdown.innerHTML = `Remaining Time ${minutes}:${seconds}`;
    showBugRandomly();                                                             //calling the bug randomly
    count = count + 1;
    //console.log("count" + count)
    if (count == 60) {                                                             //if count touches to 60 than board will no more visible to play
        boardBox.style.display = "none"
        countdown.style.display = "none"
    }
    time = time - 1;
}
setInterval(updateCountDown, 1000);

//Scoreboard
var score = -1;
var totalScore = document.getElementById("ts");
function updateScore() {
    score = score + 1;
    totalScore.innerHTML = score;
    //console.log("Score: " + score);
}
updateScore();

