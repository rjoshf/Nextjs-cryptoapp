'use client'

import { motion } from 'framer-motion';

import Image from 'next/image';

interface Crypto {
    id: string;
    image: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
}

export default function MarketTable({ cryptos }: { cryptos: Crypto[] | unknown }) {
    return (
        <section className="flex flex-col items-center mt-20">
            <motion.h2 viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }} className="font-bold text-7xl mb-10 market-update-title">Market Update</motion.h2>
            <div className="market-table-container">
                <div className="market-table-header">
                    <h3>Coin</h3>
                    <h3>Price</h3>
                    <h3>24h Change</h3>
                    <h3>Market Cap</h3>
                </div>
                {Array.isArray(cryptos) && <ul>
                    {cryptos.map((crypto: Crypto) => <li className="market-table-item" key={crypto.id}>
                        <div className="flex items-center justify-start">
                            <Image className="mr-5" width={30} height={30} src={crypto.image} alt={crypto.name} />
                            <div>{crypto.name}</div>
                        </div>
                        <div>{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(crypto.current_price)}`}</div>
                        <div style={{ color: crypto.price_change_percentage_24h > 0 ? 'lightgreen' : 'red' }}>{crypto.price_change_percentage_24h.toFixed(2)}%</div>
                        <div>{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(crypto.market_cap)}`}</div>
                    </li>)}
                </ul>}
            </div>
        </section>
    )
}