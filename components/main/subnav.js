import classes from './subnav.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Subnav = () => {
    return (
        <section className={classes.latest}>
            <ul className={classes.grid}>
                <li>
                    <Link href ="/about">
                        <div className={classes.buttonWithImage}>
                            <Image
                                src="/images/main/aboutme.png"
                                width="100"
                                height="100"
                            />
                            <h3>About Me</h3>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/project">
                        <div className={classes.buttonWithImage}>
                            <Image
                                src="/images/main/projects.png"
                                width="100"
                                height="100"
                            />
                            <h3>My Side Projects</h3>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <div className={classes.buttonWithImage}>
                            <Image
                                src="/images/main/contact.png"
                                width="100"
                                height="100"
                            />
                            <h3>Contact Me</h3>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Subnav;