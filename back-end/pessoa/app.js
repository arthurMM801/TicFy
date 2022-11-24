//imports
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json()); 


const dbuser = process.env.DB_USER 
const dbpass = process.env.DB_PASS 
const port = process.env.PORT

mongoose
  .connect(
      `mongodb+srv://${dbuser}:${dbpass}@cluster0.sw9ad.mongodb.net/crud?retryWrites=true&w=majority`
    )
    .then(()=>{
      app.use('/', require('./src/routes/routes'))
      app.listen(port, ()=>console.log(`Estamos ligados na porta ${port} :)`));

    })
    .catch(err=>(console.log(`algo deu errado ao conectar no banco. Veja isso -->${err}`))); 

 