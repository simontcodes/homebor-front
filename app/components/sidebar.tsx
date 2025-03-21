import Link from "next/link";
import { Home, Users, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-primary text-white flex flex-col p-5">
      <h2 className="text-xl font-bold">Homebor</h2>
      <nav className="mt-6 space-y-4">
        <Link href="/dashboard" className="flex items-center space-x-2 hover:text-accent">
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/dashboard/students" className="flex items-center space-x-2 hover:text-accent">
          <Users size={20} />
          <span>Students</span>
        </Link>
        <Link href="/dashboard/settings" className="flex items-center space-x-2 hover:text-accent">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
