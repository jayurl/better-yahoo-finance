import React, { useState } from 'react';

function Stocks() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Handle search submit logic
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="container mx-auto">
                {/* Search Bar Section */}
                <section className="bg-white p-6 rounded-full shadow-md mb-8">
                    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 border border-gray-300 rounded-full">
                        <input
                            type="text"
                            placeholder="Search stocks, crypto, metals, resources, bonds..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="flex-grow p-2 pl-4 rounded-l-full focus:outline-none"
                        />
                        <button type="submit" className="p-4 pr-4 bg-blue-600 text-white rounded-full hover:bg-blue-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0"></path>
                            </svg>
                        </button>
                    </form>
                </section>

                {/* Top Performers, Losers, and ETFs Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <section className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Performers</h2>
                        <ul>
                            <li className="p-2 border-b border-gray-200">Stock A - +5.00%</li>
                            <li className="p-2 border-b border-gray-200">Stock B - +4.50%</li>
                            <li className="p-2 border-b border-gray-200">Stock C - +4.00%</li>
                        </ul>
                    </section>

                    <section className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Losers</h2>
                        <ul>
                            <li className="p-2 border-b border-gray-200">Stock X - -5.00%</li>
                            <li className="p-2 border-b border-gray-200">Stock Y - -4.50%</li>
                            <li className="p-2 border-b border-gray-200">Stock Z - -4.00%</li>
                        </ul>
                    </section>

                    <section className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular ETFs</h2>
                        <ul>
                            <li className="p-2 border-b border-gray-200">S&P 500 (SPY)</li>
                            <li className="p-2 border-b border-gray-200">Dow Jones (DIA)</li>
                            <li className="p-2 border-b border-gray-200">Russell 2000 (IWM)</li>
                            <li className="p-2 border-b border-gray-200">NASDAQ 100 (QQQ)</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Stocks;
