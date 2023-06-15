const mongoose = require("mongoose");

const palledar1Schema = new mongoose.Schema({
  Slip_No: {
    type: Number,
    require: true,
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
  Plot1: {
    type: String,
  },
  Party_name: {
    type: String,
  },
  Item_name: {
    type: String,
  },
  Subitem: {
    type: String,
  },
  Quantity: {
    type: Number,
  },
  Units: {
    type: String,
  },
  Grade1: {
    type: String,
  },
  Grade2: {
    type: String,
  },
  Bag_color: {
    type: String,
  },
  Bagsize: {
    type: String,
  },
  No_of_bag: {
    type: Number,
  },
  Max_weigth: {
    type: Number,
  },
  Min_weigth: {
    type: Number,
  },
  Kotha_no:{
    type:String
  },
  Kotha_type: {
    type: String,
  },
  Work_type1: {
    type: String,
  },
  Work_type2: {
    type: String,
  },
  Plot2: {
    type: String,
  },
  Location1: {
    type: String,
  },
  Plot3: {
    type: String,
  },
  Location2: {
    type: String,
  },
  Remark: {
    type: String,
  },
  Total_Bag: {
    type: String,
  },
  Total_Quantity: {
    type: String,
  },
});

var Palledar1 = mongoose.model("Palledar1", palledar1Schema);
module.exports = Palledar1;
