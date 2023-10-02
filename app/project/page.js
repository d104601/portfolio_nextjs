import ProjectList from "@/components/projects/projects-page";
import { getAllProjects } from "@/util/project-util";

async function getData() {
    const projects = getAllProjects();

    return {
        projects: projects
    };
}

const AllProjects = async () => {
    const data = await getData();
    return (
        <>
            <ProjectList projects={data} />
        </>
    );
}

export default AllProjects;