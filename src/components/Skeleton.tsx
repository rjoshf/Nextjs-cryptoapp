export default function Skeleton() {
    const repeatArray = Array.from({ length: 10 });

    return (
        <section className="flex flex-col items-center mt-20">
            <h2 className="font-bold text-7xl mb-10 market-update-title">Market Update</h2>
            <div className="market-table-container">
                <div className="market-table-header">
                    <h3>Coin</h3>
                    <h3>Price</h3>
                    <h3>24h Change</h3>
                    <h3>Market Cap</h3>
                </div>
                <ul>
                    {repeatArray.map((_, index) => (
                        <li className="text-black market-table-item" key={index}>
                            <div className="flex items-center justify-start">
                                <div>
                                    Loading...
                                </div>
                            </div>
                            <div />
                            <div />
                            <div />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}