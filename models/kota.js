import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Kota = sequelize.define("Kota", {
  name_kota: DataTypes.STRING,
  cat_pulau: DataTypes.STRING
})

export default Kota;