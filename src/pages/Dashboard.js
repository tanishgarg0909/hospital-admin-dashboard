import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h2>📈 Data & Analytics Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Revenue (Monthly)</h3>
          <p>$1.2M</p>
        </div>
        <div className="stat-card">
          <h3>Bed Occupancy</h3>
          <p>85%</p>
        </div>
        <div className="stat-card">
          <h3>Pending Claims</h3>
          <p>45</p>
        </div>
      </div>
      {/* Add charts/graphs here */}
      <p>This section will display key hospital statistics and revenue reports.</p>
    </div>
  );
};

export default Dashboard;