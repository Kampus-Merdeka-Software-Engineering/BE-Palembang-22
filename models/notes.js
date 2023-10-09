import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Notes = sequelize.define("Notes",{
  nama: DataTypes.STRING,
  email: DataTypes.STRING,
  pesan: DataTypes.STRING
})

export default Notes;