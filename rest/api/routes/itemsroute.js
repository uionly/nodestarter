const express = require('express');
const mongoose = require("mongoose");
const ItemsController= require('../controllers/itemscontroller');
// creating router object
const router = express.Router();

// Adding different routes 

router.post("/item",ItemsController.add_an_item);

module.exports=router;