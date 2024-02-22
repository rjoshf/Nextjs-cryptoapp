import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import MarketFetcher from "@/components/MarketFetcher";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />
      <section className="flex flex-col items-center mt-20">
        <h2 className="font-bold text-7xl mb-10 market-update-title">Market Update</h2>
        <Suspense fallback={<Skeleton />}>
          <MarketFetcher />
        </Suspense>
      </section>
      <InfoSection />
    </main>
  );
}