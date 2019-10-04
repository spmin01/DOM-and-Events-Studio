// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeoffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");

    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");

    let shuttleImage = document.getElementById("rocket");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    let shuttlePosition = 0;

    takeoffButton.addEventListener("click", function() {
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (input) {
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

        if (input) {
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