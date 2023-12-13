import {Schema, model} from "mongoose";

const teacherSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  degree: {
    type: String,
    default: null
  }
})

export const Teacher = model('teachers',teacherSchema)