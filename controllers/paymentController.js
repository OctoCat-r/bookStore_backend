const Razorpay = require("razorpay");
const crypto = require("crypto");

const getOrderId = async (req, res) => {
  try {
    var instance = new Razorpay({
      key_id: process.env.RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const paymentCallBack = async (req, res) => {
  const { razorpay_signature, razorpay_payment_id, razorpay_order_id } =
    req.body;
  console.log(req.body);
  try {
    const string = `${razorpay_order_id}|${razorpay_payment_id}`;

    const generated_signature = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(string)
      .digest("hex");

    if (generated_signature == razorpay_signature) {
      console.log("payment successfull");
      res.redirect(`http://localhost:5173/`);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const paymentCancel = async (req, res) => {
  try {
    return res.redirect("http://localhost:3000/failure");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getOrderId,
  paymentCallBack,
  paymentCancel,
};
