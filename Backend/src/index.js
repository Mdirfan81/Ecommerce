const express = require("express");
const bodyParse = require("body-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(require("helmet")());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

// ----------------------Making Mongo Connection -------------------------

// const dbOptions = {
//   poolSize: 10,
//   autoIndex: true,
//   useCreateIndex: true,
// };
const mongoDB = "mongodb+srv://unknown:12345@sandbox.1nsjpu6.mongodb.net/test";

mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("connection", () => {
  console.log("MongoDB connection established");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
//--------------------------------------------------------------

app.use("/v1/", require("./routes"));

app.listen(port, () => console.log("Example app listening on port 3000!"));
