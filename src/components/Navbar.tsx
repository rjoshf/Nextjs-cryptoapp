'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar: React.FC<{}> = ({ }) => {
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

    return (
        <>
            {isFixed && <div className="h-12 py-10 h-12" />}
            <nav className={`navbar flex flex-row items-center justify-between px-20 py-10 h-12 ${isFixed ? 'fixed z-10 top-0 w-full' : ''}`}>
                <Link href="/" className="navlink text-white font-bold text-2xl">NextCrypto</Link>
                <div>
                    <Link href="/" className="navlink text-white font-bold text-2xl mr-10">Log In</Link>
                    <Link href="/" className="navlink text-white font-bold text-2xl">Sign Up</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;