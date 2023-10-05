import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";
import bodyParser from "body-parser"
import { startSeqelize } from "./utils/startSequelize.js";
import "./models/index.js"

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(bodyParser.raw());
app.use(bodyParser.json());

startSeqelize(sequelize);


app.listen(port, () =>{
  console.log(`Server is running at port ${port}`);
});

