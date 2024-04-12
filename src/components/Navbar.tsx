'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const logoutHandler = () => {
        signOut();
    }

    return (
        <>
            {isFixed && <div className="h-12 py-10 h-12" />}
            <nav className={`navbar flex flex-row items-center justify-between px-20 py-10 h-12 ${isFixed ? 'fixed z-10 top-0 w-full' : ''}`}>
                <Link href="/" className="navlink text-white font-bold text-2xl">NextCrypto</Link>
                <div>
                    {!session && <Link href="/login" className="navlink text-white font-bold text-2xl mr-10">Log In</Link>}
                    <p>{session?.user?.email}</p>
                    {session && <Link href="/wallet" className="navlink text-white font-bold text-2xl mr-10">Wallet</Link>}
                    {session && <button onClick={logoutHandler} className="navlink text-white font-bold text-2xl">Logout</button>}
                </div>
            </nav>
        </>
    )
}