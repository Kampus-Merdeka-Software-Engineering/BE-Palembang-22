import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

process.env

const app = express();
const port = process.env.port;

app.listen(port, () =>{
  console.log(`Server berhasil di running di port: ${port}`);
})