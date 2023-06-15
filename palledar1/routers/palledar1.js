const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");

require("../db/conn");
router.use(bodyParser.urlencoded({ extended: true }));

const Palledar1 = require("../model/palledar1Schema");

router.get("/palledar1", async (req, res) => {
  try {
    res.render("palledar1");
  } catch (err) {
    console.log(err);
  }
});

router.post("/palledar1", async (req, res) => {
  try {
    console.log("sahil");
    const palledar = new Palledar1({
      Slip_No: req.body.slip_no,
      Time: req.body.time,
      Date: req.body.date,
      Programmer: req.body.programmer_name,
      Supervisor_To: req.body.supervisor_to,
      Type_seller: req.body.type_seller,
      Type_contract: req.body.type_contract,
      Plot_no1: req.body.plot_no1,
      Party_name: req.body.party_name,
      Item_name: req.body.item_name,
      Sub_item: req.body.sub_item,
      Quantity: req.body.quantity,
      Units: req.body.units,
      Grade1: req.body.grade1,
      Grade2: req.body.grade2,
      No_of_bag: req.body.no_of_bag,
      Bagsize: req.body.bag_size,
      Bag_color: req.body.bag_color,
      Max_weigth:req.body.max_weigth,
      Min_weigth:req.body.min_weigth,
      Kotha_type:req.body.kotha_type,
      Work_type1:req.body.work_type1,
      Work_type2:req.body.work_type2,
      Plot2:req.body.plot2,
      Location1:req.body.location1,
      Plot3:req.body.plot3,
      Location2:req.body.location2,
      Remark:req.body.remark,
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
