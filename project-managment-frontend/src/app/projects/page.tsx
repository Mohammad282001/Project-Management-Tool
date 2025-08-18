"use client";

import { useEffect, useState } from "react";
import { getProjects, createProject } from "@/services/projectsApi";
import ProjectCard from "@/components/ProjectCard";
import { getAllTasks } from "@/services/taskApi";
import { TasksProvider } from "@/context/TasksContext";
import AddBtn from "@/components/Buttons/AddBtn";
import ProjectUpdateForm from "@/components/forms/ProjectUpdateForm";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<any[]>([]);
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsData = await getProjects();
                const tasksData = await getAllTasks();
                setProjects(projectsData);
                setTasks(tasksData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="mx-auto max-w-7xl mt-10 px-2 sm:px-6 lg:px-8">
            <div className="text-right">
                <AddBtn
                    btnTitle={"Add New Project"}
                    apiCall={createProject}
                    onAdded={async () => {
                        // refresh projects after adding
                        const updatedProjects = await getProjects();
                        setProjects(updatedProjects);
                    }}
                    children={ProjectUpdateForm}
                />
            </div>

            <TasksProvider tasks={tasks}>
                <div className="flex gap-20 overflow-x-auto">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </TasksProvider>
        </div>
    );
}