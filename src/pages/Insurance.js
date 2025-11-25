import React, { useState } from 'react';

const initialClaims = [
  { id: 701, patient: 'Mark Brown', policy: 'BlueCross', amount: 3500, status: 'Pending Review', submitted: '2025-11-20' },
  { id: 702, patient: 'Lisa Ray', policy: 'HealthCare Inc.', amount: 1200, status: 'Approved', submitted: '2025-11-18' },
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