const express = require("express");
const Router = express.Router();
const gameController = require("../controller/gameControler")

Router.get("/", (req,res) => {
  res.render("home")
})

Router.post("/", (req,res) => {
  gameController.create(req.body.player1, req.body.player2, req.body.player3, req.body.player4);
  console.log("Success")
  res.render('game');
})

module.exports = Router ;