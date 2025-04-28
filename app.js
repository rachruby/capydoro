
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 3; //# of seconds in 25 minutes
let interval; //constantly assigning time

// function that updates the timer
const updateTimer = () => {
    //turn minutes into seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2, "0")}`;
    //note padStart() only works with string

};

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0)
        {
            clearInterval(interval);
            alert("Time's up, treat yourself with a break :)");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

