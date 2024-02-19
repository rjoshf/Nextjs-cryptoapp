import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row items-center">
        <BiBitcoin className="bitcoinicon" />
        <h1 className="font-bold">Next Crypto</h1>
        <FaEthereum className="ethereumicon" />
      </div>
    </main>
  );
}
