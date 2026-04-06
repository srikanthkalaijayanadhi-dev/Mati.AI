"use client";

import { use } from 'react';
import { useStoreContext } from '@/context/StoreContext';
import { notFound } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function PublicStorePage({ params }: { params: Promise<{ storeName: string }> }) {
  const resolvedParams = use(params);
  const { stores } = useStoreContext();
  
  const store = stores.find(s => s.slug === resolvedParams.storeName);
  
  if (!store) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="w-full h-1" style={{ backgroundColor: store.primaryColor }}></div>
      
      {/* Header */}
      <header className="p-6 max-w-7xl mx-auto w-full flex justify-between items-center bg-white border-b" style={{ borderColor: `${store.primaryColor}20` }}>
        <div className="flex items-center gap-3">
          {store.logoUrl ? (
            <img src={store.logoUrl} alt={store.name} className="h-12 w-12 rounded-lg object-cover" />
          ) : (
            <div className="h-12 w-12 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: store.primaryColor }}>
              <ShoppingCart className="w-6 h-6" />
            </div>
          )}
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: store.primaryColor }}>{store.name}</h1>
        </div>
        <nav className="flex gap-8 text-sm font-semibold" style={{ color: store.secondaryColor }}>
          <Link href="#" className="hover:opacity-80 transition">Home</Link>
          <Link href="#" className="hover:opacity-80 transition">Collection</Link>
          <Link href="#" className="hover:opacity-80 transition">About Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition text-slate-800">
            <ShoppingCart className="w-5 h-5" style={{ color: store.primaryColor }} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="py-24 px-8 text-center" style={{ backgroundColor: `${store.primaryColor}08` }}>
        <h2 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight max-w-4xl mx-auto leading-tight" style={{ color: store.primaryColor }}>{store.tagline}</h2>
        <p className="text-xl max-w-2xl mx-auto font-medium" style={{ color: store.secondaryColor }}>{store.niche}</p>
      </div>

      {/* Products */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 bg-white">
        <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: store.primaryColor }}>Shop Our Collection</h3>
        
        {store.products.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed rounded-2xl opacity-50 bg-slate-50">
            <p className="text-xl font-medium">No products available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {store.products.map(product => (
              <div key={product.id} className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col group cursor-pointer">
                <div className="h-64 w-full bg-slate-100 overflow-hidden relative">
                  {product.imageUrl && (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                  <p className="text-2xl font-extrabold mb-4" style={{ color: store.primaryColor }}>₹{product.price}</p>
                  <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">{product.description}</p>
                  <button 
                    className="w-full py-3.5 rounded-xl text-white font-bold transition flex justify-center items-center gap-2 shadow-sm hover:shadow-md"
                    style={{ backgroundColor: store.primaryColor }}
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="py-16 text-center border-t border-slate-100" style={{ backgroundColor: `${store.primaryColor}03` }}>
        <p className="font-medium text-lg mb-2" style={{ color: store.primaryColor }}>{store.name}</p>
        <p className="text-sm opacity-80" style={{ color: store.secondaryColor }}>© 2026 All rights reserved. Powered by SiteBuilder.</p>
      </footer>
    </div>
  );
}
