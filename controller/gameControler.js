const gameSchema = require("../models/gameSchema");

let create = (player1Name, player2Name, player3Name, player4Name) => {
  let playerData = {
    player1Name : player1Name,
    player2Name : player2Name,
    player3Name : player3Name,
    player4Name : player4Name,
  }
  gameSchema.create(playerData);
  
}

module.exports = {create} 