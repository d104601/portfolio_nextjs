import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectsFiles() {
    return fs.readdirSync(projectsDirectory);
}

export function getProjectData(fileName) {
    const projectSlug = fileName.replace(/\.md$/, '');
    const filePath = path.join(projectsDirectory, projectSlug + '.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);


    const projectData = {
        slug: projectSlug,
        ...data,
        content
    };

    return projectData;
}

export function getAllProjects() {
    const projectFiles= getProjectsFiles();

    const allProjects = projectFiles.map(projectFile => {
        return getProjectData(projectFile);
    });

    // Sort projects by if they are completed or not
    const sortedProjects = allProjects.sort((projectA, projectB) => projectA.completed > projectB.completed ? -1 : 1);
    return allProjects;
}

