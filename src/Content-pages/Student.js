import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

function Student() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', class: '' });
  const [editStudent, setEditStudent] = useState(null);

  // Fetch students from the API
  useEffect(() => {
    axios.get('http://localhost:3000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  // Add a new student
  const addStudent = () => {
    axios.post('http://localhost:3000/api/students', newStudent)
      .then(response => {
        setStudents([...students, response.data]);
        setNewStudent({ name: '', class: '' });
      })
      .catch(error => {
        console.error('There was an error adding the student!', error);
      });
  };

  // Delete a student by ID
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:3000/api/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the student!', error);
      });
  };

  // Edit an existing student
  const updateStudent = () => {
    axios.put(`http://localhost:3000/api/students/${editStudent._id}`, editStudent)
      .then(response => {
        setStudents(students.map(student => (student._id === editStudent._id ? response.data : student)));
        setEditStudent(null);
      })
      .catch(error => {
        console.error('There was an error updating the student!', error);
      });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Student List</h5>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Class"
              value={newStudent.class}
              onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
              className="form-control"
            />
            <button onClick={addStudent} className="btn btn-primary mt-2">Add Student</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Class</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>
                    <button onClick={() => setEditStudent(student)} className="btn btn-warning p-2 m-2">Edit</button>
                    <button onClick={() => deleteStudent(student._id)} className="btn btn-danger ml-2 p-2 m-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editStudent && (
            <div className="mb-3">
              <input
                type="text"
                value={editStudent.name}
                onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                className="form-control"
              />
              <input
                type="text"
                value={editStudent.class}
                onChange={(e) => setEditStudent({ ...editStudent, class: e.target.value })}
                className="form-control"
              />
              <button onClick={updateStudent} className="btn btn-success mt-2 p-2 m-2">Update Student</button>
              <button onClick={() => setEditStudent(null)} className="btn btn-secondary mt-2 ml-2 p-2 m-2">Cancel</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Student;
