import { Search } from 'lucide-react';

const HealthMetricCard = ({ metric }) => (
  <div className="bg-customWhite rounded-3xl p-4 shadow-sm">
    <div className="flex-col space-y-2">
      <div className="flex gap-4 justify-start items-center">
        <img
          src={metric.icon}
          alt={`${metric.name} Icon`}
          className="w-10 h-10 object-contain"
        />
        <h4 className="font-semibold text-deepIndigo inline-block">{metric.name}</h4>
      </div>
      <p className="text-xs text-gray-500 text-start">Date: {metric.date}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${metric.color} h-2 rounded-full`}
          style={{ width: `${metric.progress}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export const AnatomySection  = ({ 
  humanBodyImage = "/assets/human.png", 
  metrics, 
  onDetailsClick,
  onBodySearch 
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Human Body */}
    <div className="bg-customWhite rounded-3xl shadow-sm">
      <div className="relative">
        <img
          src={humanBodyImage}
          alt="Human anatomy"
          className="w-full h-80 object-cover rounded-xl"
        />
        <div className="absolute top-4 right-4">
          <button 
            onClick={onBodySearch}
            className="w-8 h-8 b-gray-500 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Search className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>

    {/* Health Metrics */}
    <div className="space-y-4">
      {metrics.map((metric) => (
        <HealthMetricCard key={metric.id} metric={metric} />
      ))}
      <div className="flex justify-end">
        <button 
          onClick={onDetailsClick}
          className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Details →
        </button>
      </div>
    </div>
  </div>
);