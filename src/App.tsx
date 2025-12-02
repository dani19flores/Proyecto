import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from './presentation/pages/DashboardPage';
import { ReportsPage } from './presentation/pages/ReportsPage';
import { SettingsPage } from './presentation/pages/SettingsPage';
import { ProfilePage } from './presentation/pages/ProfilePage';
import { MainLayout } from './presentation/layout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;