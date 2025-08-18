'use client'
import ProjectCardContent from "./ProjectCardContent";
import DeleteBtn from "@/components/Buttons/DeleteBtn"
import UpdateBtn from "@/components/Buttons/UpdateBtn";
import { deleteProject, updateProject } from "@/services/projectsApi";
import ProjectUpdateForm from "./forms/ProjectUpdateForm";




export default function ProjectCard({ project }: any) {

    return (
        <div>
            <DeleteBtn id={project._id} onDeleted={undefined} ApiCall={deleteProject} btnTitle={"Delete Project"}></DeleteBtn>
            <UpdateBtn id={project._id} ApiCall={updateProject} onUpdated={undefined} btnTitle={"Update Project"}>
                {({ formData, setFormData }) => (
                    <ProjectUpdateForm formData={formData} setFormData={setFormData} />
                )}
            </UpdateBtn>
            <ProjectCardContent project={project}
            />



        </div>
    );
}
