test("playground", () => {
  const mockFunction = jest
    .fn()
    .mockReturnValue("other calls")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  for (let index = 0; index < 5; index++) {
    console.log("mockedProduct", mockFunction());
  }
});
