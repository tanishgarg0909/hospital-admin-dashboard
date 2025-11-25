import React, { useState } from 'react';

const initialInvoices = [
  { id: 'INV001', patient: 'John Doe', total: 1500.50, status: 'Paid', date: '2025-11-22' },
  { id: 'INV002', patient: 'Jane Smith', total: 850.00, status: 'Pending', date: '2025-11-24' },
];

const Billing = () => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [newInvoice, setNewInvoice] = useState({ patient: '', services: '', amount: '' });

  const generateInvoice = (e) => {
    e.preventDefault();
    const newId = `INV${String(invoices.length + 1).padStart(3, '0')}`;
    const date = new Date().toISOString().slice(0, 10);
    const newEntry = { 
        id: newId, 
        patient: newInvoice.patient, 
        total: parseFloat(newInvoice.amount), 
        status: 'Pending', 
        date 
    };
    setInvoices([...invoices, newEntry]);
    setNewInvoice({ patient: '', services: '', amount: '' });
  };

  const updateStatus = (id, status) => {
    setInvoices(invoices.map(inv => 
        inv.id === id ? { ...inv, status } : inv
    ));
  };

  return (
    <div className="billing-page">
      <h2>🧾 Automated Billing & Invoicing</h2>

      <div className="add-doctor-panel"> {/* Reusing the panel style for a quick form */}
        <h3>Generate New Invoice</h3>
        <input placeholder="Patient Name" value={newInvoice.patient} onChange={(e) => setNewInvoice({...newInvoice, patient: e.target.value})} />
        <input placeholder="Service Description" value={newInvoice.services} onChange={(e) => setNewInvoice({...newInvoice, services: e.target.value})} />
        <input type="number" placeholder="Amount ($)" value={newInvoice.amount} onChange={(e) => setNewInvoice({...newInvoice, amount: e.target.value})} />
        <button onClick={generateInvoice}>Generate</button>
      </div>

      <h3>Recent Invoices</h3>
      <table>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Patient</th>
            <th>Total Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.id}</td>
              <td>{inv.patient}</td>
              <td>${inv.total.toFixed(2)}</td>
              <td>{inv.date}</td>
              <td style={{ color: inv.status === 'Paid' ? 'green' : 'orange', fontWeight: 'bold' }}>{inv.status}</td>
              <td>
                <button 
                    onClick={() => updateStatus(inv.id, 'Paid')} 
                    disabled={inv.status === 'Paid'}
                    style={{ backgroundColor: inv.status === 'Paid' ? '#ccc' : '#28a745' }}>
                    Mark as Paid
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Billing;