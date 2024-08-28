import axios from 'axios';

const API_KEY = 'R5BICE2TSXUESPRD';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockData = async (symbol) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: 'TIME_SERIES_DAILY',
                symbol: symbol,
                apikey: API_KEY,
            },
        });
        const timeSeries = response.data['Time Series (Daily)'];
        const latestDate = Object.keys(timeSeries)[0];
        const latestData = timeSeries[latestDate];
        return {
            date: latestDate,
            open: parseFloat(latestData['1. open']),
            high: parseFloat(latestData['2. high']),
            low: parseFloat(latestData['3. low']),
            close: parseFloat(latestData['4. close']),
            volume: parseInt(latestData['5. volume'], 10),
        };
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};

export const searchTickerSymbols = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: 'SYMBOL_SEARCH',
                keywords: query,
                apikey: API_KEY,
            },
        });
        return response.data.bestMatches
            .filter(match => match['4. region'] === 'United States')
            .map(match => ({
                symbol: match['1. symbol'],
                name: match['2. name'],
                type: match['3. type'],
                region: match['4. region'],
                marketOpen: match['5. marketOpen'],
                marketClose: match['6. marketClose'],
                timezone: match['7. timezone'],
                currency: match['8. currency'],
                matchScore: match['9. matchScore'],
            }));
    } catch (error) {
        console.error('Error searching ticker symbols:', error);
        throw error;
    }
};
