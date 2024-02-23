import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import MarketFetcher from "@/components/MarketFetcher";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<Skeleton />}>
        <MarketFetcher />
      </Suspense>
      <InfoSection />
    </main >
  );
}