import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navigationItems } from './data/appointments';
import History from './pages/History';
import Calendar from './pages/Calendar';
import Appointments from './pages/Appointments';
import Statistics from './pages/Statistics';
import Chat from './pages/Chat';
import Supports from './pages/Support';
import Dashboard from './pages/DashboardMainContent ';
import Sidebar from './components/Sidebar';
import Setting from './pages/Settings';
import { Menu } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="bg-customBlue min-h-screen">
        {/* Mobile Header with Hamburger Button */}
        <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow-md">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
        </div>

        {/* Main Layout */}
        <div className="flex min-h-screen rounded-[20px] bg-white">
          {/* Sidebar */}
          <div className={`fixed z-50 inset-y-0 left-0 w-64 transform bg-customWhite transition-transform duration-300 ease-in-out 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            lg:relative lg:translate-x-0`}>
            <Sidebar navigationData={navigationItems}  onClose={() => setSidebarOpen(false)} />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4">
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