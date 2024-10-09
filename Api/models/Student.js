const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  class: String,
  rollNo: Number,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
