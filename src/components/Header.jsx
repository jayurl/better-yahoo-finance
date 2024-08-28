import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">StockWiz.AI</h1>
                <nav className="hidden md:flex space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                    <Link to="/stocks" className="text-gray-700 hover:text-gray-900">Stocks</Link>
                    <Link to="/calendar" className="text-gray-700 hover:text-gray-900">Calendar</Link>
                    <Link to="/options" className="text-gray-700 hover:text-gray-900">Options</Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
                        <Link to="/stocks" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Stocks</Link>
                        <Link to="/calendar" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Calendar</Link>
                        <Link to="/options" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Options</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
