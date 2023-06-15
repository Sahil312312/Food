const mongoose = require("mongoose");

const salaiSchema = new mongoose.Schema({
 Salai_name:{
  type:String
 },
 No_of_bag:{
  type:String
 },
 Work_type:{
  type:String
 },
});

var salai = mongoose.model("salai", salaiSchema);
module.exports = salai;
