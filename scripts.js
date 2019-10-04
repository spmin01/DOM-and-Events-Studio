// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeoffButton = null;
let landButton = null;
let abortButton = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;


let shuttleImage = null;
let shuttleBackground = null;
let spaceShuttleHeight = null;
let flightStatus = null;

function init() {
    takeoffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");
    
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    leftButton = document.getElementById("left");
    rightButton = document.getElementById("right");
    
    shuttleImage = document.getElementById("rocket");
    shuttleBackground = document.getElementById("shuttleBackground");
    flightStatus = document.getElementById("flightStatus");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
    let shuttlePosition = 0;
        
    takeoffButton.addEventListener("click", function() {
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");
        
        if(input) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
    });
    
    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    });
    
    abortButton.addEventListener("click", function() {
        let input = window.confirm("Confirm that you want to abort the mission.");
        
        if(input) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    });
    
    upButton.addEventListener("click", function() {
        let currentHeight = Number(spaceShuttleHeight.innerHTML);
        currentHeight += 10000;
        spaceShuttleHeight.innerHTML = String(currentHeight);
    });
    
    downButton.addEventListener("click", function() {
        let currentHeight = Number(spaceShuttleHeight.innerHTML);
        currentHeight -= 10000;
        spaceShuttleHeight.innerHTML = String(currentHeight);
    });
    
    leftButton.addEventListener("click", function() {
        shuttlePosition -= 10;
        shuttleImage.style.left = String(shuttlePosition) + 'px';
    });
    
    rightButton.addEventListener("click", function() {
        shuttlePosition += 10;
        shuttleImage.style.left = String(shuttlePosition) + 'px';
    });
    
}

window.onload = init;