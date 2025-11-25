import React, { useState } from 'react';

const initialAppointments = [
  { id: 1, patient: 'Sarah Lee', time: '09:00', doctor: 'Dr. Evelyn Reed', status: 'Scheduled', queue: 1 },
  { id: 2, patient: 'Tom Wilson', time: '09:15', doctor: 'Dr. Marcus Chen', status: 'In Progress', queue: 2 },
  { id: 3, patient: 'Katy Perry', time: '09:30', doctor: 'Dr. Evelyn Reed', status: 'Scheduled', queue: 3 },
  { id: 4, patient: 'Mike Johnson', time: '09:45', doctor: 'Dr. Sofia Khan', status: 'Checked In', queue: 4 },
  { id: 5, patient: 'Alice Brown', time: '10:00', doctor: 'Dr. Marcus Chen', status: 'Completed', queue: 5 },
  { id: 6, patient: 'Robert Green', time: '10:15', doctor: 'Dr. Evelyn Reed', status: 'Scheduled', queue: 6 },
  { id: 7, patient: 'Laura White', time: '10:30', doctor: 'Dr. James O’Connell', status: 'Scheduled', queue: 7 },
  { id: 8, patient: 'Ben Taylor', time: '10:45', doctor: 'Dr. Sofia Khan', status: 'Cancelled', queue: 8 },
  { id: 9, patient: 'Jessica Hill', time: '11:00', doctor: 'Dr. Lena Petrova', status: 'In Progress', queue: 9 },
  { id: 10, patient: 'Chris Evans', time: '11:15', doctor: 'Dr. Alex Kim', status: 'Scheduled', queue: 10 },
  { id: 11, patient: 'Emma Watson', time: '11:30', doctor: 'Dr. Evelyn Reed', status: 'Checked In', queue: 11 },
  { id: 12, patient: 'Daniel Craig', time: '11:45', doctor: 'Dr. Chloe Davis', status: 'Scheduled', queue: 12 },
  { id: 13, patient: 'Olivia Rodrigo', time: '13:00', doctor: 'Dr. Marcus Chen', status: 'Scheduled', queue: 13 },
  { id: 14, patient: 'Jacob Smith', time: '13:15', doctor: 'Dr. Ben Carter', status: 'Completed', queue: 14 },
  { id: 15, patient: 'Ava Williams', time: '13:30', doctor: 'Dr. Priya Sharma', status: 'Scheduled', queue: 15 },
  { id: 16, patient: 'Noah Jones', time: '13:45', doctor: 'Dr. Victor Rossi', status: 'Scheduled', queue: 16 },
  { id: 17, patient: 'Mia Miller', time: '14:00', doctor: 'Dr. James O’Connell', status: 'In Progress', queue: 17 },
  { id: 18, patient: 'Liam Davis', time: '14:15', doctor: 'Dr. Lena Petrova', status: 'Scheduled', queue: 18 },
  { id: 19, patient: 'Isabella Garcia', time: '14:30', doctor: 'Dr. Alex Kim', status: 'Cancelled', queue: 19 },
  { id: 20, patient: 'Ethan Rodriguez', time: '14:45', doctor: 'Dr. Chloe Davis', status: 'Scheduled', queue: 20 },
  { id: 21, patient: 'Sophia Martinez', time: '15:00', doctor: 'Dr. Ben Carter', status: 'Checked In', queue: 21 },
  { id: 22, patient: 'Aiden Hernandez', time: '15:15', doctor: 'Dr. Priya Sharma', status: 'Scheduled', queue: 22 },
  { id: 23, patient: 'Charlotte Lopez', time: '15:30', doctor: 'Dr. Victor Rossi', status: 'Completed', queue: 23 },
  { id: 24, patient: 'Henry Perez', time: '15:45', doctor: 'Dr. Evelyn Reed', status: 'Scheduled', queue: 24 },
  { id: 25, patient: 'Amelia Scott', time: '16:00', doctor: 'Dr. Sofia Khan', status: 'Scheduled', queue: 25 }
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
