
interface Crypto {
    id: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
}

const MarketTable: React.FC<{ cryptos: Crypto[] }> = ({ cryptos }) => {
    return (
        <div className="market-table-container">
            <div className="market-table-header">
                <h3>Coin</h3>
                <h3>Price</h3>
                <h3>24h Change</h3>
                <h3>Market Cap</h3>
            </div>
            <ul className="market-table">
                {cryptos.map(crypto => <li className="text-black market-table-item" key={crypto.id}>
                    <div>{crypto.name}</div>
                    <div>{crypto.current_price}</div>
                    <div>{crypto.price_change_percentage_24h}</div>
                    <div>{crypto.market_cap}</div>
                </li>)}
            </ul>
        </div>
    )
}

export default MarketTable