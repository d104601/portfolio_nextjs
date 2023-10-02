import classes from './projects-page.module.css';
import Project from './project';

const ProjectList = (props) => {
    const {projects} = props.projects;

    return (
        <section className={classes.posts}>
            <h1>Side Projects</h1>
            <ul className={classes.grid}>
                {projects.map((project) => (
                    <Project key={project.slug} project={project} />
                ))}
            </ul>
        </section>
    );
};

export default ProjectList;