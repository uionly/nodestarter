const express = require('express');
const mongoose = require("mongoose");
const ItemsController= require('../controllers/itemscontroller');
// creating router object
const router = express.Router();

// Adding different routes 

router.post("/item",ItemsController.add_an_item);
router.get("/items",ItemsController.get_items);
router.delete("/item/:id",ItemsController.delete_item);
router.patch("/item",ItemsController.update_an_item);

module.exports=router;