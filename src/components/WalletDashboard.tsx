'use client'

import { motion } from 'framer-motion';

interface Cryptos {
    bitcoin: { usd: number },
    ethereum: { usd: number },
}

const WalletDashboard: React.FC<{ cryptos: Cryptos }> = ({ cryptos }) => {

    return (
        <motion.section viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }}>
            <h1 className="text-center mb-8 font-bold">Wallet</h1>
            <div className="flex justify-center items-center flex-col info-card w-4/12 m-auto bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5">
                <div className="flex justify-between items-center w-full">
                    <button className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">Deposit</button>
                    <button className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">Withdraw</button>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center w-full">
                    <h2>Coin</h2>
                    <h2 className="text-center">Amount</h2>
                    <h2 className="text-center">Price</h2>
                    <h2 className="text-end">Total</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center w-full">
                    <h2>Bitcoin</h2>
                    <h2 className="text-center">0</h2>
                    <h2 className="text-center">{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(cryptos.bitcoin.usd)}`}</h2>
                    <h2 className="text-end">0</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center w-full">
                    <h2>Ethereum</h2>
                    <h2 className="text-center">0</h2>
                    <h2 className="text-center">{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(cryptos.ethereum.usd)}`}</h2>
                    <h2 className="text-end">0</h2>
                </div>
            </div>
        </motion.section>
    )
}

export default WalletDashboard