import Image from 'next/image';

import bitcoinImg from '../../public/bitcoin.svg'
import ethereumImg from '../../public/ethereum.svg'

const Header: React.FC<{}> = ({ }) => {
    return (
        <section className="flex flex-col items-center p-10">
            <div className="flex flex-row items-center">
                <Image className="mr-10 bounce" width={75} height={75} src={bitcoinImg} alt={""}></Image>
                <h1 className="font-bold">NextCrypto</h1>
                <Image className="ml-10 bounce" width={75} height={75} src={ethereumImg} alt={""}></Image>
            </div>
            <button className="signupButton mt-14">Sign Up</button>
            <h2 className="font-bold text-5xl text-white mt-14"><span className="text-purple-800">Sign up</span> to create your <span className="text-fuchsia-700">wallet!</span></h2>
        </section>
    )
}

export default Header;