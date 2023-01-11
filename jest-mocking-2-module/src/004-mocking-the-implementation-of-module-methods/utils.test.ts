import axios from "axios";
import * as UtilsModule from "./utils";

// mock axios package.
jest.mock("axios");

// wrap jest mock method types to package.
const mockedAxios = jest.mocked(axios);

describe("utils tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get() tests", () => {
    test("should return product when request is success", async () => {
      const apiUrl = "https://dummyjson.com/product/1";
      const mockProduct = {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
      };

      // make the axios.get function return mock data.
      mockedAxios.get.mockResolvedValueOnce({
        data: mockProduct,
      });

      // call the function we are going to test.
      const result = await UtilsModule.get(apiUrl);

      expect(mockedAxios.get).toHaveBeenCalledWith(apiUrl);
      expect(result).toStrictEqual(mockProduct);
    });

    test("should return null when request is failed", async () => {
      const apiUrl = "https://dummyjson.com/product/1000";

      mockedAxios.get.mockRejectedValueOnce(new Error("Error occured when fetching data!"));

      const result = await UtilsModule.get(apiUrl);

      expect(mockedAxios.get).toHaveBeenCalledWith(apiUrl);
      expect(result).toBeNull();
    });
  });
});
