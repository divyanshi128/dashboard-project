import { activityData, calendarData, currentAppointments, healthMetrics, upcomingSchedule } from '../data/appointments';
import { ProfileHeader, SearchHeader } from '../components/Headers';
import { AnatomySection } from '../components/AnatomySection ';
import {  ActivityFeed } from '../components/ActivityFeed ';
import {  CalendarView } from '../components/CalendarView ';
import { CurrentAppointments, UpcomingSchedule } from '../components/SimpleAppointmentCard ';


export default function Dashboard () {
  const handleDetailsClick = () => {

    console.log("Navigate to details page");
  };

  const handleBodySearch = () => {

    console.log("Body search triggered");
  };
  const handlePrevMonth = () => {
    console.log("Body search triggered");


  };
  const onAppointmentClick = () => {
    console.log("Body search triggered");


  };
  const handleAppointmentClick = () => {
    console.log("Body search triggered");


  };

  const handleNextMonth = () => {
    console.log("Body search triggered");


  };

  const handleDateClick = (date, dayIndex) => {
    console.log(`Clicked on date ${date}, day index ${dayIndex}`);

  };

   return (
    <div className="flex-1 p-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-2 pt-6 pl-6">
          {/* Search Header */}
          <SearchHeader onSearch={() => {}} />

          {/* Dashboard Title */}
          <h1 className="text-3xl font-bold text-deepIndigo mb-4 text-left">Dashboard</h1>

          {/* Human Body Section */}
          <AnatomySection
            humanBodyImage="/assets/human.png"
            metrics={healthMetrics}
            onDetailsClick={handleDetailsClick}
            onBodySearch={handleBodySearch}
          />

          {/* Activity Feed */}
          <ActivityFeed activityData={activityData} />
        </div>

        <div className="space-y-2 bg-customWhite rounded-r-[20px] p-4">
          {/* Profile Header */}
          <ProfileHeader />

          {/* Calendar View */}
          <CalendarView
            calendarData={calendarData}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onDateClick={handleDateClick}
          />

          {/* Current Appointments */}
          <CurrentAppointments
            appointments={currentAppointments}
            onAppointmentClick={onAppointmentClick}
          />

          {/* Upcoming Schedule */}
          <UpcomingSchedule
            schedule={upcomingSchedule}
            onAppointmentClick={handleAppointmentClick}
          />
        </div>
      </div>
    </div>
  );
}
