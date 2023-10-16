const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://host.docker.internal:27017/user");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ status: "error", error: "User not found" });
  }

  if (user.password === password) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", user: user });
    } else {
      return res.json({ status: "error", error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/register", async (req, res) => {
  const { name, email, password, amount } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email: email });
    if (oldUser) {
      return res.json({ error: "User existed" });
    }
    await UserModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  } catch (error) {
    res.send({ status: error });
  }
});

app.listen(80, () => {
  console.log("server is running");
});
