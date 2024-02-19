import Image from 'next/image';

import bitcoinImg from '../../public/bitcoin.svg'
import ethereumImg from '../../public/ethereum.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row items-center">
        <Image className="mr-10 bounce" width={75} height={75} src={bitcoinImg} alt={""}></Image>
        <h1 className="font-bold">Next Crypto</h1>
        <Image className="ml-10 bounce" width={75} height={75} src={ethereumImg} alt={""}></Image>
      </div>
    </main>
  );
}
