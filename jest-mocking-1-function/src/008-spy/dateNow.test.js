test("playground", () => {
  const dateNowSpy = jest.spyOn(Date, "now");

  console.log("mocked function:", Date.now);
  console.log("first call return value:", Date.now());

  dateNowSpy.mockReturnValueOnce(500);

  console.log("second call return value:", Date.now());
  console.log("third call return value:", Date.now());
});
