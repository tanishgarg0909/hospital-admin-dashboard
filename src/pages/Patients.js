import React, { useState } from 'react';

const initialPatients = [
  { id: 101, name: 'John Doe', condition: 'Severe Flu', status: 'Inpatient', admitted: '2025-11-20' },
  { id: 102, name: 'Jane Smith', condition: 'Fractured Arm', status: 'Emergency/Pending', admitted: '2025-11-24' },
];

const Patients = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (patient) => {
    setEditingId(patient.id);
    setEditForm(patient);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSave = () => {
    setPatients(patients.map(p => 
      p.id === editingId ? editForm : p
    ));
    setEditingId(null);
  };

  return (
    <div className="patients-page">
      <h2>🚑 Manage Emergency Patient Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Admitted Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>
                {editingId === p.id ? (
                  <input type="text" name="condition" value={editForm.condition} onChange={handleChange} />
                ) : (
                  p.condition
                )}
              </td>
              <td>
                {editingId === p.id ? (
                  <select name="status" value={editForm.status} onChange={handleChange}>
                    <option>Inpatient</option>
                    <option>Emergency/Pending</option>
                    <option>Discharged</option>
                  </select>
                ) : (
                  p.status
                )}
              </td>
              <td>{p.admitted}</td>
              <td>
                {editingId === p.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(p)} className="edit-btn">
                    Edit Record
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;