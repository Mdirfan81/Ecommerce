const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(require("helmet")());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

// console.log("The PORT", port, process.env.MONGO_URL);
//access the environment variables
// process.env.NAME

// ----------------------Making Mongo Connection -------------------------

// const dbOptions = {
//   poolSize: 10,
//   autoIndex: true,
//   useCreateIndex: true,
// };
const mongoDB =
  "mongodb+srv://unknown:12345@sandbox.1nsjpu6.mongodb.net/ecommerce";

mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB connection established");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
//--------------------------------------------------------------

app.use("/v1/", require("./routes"));

app.listen(port, () => console.log("Example app listening on port ", port));
