/* eslint-disable @typescript-eslint/camelcase */
import mongoose, { Schema } from "mongoose";

const Otp = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  otp: Number,
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 300
  }
});

module.exports = {
  Otp: mongoose.model("Otp", Otp)
};
