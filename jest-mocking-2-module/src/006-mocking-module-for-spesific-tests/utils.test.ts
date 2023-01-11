import axios from "axios";
import * as UtilsModule from "./utils";

jest.mock("./utils");
jest.mock("axios", () => {
  return {
    get: jest.fn().mockRejectedValue(new Error("Error occured when fetching data!")),
  };
});

const mockedUtils = jest.mocked(UtilsModule);
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

      mockedAxios.get.mockResolvedValueOnce({
        data: mockProduct,
      });

      const result = await UtilsModule.get(apiUrl);

      expect(mockedAxios.get).toHaveBeenCalledWith(apiUrl);
      expect(result).toStrictEqual(mockProduct);
    });

    test("should return null when request is failed", async () => {
      const apiUrl = "https://dummyjson.com/product/1000";

      const result = await UtilsModule.get(apiUrl);

      expect(mockedAxios.get).toHaveBeenCalledWith(apiUrl);
      expect(result).toBeNull();
    });
  });

  describe("getProduct() tests", () => {
    test("should call get func with api product endpoint when given product id", () => {
      const productId = 1;
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

      mockedUtils.get.mockResolvedValue(mockProduct);

      const result = UtilsModule.getProduct(productId);

      expect(UtilsModule.get).toHaveBeenCalledWith(`https://dummyjson.com/products/${productId}`);
      expect(result).toStrictEqual(mockProduct);
    });
  });
});
