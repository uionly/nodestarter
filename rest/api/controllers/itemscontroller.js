const item=require('../models/itemModel');
const mongoose=require('mongoose');
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