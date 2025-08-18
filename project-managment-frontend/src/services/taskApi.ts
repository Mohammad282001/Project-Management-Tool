import axios from "axios";
const BACKEND_URL = "http://localhost:3000";


export const getTaskByProjectId = async (projectId: any): Promise<any[]> => {
    try {
        const { data } = await axios.get(`${BACKEND_URL}/tasks/${projectId}`)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}
export const getAllTasks = async (): Promise<any[]> => {

    const { data } = await axios.get(`${BACKEND_URL}/tasks`)
    return data

}
export const createTask = async (task: any) => {
    const { data } = await axios.post(`${BACKEND_URL}/tasks`, task);
    return data;
};
export const updateTask = async (id: any, task: Partial<any>) => {
    const { data } = await axios.put(`${BACKEND_URL}/tasks/${id}`, task);
    return data;
};

export const deleteTask = async (id: any) => {
    const { data } = await axios.delete(`${BACKEND_URL}/tasks/${id}`);
    return data;
};


// export const getTaskByProjectId = async (projectId: any): Promise<any[]> => {
//         const { data } = await axios.get(`${BACKEND_URL}/${projectId}`)
//         return data
// }
// export const getAllTasks = async (): Promise<any[]> => {
//     const { data } = await axios.get(`${BACKEND_URL}/tasks`)
//     return data
// }






