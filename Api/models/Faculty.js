const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: String,
  facultyId: Number,
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
