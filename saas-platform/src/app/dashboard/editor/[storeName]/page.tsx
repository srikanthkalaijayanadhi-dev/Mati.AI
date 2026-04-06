"use client";

import { use, useState } from 'react';
import { useStoreContext } from '@/context/StoreContext';
import { notFound } from 'next/navigation';
import { Settings2, Palette, Package, Plus, Trash2, ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function EditorPage({ params }: { params: Promise<{ storeName: string }> }) {
  const resolvedParams = use(params);
  const { stores, updateStore } = useStoreContext();
  const [activeTab, setActiveTab] = useState<'settings' | 'theme' | 'products'>('settings');
  
  const store = stores.find(s => s.slug === resolvedParams.storeName);
  
  if (!store) {
    return notFound();
  }

  const handleUpdate = (field: string, value: any) => {
    updateStore(store.id, { [field]: value });
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: `new-${Date.now()}`,
      name: "New Product",
      price: 0,
      description: "A fresh new product.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
    };
    handleUpdate('products', [...store.products, newProduct]);
  };

  const handleRemoveProduct = (productId: string) => {
    handleUpdate('products', store.products.filter(p => p.id !== productId));
  };

  const handleUpdateProduct = (productId: string, field: string, value: any) => {
    const updatedProducts = store.products.map(p => 
      p.id === productId ? { ...p, [field]: value } : p
    );
    handleUpdate('products', updatedProducts);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white mt-[-2rem] mb-[-2rem] mx-[-2rem]">
      {/* Left Panel: Editor Controls */}
      <div className="w-[450px] border-r flex flex-col h-full bg-white relative z-10 shadow-xl shrink-0">
        <div className="p-4 border-b flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="p-2 hover:bg-slate-200 rounded-lg transition text-slate-600">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="font-bold">Editing '{store.name}'</div>
          </div>
          <Link href={`/store/${store.slug}`} target="_blank" className="text-sm font-medium text-blue-600 hover:text-blue-800">
            View Live
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-slate-50">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition ${activeTab === 'settings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
          >
            <Settings2 className="w-4 h-4" /> Settings
          </button>
          <button 
            onClick={() => setActiveTab('theme')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition ${activeTab === 'theme' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
          >
            <Palette className="w-4 h-4" /> Theme
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition ${activeTab === 'products' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
          >
            <Package className="w-4 h-4" /> Products
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-white pb-24">
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Store Name</label>
                <input 
                  type="text" 
                  value={store.name} 
                  onChange={e => handleUpdate('name', e.target.value)}
                  className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Store Slug (URL)</label>
                <input 
                  type="text" 
                  value={store.slug} 
                  disabled
                  className="w-full border rounded-lg p-2.5 bg-slate-100 text-slate-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tagline</label>
                <input 
                  type="text" 
                  value={store.tagline} 
                  onChange={e => handleUpdate('tagline', e.target.value)}
                  className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Logo URL</label>
                <input 
                  type="text" 
                  value={store.logoUrl} 
                  onChange={e => handleUpdate('logoUrl', e.target.value)}
                  className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-600 outline-none mb-3"
                />
                {store.logoUrl && <img src={store.logoUrl} alt="Logo Preview" className="h-16 w-16 object-contain rounded-md border p-1" />}
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Primary Color</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={store.primaryColor} 
                    onChange={e => handleUpdate('primaryColor', e.target.value)}
                    className="w-12 h-12 rounded cursor-pointer border-0 p-0"
                  />
                  <input 
                    type="text" 
                    value={store.primaryColor} 
                    onChange={e => handleUpdate('primaryColor', e.target.value)}
                    className="flex-1 border rounded-lg p-2.5 outline-none font-mono text-sm uppercase"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Secondary Color</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={store.secondaryColor} 
                    onChange={e => handleUpdate('secondaryColor', e.target.value)}
                    className="w-12 h-12 rounded cursor-pointer border-0 p-0"
                  />
                  <input 
                    type="text" 
                    value={store.secondaryColor} 
                    onChange={e => handleUpdate('secondaryColor', e.target.value)}
                    className="flex-1 border rounded-lg p-2.5 outline-none font-mono text-sm uppercase"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              {store.products.map((product, index) => (
                <div key={product.id} className="p-4 border rounded-xl bg-slate-50 relative group">
                  <button 
                    onClick={() => handleRemoveProduct(product.id)}
                    className="absolute top-4 right-4 text-red-500 opacity-0 group-hover:opacity-100 transition p-1 hover:bg-red-50 rounded"
                    title="Delete Product"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="text-sm font-bold mb-4 text-slate-400">Product #{index + 1}</div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Title</label>
                      <input 
                        type="text" 
                        value={product.name} 
                        onChange={e => handleUpdateProduct(product.id, 'name', e.target.value)}
                        className="w-full border rounded-md p-2 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Price (₹)</label>
                      <input 
                        type="number" 
                        value={product.price} 
                        onChange={e => handleUpdateProduct(product.id, 'price', parseFloat(e.target.value) || 0)}
                        className="w-full border rounded-md p-2 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Image URL</label>
                      <input 
                        type="text" 
                        value={product.imageUrl} 
                        onChange={e => handleUpdateProduct(product.id, 'imageUrl', e.target.value)}
                        className="w-full border rounded-md p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button 
                onClick={handleAddProduct}
                className="w-full border-2 border-dashed border-slate-300 text-slate-600 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-slate-50 transition font-medium"
              >
                <Plus className="w-4 h-4" /> Add Product
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel: Live Preview */}
      <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-4xl h-full bg-white rounded-xl shadow-2xl overflow-hidden border flex flex-col relative transform transition-all">
          <div className="absolute top-0 w-full h-1" style={{ backgroundColor: store.primaryColor }}></div>
          
          {/* Mock Public Storefront Component */}
          <div className="h-full overflow-y-auto">
            {/* Header */}
            <header className="p-6 border-b flex justify-between items-center" style={{ borderColor: `${store.primaryColor}20` }}>
              <div className="flex items-center gap-3">
                {store.logoUrl ? (
                  <img src={store.logoUrl} alt={store.name} className="h-10 w-10 rounded-lg object-cover" />
                ) : (
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: store.primaryColor }}>
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                )}
                <h1 className="text-xl font-bold" style={{ color: store.primaryColor }}>{store.name}</h1>
              </div>
              <nav className="hidden sm:flex gap-6 text-sm font-medium" style={{ color: store.secondaryColor }}>
                <Link href="#">Home</Link>
                <Link href="#">Shop</Link>
                <Link href="#">About</Link>
              </nav>
            </header>

            {/* Hero */}
            <div className="py-20 px-8 text-center bg-slate-50">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: store.primaryColor }}>{store.tagline}</h2>
              <p className="text-lg opacity-80" style={{ color: store.secondaryColor }}>{store.niche}</p>
            </div>

            {/* Products */}
            <div className="p-8 max-w-6xl mx-auto py-16">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: store.primaryColor }}>Featured Products</h3>
              {store.products.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed rounded-xl opacity-50">No products available.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {store.products.map(product => (
                    <div key={product.id} className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col">
                      <div className="h-48 w-full bg-slate-100">
                        {product.imageUrl && (
                          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h4 className="font-bold text-lg mb-1">{product.name}</h4>
                        <p className="text-2xl font-extrabold mb-3" style={{ color: store.primaryColor }}>₹{product.price}</p>
                        <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-2">{product.description}</p>
                        <button 
                          className="w-full py-2.5 rounded-lg text-white font-medium transition flex justify-center items-center gap-2"
                          style={{ backgroundColor: store.primaryColor }}
                        >
                          <ShoppingCart className="w-4 h-4" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Footer */}
            <footer className="py-12 text-center border-t mt-auto" style={{ backgroundColor: `${store.primaryColor}05` }}>
              <p className="font-medium" style={{ color: store.secondaryColor }}>© 2026 {store.name}. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
