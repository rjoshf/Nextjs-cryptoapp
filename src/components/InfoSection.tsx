'use client'

import Image from "next/image";

import infoImg from '../../public/infoImg.svg';

import { GiPadlock } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

const defaultAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const InfoSection: React.FC<{}> = ({ }) => {
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef, { amount: 0.3, once: true });


    return (
        <section className="flex flex-col items-center mt-28 mb-28">
            <motion.h2 viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }} className="font-bold mb-10 text-center info-title">Why choose us </motion.h2>
            <div className="flex flex-row items-center justify-center w-full">
                <motion.ul ref={inViewRef} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: 0.7 }}>
                    <motion.li key="security" variants={defaultAnimations} className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 m-12 w-96 text-center">
                        <div className="flex flex-row items-center justify-center">
                            <GiPadlock className="icons" />
                            <h3 className="text-2xl">Security</h3>
                        </div>
                        <p>We will keep your coins safe.</p>
                    </motion.li>
                    <motion.li key="support" variants={defaultAnimations} className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <BiSupport className="icons" />
                            <h3 className="text-2xl">Support</h3>
                        </div>
                        <p>Our customer service is excellent.</p>
                    </motion.li>
                    <motion.li variants={defaultAnimations} key="updates" className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <RxUpdate className="icons" />
                            <h3 className="text-2xl">Updates</h3>
                        </div>
                        <p>We have regular market updates.</p>
                    </motion.li>
                </motion.ul>
                <motion.div viewport={{ once: true, amount: 0.3 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }}>
                    <Image src={infoImg} alt={"Person running up bar chart"} width={420} height={420} />
                </motion.div>
                <motion.ul ref={inViewRef} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: 0.7 }}>
                    <motion.li key="responsive" variants={defaultAnimations} className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <HiMiniDevicePhoneMobile className="icons" />
                            <h3 className="text-2xl">Responsive</h3>
                        </div>
                        <p>We support mobiles and tablets.</p>
                    </motion.li>
                    <motion.li key="coins" variants={defaultAnimations} className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <FaCoins className="icons" />
                            <h3 className="text-2xl">Coins</h3>
                        </div>
                        <p>We support many different cryptos.</p>
                    </motion.li>
                    <motion.li key="wallets" variants={defaultAnimations} className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <FaWallet className="icons" />
                            <h3 className="text-2xl">Wallets</h3>
                        </div>
                        <p>Link your current wallet with us.</p>
                    </motion.li>
                </motion.ul>
            </div>
        </section>
    )
}

export default InfoSection;