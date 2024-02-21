import MarketTable from './MarketTable';

async function getTopCryptos() {
    const API_KEY = process.env.API_KEY
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
    //want to create some delay to demonstrate loading with react suspense.
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await fetch(url, {
                        cache: 'no-cache',
                    });
                    const data = await response.json();
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            }, 750);
        });
    };
    return fetchData();
}

export default async function MarketFetcher() {
    const cryptos = await getTopCryptos();
    return (
        <MarketTable cryptos={cryptos} />
    );
}