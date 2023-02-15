const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String },
  descripcion: { type: String },
});//2

const teamModel = mongoose.model('team', teamSchema);
module.exports = {
  schema: teamSchema,
  model: teamModel
}