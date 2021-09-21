import express from "express";
import { signInUser, registerUser } from "../controllers/userController";
const router = express.Router();

router.route("/api/signup").post(registerUser);
router.post("/api/signin", signInUser);

export default router;

// import * as express from "express";

// const router = express.Router();

// import User from "../models/userModel";

// // router.route("/").get((req, res) => {
// //   User.find()
// //     .then((users) => res.json(users))
// //     .catch((err) => res.status(400).json("Error: " + err));
// // });

// // adding new user (sign-up route)
// router.route("/api/register").post(async (req, res) => {
//   const email = req.body.email;
//   const name = req.body.name;
//   const lastname = req.body.lastname;
//   const dateBirth = Date.parse(req.body.dateBirth);
//   const password = req.body.password;
//   const password2 = req.body.password2;

//   if (password !== password2)
//     return res.status(400).json({ message: "Password doesn't match" });

//   const newUser = new User({
//     email,
//     name,
//     lastname,
//     password,
//     dateBirth,
//   });

//   User.findOne({ email: newUser.email }, function (err, user) {
//     if (user)
//       return res.status(400).json({ auth: false, message: "Email exits" });
//   });

//   newUser
//     .save()
//     .then(() => res.json("User successfully registered!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/api/signin").post((req, res) => {
//   const name = req.body.name;
//   const lastname = req.body.lastname;
//   const password = req.body.password;
//   const dateBirth = Date.parse(req.body.dateBirth);

//   const newUser = new User({ name, lastname, password, dateBirth });

//   newUser
//     .save()
//     .then(() => res.json("User successfully sign in!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/api/signout").patch((req, res) => {
//   req.user.deleteToken(req.token, (err, user) => {
//     if (err) return res.status(400).send(err);
//     res.sendStatus(200);
//   });
// });

// export default router;
