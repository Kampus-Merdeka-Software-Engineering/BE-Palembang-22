import Kota from "../models/kota.js"

export const findKota = async () =>{
  return await Kota.findAll();
}