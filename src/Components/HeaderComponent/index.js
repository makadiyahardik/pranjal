import React from 'react';

const HeaderComponent = (props) => {
    
  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="px-4 py-3 border-b flex justify-between items-center">
        {/* Left Section - Company Info */}
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-xl font-semibold">Arvind Fashion Ltd</h1>
            <p className="text-sm text-gray-500">ARVNDFASN</p>
          </div>
          <div className="text-green-600 text-lg font-semibold">₹ 567.7</div>
          <div className="text-sm text-green-600 bg-green-100 rounded-full px-2 py-1">+2.4%</div>
          <div className="text-gray-500 text-sm">Last updated: 04:24</div>
        </div>

        {/* Watchlist Button */}
        <div>
          <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Add to Watchlist
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for a company"
            className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none"
          />
          <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Select date
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 py-2 bg-gray-50 border-b">
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="text-blue-600 border-b-2 border-blue-600 py-2"  onClick={() => props.handleScroll(props.top20Ref)}>Top 20 Deliveries</li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2" onClick={() => props.handleScroll(props.top10Ref)}>
            Top 10 Deliveries
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2">
            Charts
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2">
            Yearly
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2">
            Monthly
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2" onClick={() => props.handleScroll(props.ADDVShockers)}>
            ADDV
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2">
            Vwap Summary
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2">
            Frequency
          </li>
          <li className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-2">
            Actions
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
