import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                Home
            </Link>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;