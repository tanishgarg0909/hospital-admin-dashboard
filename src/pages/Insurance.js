import React, { useState } from 'react';

const initialClaims = [
  { id: 701, patient: 'Mark Brown', policy: 'BlueCross', amount: 3500, status: 'Pending Review', submitted: '2025-11-20' },
  { id: 702, patient: 'Lisa Ray', policy: 'HealthCare Inc.', amount: 1200, status: 'Approved', submitted: '2025-11-18' },
  { id: 703, patient: 'George Hamilton', policy: 'Global Assurance', amount: 8500, status: 'Denied', submitted: '2025-11-15' },
  { id: 704, patient: 'Nancy Drew', policy: 'BlueCross', amount: 450.75, status: 'Approved', submitted: '2025-11-21' },
  { id: 705, patient: 'Peter Parker', policy: 'MedLife', amount: 12000, status: 'Pending Review', submitted: '2025-11-19' },
  { id: 706, patient: 'Mary Jane', policy: 'HealthCare Inc.', amount: 670.00, status: 'Paid', submitted: '2025-11-14' },
  { id: 707, patient: 'Bruce Wayne', policy: 'Global Assurance', amount: 25000, status: 'Pending Review', submitted: '2025-11-22' },
  { id: 708, patient: 'Clark Kent', policy: 'MedLife', amount: 95.50, status: 'Approved', submitted: '2025-11-23' },
  { id: 709, patient: 'Diana Prince', policy: 'BlueCross', amount: 5100.20, status: 'Paid', submitted: '2025-11-16' },
  { id: 710, patient: 'Barry Allen', policy: 'HealthCare Inc.', amount: 320.00, status: 'Denied', submitted: '2025-11-24' },
];

const Insurance = () => {
  const [claims, setClaims] = useState(initialClaims);

  const updateClaimStatus = (id, newStatus) => {
    setClaims(claims.map(claim => 
      claim.id === id ? { ...claim, status: newStatus } : claim
    ));
  };

  return (
    <div className="insurance-page">
      <h2>📄 Insurance & Claims Processing</h2>
      
      <h3>Claims Awaiting Action</h3>
      <table>
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Patient</th>
            <th>Policy Provider</th>
            <th>Amount Claimed</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td>{claim.id}</td>
              <td>{claim.patient}</td>
              <td>{claim.policy}</td>
              <td>${claim.amount.toFixed(2)}</td>
              <td>{claim.submitted}</td>
              <td style={{ color: claim.status === 'Approved' ? 'green' : (claim.status === 'Rejected' ? 'red' : 'orange') }}>
                {claim.status}
              </td>
              <td>
                {claim.status === 'Pending Review' && (
                  <>
                    <button onClick={() => updateClaimStatus(claim.id, 'Approved')} style={{ backgroundColor: '#28a745', marginRight: '5px' }}>Approve</button>
                    <button onClick={() => updateClaimStatus(claim.id, 'Rejected')} style={{ backgroundColor: '#dc3545' }}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Insurance;
