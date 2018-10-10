const bodyParser= require("body-parser");
const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan");
const itemsroute=require('./api/routes/itemsroute');
const mongo_connection=require('./mongoconn');
// DB connection

mongo_connection();
// Creating APP 
const app = express();

// Using morgan to log http
app.use(morgan('dev'));
// Handling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
// Use body parser to reead requests easily
app.use(bodyParser.json());



// Handle different Routes  

app.use(itemsroute);
module.exports = app;