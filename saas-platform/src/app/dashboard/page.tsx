"use client";

import Link from 'next/link';
import { useStoreContext } from '@/context/StoreContext';
import { Plus, Store, Link as LinkIcon, Edit, ExternalLink } from 'lucide-react';

export default function DashboardPage() {
  const { stores } = useStoreContext();

  const totalViews = stores.reduce((sum, store) => sum + store.views, 0);
  const totalSales = stores.reduce((sum, store) => sum + store.sales, 0);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Overview</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create New Store
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="text-gray-500 text-sm font-medium mb-1">Total Stores</div>
          <div className="text-3xl font-bold">{stores.length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="text-gray-500 text-sm font-medium mb-1">Total Views</div>
          <div className="text-3xl font-bold">{totalViews.toLocaleString()}</div>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="text-gray-500 text-sm font-medium mb-1">Total Sales</div>
          <div className="text-3xl font-bold">{totalSales.toLocaleString()}</div>
        </div>
      </div>

      {/* Stores */}
      <h2 className="text-xl font-bold mb-4">Your Stores</h2>
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        {stores.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No stores found. Create one to get started.</div>
        ) : (
          <div className="divide-y">
            {stores.map(store => (
              <div key={store.id} className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 transition hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  {store.logoUrl ? (
                    <img src={store.logoUrl} alt={store.name} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                  ) : (
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      <Store className="w-8 h-8" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold">{store.name}</h3>
                    <p className="text-gray-500 text-sm">{store.niche}</p>
                    <div className="flex items-center gap-1 text-sm text-blue-600 mt-1 font-medium">
                      <LinkIcon className="w-3 h-3" /> /store/{store.slug}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                  <Link 
                    href={`/dashboard/editor/${store.slug}`}
                    className="flex-1 md:flex-none text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center gap-2 transition"
                  >
                    <Edit className="w-4 h-4" /> Edit Store
                  </Link>
                  <Link 
                    href={`/store/${store.slug}`}
                    target="_blank"
                    className="flex-1 md:flex-none text-center bg-white border px-4 py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" /> View Live
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
