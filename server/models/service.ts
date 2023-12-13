import {Schema, model} from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

export const Service = model('services', serviceSchema)