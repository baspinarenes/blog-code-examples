test("playground", () => {
  jest.spyOn(global.Date, "now");
  console.log("first call return value: ", Date.now());

  global.Date.now.mockImplementation(() => "Hacked by crazyboy!");
  console.log("second call return value: ", Date.now());
  console.log("third call return value: ", Date.now());

  global.Date.now.mockRestore();
  console.log("fourth call return value: ", Date.now());
});
