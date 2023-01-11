import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn().mockResolvedValue("Mock in module factory"),
  };
});

const mockedAxios = jest.mocked(axios);

test("playground", async () => {
  const apiUrl = "https://dummyjson.com";

  mockedAxios.get.mockResolvedValueOnce("Mock in test");
  console.log(await mockedAxios.get(apiUrl)); // Output: Mock in test
  console.log(await mockedAxios.get(apiUrl)); // Output: Mock in module factory
});
