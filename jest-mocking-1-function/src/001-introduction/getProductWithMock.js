import axios from "axios";

async function getProduct(productId) {
  const response = await axios.get(`https://dummyjson.com/products/${productId}`);

  return response.data;
}

(async () => {
  const realProduct = await getProduct(3);

  axios.get = async () => {
    return {
      data: {
        id: 999,
        title: "Fake iPhone 11",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        images: ["https://dummyjson.com/image/i/products/1/1.jpg"],
      },
    };
  };

  const fakeProduct = await getProduct(3);

  console.log("realProduct: ", realProduct);
  console.log("fakeProduct: ", fakeProduct);
})();
