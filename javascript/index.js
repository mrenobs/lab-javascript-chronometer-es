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
  const seconds = chronometer.getSeconds();
  const formattedMinutes = chronometer.computeTwoDigitNumber(minutes);
  const formattedSeconds = chronometer.computeTwoDigitNumber(seconds);

  document.getElementById('minUniElement').innerText = formattedMinutes;
  document.getElementById('secUniElement').innerText = formattedSeconds;
}

function printMinutes() {
  // ... your code goes here
  const formattedMinutes = String(minutes).padStart(2, '0');
  console.log(`Elapsed time (minutes): ${formattedMinutes}`);
}

function printSeconds() {
  // ... your code goes here
  const formattedSeconds = String(seconds).padStart(2, '0');
  console.log(`Elapsed time (seconds): ${formattedSeconds}`);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.getMilliseconds();
  const formattedMilliseconds = String(milliseconds).padStart(3, '0');

  document.getElementById('milliseconds').innerText = formattedMilliseconds;
  
}
  

function printSplit() {
  // ... your code goes here
  const milliseconds = chronometer.getMilliseconds();
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds % 60).padStart(2, '0');

  document.getElementById('split-minutes').innerText = formattedMinutes;
  document.getElementById('split-seconds').innerText = formattedSeconds;
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.textContent = "STOP";
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop");
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.textContent = "SPLIT";
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = "START";
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
}


function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = "RESET";
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains("start")) {
    // Start the chronometer
    chronometer.start(printTime);
    btnLeftElement.textContent = "STOP";
    btnLeftElement.classList.remove("start");
    btnLeftElement.classList.add("stop");
    setStopBtn();
} else {
    // Stop the chronometer
    chronometer.stop();
    btnLeftElement.textContent = "START";
    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
    setStartBtn();
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains("reset")) {
    // Reset the chronometer
    chronometer.reset();
    printTime(); // Update display to show 0:00
    btnRightElement.textContent = "SPLIT";
    btnRightElement.classList.remove("reset");
    btnRightElement.classList.add("split");
    setSplitBtn();
    clearSplits();
} else {
    // Get the split time
    const splitTime = chronometer.split();
    console.log(`Split time: ${splitTime}`);
    const listItem = document.createElement("li");
    listItem.textContent = splitTime;
    splitsElement.appendChild(listItem);
    
}
});


