import WalletDashboard from './WalletDashboard';

//API call for btc and eth prices
async function getCryptoPrices() {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&x_cg_demo_api_key=${process.env.API_KEY}`;

    return fetch(url, {
        cache: 'no-cache',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            throw error;
        });
}

export default async function Wallet() {

    const cryptos = await getCryptoPrices();

    return (
        <WalletDashboard cryptos={cryptos} />
    )
}