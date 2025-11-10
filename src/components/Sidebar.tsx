import { ReactNode } from 'react';
import { Package } from 'lucide-react';

interface MenuItem {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <div className="flex items-center">
          <Package className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">InventoryPro</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                item.active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={`mr-3 ${item.active ? 'text-blue-500' : 'text-gray-500'}`}>
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
