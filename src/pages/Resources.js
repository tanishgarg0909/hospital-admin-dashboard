import React, { useState } from 'react';

const initialResources = {
  beds: { total: 100, occupied: 85, available: 15 },
  icu: { total: 15, occupied: 12, available: 3 },
  ot: { total: 8, occupied: 5, available: 3 },
};

const initialInventory = [
    { item: 'Paracetamol', type: 'Pharmacy', quantity: 5000, lowThreshold: 1000 },
    { item: 'Blood Test Kits', type: 'Lab', quantity: 350, lowThreshold: 500 }, // Low
    { item: 'Surgical Gloves', type: 'Pharmacy', quantity: 800, lowThreshold: 500 },
];

const Resources = () => {
  const [resources, setResources] = useState(initialResources);
  const [inventory, setInventory] = useState(initialInventory);

  const getStatus = (item) => {
      if (item.quantity < item.lowThreshold) {
          return { text: 'Low Stock', color: 'red' };
      }
      return { text: 'Sufficient', color: 'green' };
  };

  return (
    <div className="resources-page">
      <h2>🛠️ Hospital Resources Management</h2>

      <h3>Bed / ICU / OT Availability</h3>
      <div className="stats-grid">
        {Object.keys(resources).map(key => (
          <div key={key} className="stat-card" style={{ borderLeftColor: resources[key].available > 0 ? '#28a745' : '#dc3545' }}>
            <h3>{key.toUpperCase()} Availability</h3>
            <p>{resources[key].available} / {resources[key].total}</p>
            <small>Occupied: {resources[key].occupied}</small>
          </div>
        ))}
      </div>

      <h3>Lab & Pharmacy Inventory Tracking</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Low Threshold</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => {
            const status = getStatus(item);
            return (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
                <td>{item.lowThreshold}</td>
                <td style={{ color: status.color, fontWeight: 'bold' }}>
                  {status.text}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Resources;