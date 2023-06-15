const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");

require("../db/conn");
router.use(bodyParser.urlencoded({ extended: true }));

const Palledar2 = require("../model/palledar2Schema");


router.use(async (req, res, next) => {
  try {
    var no = await Palledar2.countDocuments();
    var year = new Date().toLocaleString("en", { year: "2-digit" });
    var slip_no = `g-${year}-${no}`;
    req.slip_no = slip_no;
    var current = new Date();

    var date =
      current.getDate() +
      "-" +
      current.getMonth() +
      "-" +
      current.getFullYear();
    var time =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();
    req.date = date;

    var time =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();
    req.time = time;
    next();
  } catch (err) {
    console.log(err);
  }
});

router.get("/palledar2", async (req, res) => {
  try {
    res.render("palledar2");
  } catch (err) {
    console.log(err);
  }
});

router.post("/palledar2", async (req, res) => {
  try {
    console.log("sahil");
    const palledar = new Palledar2({
      Slip_No: req.body.slip_no,
      Time: req.body.time,
      Date: req.body.date,
      Programmer: req.body.programmer_name,
      Supervisor_To: req.body.supervisor_to,
      Type_contract: req.body.type_contract,
      Type_seller: req.body.type_seller,
      Plot_no: req.body.plot_no,
      Party_name: req.body.party_name,
      Item_name: req.body.item_name,
      Sub_item: req.body.sub_item,
      Quantity: req.body.quantity,
      Units: req.body.units,
      Grade1: req.body.grade1,
      Grade2: req.body.grade2,
      Bag_color: req.body.bag_color,
      Bagsize: req.body.bag_size,
      No_of_bag: req.body.no_of_bag,
      Max_weigth: req.body.max_weigth,
      Min_weigth: req.body.min_weigth,
      Remark: req.body.remark,
      Plot_no: req.body.plot_no,
      Location: req.body.location,
      Work_type_1: req.body.work_type_1,
      No_of_bag_1: req.body.no_of_bag_1,
      Bag_size_1: req.body.bag_size_1,
      Bag_color_1: req.body.bag_color_1,
      Work_type_2: req.body.work_type2,
      Max_weight_1: req.body.max_weigth,
      Min_weight_1: req.body.min_weigth,
      Remark_1: req.body.remark_1,
      Total_Bag: req.body.total_bag,
      Total_Quantity: req.body.total_quantity,
    });

    await palledar
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully added",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
