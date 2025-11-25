import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/doctors', name: 'Manage Doctors' },
    { path: '/patients', name: 'Manage Patients' },
    { path: '/resources', name: 'Resources Mgmt' },
    { path: '/billing', name: 'Automated Billing' },
    { path: '/insurance', name: 'Insurance & Claims' },
    { path: '/appointments', name: 'Appointments' },
  ];

  return (
    <nav className="sidebar">
      <h3>Admin Panel</h3>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active-link' : undefined)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;