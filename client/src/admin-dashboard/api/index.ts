export const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products/get-products"); // Update with your backend URL
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  