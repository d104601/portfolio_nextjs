import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/"
                    alt="profile image of steve"
                    width={300}
                    height={300}
                />
            </div>
            <h1>I'm Steve Lee</h1>
            <p>I'm a full stack developer. I'm specialized in React and backend development.</p>
        </section>
    );
}

export default Hero;