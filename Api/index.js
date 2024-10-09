const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(express.json());
  
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jeettt_2311:Bhavy823@jeetbhalodi.86xw7.mongodb.net/CLG_database')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const studentRoutes = require('./routes/student');
const facultyRoutes = require('./routes/faculty');

app.use('/api/students', studentRoutes);
app.use('/api/faculty', facultyRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}...`));





