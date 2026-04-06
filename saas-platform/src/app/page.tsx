import Link from 'next/link';
import { ArrowRight, Zap, Smartphone, Code } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b">
        <div className="font-bold text-2xl tracking-tighter">SiteBuilder SaaS</div>
        <Link href="/dashboard" className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-black/90">
          Go to Dashboard
        </Link>
      </header>

      {/* Hero */}
      <main>
        <section className="py-24 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6">Launch your store in <br /> <span className="text-blue-600">under 60 seconds.</span></h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            The easiest way to build, manage, and grow your digital storefront without writing a single line of code.
          </p>
          <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition">
            Start Your Store <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Everything you need to sell online</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Launch in Minutes</h3>
                <p className="text-gray-500">Stop waiting. Pick a tagline, set your colors, and get immediately live on your own url.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Coding Required</h3>
                <p className="text-gray-500">A visual, split-screen editor lets you see your exact changes in real-time before saving.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Optimized</h3>
                <p className="text-gray-500">Every storefront is generated to look stunning and perform perfectly on mobile devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Simple, transparent pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="border rounded-3xl p-8 text-left bg-white shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-gray-500 mb-6">Great for trying out</p>
                <div className="text-4xl font-extrabold mb-6">₹0<span className="text-xl text-gray-400 font-medium">/month</span></div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li>✓ 1 Storefront</li>
                  <li>✓ Unlimited Products</li>
                  <li>✓ Free path-based URL</li>
                </ul>
                <button className="w-full py-3 border-2 border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition">Get Started</button>
              </div>
              <div className="border-2 border-blue-600 rounded-3xl p-8 text-left relative bg-blue-50">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded-full">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">Pro</h3>
                <p className="text-blue-600 mb-6">Everything you need</p>
                <div className="text-4xl font-extrabold mb-6 text-blue-900">₹999<span className="text-xl text-blue-400 font-medium">/month</span></div>
                <ul className="space-y-3 mb-8 text-blue-800">
                  <li>✓ Unlimited Storefronts</li>
                  <li>✓ Custom Domains</li>
                  <li>✓ Advanced Analytics</li>
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">Upgrade to Pro</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-gray-400 border-t">
        <p>© 2026 SaaS Builder Prototype. All rights reserved.</p>
      </footer>
    </div>
  );
}
