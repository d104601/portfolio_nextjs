import classes from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section className={classes.about}>
            <h1>About Me</h1>
            <p>
                I&apos;m a full stack developer with a passion for creating easy and useful web, desktop and mobile applications and currently working at Seoyon E-Hwa Manufacturing since June 2023.
                <br/>
                I&apos;m specialized in backend development using various languages and frameworks.
                <br/>
                My goal is to continually learn to create applications that are impressive and easy to use.
            </p>

            <ul className={classes.social}>
                <li>
                    <Link href="https://www.linkedin.com/in/taeyonglee920716/" target="_blank" >
                        <Image src="/images/about/linkedin.png" alt="linkedin" width={50} height={50} />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/d104601" target="_blank" >
                        <Image src="/images/about/github.png" alt="github" width={50} height={50} />
                    </Link>
                </li>
            </ul>
        </section>
    )
};

export default About;