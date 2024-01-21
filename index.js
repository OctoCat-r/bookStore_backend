const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/authRoutes");
const razorpayRoute = require("./routes/paymentRoutes");

app.use("/api/v1/books", bookRouter);

app.use("/api/v1/books", authRouter);

app.use("/api/razorpay/", razorpayRoute);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 4000")
);
