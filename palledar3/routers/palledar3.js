const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");

require("../db/conn");
router.use(bodyParser.urlencoded({ extended: true }));

const Palledar3 = require("../model/palledar3Schema");

router.get("/palledar3", async (req, res) => {
  try {
    res.render("palledar3");
  } catch (err) {
    console.log(err);
  }
});

router.post("/palledar3", async (req, res) => {
  try {
    console.log("sahil");
    const palledar = new Palledar3({
      Slip_No: req.body.slip_no,
      Time: req.body.time,
      Date: req.body.date,
      Programmer: req.body.programmer_name,
      Supervisor_To: req.body.supervisor_to,
      Type_seller: req.body.type_seller,
      Type_contract: req.body.type_contract,
      Type3: req.body.type3,
      Party_name: req.body.party_name,
      Bill_no: req.body.Bill_no,
      Work_type: req.body.Work_type,
      Plot_no: req.body.plot_no,
      Location: req.body.location,
      Remark: req.body.remark,
      Bag_color: req.body.bag_color,
      Bag_size: req.body.bag_size,
      No_of_bag: req.body.no_of_bag,
     
      Roll_color: req.body.bag_color,
      Roll_size: req.body.bag_size,
      No_of_roll: req.body.no_of_bag,
     
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
