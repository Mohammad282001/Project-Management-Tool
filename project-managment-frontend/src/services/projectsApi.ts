import axios from "axios";
// import { Project } from "@/types";

const BACKEND_URL = "http://localhost:3000";
export const getProjects = async (): Promise<any[]> => {
    const { data } = await axios.get(`${BACKEND_URL}/projects`);
    return data
}

export const createProject = async (project: any) => {
    const { data } = await axios.post(`${BACKEND_URL}/projects`, project);
    return data;
};

export const updateProject = async (id: any, project: Partial<any>) => {
    const { data } = await axios.put(`${BACKEND_URL}/projects/${id}`, project);
    return data;
};

export const deleteProject = async (_id: any) => {
    const { data } = await axios.delete(`${BACKEND_URL}/projects/${_id}`);
    return data;
};