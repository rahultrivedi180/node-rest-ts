/* eslint-disable @typescript-eslint/camelcase */
import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
  fname: string;
  lname: string;
  address: string;
  origin_country: string;
  birth_country: string;
  pin: string;
  mobile: string;
  idType: string;
  idNumber: string;
  ethAddress: string;
  kycId: string;
  kycStatus: string;
}

const User: Schema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  address: {
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
  pin: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  idType: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: true
  },
  ethAddress: {
    type: String,
    required: true,
    unique: true
  },
  kycId: {
    type: String,
    required: true,
    index: true
  },
  kycStatus: {
    type: String,
    enum: ["draft", "in-process", "success"],
    default: "draft"
  }
});

export default mongoose.model<UserInterface>("User", User);
