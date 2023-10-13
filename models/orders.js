import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"


const Orders = sequelize.define("Orders",{
  resi:{
    type: DataTypes.STRING,
  }, 
  nama_tujuan:{
    type:DataTypes.STRING,
  }, 
  alamat_tujuan:{
    type:DataTypes.STRING,
  }, 
  telp_tujuan:{
    type:DataTypes.STRING,
  } ,
  nama_pengirim:{
    type:DataTypes.STRING,
  }, 
  alamat_pengirim:{
    type: DataTypes.STRING,
  } ,
  telp_pengirim:{
    type:DataTypes.STRING,
  } ,
  nama_paket:{
    type:DataTypes.STRING,
  }, 
  berat:{
    type:DataTypes.INTEGER,
  }, 
  panjang:{
    type:DataTypes.INTEGER,
  } ,
  lebar:{
    type:DataTypes.INTEGER,
  } ,
  tinggi:{
    type:DataTypes.INTEGER,
  } ,
  harga_kirim:{
    type:DataTypes.INTEGER,
  } ,
  estimasi:{
    type:DataTypes.STRING,

  } ,
  status:{
    type:DataTypes.STRING
  } 
},{
  tableName: 'orders',
  timestamps: false
}
);

export default Orders;
 