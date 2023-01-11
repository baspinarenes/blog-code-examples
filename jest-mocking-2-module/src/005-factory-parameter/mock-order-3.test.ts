import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn().mockResolvedValueOnce("Mock in module factory"),
  };
});

const mockedAxios = jest.mocked(axios);

test("playground", async () => {
  const apiUrl = "https://dummyjson.com";

  mockedAxios.get.mockResolvedValue("Mock in test");
  console.log(await mockedAxios.get(apiUrl)); // Output: Mock in module factory
  console.log(await mockedAxios.get(apiUrl)); // Output: Mock in test
});
