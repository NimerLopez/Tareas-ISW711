const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const team = require('../models/teamSchema');
const Player = new Schema({
  team: team.schema,
  name: { type: String },
  lastname:{ type: String },
  age:{ type: Number },
});//2

module.exports = mongoose.model('players', Player);