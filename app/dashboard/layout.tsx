import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
