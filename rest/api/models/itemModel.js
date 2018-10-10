const mongoose=require('mongoose');
const schema=mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
name:{type:String,required:true},
desc:{type:String,default:"This is the description"}
});
const model=mongoose.model('Item',schema)
module.exports=model;