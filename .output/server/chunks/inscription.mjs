import { Schema, model } from 'mongoose';

const inscriptionSchema = new Schema({
  created: {
    type: Number,
    default: Date.now()
  },
  name: {
    type: String,
    required: true
  },
  birdthDate: {
    type: Number,
    required: true
  },
  zone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    enum: ["M", "F"],
    required: true
  },
  _course: {
    type: Schema.Types.ObjectId,
    ref: "courses",
    required: true
  }
});
const Inscription = model("inscriptions", inscriptionSchema);

export { Inscription as I };
//# sourceMappingURL=inscription.mjs.map
