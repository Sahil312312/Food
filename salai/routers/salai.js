const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");

require("../db/conn");
router.use(bodyParser.urlencoded({ extended: true }));

const Salai = require("../model/salaiSchema");

router.get("/salai", async (req, res) => {
  try {
    res.render("salai");
  } catch (err) {
    console.log(err);
  }
});

router.post("/salai", async (req, res) => {
  try {
    console.log("sahil");
    const salai = new Salai({
      Salai_name: req.body.salai_name,
      No_of_bag: req.body.no_of_bag,
      Work_type: req.body.work_type,
    });

    await salai
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
