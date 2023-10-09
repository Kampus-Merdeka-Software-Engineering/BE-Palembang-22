import { request, response } from "express";
import sequelize from "../config/sequelize.js";
import Orders from "../models/orders.js";


export const getOrders = async (request, response) =>{
  const noResi = request.params.resi;
  const listOrders = await sequelize.models.Orders.findOne({
    where: {
      resi: noResi
    }
  });
  response.json({
    data: listOrders,
    message: 'Orders telah didapatkan'
  });
}

export const postOrders =  (request, response) =>{
  const {resi, nama_tujuan, alamat_tujuan, telp_tujuan, nama_pengirim, alamat_pengirim, telp_pengirim, nama_paket, berat, panjang, lebar, tinggi, harga_kirim, estimasi, status} = request.body;

  sequelize.models.Orders.create({
    resi,
    nama_tujuan,
    alamat_tujuan,
    telp_tujuan,
    nama_pengirim,
    alamat_pengirim,
    telp_pengirim,
    nama_paket,
    berat,
    panjang, 
    lebar, 
    tinggi,
    harga_kirim,
    estimasi,
    status
  });
  response.json({
    message: "Data Created succeccfully" 
  });
} 