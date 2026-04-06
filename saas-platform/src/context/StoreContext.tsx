"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Store, Product } from '@/types/store';

const initialStores: Store[] = [
  {
    id: "1",
    slug: "thanjai-paruthi-paal",
    name: "Thanjai Paruthi Paal",
    niche: "Natural herbal drinks and festival foods",
    tagline: "Authentic Taste of Heritage",
    logoUrl: "https://ui-avatars.com/api/?name=Thanjai+Paruthi&background=10b981&color=fff",
    primaryColor: "#10b981",
    secondaryColor: "#047857",
    views: 12450,
    sales: 320,
    products: [
      {
        id: "p1",
        name: "Traditional Paruthi Paal",
        price: 99,
        description: "Classic cotton seed milk brewed with traditional herbs and jaggery.",
        imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80"
      },
      {
        id: "p2",
        name: "Herbal Soup Mix",
        price: 149,
        description: "A restorative blend of 12 natural herbs to boost immunity.",
        imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
      },
      {
        id: "p3",
        name: "Cold-Pressed Amla Juice",
        price: 199,
        description: "Freshly squeezed, unpasteurized gooseberry juice with no added sugar.",
        imageUrl: "https://images.unsplash.com/photo-1622597467836-f38ec3f8e658?w=600&q=80"
      }
    ]
  },
  {
    id: "2",
    slug: "jana-nayagan-media",
    name: "Jana Nayagan Media",
    niche: "Digital products and movie promotional materials",
    tagline: "Empowering Next-Gen Creators",
    logoUrl: "https://ui-avatars.com/api/?name=Jana+Media&background=8b5cf6&color=fff",
    primaryColor: "#8b5cf6",
    secondaryColor: "#4c1d95",
    views: 8900,
    sales: 145,
    products: [
      {
        id: "p4",
        name: "Cinematic LUTs Pack Vol. 1",
        price: 499,
        description: "10 professional color grading presets for Premiere Pro and DaVinci.",
        imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80"
      },
      {
        id: "p5",
        name: "Action Movie Poster Templates",
        price: 299,
        description: "Fully editable PSD templates for indie filmmakers.",
        imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80"
      }
    ]
  },
  {
    id: "3",
    slug: "wearsho-drop",
    name: "WearSho Drop",
    niche: "Trendy streetwear clothing",
    tagline: "Street style redefined.",
    logoUrl: "https://ui-avatars.com/api/?name=WearSho&background=000000&color=fff",
    primaryColor: "#000000",
    secondaryColor: "#333333",
    views: 45000,
    sales: 1250,
    products: [
      {
        id: "p6",
        name: "Oversized Graphic Tee",
        price: 999,
        description: "Heavyweight 100% cotton tee with puff print back graphic.",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
      },
      {
        id: "p7",
        name: "Utility Cargo Pants",
        price: 1899,
        description: "Relaxed fit cargo pants with adjustable hem toggles.",
        imageUrl: "https://images.unsplash.com/photo-1624378439575-d1ead6bb24b5?w=600&q=80"
      },
      {
        id: "p8",
        name: "High-Top Sneakers",
        price: 3499,
        description: "Premium leather high-tops featuring bold contrast stitching.",
        imageUrl: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&q=80"
      }
    ]
  }
];

interface StoreContextType {
  stores: Store[];
  addStore: (store: Store) => void;
  updateStore: (id: string, updatedData: Partial<Store>) => void;
  deleteStore: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [stores, setStores] = useState<Store[]>(initialStores);

  const addStore = (store: Store) => {
    setStores(prev => [...prev, store]);
  };

  const updateStore = (id: string, updatedData: Partial<Store>) => {
    setStores(prev => prev.map(store => 
      store.id === id ? { ...store, ...updatedData } : store
    ));
  };

  const deleteStore = (id: string) => {
    setStores(prev => prev.filter(store => store.id !== id));
  };

  return (
    <StoreContext.Provider value={{ stores, addStore, updateStore, deleteStore }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
}
