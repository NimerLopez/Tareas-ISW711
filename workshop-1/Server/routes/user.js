const express = require('express');
const route=express.Router();
const userScheme=require("../models/user_apli")

//create user
route.post('/user',(req,res)=>{
  const user=userScheme(req.body);
  user.save().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
});
module.exports=route;
//get all user
route.get('/user',(req,res)=>{
    userScheme.find().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
//get user by id
route.get('/user/:id',(req,res)=>{
    const {id}=req.params; 
    userScheme.findById(id).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
//update user
route.put('/user/:id',(req,res)=>{
    const {id}=req.params; 
    const{name,age,email}=req.body;
    userScheme.updateOne({ _id:id},{$set:{name,age,email}}).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
  //delete user
route.delete('/user/:id',(req,res)=>{
    const {id}=req.params; 
    userScheme.remove({ _id:id}).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });