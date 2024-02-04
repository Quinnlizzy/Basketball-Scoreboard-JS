let homePoints = 0;
let awayPoints = 0;

let homeScore = document.getElementById('homescore');
let awayScore = document.getElementById('awayscore');

function home1point() {
    homePoints = homePoints + 1;
    homeScore.innerHTML = homePoints;
}

function home2points() {
    homePoints = homePoints + 2;
    homeScore.innerHTML = homePoints;
}

function home3points() {
    homePoints = homePoints + 3;
    homeScore.innerHTML = homePoints;
}

function away1point() {
    awayPoints = awayPoints + 1;
    awayScore.innerHTML = awayPoints;
}

function away2points() {
    awayPoints = awayPoints + 2;
    awayScore.innerHTML = awayPoints;
}

function away3points() {
    awayPoints = awayPoints + 3;
    awayScore.innerHTML = awayPoints;
}

function endGame() {
    homePoints -= homePoints;
    homeScore.innerHTML = homePoints;
    awayPoints -= awayPoints;
    awayScore.innerHTML = awayPoints;
}