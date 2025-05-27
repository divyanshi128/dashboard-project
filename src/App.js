import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './DashboardMainContent';

import { navigationItems } from './data/appointments';
// import { Sidebar } from './components/sidebar';
import History from './pages/History';
import Calendar from './pages/Calendar';
import Appointments from './pages/Appointments';
import Statistics from './pages/Statistics';
import Chat from './pages/Chat';
import Supports from './pages/Support';


import Dashboard from './pages/DashboardMainContent ';
import Sidebar from './components/Sidebar';
import Setting from './pages/Settings';


function App() {
  return (
    <Router>
      <div className='bg-customBlue p-4 min-h-screen'>
        <div className="min-h-screen  rounded-[20px] bg-white flex">
          <Sidebar navigationData={navigationItems} />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/support" element={<Supports />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
