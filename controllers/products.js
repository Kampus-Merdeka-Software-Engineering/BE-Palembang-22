import { request, response } from "express";
import sequelize from "../config/sequelize.js";
import Products from "../models/products.js";

export const getProducts = async (request, response) =>{
  const Asal = request.params.asal;
  const Tujuan = request.params.tujuan;
  const listProducts = await sequelize.models.Products.findAll({
    where: {
      asal: Asal,
      tujuan: Tujuan
    }
  });
  response.json(listProducts)
}


export const postProducts =  (request, response) =>{
  const {nama_paket, asal, tujuan, harga_normal, tambahan} = request.body;

  sequelize.models.Products.create({
    nama_paket,
    asal,
    tujuan,
    harga_normal,
    tambahan
  });
  response.json({
    message: "Data Created succeccfully" 
  });
} 


