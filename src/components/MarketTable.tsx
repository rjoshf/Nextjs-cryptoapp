import Image from 'next/image';

interface Crypto {
    id: string;
    image: string;
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
            <ul>
                {cryptos.map(crypto => <li className="text-black market-table-item" key={crypto.id}>
                    <div className="flex items-center justify-start">
                        <Image className="mr-5" width={30} height={30} src={crypto.image} alt={crypto.name} />
                        <div>{crypto.name}</div>
                    </div>
                    <div>{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(crypto.current_price)}`}</div>
                    <div style={{ color: crypto.price_change_percentage_24h > 0 ? 'lightgreen' : 'red' }}>{crypto.price_change_percentage_24h.toFixed(2)}%</div>
                    <div>{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(crypto.market_cap)}`}</div>
                </li>)}
            </ul>
        </div>
    )
}

export default MarketTable