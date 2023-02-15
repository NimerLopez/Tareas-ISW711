const express = require('express');
const route=express.Router();
const player =require("../models/playerScheme")
const team =require("../models/teamSchema")

//create player//2
route.post('/player', async (req, res) => {
  try {
    let tf = await team.model.findById(req.body.team);
    if (tf) {
      let playeri = new player(req.body);
      playeri.team = {
        name: tf.name,
        descripcion: tf.descripcion
      };
      console.log(playeri);
      let savedPlayer = await playeri.save();
      res.json(savedPlayer);
    } else {
      throw new Error('No se encontró el equipo');
    }
  } catch (error) {
    res.json({ message: error.message+ " No se encontro al equipo " });
  }
});

//create team
route.post('/team',(req,res)=>{
  const teamg = team.model(req.body);
  teamg.save().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
});

//get all player
route.get('/player',(req,res)=>{
    player.find().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
  //get all team
route.get('/team',(req,res)=>{
  team.model.find().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
});
//get player by id
route.get('/player/:id',(req,res)=>{
    const {id}=req.params; 
    player.findById(id).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
//update player
route.put('/player/:id',(req,res)=>{
    const {id}=req.params; 
    const{name,description,equipo}=req.body;
    player.updateOne({ _id:id},{$set:{name,description,equipo}})
    .then((data)=>res.json(req.body))
    .catch((err)=>res.json({message:err}))
  });
  //delete player
route.delete('/player/:id',(req,res)=>{
    const {id}=req.params; 
    player.remove({ _id:id}).then((data)=>res.json("Elemento Eliminado")).catch((err)=>res.json({message:err}))
  });
  module.exports=route;
