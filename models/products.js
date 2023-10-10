import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"


const Products = sequelize.define("Products",{
  nama_paket:{
    type: DataTypes.STRING,
  }, 
  asal:{
    type: DataTypes.STRING,
  }, 
  tujuan:{
    type: DataTypes.STRING,
  }, 
  harga_normal:{ 
    type:DataTypes.INTEGER,
  },
  tambahan:{
  type:  DataTypes.INTEGER
  }, 
},{
  tableName: 'products',
  timestamps: false
}
);

export default Products;
