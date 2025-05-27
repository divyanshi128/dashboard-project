const CurrentAppointmentCard = ({ appointment }) => (

  <div className={`${appointment.style} `}>
    {console.log(appointment.id)}
    <div className="flex items-center space-x-4">
      <div className="flex-1 text-start">
        <div className="flex justify-between">
          <h4 className={`font-semibold text-lg ${appointment.style.includes('text-white') ? 'text-white' : 'text-deepIndigo'
            }`}>
            {appointment.type}
          </h4>
          <img
            src={appointment.icon}
            alt={`${appointment.type} Icon`}
            className="w-6 h-6 object-contain"
          />
        </div>
        <p className={`text-sm ${appointment.style.includes('text-white') ? 'opacity-90' : 'text-gray-600'
          }`}>
          {appointment.time}
        </p>
        <p className={`text-sm ${appointment.style.includes('text-white') ? 'opacity-90' : 'text-gray-600'
          }`}>
          {appointment.doctor}
        </p>
      </div>
    </div>
  </div>
);

const SimpleAppointmentCard = ({ appointment }) => (
  <div className="bg-mutedPurple rounded-3xl p-4">
    <div className="flex justify-between items-center w-full mb-2">
      <div className="flex flex-col text-left">
        <span className="text-sm font-medium text-gray-900">{appointment.title}</span>
        <p className="text-xs text-gray-500">{appointment.time}</p>
      </div>
      <img
        src={appointment.icon}
        alt={`${appointment.title} Icon`}
        className="w-4 h-4 object-contain"
      />
    </div>
  </div>
);

export const CurrentAppointments = ({ appointments, onAppointmentClick }) => (
  <div className="flex space-x-4">
    {appointments.map((appointment) => (

      <CurrentAppointmentCard appointment={appointment} />

    ))}
  </div>
);

export const UpcomingSchedule = ({
  title = "The Upcoming Schedule",
  schedule,
  onAppointmentClick
}) => (
  <div>
    <h3 className="text-xl font-semibold text-deepIndigo text-left mb-4">{title}</h3>
    <div className="space-y-2">
      {schedule.map((daySchedule, dayIndex) => (
        <div key={daySchedule.day}>
          <p className="text-sm text-gray-500 mb-2 text-left">On {daySchedule.day}</p>
          <div className={`grid gap-3 ${daySchedule.appointments.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
            {daySchedule.appointments.map((appointment) => (
              <div
                key={appointment.id}
                onClick={() => onAppointmentClick && onAppointmentClick(appointment)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <SimpleAppointmentCard appointment={appointment} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);