// import axios from "axios";

// export async function productsData() {
//   const products = await axios.get(
//     "https://fakestoreapiserver.reactbd.com/products"
//   );
//   console.log(products, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
//   return products;
// }



import axios from "axios";

export async function productsData() {
  try {
    console.log(import.meta.env.VITE_PUBLIC_URL, "jddddddddddddd")
    const products = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/products/get-products`);
    console.log(products, "Fetched products data");
    return products; // Returning the full response
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // Return null in case of failure
  }
}
