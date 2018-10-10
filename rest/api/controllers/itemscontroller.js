const Item=require('../models/itemModel');
const mongoose=require('mongoose');
// Get all items
exports.get_items= function(req,res,next){
  Item.find().exec()
  .then(response => {
    //   if (docs.length >= 0) {
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });

}
// method to add an item
exports.add_an_item = function (req,res,next){
   const ItemData=new Item({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    desc:req.body.desc 
 }) ;

   ItemData.save().then((result)=>{
     res.status(200).json(result);
   }).catch((err)=>{
    res.send(err);
   });
}

// Method to update an element
exports.update_an_item = function (req,res,next){
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  console.log('option',updateOps);
  Item.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Item updated",
        data:result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

// Method to delete an item

exports.delete_item= function(req,res,next){
  const id = req.params.id;
  Item.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

}