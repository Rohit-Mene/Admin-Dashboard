import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    //These are similar to foreign keys
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timeStamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);

export default AffiliateStat;
