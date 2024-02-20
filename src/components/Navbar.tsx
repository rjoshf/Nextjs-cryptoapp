import Link from 'next/link';

const Navbar: React.FC<{}> = ({ }) => {
    return (
        <nav className="flex flex-row items-center justify-between px-20 py-10">
            <Link className="navlink text-white font-bold text-2xl" href="/">NextCrypto</Link>
            <div>
                <Link className="navlink text-white font-bold text-2xl mr-10" href="/">Log In</Link>
                <Link className="navlink text-white font-bold text-2xl" href="/">Sign Up</Link>
            </div>

        </nav>
    )
}

export default Navbar;