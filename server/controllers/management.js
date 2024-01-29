import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
export const getAdmins = async (req, res) => {
  try {
    //fetch the admin data without their passwords
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    //https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/
    //Aggregate allows to reference one database and extract info from another(kind of foreign key concept)
    const userWithStats = await User.aggregate([
      //We are finding the user which has the matching "id" from the user table
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        //We are running an aggregate call on User database,so the localField is _id and we are searching the userId in the affiliate stats table(Hence foreign key),to match the ids,and get that users affiliate stats
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      //This flattens the array
      { $unwind: "$affiliateStats" },
    ]);
    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    const filteredSalesTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );
    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSalesTransactions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
