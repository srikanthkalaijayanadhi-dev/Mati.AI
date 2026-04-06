import Link from 'next/link';
import { LayoutDashboard, Store, BarChart, Settings } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block shrink-0">
        <div className="p-6">
          <div className="font-bold text-xl tracking-tight mb-8">SiteBuilder</div>
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">
              <LayoutDashboard className="w-5 h-5 text-gray-500" /> Overview
            </Link>
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 font-medium bg-gray-50">
              <Store className="w-5 h-5 text-gray-500" /> Stores
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">
              <BarChart className="w-5 h-5 text-gray-500" /> Analytics
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 font-medium">
              <Settings className="w-5 h-5 text-gray-500" /> Settings
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
