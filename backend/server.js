const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors({
  origin: [
    "https://model-q7kleijb2-pavithra-m-projects9.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/atm", require("./routes/atmRoutes"));

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: err.message,
  });
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
module.exports = app;