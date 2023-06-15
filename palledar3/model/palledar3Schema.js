const mongoose = require("mongoose");

const palledar3Schema = new mongoose.Schema({
  Slip_No: {
    type: Number,
    require:true
  },
  Time: {
    type: String,
  },
  Date: {
    type: Date,
  },
  Programmer_Name: {
    type: String,
  },
  Supervisor_To: {
    type: String,
  },
  Type_contract: {
    type: String,
  },
  Type_seller: {
    type: Array,
  },
  Type3:{
    type:String
  },
  Party_name:{
    type:String
  },
  Bill_no: {
    type: String,
  },
  Work_type: {
    type: String,
  },
  Plot_no: {
    type: Number,
  },
  Location: {
    type: String,
  },
  Remark: {
    type: String,
  },
  Bag_color: {
    type: String,
  },
  Bag_size: {
    type: String,
  },
  No_of_bag: {
    type: Number,
  },
  no_of_roll: {
    type:String
  },
  Roll_color: {
    type:String
  },
  Roll_size: {
    type:String
  },
  Total_Bag: {
    type: Number,
  },
  Total_Quantity: {
    type: String,
  },
});

var Palledar3 = mongoose.model("Palledar3", palledar3Schema);
module.exports = Palledar3;
