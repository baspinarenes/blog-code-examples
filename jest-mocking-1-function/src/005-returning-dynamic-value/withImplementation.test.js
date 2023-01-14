test("playground", () => {
  const mockMethod = jest.fn(() => "outside callback");

  console.log(mockMethod());

  mockMethod.withImplementation(
    // temporary implementation for the mock function
    () => "inside callback",
    // the scope in which the implementation will be applied
    () => {
      console.log(mockMethod());
    }
  );

  console.log(mockMethod());
});
