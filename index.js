import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";
import { startSeqelize } from "./utils/startSequelize.js";
import "./models/index.js"

dotenv.config()

const app = express();
const port = process.env.PORT;

startSeqelize(sequelize);


app.listen(port, () =>{
  console.log(`Server is running at port ${port}`);
});

