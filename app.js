const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const gameController = require("./controller/gameControler");

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

const homeRouter = require("./routers/playerNameRouter")
const gameRouter = require("./routers/gameRouter");


app.use ('/', homeRouter);
app.use('/games', gameRouter);
app.use(express.static('css'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.connect("mongodb://localhost/gamedb", (err) => {
  if (err) console.log(err);
  console.log("Database connected");
})

app.listen(8080,(err) => {
  if (err) {console.log(err);}
  console.log ("App start at port 8080");
});
