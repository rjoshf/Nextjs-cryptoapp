'use client'

import { motion } from 'framer-motion';

const Wallet: React.FC<{}> = ({ }) => {
    return (
        <motion.section viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }}>
            <h1 className="text-center mb-8 font-bold">Wallet</h1>
            <div className="flex justify-center items-center flex-col info-card w-4/12 m-auto bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5">
                <div className="flex justify-between items-center w-full">
                    <button className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">Deposit</button>
                    <button className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">Withdraw</button>
                </div>
                <h2>Coin</h2>
                <h2>Amount</h2>
                <h2>Price</h2>
                <h2>Total</h2>
            </div>
        </motion.section>
    )
}

export default Wallet;