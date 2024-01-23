import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js"
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
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async(req,res)=>{
  try {
    //The select makes sure we do not send the password in the API response(which is we dont send the password we have for each user stored in thed database)
    const customers= await User.find({role:"user"}).select("-password");
    res.status(200).json(customers)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
