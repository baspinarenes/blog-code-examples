export default function setupTimeouts() {
  setTimeout(() => {
    console.log("called callback 1.");

    setTimeout(() => {
      console.log("called child callback 1.");
    }, 5000);
  }, 3000);

  setTimeout(() => {
    console.log("called callback 2.");

    setTimeout(() => {
      console.log("called child callback 2.");

      setTimeout(() => {
        console.log("called childest callback 1.");
      }, 1000);
    }, 1000);
  }, 3000);
}
