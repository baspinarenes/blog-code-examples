test("playground", () => {
  jest.useFakeTimers();
  console.log("FAKES\n-------");
  console.log("setTimeout():", setTimeout.toString());
  console.log("setInterval():", setInterval.toString());
  console.log("Date.now():", Date.now.toString());

  jest.useRealTimers();
  console.log("REALS\n-------");
  console.log("setTimeout():", setTimeout.toString());
  console.log("setInterval():", setInterval.toString());
  console.log("Date.now():", Date.now.toString());
});
