import React, { useState } from 'react';

const initialAppointments = [
  { id: 1, patient: 'Sarah Lee', time: '09:00', doctor: 'Dr. A Smith', status: 'Scheduled', queue: 1 },
  { id: 2, patient: 'Tom Wilson', time: '09:15', doctor: 'Dr. B Jones', status: 'In Progress', queue: 2 },
  { id: 3, patient: 'Katy Perry', time: '09:30', doctor: 'Dr. A Smith', status: 'Scheduled', queue: 3 },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };
  
  // Simple function to move an appointment up the queue (lower number is higher priority)
  const moveUpQueue = (id) => {
    const appIndex = appointments.findIndex(app => app.id === id);
    if (appIndex > 0) {
        const newAppointments = [...appointments];
        [newAppointments[appIndex - 1], newAppointments[appIndex]] = [newAppointments[appIndex], newAppointments[appIndex - 1]];
        // Recalculate queue numbers based on new order
        setAppointments(newAppointments.map((app, index) => ({...app, queue: index + 1})));
    }
  };


  return (
    <div className="appointments-page">
      <h2>🗓️ Appointment & Queue Control</h2>

      <h3>Today's Appointment Queue</h3>
      <table>
        <thead>
          <tr>
            <th>Queue #</th>
            <th>Time</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments
            .sort((a, b) => a.queue - b.queue) // Ensure sorting by queue number
            .map((app) => (
            <tr key={app.id}>
              <td>{app.queue}</td>
              <td>{app.time}</td>
              <td>{app.patient}</td>
              <td>{app.doctor}</td>
              <td style={{ fontWeight: 'bold' }}>{app.status}</td>
              <td>
                <button onClick={() => updateAppointmentStatus(app.id, 'In Progress')} disabled={app.status === 'In Progress'} style={{ backgroundColor: '#ffc107', color: 'black', marginRight: '5px' }}>Start</button>
                <button onClick={() => updateAppointmentStatus(app.id, 'Completed')} disabled={app.status === 'Completed'} style={{ backgroundColor: '#007bff', marginRight: '5px' }}>Complete</button>
                <button onClick={() => moveUpQueue(app.id)} disabled={app.queue === 1} className="edit-btn">⬆️ Move Up</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;