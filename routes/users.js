const express = require("express");
const usersModel = require("../models/users");
const router = express.Router();
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

// get Users

router.get("/", async (req, res) => {
  try {
    usersModel.find().then((users) => {
      res.json(users);
    });
  } catch (err) {
    req.status(500).json(err);
  }
});

// get on user

router.get("/:id", async (req, res) => {
  try {
    usersModel.findById(req.params.id).then((user) => {
      res.json(user);
    });
  } catch (err) {
    res.json(err);
  }
});

// add user
//todo add password hashing

router.post("/add", (req, res) => {
  userName = req.body.userName;
  password = req.body.password;

  const newUser = new usersModel({
    userName: userName,
    password: password,
  });
  try {
    newUser.save().then((response) => {
      res.json(response);
    });
  } catch (err) {
    res.jon(err);
  }
});

//TODO update user

//todo google sign in
router.get("/googleSign", (req, res) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth;
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    res.json(user);
  });
});

module.exports = router;
