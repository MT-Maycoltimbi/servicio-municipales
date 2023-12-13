import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
const Service = model("services", serviceSchema);

export { Service as S };
//# sourceMappingURL=service.mjs.map
