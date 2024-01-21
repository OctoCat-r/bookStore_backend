const express = require("express");
const router = express();

// import {
//   getOrderId,
//   paymentCallBack,
//   paymentCancel,
// } from "../controllers/paymentController";

const {
  getOrderId,
  paymentCallBack,
  paymentCancel,
} = require("../controllers/paymentController");

router.post("/orders", getOrderId);
router.post("/payment-callback", paymentCallBack);
// router.get("/getkey", paymentCancel);
router.get("/getkey", (req, res) => {
  return res.status(200).json({ key: process.env.RAZORPAY_ID });
});

module.exports = router;
