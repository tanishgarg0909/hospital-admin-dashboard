import React, { useState } from 'react';

const initialPatients = [
  { id: 101, name: 'John Doe', condition: 'Severe Flu', status: 'Inpatient', admitted: '2025-11-20' },
  { id: 102, name: 'Jane Smith', condition: 'Fractured Arm', status: 'Emergency/Pending', admitted: '2025-11-24' },
  // --- Additional Entries ---
  { id: 103, name: 'Robert Brown', condition: 'Type 2 Diabetes', status: 'Outpatient', admitted: '2025-11-15' },
  { id: 104, name: 'Alice Lee', condition: 'Routine Checkup', status: 'Discharged', admitted: '2025-11-23' },
  { id: 105, name: 'David Wilson', condition: 'Pneumonia', status: 'Inpatient', admitted: '2025-11-25' },
  { id: 106, name: 'Maria Garcia', condition: 'Allergic Reaction', status: 'Emergency/Pending', admitted: '2025-11-25' },
  { id: 107, name: 'Sam Miller', condition: 'Hernia Repair', status: 'Outpatient', admitted: '2025-11-22' },
  { id: 108, name: 'Emily Chen', condition: 'Migraine', status: 'Discharged', admitted: '2025-11-24' },
  { id: 109, name: 'William Davis', condition: 'Asthma Exacerbation', status: 'Inpatient', admitted: '2025-11-21' },
  { id: 110, name: 'Olivia Martinez', condition: 'Back Pain (Chronic)', status: 'Outpatient', admitted: '2025-11-10' },
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
