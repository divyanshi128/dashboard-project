const ActivityBar = ({ item }) => (
  <div className="flex-1 flex flex-col items-center">
    <div className="flex space-x-1 mb-3">
      <div className={`w-2 ${item.heights[0]} ${item.colors[0]} rounded-full`}></div>
      <div className={`w-2 ${item.heights[1]} ${item.colors[1]} rounded-full`}></div>
    </div>
    <span className="text-xs text-gray-500">{item.day}</span>
  </div>
);

export const ActivityFeed  = ({ 
  title = "Activity",
  subtitle = "3 appointment on this week",
  activityData 
}) => (
  <div className="bg-customWhite rounded-3xl p-4 shadow-sm">
    <div className="flex justify-between items-center mb-0">
      <h3 className="text-xl font-semibold text-deepIndigo">{title}</h3>
      <span className="text-sm text-gray-500">{subtitle}</span>
    </div>
    <div className="flex items-end space-x-3 h-30">
      {activityData.map((item, index) => (
        <ActivityBar key={`${item.day}-${index}`} item={item} />
      ))}
    </div>
  </div>
);