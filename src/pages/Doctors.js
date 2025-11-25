import React, { useState } from 'react';

const initialDoctors = [
  { id: 1, name: 'Dr. Evelyn Reed', specialty: 'Cardiology', schedule: 'M-W-F' },
  { id: 2, name: 'Dr. Marcus Chen', specialty: 'Neurology', schedule: 'T-Th-S' },
  { id: 3, name: 'Dr. Sofia Khan', specialty: 'Pediatrics', schedule: 'M-F' },
  { id: 4, name: 'Dr. James O’Connell', specialty: 'Orthopedics', schedule: 'M-S' },
  { id: 5, name: 'Dr. Lena Petrova', specialty: 'Dermatology', schedule: 'W-F' },
  { id: 6, name: 'Dr. Alex Kim', specialty: 'Oncology', schedule: 'M-T-W-Th' },
  { id: 7, name: 'Dr. Chloe Davis', specialty: 'Gastroenterology', schedule: 'T-F' },
  { id: 8, name: 'Dr. Ben Carter', specialty: 'Psychiatry', schedule: 'M-T-W-Th-F' },
  { id: 9, name: 'Dr. Priya Sharma', specialty: 'Endocrinology', schedule: 'W-Th-S' },
  { id: 10, name: 'Dr. Victor Rossi', specialty: 'Anesthesiology', schedule: 'M-F (Surgery Support)' },
];

const Doctors = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', schedule: '' });

  // 1. Add Doctor (Create)
  const addDoctor = () => {
    if (newDoctor.name && newDoctor.specialty) {
      const doc = { ...newDoctor, id: Date.now() };
      setDoctors([...doctors, doc]);
      setNewDoctor({ name: '', specialty: '', schedule: '' });
    }
  };

  // 2. Remove Doctor (Delete)
  const removeDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  // 3. Update Doctor (Update) - Simplistic inline update
  const updateDoctor = (id, field, value) => {
    setDoctors(doctors.map(doc => 
        doc.id === id ? { ...doc, [field]: value } : doc
    ));
  };


  return (
    <div className="doctors-page">
      <h2>🧑‍⚕️ Manage Doctors & Schedules</h2>

      {/* --- Add Doctor Form --- */}
      <div className="add-doctor-panel">
        <h3>Add New Doctor</h3>
        <input
          placeholder="Name"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({...newDoctor, name: e.target.value})}
        />
        <input
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={(e) => setNewDoctor({...newDoctor, specialty: e.target.value})}
        />
        <input
          placeholder="Schedule (e.g., M-F)"
          value={newDoctor.schedule}
          onChange={(e) => setNewDoctor({...newDoctor, schedule: e.target.value})}
        />
        <button onClick={addDoctor}>Add Doctor</button>
      </div>

      <hr/>

      {/* --- Doctors List --- */}
      <h3>Current Doctors</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>
                <input 
                    type="text" 
                    value={doc.name} 
                    onChange={(e) => updateDoctor(doc.id, 'name', e.target.value)}
                />
              </td>
              <td>
                <input 
                    type="text" 
                    value={doc.specialty} 
                    onChange={(e) => updateDoctor(doc.id, 'specialty', e.target.value)}
                />
              </td>
              <td>
                <input 
                    type="text" 
                    value={doc.schedule} 
                    onChange={(e) => updateDoctor(doc.id, 'schedule', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => removeDoctor(doc.id)} className="delete-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
