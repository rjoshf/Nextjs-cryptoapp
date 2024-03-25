'use client'

import { useState } from 'react';

import { motion } from 'framer-motion';

import { useSession } from 'next-auth/react';

import Image from 'next/image';

import bitcoinImg from '../../public/bitcoin.svg';
import ethereumImg from '../../public/ethereum.svg';
import Modal from './UI/Modal';
import Deposit from './UI/Deposit';

interface Cryptos {
    bitcoin: { usd: number },
    ethereum: { usd: number },
}

const WalletDashboard: React.FC<{ cryptos: Cryptos }> = ({ cryptos }) => {

    const [showModal, setShowModal] = useState(false);

    const { data: session } = useSession();

    const bitcoinAmount = session?.user.bitcoin_amount ?? 0;
    const ethereumAmount = session?.user.ethereum_amount ?? 0;
    const bitcoinTotal = bitcoinAmount * cryptos.bitcoin.usd;
    const ethereumTotal = ethereumAmount * cryptos.ethereum.usd;

    const showModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <motion.section viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }}>
            <h1 className="text-center mb-8 font-bold">Wallet</h1>
            <Modal open={showModal ? true : false} onClose={closeModalHandler}>
                <Deposit onCancel={closeModalHandler} />
            </Modal>
            <div className="flex justify-center items-center flex-col info-card w-4/12 m-auto bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5">
                <div className="flex justify-between items-center w-full">
                    <button onClick={showModalHandler} className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">Deposit</button>
                    <button className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">Withdraw</button>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center w-full">
                    <h2>Coin</h2>
                    <h2 className="text-center">Amount</h2>
                    <h2 className="text-center">Price</h2>
                    <h2 className="text-end">Total</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center w-full m-5">
                    <h2><Image className="inline mr-2" width={25} height={25} src={bitcoinImg} alt={"Image of a bitcoin"} />Bitcoin</h2>
                    <h2 className="text-center">{session?.user?.bitcoin_amount}</h2>
                    <h2 className="text-center">{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(cryptos.bitcoin.usd)}`}</h2>
                    <h2 className="text-end">{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(bitcoinTotal)}`}</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center w-full m-5">
                    <h2><Image className="inline mr-2" width={25} height={25} src={ethereumImg} alt={"Image of an ethereum"} />Ethereum</h2>
                    <h2 className="text-center">{session?.user?.ethereum_amount}</h2>
                    <h2 className="text-center">{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(cryptos.ethereum.usd)}`}</h2>
                    <h2 className="text-end">{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(ethereumTotal)}`}</h2>
                </div>
            </div>
        </motion.section>
    )
}

export default WalletDashboard;