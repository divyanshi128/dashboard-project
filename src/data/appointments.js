// Static data for the medical dashboard
export const navigationItems = {
  general: [
    { id: 'dashboard', icon: 'Grid3X3', label: 'Dashboard', active: true },
    { id: 'history', icon: 'History', label: 'History', active: false },
    { id: 'calendar', icon: 'Calendar', label: 'Calendar', active: false },
    { id: 'appointments', icon: 'Users', label: 'Appointments', active: false },
    { id: 'statistics', icon: 'BarChart3', label: 'Statistics', active: false }
  ],
  tools: [
    { id: 'chat', icon: 'MessageCircle', label: 'Chat', active: false },
    { id: 'support', icon: 'HelpCircle', label: 'Support', active: false }
  ],
  settings: [
    { id: 'settings', icon: 'Settings', label: 'Setting', active: false }
  ]
};

export const healthMetrics = [
  {
    id: 'lungs',
    name: 'Lungs',
    icon: '/assets/lungs.png',
    date: '1st Oct, 2021',
    progress: 80,
    color: 'bg-darkRed'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    icon: '/assets/teeth.png',
    date: '24 Oct, 2021',
    progress: 80,
    color: 'bg-mint'
  },
  {
    id: 'bone',
    name: 'Bone',
    icon: '/assets/bone.png',
    date: '30 Oct, 2021',
    progress: 80,
    color: 'bg-coral'
  }
];

export const activityData = [
  { day: 'Mon', heights: ['h-12', 'h-8'], colors: ['bg-cyan-400', 'bg-blue-200'] },
  { day: 'Tue', heights: ['h-20', 'h-16'], colors: ['bg-blue-500', 'bg-purple-400'] },
  { day: 'Wed', heights: ['h-6', 'h-4'], colors: ['bg-gray-200', 'bg-gray-200'] },
  { day: 'Thu', heights: ['h-24', 'h-12'], colors: ['bg-cyan-400', 'bg-green-400'] },
  { day: 'Fri', heights: ['h-16', 'h-20'], colors: ['bg-green-400', 'bg-blue-400'] },
  { day: 'Sat', heights: ['h-8', 'h-6'], colors: ['bg-gray-200', 'bg-gray-200'] },
  { day: 'Sun', heights: ['h-14', 'h-10'], colors: ['bg-blue-400', 'bg-purple-300'] }
];

export const calendarData = {
  month: 'October 2021',
  dayHeaders: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  dates: [25, 26, 27, 28, 29, 30, 31],
  selectedDay: 1, // Tuesday index
  timeSlots: [
    { times: ['10:00', '11:00', '12:00'] },
    { times: ['08:00', '09:00', '10:00'], selected: true, highlighted: '09:00' },
    { times: ['12:00', '--', '13:00'] },
    { times: ['10:00', '11:00', '--'], appointment: '11:00' },
    { times: ['--', '14:00', '16:00'] },
    { times: ['12:00', '14:00', '15:00'], appointment: '12:00' },
    { times: ['09:00', '10:00', '11:00'], appointment: '09:00' }
  ]
};

export const currentAppointments = [
  {
    id: 'dentist',
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '/assets/teeth.png',
    style: 'bg-deepIndigo rounded-3xl p-4 text-white flex-[1]'
  },
  {
    id: 'physiotherapy',
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '/assets/muscle.png',
    style: 'bg-mutedPurple rounded-3xl p-4 flex-[2]'
  }
];

export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      {
        id: 'checkup',
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: '/assets/injection.png'
      },
      {
        id: 'ophthalmologist',
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: '/assets/eye.png'
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      {
        id: 'cardiologist',
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: '/assets/heart.png'
      },
      {
        id: 'neurologist',
        title: 'Neurologist',
        time: '16:00 PM',
        icon: '/assets/neurologist.png'
      }
    ]
  }
];