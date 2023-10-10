import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Outlates = sequelize.define("Outlates",{
  kota:{
    type: DataTypes.STRING,
  }, 
  alamat:{
    type: DataTypes.STRING,
  },
  telp:{
    type: DataTypes.STRING,
  }, 
}, {
  tableName: 'outlates',
  timestamps: false
}
);

export default Outlates;