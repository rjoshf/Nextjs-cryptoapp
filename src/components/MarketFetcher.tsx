import MarketTable from './MarketTable'

async function getTopCryptos() {
    const API_KEY = process.env.API_KEY
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
    const response = await fetch(url, {
        cache: 'no-cache',
    });
    const data = await response.json();
    return data

}

export default async function MarketFecther() {
    const cryptos = await getTopCryptos()
    console.log(cryptos)
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-white font-bold text-5xl m-24">Market Update</h2>
            <MarketTable cryptos={cryptos} />
        </section>
    )
}