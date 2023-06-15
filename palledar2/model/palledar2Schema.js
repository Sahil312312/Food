const mongoose = require("mongoose");

const palledar2Schema = new mongoose.Schema({
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
  Plot_no:{
    type:String
  },
  Party_name:{
    type:String
  },
  Item_name: {
    type: String,
  },
  Sub_item: {
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
    type:Number
  },
  Min_weigth:{
    type:Number
  },
  
  Remark: {
    type: String,
  },
Plot_no:{
  type:String
},
Location:{
  type:String
},
Work_type_1:{
  type:String
},
No_of_bag_1:{
  type:String
},
Bag_size_1:{
  type:String
},
Bag_color_1:{
  type:String
},
Work_type_2:{
  type:String
},
Max_weight_1:{
  type:Number
},
Min_weight_1:{
  type:Number
},
Remark_1:{
  type:String
},
Total_Bag:{
  type:String
},
Total_Quantity:{
  type:String
}
});

var Palledar2 = mongoose.model("Palledar2", palledar2Schema);
module.exports = Palledar2;
