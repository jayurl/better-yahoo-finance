import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchTickerSymbols } from '../utils/alphaVantageAPI'; // Import the search function

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (query) {
                try {
                    const searchResults = await searchTickerSymbols(query);
                    setResults(searchResults);
                } catch (error) {
                    console.error('Error searching ticker symbols:', error);
                }
            } else {
                setResults([]);
            }
        };

        const timeoutId = setTimeout(fetchSearchResults, 300);
        return () => clearTimeout(timeoutId);
    }, [query]);

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    const handleResultClick = (symbol) => {
        navigate(`/stocks/${symbol}`);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="container mx-auto">
                <section className="bg-white p-6 rounded-full shadow-md mb-8">
                    <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2 border border-gray-300 rounded-full">
                        <input
                            type="text"
                            placeholder="Search stocks, crypto, metals, resources, bonds..."
                            value={query}
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

                <section>
                    <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                    <ul className="bg-white p-6 rounded shadow-md">
                        {results.map((result) => (
                            <li
                                key={result.symbol}
                                onClick={() => handleResultClick(result.symbol)}
                                className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                            >
                                <div className="font-bold">{result.symbol} - {result.name}</div>
                                <div className="text-sm text-gray-600">{result.type} - {result.region}</div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Search;
