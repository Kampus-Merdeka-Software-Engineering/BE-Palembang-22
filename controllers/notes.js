import { request, response } from "express";
import sequelize from "../config/sequelize.js";
import Notes from "../models/notes.js";


export const getNotes = async (request, response) =>{
  const listNotes = await sequelize.models.Notes.findAll();
  response.json({
    data: listNotes,
    message: 'Notes telah didapatkan'
  });
}

export const postNotes =  (request, response) =>{
  const {nama, email, pesan} = request.body;

  sequelize.models.Notes.create({
    nama,
    email,
    pesan
  });
  response.json({
    message: "Data Created succeccfully" 
  });
} 