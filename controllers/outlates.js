import { request, response } from "express";
import sequelize from "../config/sequelize.js"
import Outlates from "../models/outlates.js";

export const getOutlates = async (request, response) =>{
  const listOutlates = await sequelize.models.Outlates.findAll();
  response.json(listOutlates);
}
export const postOutlates =  (request, response) =>{
  const {kota, alamat, telp} = request.body;

  sequelize.models.Outlates.create({
    kota,
    alamat,
    telp
  });
  response.json({
    message: "Data Created succeccfully" 
  });
} 