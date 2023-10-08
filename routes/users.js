const express = require("express");
const usersModel = require("../models/users");
const router = express.Router();
const bycript = require("bcrypt");

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

// SignUp user

router.post("/signup", async (req, res) => {
  email = req.body.email;
  userName = req.body.userName;
  password = req.body.password;

  const saltRounds = 10;
  const hashedPassword = await bycript.hash(password, saltRounds);

  const newUser = new usersModel({
    email: email,
    userName: userName,
    password: hashedPassword,
  });
  try {
    newUser.save().then((response) => {
      res.json(response);
    });
  } catch (err) {
    res.json(err);
  }
});

//login User
router.post("/signin", (req, res) => {
  email = req.body.email;
  password = req.body.password;

  usersModel.findOne({ email: email }).then(async (user) => {
    if (!user) {
      res.status(401).json({ message: "User not found" });
    }
    if (user) {
      const match = await bycript.compare(password, user.password);
      match
        ? res.status(200).json({ message: "Login success", userId: user.id })
        : res.status(401).json({ message: "Invalid password" });
    }
  });
});

//TODO update user

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
//todo google sign in
// router.get("/google", (req, res) => {
//   const provider = new GoogleAuthProvider();

//   signInWithPopup(auth, provider).then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     const user = result.user;
//     res.json(user);
//   });
// });

module.exports = router;
