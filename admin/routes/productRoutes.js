import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ Read all products
router.get("/get-products", async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        orderBy: { id: "asc" }, // or "desc" depending on your needs
      });
      console.log(products)
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  
// ✅ Read single product
router.get("/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.json(product);  
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// ✅ Create a new product
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = await prisma.product.create({ data: req.body });
    console.log(newProduct)
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// ✅ Update a product
router.put("/update/:id", async (req, res) => {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

// ✅ Delete a product
router.delete("/:id", async (req, res) => {
  try {
    await prisma.product.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

export default router;
