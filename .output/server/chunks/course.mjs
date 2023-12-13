import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  spaces: {
    type: Number,
    required: true
  },
  startDate: {
    type: Number,
    required: true
  },
  endDate: {
    type: Number,
    required: true
  },
  schedules: [{
    startTime: Number,
    endTime: Number,
    day: String
  }],
  created: {
    type: Number,
    default: Date.now()
  },
  location: {
    type: String,
    required: true
  },
  rangeAge: {
    min: Number,
    max: Number
  },
  _service: {
    type: Schema.Types.ObjectId,
    ref: "services",
    required: true
  },
  _teacher: {
    type: Schema.Types.ObjectId,
    ref: "teachers",
    require: true
  }
});
const Course = model("courses", courseSchema);

export { Course as C };
//# sourceMappingURL=course.mjs.map
