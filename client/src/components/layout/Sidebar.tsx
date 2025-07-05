import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  LogOut,
  Pill
} from "lucide-react";

const navigationItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/inventory", label: "Inventory", icon: Package },
  { href: "/prescriptions", label: "Prescriptions", icon: FileText },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/sales", label: "Sales", icon: ShoppingCart },
  { href: "/reports", label: "Reports", icon: BarChart3 },
];

const accountItems = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/logout", label: "Logout", icon: LogOut },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 fixed h-full z-10">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Pill className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">LC-PMS</h1>
            <p className="text-sm text-gray-500">Pharmacy System</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        <div className="px-3">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href || (item.href === "/dashboard" && location === "/");
              
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isActive 
                        ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" 
                        : "text-gray-700 hover:bg-gray-50"
                    )}>
                      <Icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="mt-8 px-3">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Account
          </h3>
          <ul className="mt-3 space-y-1">
            {accountItems.map((item) => {
              const Icon = item.icon;
              
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-gray-700 hover:bg-gray-50 flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors">
                      <Icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
