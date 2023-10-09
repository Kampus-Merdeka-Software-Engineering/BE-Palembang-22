import { DataTypes } from "sequelize"
import sequelize from "../config/sequelize.js"


const Orders = sequelize.define("Orders",{
  resi: DataTypes.STRING,
  nama_tujuan: DataTypes.STRING,
  alamat_tujuan: DataTypes.STRING,
  telp_tujuan: DataTypes.STRING,
  nama_pengirim: DataTypes.STRING,
  alamat_pengirim: DataTypes.STRING,
  telp_pengirim: DataTypes.STRING,
  nama_paket: DataTypes.STRING,
  berat: DataTypes.INTEGER,
  panjang: DataTypes.INTEGER,
  lebar: DataTypes.INTEGER,
  tinggi: DataTypes.INTEGER,
  harga_kirim: DataTypes.INTEGER,
  estimasi: DataTypes.STRING,
  status: DataTypes.STRING

});

export default Orders;
 