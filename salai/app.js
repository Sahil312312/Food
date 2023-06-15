const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config.env" });

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

require("./db/conn");

app.use(require("./routers/salai"));


app.listen(3001, (req, res) => {
  console.log("Listening to port 3001");
});
