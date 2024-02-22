import Image from "next/image";

import infoImg from '../../public/infoImg.svg';

import { GiPadlock } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

const InfoSection: React.FC<{}> = ({ }) => {
    return (
        <section className="flex flex-col items-center mt-28 mb-28">
            <h2 className="font-bold mb-10 text-center info-title">Why choose us </h2>
            <div className="flex flex-row items-center justify-center w-full">
                <ul>
                    <li className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 m-12 w-96 text-center">
                        <div className="flex flex-row items-center justify-center">
                            <GiPadlock className="icons" />
                            <h3 className="text-2xl">Security</h3>
                        </div>
                        <p>We are very secure keeping your coins safe.</p>
                    </li>
                    <li className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <BiSupport className="icons" />
                            <h3 className="text-2xl">Support</h3>
                        </div>
                        <p>Our customer service is excellent.</p>
                    </li>
                    <li className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <RxUpdate className="icons" />
                            <h3 className="text-2xl">Updates</h3>
                        </div>
                        <p>We have regular market updates.</p>
                    </li>
                </ul>
                <Image src={infoImg} alt={"Person running up bar chart"} width={420} height={420} />
                <ul>
                    <li className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <HiMiniDevicePhoneMobile className="icons" />
                            <h3 className="text-2xl">Responsive</h3>
                        </div>
                        <p>We are very secure to keep your coins safe.</p>
                    </li>
                    <li className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <FaCoins className="icons" />
                            <h3 className="text-2xl">Coins</h3>
                        </div>
                        <p>Earn more crypto from your max width</p>
                    </li>
                    <li className="info-card bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5 text-center m-12 w-96">
                        <div className="flex flex-row items-center justify-center">
                            <FaWallet className="icons" />
                            <h3 className="text-2xl">Wallets</h3>
                        </div>
                        <p>Our customer service is top notch</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default InfoSection;