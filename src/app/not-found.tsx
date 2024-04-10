import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="min-h-screen">
            <div>
                <h2 className="text-center m-5 text-fuchsia-700 font-bold text-5xl">Page not found!</h2>
                <p className="text-center m-5 text-white font-bold text-2xl">Could not find requested resource</p>
                <div className="text-center font-bold text-2xl">
                    <Link href="/">Return Home</Link>
                </div>
            </div>
        </main>
    )
}