import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

function Faculty() {
  const [faculties, setFaculties] = useState([]);
  const [newFaculty, setNewFaculty] = useState({ name: '', department: '' });
  const [editFaculty, setEditFaculty] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/faculty')
      .then(response => {
        setFaculties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the faculties!', error);
      });
  }, []);

  const addFaculty = () => {
    axios.post('http://localhost:3000/api/faculty', newFaculty)
      .then(response => {
        setFaculties([...faculties, response.data]);
        setNewFaculty({ name: '', department: '' });
      })
      .catch(error => {
        console.error('There was an error adding the faculty!', error);
      });
  };

  const deleteFaculty = (id) => {
    axios.delete(`http://localhost:3000/api/faculty/${id}`)
      .then(() => {
        setFaculties(faculties.filter(faculty => faculty._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the faculty!', error);
      });
  };

  const updateFaculty = () => {
    axios.put(`http://localhost:3000/api/faculty/${editFaculty._id}`, editFaculty)
      .then(response => {
        setFaculties(faculties.map(faculty => (faculty._id === editFaculty._id ? response.data : faculty)));
        setEditFaculty(null);
      })
      .catch(error => {
        console.error('There was an error updating the faculty!', error);
      });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Faculty List</h5>

          <div className="mb-3 fs-1">
            <input
              type="text"
              placeholder="Name"
              value={newFaculty.name}
              onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Department"
              value={newFaculty.department}
              onChange={(e) => setNewFaculty({ ...newFaculty, department: e.target.value })}
              className="form-control"
            />
            
            <button onClick={addFaculty} className="btn btn-primary mt-2">Add Faculty</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faculties.map((faculty, index) => (
                <tr key={faculty._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{faculty.name}</td>
                  <td>{faculty.department}</td>
                  <td>
                    <button onClick={() => setEditFaculty(faculty)} className="btn btn-warning p-2 m-2">Edit</button>
                    <button onClick={() => deleteFaculty(faculty._id)} className="btn btn-danger ml-2 p-2 m-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editFaculty && (
            <div className="mb-3">
              <input
                type="text"
                value={editFaculty.name}
                onChange={(e) => setEditFaculty({ ...editFaculty, name: e.target.value })}
                className="form-control"
              />
              <input
                type="text"
                value={editFaculty.department}
                onChange={(e) => setEditFaculty({ ...editFaculty, department: e.target.value })}
                className="form-control"
              />
              <button onClick={updateFaculty} className="btn btn-success mt-2 p-2 m-2">Update Faculty</button>
              <button onClick={() => setEditFaculty(null)} className="btn btn-secondary mt-2 ml-2 p-2 m-2">Cancel</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Faculty;
