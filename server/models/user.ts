import {Schema, model} from "mongoose";
import { Role } from "../constants";
import {compare, genSalt, hash} from "bcrypt";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true
  },
  rol:{
    type: String,
    enum: Object.values(Role)
  },
  _service:{
    type: Schema.Types.ObjectId,
    ref: 'services',
    default: null
  }
})

userSchema.pre('save', async function(next){
  const user = this;
  if (!user.isModified('password')) return next();
  this.password = await hash(user.password, 10)
  next()
})

userSchema.methods.comparePassword = function(password: string): Promise<boolean> {
  return compare(password, this.password)
};


userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};


export const User = model('users',userSchema)