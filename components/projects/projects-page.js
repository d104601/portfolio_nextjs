import classes from './projects-page.module.css';
import Project from './project';

const ProjectList = (props) => {
    const dummyProjects = [
        {
            slug: 'project1',
            title: 'Project 1',
            image: 'project1.jpg',
            exerpt: 'Project 1 exerpt'
        },
        {
            slug: 'project1',
            title: 'Project 1',
            image: 'project1.jpg',
            exerpt: 'Project 1 exerpt'
        },
        {
            slug: 'project1',
            title: 'Project 1',
            image: 'project1.jpg',
            exerpt: 'Project 1 exerpt'
        }
    ];
    
    const projects = dummyProjects;

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