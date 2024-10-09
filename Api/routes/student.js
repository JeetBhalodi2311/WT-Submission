const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).send('Student not found');
  res.send(student);
});

router.post('/', async (req, res) => {
  let student = new Student({
    name: req.body.name,
    age: req.body.age,
    class: req.body.class,
    rollNo: req.body.rollNo
  });
  student = await student.save();
  res.send(student);
});

router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age,
      class: req.body.class,
      rollNo: req.body.rollNo
    },
    { new: true }
  );

  if (!student) return res.status(404).send('Student not found');
  res.send(student);
});

router.delete('/:id', async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) return res.status(404).send('Student not found');
  res.send(student);
});

module.exports = router;
