import classes from './tech-stack.module.css';
import Image from 'next/image';

const TechStack = () => {
    const languages = [
        {name: 'Java', icon: '/images/about/tech/java.png'},
        {name: 'JavaScript', icon: '/images/about/tech/javascript.png'},
        {name: 'TypeScript', icon: '/images/about/tech/typescript.png'},
        {name: 'Python', icon: '/images/about/tech/python.png'},
    ];
    const frontend = [
        {name: 'HTML5', icon: '/images/about/tech/html5.png'},
        {name: 'CSS3', icon: '/images/about/tech/css3.png'},
        {name: 'React', icon: '/images/about/tech/react.png'},
        {name: 'Angular 2+', icon: '/images/about/tech/angular.png'},
        {name: 'Bulma', icon: '/images/about/tech/bulma.png'},
        {name: 'Bootstrap', icon: '/images/about/tech/bootstrap.svg'},
    ];
    const backend = [
        {name: 'Node.js', icon: '/images/about/tech/nodejs.png'},
        {name: 'Express.js', icon: '/images/about/tech/express.png'},
        {name: 'Next.js', icon: '/images/about/tech/nextjs.png'},
        {name: 'Spring', icon: '/images/about/tech/spring.png'},
        {name: 'FastAPI', icon: '/images/about/tech/fastapi.png'}
    ];
    const databases = [
        {name: 'MySQL', icon: '/images/about/tech/mysql.png'},
        {name: 'MongoDB', icon: '/images/about/tech/mongodb.png'},
        {name: 'Sequelize', icon: '/images/about/tech/sequelize.svg'},
        {name: 'Mongoose', icon: '/images/about/tech/mongoose.png'},
        {name: 'Spring JPA', icon: '/images/about/tech/jpa.png'}
    ];
    const others = [
        {name: 'Git', icon: '/images/about/tech/git.png'},
        {name: 'AWS', icon: '/images/about/tech/aws.png'},
    ];

    return (
        <section className={classes.tech}>
            <h1>Technologies</h1>
            <p>Check out what technologies I like working with!</p>

            <h2>Languages</h2>
            <ul>
                {languages.map((language) => (
                    <li key={language.name}>
                        <Image src={language.icon} alt={language.name} width={50} height={50} />
                        <p>{language.name}</p>
                    </li>
                ))}
            </ul>

            <h2>Frontend</h2>
            <ul>
                {frontend.map((tech) => (
                    <li key={tech.name}>
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} />
                        <p>{tech.name}</p>
                    </li>
                ))}
            </ul>

            <h2>Backend</h2>
            <ul>
                {backend.map((tech) => (
                    <li key={tech.name}>
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} />
                        <p>{tech.name}</p>
                    </li>
                ))}
            </ul>

            <h2>Databases and ORM</h2>
            <ul>
                {databases.map((tech) => (
                    <li key={tech.name}>
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} />
                        <p>{tech.name}</p>
                    </li>
                ))}
            </ul>

            <h2>Others</h2>
            <ul>
                {others.map((tech) => (
                    <li key={tech.name}>
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} />
                        <p>{tech.name}</p>
                    </li>
                ))}
            </ul>        
        </section>
    );
}

export default TechStack;