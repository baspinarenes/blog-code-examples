test("playground", () => {
  console.log("original Implementation:", Math.random.toString());
  Math.random = jest.fn();
  console.log("mock Implementation:", Math.random.toString());
});
