const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  const minutes = chronometer.getMinutes();
    const secondsElapsed = chronometer.getSeconds();
    const formattedMinutes = chronometer.computeTwoDigitNumber(minutes);
    const formattedSeconds = chronometer.computeTwoDigitNumber(secondsElapsed);
    console.log(`Elapsed time: ${formattedMinutes}:${formattedSeconds}`);
}

function printMinutes() {
  // ... your code goes here
  const formattedMinutes1 = String(minutes).padStart(2, '0');

}

function printSeconds() {
  // ... your code goes here
  const formattedSeconds1 = String(seconds).padStart(2, '0');

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const seconds2 = Math.floor(milliseconds / 1000);
  const minutes2 = Math.floor(seconds / 60);
  const formattedMinutes2 = String(minutes).padStart(2, '0');
  const formattedSeconds2 = String(seconds % 60).padStart(2, '0');
  const formattedMilliseconds1 = String(milliseconds % 1000).padStart(3, '0');
  
}
  

function printSplit() {
  // ... your code goes here
  const seconds1 = Math.floor(milliseconds / 1000);
    const minutes1 = Math.floor(seconds / 60);
    const formattedMinutes3 = String(minutes).padStart(2, '0');
    const formattedSeconds3 = String(seconds % 60).padStart(2, '0');
    console.log(`Split time: ${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.textContent = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.textContent = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.textContent = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}


function setResetBtn() {
  // ... your code goes here
  btnRight.textContent = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
    // Start the chronometer
    chronometer.start(printTime);
    btnLeft.textContent = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
} else {
    // Stop the chronometer
    chronometer.stop();
    btnLeft.textContent = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {
    // Reset the chronometer
    chronometer.reset();
    printTime(0); // Update display to show 0:00
    btnRight.textContent = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
} else {
    // Get the split time
    const splitTime = chronometer.split();
    console.log(`Split time: ${splitTime}`);
}
});
