class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    if (callback) {
      const incrementTime = () => {
          this.currentTime += 1;
          callback(this.currentTime);
      };
      this.intervalId = setInterval(incrementTime, 1000);
  } else {
      this.intervalId = setInterval(() => {
          this.currentTime += 1;
      }, 1000);
  }
}
     
 
  

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return string(value).padSTart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.setIntervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const formattedMinutes = this.computeTwoDigitNumber(minutes);
    const formattedSeconds = this.computeTwoDigitNumber(seconds);
    return  `${formattedMinutes}:${formattedSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
