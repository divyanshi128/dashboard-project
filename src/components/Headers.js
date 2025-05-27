import { Search, Plus } from 'lucide-react';

export const SearchHeader = ({ onSearch, searchPlaceholder = "Search" }) => (
  <div className="flex items-center space-x-4 mb-4">
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder={searchPlaceholder}
        onChange={(e) => onSearch && onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="relative">
      <img
        src="/assets/bell.png"
        alt="Bell Icon"
        className="w-6 h-6 object-contain"
      />
    </div>
  </div>
);

export const ProfileHeader = ({ profileImage = "/assets/man.svg", onAddClick }) => (
  <div className="flex items-center justify-end space-x-3 mb-4 pt-6 pr-8">
    <div className="w-10 h-10 bg-cyanBright rounded-lg flex items-center justify-center">
      <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-md" />
    </div>
    <button
      onClick={onAddClick}
      className="w-10 h-10 bg-deepIndigo rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-colors"
    >
      <Plus className="w-5 h-5 text-white" />
    </button>
  </div>
);