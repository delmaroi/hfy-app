import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    datebirth: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    token: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
