'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

import bitcoinImg from '../../public/bitcoin.svg';
import ethereumImg from '../../public/ethereum.svg';
import headerImg from '../../public/headerImg.svg';

const Header: React.FC<{}> = ({ }) => {
    return (
        <section className="flex flex-col items-center p-10">
            <div className="flex flex-row items-center">
                <Image className="mr-10 bounce" width={75} height={75} src={bitcoinImg} alt={"Image of a bitcoin"} />
                <h1 className="font-bold">NextCrypto</h1>
                <Image className="ml-10 bounce" width={75} height={75} src={ethereumImg} alt={"Image of an ethereum"} />
            </div>
            <motion.button whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} className="signupButton mt-14">Sign Up</motion.button>
            <h2 className="inline font-bold text-5xl text-white mt-14 mb-14"><span className="text-purple-800">Sign up</span> to create your <span className="text-fuchsia-700">wallet!</span></h2>
            <Image src={headerImg} alt={"Image of a wallet"} width={350} height={350} />
        </section>
    )
}

export default Header;