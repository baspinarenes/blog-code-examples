function callAfterThreeSeconds(callback: () => void) {
  setTimeout(() => {
    callback();
  }, 3000);
}

export default callAfterThreeSeconds;
