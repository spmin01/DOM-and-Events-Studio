// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeoffButton = null;
let landButton = null;
let abortButton = null;
let shuttleBackground = null;
let spaceShuttleHeight = null;
let flightStatus = null;

function init() {
    takeoffButton = document.getElementById("takeoff");
    shuttleBackground = document.getElementById("shuttleBackground");
    flightStatus = document.getElementById("flightStatus");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        
    takeoffButton.addEventListener("click", function(event) {
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(input) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
    });
}

window.onload = init;