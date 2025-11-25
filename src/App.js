import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Resources from './pages/Resources';
import Billing from './pages/Billing';
import Insurance from './pages/Insurance';
import Appointments from './pages/Appointments';
import './App.css'; // Assume basic styling is here

// Basic Layout Component to wrap all protected routes
const AdminLayout = ({ children, isAuthenticated, setIsAuthenticated }) => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <Header setIsAuthenticated={setIsAuthenticated} />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};


function App() {
  // Simple state for authentication (replace with context/Redux later)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Admin Login */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route path="/" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Dashboard /></AdminLayout>} />
          <Route path="/dashboard" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Dashboard /></AdminLayout>} />
          <Route path="/doctors" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Doctors /></AdminLayout>} />
          <Route path="/patients" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Patients /></AdminLayout>} />
          <Route path="/resources" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Resources /></AdminLayout>} />
          <Route path="/billing" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Billing /></AdminLayout>} />
          <Route path="/insurance" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Insurance /></AdminLayout>} />
          <Route path="/appointments" element={<AdminLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}><Appointments /></AdminLayout>} />

          {/* Redirect to login if path doesn't match and not authenticated */}
          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;