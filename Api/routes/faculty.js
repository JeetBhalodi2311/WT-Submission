const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

router.get('/', async (req, res) => {
  const faculty = await Faculty.find();
  res.send(faculty);
});

router.get('/:id', async (req, res) => {
  const faculty = await Faculty.findById(req.params.id);
  if (!faculty) return res.status(404).send('Faculty not found');
  res.send(faculty);
});

router.post('/', async (req, res) => {
  let faculty = new Faculty({
    name: req.body.name,
    department: req.body.department,
    facultyId: req.body.facultyId
  });
  faculty = await faculty.save();
  res.send(faculty);
});

router.put('/:id', async (req, res) => {
  const faculty = await Faculty.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      department: req.body.department,
      facultyId: req.body.facultyId
    },
    { new: true }
  );

  if (!faculty) return res.status(404).send('Faculty not found');
  res.send(faculty);
});

router.delete('/:id', async (req, res) => {
  const faculty = await Faculty.findByIdAndDelete(req.params.id);
  if (!faculty) return res.status(404).send('Faculty not found');
  res.send(faculty);
});

module.exports = router;
