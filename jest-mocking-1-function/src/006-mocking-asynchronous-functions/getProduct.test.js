import axios from "axios";

async function getProduct(productId) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`);

    return response.data;
  } catch (error) {
    return null;
  }
}

describe("getProduct tests", () => {
  beforeEach(() => {
    axios.get = jest.fn();
  });

  test("should be return product data when request is succesfully", async () => {
    const mockedValue = {
      data: {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        images: [
          "https://dummyjson.com/image/i/products/1/1.jpg",
          "https://dummyjson.com/image/i/products/1/2.jpg",
          "https://dummyjson.com/image/i/products/1/3.jpg",
          "https://dummyjson.com/image/i/products/1/4.jpg",
          "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        ],
      },
    };
    axios.get.mockResolvedValue(mockedValue);

    const result = await getProduct();

    expect(result).toStrictEqual(mockedValue.data);
  });

  test("should be return product data when request is failed", async () => {
    axios.get.mockRejectedValue(new Error("Error occured when fetching data!"));

    const result = await getProduct();

    expect(result).toStrictEqual(null);
  });
});
