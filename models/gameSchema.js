const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  player1Name : {type: String},
  player1Score : {type: Number, default: 0},

  player2Name : {type: String},
  player2Score : {type: Number, default: 0},

  player3Name : {type: String},
  player3Score : {type: Number, default: 0},

  player4Name : {type: String},
  player4Score : {type: Number, default: 0},
  
})

module.exports = mongoose.model("Game", gameSchema);