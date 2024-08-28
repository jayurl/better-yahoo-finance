import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StockDetail() {
    const { symbol } = useParams();
    const [stockData, setStockData] = useState(null);
    const [selectedRange, setSelectedRange] = useState('1d');
    const [showCustomRange, setShowCustomRange] = useState(false);
    const [customYear, setCustomYear] = useState(null);
    const [ipoDate, setIpoDate] = useState(new Date('1980-12-12')); // Placeholder IPO date for Apple Inc.

    useEffect(() => {
        const fetchData = async () => {
            // Placeholder data
            const data = {
                symbol: symbol,
                companyName: 'Apple Inc.',
                price: 123.45,
                change: '+1.23%',
                high: 125.00,
                low: 120.00,
                previousClose: 123,
                open: 123,
                close: 123,
                bid: "123 x 100",
                ask: "123 x 200",
                dayRange: "123 - 225.13",
                fiftyWeekRange: "100 - 300",
                volume: 98083537,
                avgVolume: 65593241,
                marketCap: 75000000000,
                beta: 1.24,
                peRatio: 33.46,
                eps: 6.57,
                dividend: "1.00(0.45%)",
                chartData: [], // Placeholder for chart data
            };
            setStockData(data);
        };

        fetchData();
    }, [symbol]);

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        setShowCustomRange(false);
    };

    const handleCustomRangeClick = () => {
        setShowCustomRange(!showCustomRange);
    };

    const handleCustomYearChange = (year) => {
        setCustomYear(year);
        setSelectedRange('custom');
        setShowCustomRange(false);
    };

    const generateYears = (startYear) => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }
        return years;
    };

    const years = generateYears(ipoDate.getFullYear());

    if (!stockData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="container mx-auto flex flex-col lg:flex-row">
                {/* Left Side for Menu (Visible on large screens) */}
                <div className="hidden lg:block lg:w-1/5 pr-8">
                    <div className="sticky top-20">
                        <ul className="space-y-4">
                            <li>
                                <a href="#MarketSection" className="text-blue-600 hover:underline">Market Data</a>
                            </li>
                            <li>
                                <a href="#PerformanceSection" className="text-blue-600 hover:underline">Performance Data</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side for Main Content */}
                <div className="lg:w-4/5">
                    {/* Header for small and medium screens */}
                    <div className="block lg:hidden mb-4">
                        <ul className="flex space-x-4 border-b pb-2">
                            <li>
                                <a href="#MarketSection" className="text-blue-600 hover:underline">Market Data</a>
                            </li>
                            <li>
                                <a href="#PerformanceSection" className="text-blue-600 hover:underline">Performance Data</a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold">{stockData.companyName} ({stockData.symbol.toUpperCase()})</h1>
                                <div className="text-2xl">${stockData.price.toFixed(2)}</div>
                                <div className={`text-xl ${stockData.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                    {stockData.change}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md mb-8">
                        <div className="mb-4">
                            <div className="flex flex-wrap space-x-2">
                                {['1d', '5d', '3m', '6m', 'ytd', '1y', '5y', 'all'].map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => handleRangeChange(range)}
                                        className={`px-2 py-1 md:px-4 md:py-2 rounded-full ${selectedRange === range ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                                    >
                                        {range.toUpperCase()}
                                    </button>
                                ))}
                                <div className="relative">
                                    <button
                                        onClick={handleCustomRangeClick}
                                        className={`px-2 py-1 md:px-4 md:py-2 rounded-full ${selectedRange === 'custom' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                                    >
                                        CUSTOM
                                    </button>
                                    {showCustomRange && (
                                        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-md z-10">
                                            <select
                                                value={customYear}
                                                onChange={(e) => handleCustomYearChange(e.target.value)}
                                                className="w-full p-2 rounded border border-gray-300"
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year) => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="h-64 bg-gray-200 rounded mb-4 flex items-center justify-center">Chart Placeholder</div>
                    </div>

                    <div id="MarketSection" className="bg-white p-6 rounded shadow-md mb-8">
                        <h2 className="text-2xl font-bold mb-4">Market Data</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="text-lg">
                                <div className="font-medium">Market Cap</div>
                                <div>${stockData.marketCap.toLocaleString()}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Volume</div>
                                <div>{stockData.volume.toLocaleString()}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Avg. Volume</div>
                                <div>{stockData.avgVolume.toLocaleString()}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Beta</div>
                                <div>{stockData.beta}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">P/E Ratio</div>
                                <div>{stockData.peRatio}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">EPS</div>
                                <div>{stockData.eps}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Dividend</div>
                                <div>{stockData.dividend}</div>
                            </div>
                        </div>
                    </div>

                    <div id="PerformanceSection" className="bg-white p-6 rounded shadow-md mb-8">
                        <h2 className="text-2xl font-bold mb-4">Performance Data</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="text-lg">
                                <div className="font-medium">Previous Close</div>
                                <div>${stockData.previousClose.toFixed(2)}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Open</div>
                                <div>${stockData.open.toFixed(2)}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">High</div>
                                <div>${stockData.high.toFixed(2)}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Low</div>
                                <div>${stockData.low.toFixed(2)}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Bid</div>
                                <div>{stockData.bid}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Ask</div>
                                <div>{stockData.ask}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">Day's Range</div>
                                <div>{stockData.dayRange}</div>
                            </div>
                            <div className="text-lg">
                                <div className="font-medium">52 Week Range</div>
                                <div>{stockData.fiftyWeekRange}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockDetail;
