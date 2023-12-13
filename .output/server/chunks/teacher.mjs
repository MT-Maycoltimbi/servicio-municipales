import { Schema, model } from 'mongoose';

const teacherSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    default: null
  }
});
const Teacher = model("teachers", teacherSchema);

export { Teacher as T };
//# sourceMappingURL=teacher.mjs.map
