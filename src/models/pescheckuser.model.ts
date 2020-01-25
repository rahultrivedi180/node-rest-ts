/* eslint-disable @typescript-eslint/camelcase */
import mongoose, { Schema } from "mongoose";

const PescheckUser = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  origin_country: {
    type: String,
    required: true
  },
  birth_country: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["draft", "in-process", "success"],
    default: "draft"
  }
});

module.exports = {
  PescheckUser: mongoose.model("PescheckUser", PescheckUser)
};
