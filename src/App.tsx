import React, { useState } from 'react';
import { Search, User, Menu, ChevronDown, Copy, Star, Package } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#4D148C] text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Fed<span className="text-[#FF6600]">Ex</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-200">Sign Up or Log In</button>
            <User className="w-6 h-6" />
            <Search className="w-6 h-6" />
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Subheader */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl">FedEx Tracking</h1>
          <div className="flex items-center space-x-6">
            <button className="text-blue-600 hover:underline">Track Another Shipment</button>
            <button className="text-blue-600 hover:underline flex items-center">
              Local Scan Time <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <button className="text-blue-600 hover:underline">Help</button>
          </div>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div className="bg-[#4D148C] text-white py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <div className="text-sm mb-1">SHOPRUNNER by FedEx</div>
            <div className="text-2xl font-bold">SHOPPING FOR THE HOLIDAYS?</div>
            <div className="text-xl">SAVE WITH THE BEST DEALS OF THE SEASON.</div>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="mb-8">
            <h2 className="text-gray-600 mb-2">SCHEDULED DELIVERY DATA</h2>
            <div className="text-3xl mb-2">Wednesday</div>
            <div className="text-gray-600 mb-2">12/20/23 before 6:00 PM</div>
            <div className="text-gray-600">Estimated between</div>
            <div className="text-gray-600 mb-4">9:00 AM - 1:00 PM</div>
            <span className="inline-block px-3 py-1 text-sm border border-[#4D148C] text-[#4D148C] rounded-full">
              ON TIME
            </span>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="mb-4">Want updates on this shipment? Enter your email and we will do the rest!</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 px-4 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-[#FF6600] text-white px-8 py-2 rounded hover:bg-[#FF7720]">
                SUBMIT
              </button>
            </div>
          </div>

          <button className="text-blue-600 hover:underline mb-8">MORE OPTION</button>

          <div className="border-t border-b py-4">
            <button className="w-full flex items-center justify-between text-xl">
              Check For Delivery Options
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-600">DELIVERY STATUS</h2>
            <div className="flex items-center space-x-4">
              <h2 className="text-gray-600">TRACKING ID</h2>
              <div className="flex items-center space-x-2">
                <span>123456789</span>
                <Copy className="w-4 h-4 cursor-pointer text-blue-600" />
                <Star className="w-4 h-4 cursor-pointer text-blue-600" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-8">
            <span className="text-xl">We have your package</span>
            <Package className="w-6 h-6 text-[#4D148C]" />
          </div>

          {/* Tracking Timeline */}
          <div className="relative pl-8 border-l-4 border-[#4D148C]">
            <div className="mb-12">
              <div className="absolute -left-3 top-0">
                <div className="w-6 h-6 rounded-full bg-[#4D148C] flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="mb-1 font-bold">FROM</div>
              <div className="text-xl mb-1">TOLLESON, AZ US</div>
              <div className="text-sm text-gray-600">Label Created</div>
              <div className="text-sm text-gray-600">12/14/23 11:05 AM</div>
            </div>

            <div className="mb-12">
              <div className="absolute -left-3">
                <div className="w-6 h-6 rounded-full bg-[#4D148C] flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="font-bold">WE HAVE YOUR PACKAGE</div>
              <div className="text-xl mb-1">PHOENIX, AZ</div>
              <div className="text-sm text-gray-600">12/14/23 2:26 PM</div>
            </div>

            <div className="mb-12">
              <div className="absolute -left-3">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="font-bold">ON THE WAY</div>
            </div>

            <div className="mb-12">
              <div className="absolute -left-3">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="font-bold">OUT FOR DELIVERY</div>
            </div>

            <div>
              <div className="absolute -left-3">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="mb-1 font-bold">TO</div>
              <div className="text-xl mb-1">ST. CROIX, VI</div>
              <div className="text-sm text-gray-600">Scheduled Delivery Date</div>
              <div className="text-sm text-gray-600">12/20/23 before 6:00 PM</div>
              <div className="text-sm text-gray-600">Estimated between</div>
              <div className="text-sm text-gray-600">9:00 AM - 1:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;