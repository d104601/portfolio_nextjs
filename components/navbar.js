import Link from 'next/link';
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>Steve Lee</div>
            </Link>        
            <nav>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/project">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;