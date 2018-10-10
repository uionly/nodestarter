const item=require('../models/itemModel');
const mongoose=require('mongoose');
// method to add an item
exports.add_an_item = function (req,res,next){
   const itemData=new item({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    desc:req.body.desc 
 }) ;

   itemData.save().then((result)=>{
     res.status(200).json(result);
   }).catch((err)=>{
    res.send(err);
   });
}

// Method to update an element
exports.update_an_item = function (req,res,next){
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  itemData.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Item updated"
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
  const id = req.params.productId;
  itemData.remove({ _id: id })
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