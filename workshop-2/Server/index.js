const express = require('express');
const mongoose = require('mongoose');
const dotv = require('dotenv').config();
const userRoute=require('./routes/routes') 
const app = express();
//npm init
//npm i express mongoose nodemon dotenv

app.use(express.json());

//middleware
app.use('/api',userRoute);

app.get("/",(req,res)=>{
    res.send("Welcome");
})
//mongoose connect
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('Conected to mongodb')).catch((error)=>console.error(error));

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})