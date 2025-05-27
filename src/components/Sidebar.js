import { Grid3X3, History, Calendar, Users, BarChart3, MessageCircle, HelpCircle, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const iconMap = {
    Grid3X3, History, Calendar, Users, BarChart3, MessageCircle, HelpCircle, Settings
};

const NavigationSection = ({ title, items }) => {
    const location = useLocation();

    return (
        <>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 text-left">
                {title}
            </div>
            {items.map((item) => {
                const IconComponent = iconMap[item.icon];
                const isActive = location.pathname.includes(item.id);

                return (
                    <Link
                        key={item.id}
                        to={`/${item.id}`}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${isActive
                            ? 'text-deepIndigo bg-blue-50'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <IconComponent className="w-5 h-5" />
                        <span className={isActive ? 'font-medium' : ''}>{item.label}</span>
                    </Link>
                );
            })}
        </>
    );
};

export const Sidebar = ({ navigationData }) => {
    const location = useLocation();
    
    return (
        <div className="w-64 bg-customWhite shadow-sm rounded-l-[20px] flex flex-col h-screen min-h-screen">
            <div className="flex flex-col h-full justify-between">
                {/* Main content area */}
                <div className="p-8 flex-1">
                    <div className="flex items-center space-x-0 mb-8">
                        <span className="text-2xl font-bold text-cyan-400">Health</span>
                        <span className="text-2xl font-bold text-deepIndigo">care.</span>
                    </div>

                    <nav className="space-y-1">
                        <NavigationSection
                            title="General"
                            items={navigationData.general}
                        />

                        <div className="mt-8">
                            <NavigationSection
                                title="Tools"
                                items={navigationData.tools}
                            />
                        </div>
                    </nav>
                </div>

                {/* Settings section at bottom */}
                <div className="p-8 pt-0">
                    {navigationData.settings.map((item) => {
                        const IconComponent = iconMap[item.icon];
                        const isActive = location.pathname.includes(item.id);
                        
                        return (
                            <Link
                                key={item.id}
                                to={`/${item.id}`}
                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${isActive
                                    ? 'text-deepIndigo bg-blue-50'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <IconComponent className="w-5 h-5" />
                                <span className={isActive ? 'font-medium' : ''}>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;