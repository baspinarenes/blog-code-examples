test("playground", async () => {
  const calledArguments = [
    [1, 2, 3],
    {
      name: "Sherlock",
      surname: "Holmes",
      job: "Consulting Detective",
      partner: "Dr. Watson",
    },
  ];

  expect(calledArguments).toEqual([
    expect.arrayContaining([1, 3]),
    expect.objectContaining({
      name: expect.anything(),
      job: expect.stringContaining("Detective"),
      partner: expect.any(String),
    }),
  ]);
});
