export default function setupTimeouts() {
  setTimeout(() => {
    console.log("Called callback 1."); // 3000ms ✓

    setTimeout(() => {
      console.log("Called child callback 1."); // 3000ms + 5000ms = 8000ms ⨉
    }, 5000);
  }, 3000);

  setTimeout(() => {
    console.log("Called callback 2."); // 3000ms ✓

    setTimeout(() => {
      console.log("Called child callback 2."); // 3000ms + 1000ms = 4000ms ✓

      setTimeout(() => {
        console.log("Called childest callback 1."); // 3000ms + 1000ms + 1000ms = 5000ms ⨉
      }, 1000);
    }, 1000);

    setTimeout(() => {
      console.log("Called child callback 3."); // 3000ms + 1000ms = 4000ms ✓
    }, 1000);
  }, 3000);
}
