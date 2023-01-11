function callbackRunner() {
  setTimeout(() => {
    console.log("Called callback 1.");

    setTimeout(() => {
      console.log("Called child callback 1.");
    }, 5000);
  }, 3000);

  setTimeout(() => {
    console.log("Called callback 2.");

    setTimeout(() => {
      console.log("Called child callback 2.");

      setTimeout(() => {
        console.log("Called childest callback 1.");
      }, 1000);
    }, 1000);

    setTimeout(() => {
      console.log("Called child callback 3.");
    }, 1000);
  }, 3000);
}

export default callbackRunner;
