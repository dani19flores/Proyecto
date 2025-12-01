import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from './presentation/pages/DashboardPage';
import { SettingsPage } from './presentation/pages/SettingsPage';
import { MainLayout } from './presentation/layout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;