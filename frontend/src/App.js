// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import Landing from './pages/Landing';
import Course from './pages/Course'
import InteractiveLearningPage from './pages/InteractiveLearningPage';
import ProfileAndSettingsPage from './pages/ProfileAndSettingsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Course />} /> 
          <Route path="/interactivelearningpage" element={<InteractiveLearningPage />} />
          <Route path="/profile" element={<ProfileAndSettingsPage />} /> 

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

