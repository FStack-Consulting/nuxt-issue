// @ts-ignore
import bcrypt from "mongoose-bcrypt";
// @ts-ignore
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: {
      unique: false,
      type: String,
    },
    verification: String,
    rememberMe: Boolean,
    role: {
      type: String,
    },
    projectIds: [],
    password: {
      type: String,
      bcrypt: true,
    },
    username: String
  },
  {
    timestamps: true,
    strict: true,
    strictQuery: true,
  }
);

schema.plugin(bcrypt);

export default mongoose.model("User", schema, "user");
