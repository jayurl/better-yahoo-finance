import React from 'react';

function Home() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-800">Welcome to Finance Predictor</h1>
                    <p className="mt-4 text-xl text-gray-600">Your one-stop solution for financial analysis and stock predictions.</p>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Informative Sections */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Features</h2>
                    <div className="flex flex-wrap mt-8">
                        <div className="w-full md:w-1/3 p-4">
                            <h3 className="text-2xl font-semibold text-gray-700">Stock Analysis</h3>
                            <p className="mt-2 text-gray-600">Explore and analyze stock data with our powerful tools.</p>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <h3 className="text-2xl font-semibold text-gray-700">Financial Calendar</h3>
                            <p className="mt-2 text-gray-600">Stay updated with important financial dates and earnings reports.</p>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <h3 className="text-2xl font-semibold text-gray-700">Options Volume</h3>
                            <p className="mt-2 text-gray-600">Analyze call and put options volume to predict market trends.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Another Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
                    <p className="mt-4 text-xl text-gray-600">We provide the best tools for financial analysis to help you make informed decisions.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
