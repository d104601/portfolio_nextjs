import Image from 'next/image';
import classes from './project-detail.module.css';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = (prop) => {
    const { slug, title, image, content } = prop.project;
    const imageDirectory = `/images/project/`+ slug + `/` + image;
    return (
        <article className={classes.content}>
            <header className={classes.header}>
                <h1>{title}</h1>
                <Image src={imageDirectory} alt={title} width={200} height={150} />
            </header>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
};

export default ProjectDetail;