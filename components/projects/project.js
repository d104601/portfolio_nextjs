import Link from 'next/link';
import classes from './project.module.css';
import Image from 'next/image';

const Project = ({ project }) => {
    const { title, image, exerpt, slug } = project;

    const imgPath = `/images/project/${slug}/${image}`;

    return (
        <li className={classes.post}>
            <Link href={`/projects/${slug}`}>
                <div className={classes.image}>
                    <Image src={imgPath} alt={title} width={300} height={200} layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <p>
                        {exerpt}
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default Project;