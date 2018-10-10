const mongoose = require("mongoose");

const mongo_connection=function(){
// remove Promise deprecation , own library can be used here
mongoose.Promise = global.Promise;

// Creating DB connection
mongoose.connect("mongodb://deepakjha:TncJaRApEiw2kMXf@nodecurd-shard-00-00-wxxny.mongodb.net:27017,nodecurd-shard-00-01-wxxny.mongodb.net:27017,nodecurd-shard-00-02-wxxny.mongodb.net:27017/xavient?ssl=true&replicaSet=nodecurd-shard-0&authSource=admin&retryWrites=true",
{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Checking MONGO connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log("connected to mongo db");
});

}


module.exports= mongo_connection;