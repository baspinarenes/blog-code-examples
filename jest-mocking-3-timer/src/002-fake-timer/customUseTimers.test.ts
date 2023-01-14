jest.useFakeTimers({
  now: new Date(1999, 2, 21),
  doNotFake: ["setInterval"],
});

test("playground", () => {
  console.log("setTimeout:", setTimeout.toString());
  console.log("setInterval:", setInterval.toString());
  console.log("Date.now:", new Date(Date.now()));
});
