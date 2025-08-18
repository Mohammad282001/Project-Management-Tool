'use client'

import TasksCard from "./TasksCard";

export default function ProjectCardContent({ project }: any) {
    return (
        <div className="flex-shrink-0 w-64 p-6 bg-white ">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
            </h2>

            <p className="text-gray-600 text-sm line-clamp-3">
                {project.description}
            </p>

            <div>
                <TasksCard projectId={project._id}></TasksCard>
            </div>
        </div>
    );
}
