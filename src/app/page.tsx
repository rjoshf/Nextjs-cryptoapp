import Header from "@/components/Header";
import MarketFetcher from "@/components/MarketFetcher";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<h2 className="text-white">Loading...</h2>}>
        <MarketFetcher />
      </Suspense>
    </main>
  );
}
