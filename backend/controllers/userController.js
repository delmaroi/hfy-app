import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /v1/api/signin
//@access          Public
const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Auth the user
//@route           POST /v1/api/signout
//@access          Public
const signOutUser = asyncHandler(async (req, res) => {
  req.user.deleteToken(req.token, (err) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});

//@description     Register new user
//@route           POST /v1/api/register
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, datebirth, email, password, password2 } =
    req.body;
  const parsedDateBirth = Date.parse(datebirth);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404).json({ message: "User already exists" });
  }

  if (password !== password2)
    return res.status(400).json({ message: "Password doesn't match" });

  const user = await User.create({
    firstname,
    lastname,
    datebirth: parsedDateBirth,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      datebirth: user.datebirth,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }

  // const newUser = new User({
  //   email,
  //   name,
  //   lastname,
  //   password,
  //   dateBirth,
  // });

  newUser
    .save()
    .then(() => res.json("User successfully registered!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export { signInUser, signOutUser, registerUser };
