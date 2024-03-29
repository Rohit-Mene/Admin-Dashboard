import express from "express";
import bodyParser from "body-parser";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//Data imports
import User from "./models/User.js";
import ProductStat from "./models/ProductStat.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import { dataUser, dataProduct, dataProductStat,dataTransaction,dataOverallStat, dataAffiliateStat } from "./data/index.js";
import AffiliateStat from "./models/AffiliateStat.js";
/**
 * CONFIGURATION
 */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**
 * ROUTES - These routes are broad level containers you can say,it will contain APIs for each use case
 */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/**
 * MONGOOSE SETUP
 */

const PORT = process.env.PORT || 9000;
mongoose /
  connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
      /**ONLY ADD DATA ONE TIME */
    //   Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
    //Transaction.insertMany(dataTransaction);
      //User.insertMany(dataUser);
     //OverallStat.insertMany(dataOverallStat);

     //AffiliateStat.insertMany(dataAffiliateStat);
    })
    .catch((error) => console.log(`${error} did not connect`));
