"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();

  const [isFixed, setIsFixed] = useState(false);

  const pathname = usePathname();

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
  };

  return (
    <>
      {isFixed && <div className="h-12 py-10 h-12" />}
      <nav
        className={`navbar flex flex-row items-center justify-between px-20 py-10 h-12 ${
          isFixed ? "fixed z-10 top-0 w-full" : ""
        }`}
      >
        <Link
          href="/"
          className={`navlink font-bold text-2xl ${
            pathname === "/" ? "text-[#c020ff]" : "text-white"
          }`}
        >
          NextCrypto
        </Link>
        <div>
          {!session && (
            <Link
              href="/login"
              className={`navlink font-bold text-2xl mr-10 ${
                pathname === "/login" ? "text-[#c020ff]" : "text-white"
              }`}
            >
              Log In
            </Link>
          )}
          <p>{session?.user?.email}</p>
          {session && (
            <Link
              href="/wallet"
              className={`navlink text-white font-bold text-2xl mr-10 ${
                pathname === "/wallet" ? "text-[#c020ff]" : "text-white"
              }`}
            >
              Wallet
            </Link>
          )}
          {session && (
            <button
              onClick={logoutHandler}
              className="navlink text-white font-bold text-2xl"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
