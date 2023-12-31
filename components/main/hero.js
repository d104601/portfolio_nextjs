import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/main/profile.jpg"
                    alt="profile image of steve"
                    width={300}
                    height={300}
                />
            </div>
            <h1>I&apos;m Steve Lee</h1>
            <p>I&apos;m a full stack developer. I&apos;m specialized in React and backend development.</p>
        </section>
    );
}

export default Hero;