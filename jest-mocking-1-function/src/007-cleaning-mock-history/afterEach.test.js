describe("playground", () => {
  afterEach(() => {
    Math.random.mockRestore();
  });

  test("test 1", () => {
    Math.random = jest.fn().mockReturnValue(55);

    console.log("first random value:", Math.random());
    console.log("second random value:", Math.random());

    console.log(Math.random.mock.calls.length);
  });

  test("test 2", () => {
    console.log("third random value:", Math.random());
    console.log("fourth random value:", Math.random());

    console.log(Math.random.mock.calls.length);
  });
});
