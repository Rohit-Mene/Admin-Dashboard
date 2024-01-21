import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat";
//Find all the products requested, and for each product find the product stat for that product and return the product info and its stat(we use spread operator for that)
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.status(200).json(productsWithStats);
};
