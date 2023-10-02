import ProjectDetail from '../../../components/projects/project-detail';
import { getProjectData, getProjectsFiles } from '../../../util/project-util';

async function getData(slug) {
    const project = await getProjectData(slug);
    return project;
}

const ProjectDetailPage = async ({params}) => {
    const data = await getData(params.id);
    return <ProjectDetail project={data} />;
};

export default ProjectDetailPage;