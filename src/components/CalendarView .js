import { ChevronLeft, ChevronRight } from 'lucide-react';

const TimeSlotColumn = ({ dayIndex, timeSlot, selectedDay }) => {
  const isSelected = dayIndex === selectedDay;
  
  return (
    <div className={isSelected ? "" : "space-y-1"}>
      {timeSlot.times.map((time, timeIndex) => {
        if (isSelected) {
          return (
            <div key={timeIndex} className={`text-center py-1 text-xs ${
              timeIndex === 0 || timeIndex === 2 
                ? 'bg-mutedPurple text-gray-700' + (timeIndex === 0 ? '' : ' rounded-b-lg')
                : 'bg-mutedPurple relative'
            }`}>
              {time === timeSlot.highlighted ? (
                <span className="bg-indigo-800 text-white px-2 py-1 rounded-lg text-xs font-medium">
                  {time}
                </span>
              ) : (
                time
              )}
            </div>
          );
        }
        
        // Get specific border radius class for certain times
        const getBorderRadius = (timeValue) => {
          if (timeValue === '12:00') return 'rounded-l-lg';
          if (timeValue === '09:00') return 'rounded-r-lg';
          return 'rounded-lg';
        };
        
        return (
          <div key={timeIndex} className={`text-center py-1 text-xs ${
            time === timeSlot.appointment 
              ? `bg-lavender text-white ${getBorderRadius(time)}` 
              : time === '--' 
                ? 'text-gray-400' 
                : 'text-gray-700'
          }`}>
            {time}
          </div>
        );
      })}
    </div>
  );
};

export const CalendarView = ({ 
  calendarData, 
  onPrevMonth, 
  onNextMonth, 
  onDateClick 
}) => (
  <div className="mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold text-deepIndigo">{calendarData.month}</h3>
      <div className="flex space-x-1">
        <button 
          onClick={onPrevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-deepIndigo" />
        </button>
        <button 
          onClick={onNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-deepIndigo" />
        </button>
      </div>
    </div>

    {/* Day Headers */}
    <div className="grid grid-cols-7">
      {calendarData.dayHeaders.map((day, index) => (
        <div
          key={day}
          className={`text-center text-sm font-medium py-2 ${
            index === calendarData.selectedDay 
              ? 'bg-mutedPurple text-deepIndigo rounded-t-lg' 
              : 'text-gray-600'
          }`}
        >
          {day}
        </div>
      ))}
    </div>

    {/* Dates */}
    <div className="grid grid-cols-7">
      {calendarData.dates.map((date, index) => (
        <div
          key={date}
          onClick={() => onDateClick && onDateClick(date, index)}
          className={`text-center py-2 text-lg font-medium cursor-pointer  ${
            index === calendarData.selectedDay 
              ? 'bg-mutedPurple text-deepIndigo' 
              : 'text-gray-800'
          }`}
        >
          {date}
        </div>
      ))}
    </div>

    {/* Time Slots */}
    <div className="grid grid-cols-7">
      {calendarData.timeSlots.map((timeSlot, index) => (
        <TimeSlotColumn
          key={index}
          dayIndex={index}
          timeSlot={timeSlot}
          selectedDay={calendarData.selectedDay}
        />
      ))}
    </div>
  </div>
);