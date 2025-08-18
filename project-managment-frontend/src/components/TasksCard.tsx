'use client'
import { useTasks } from "@/context/TasksContext";
import DeleteBtn from "@/components/Buttons/DeleteBtn";
import UpdateBtn from "@/components/Buttons/UpdateBtn";
import AddBtn from "@/components/Buttons/AddBtn";
import { deleteTask, updateTask, createTask } from "@/services/taskApi";
import TaskUpdateForm from "./forms/TaskUpdateForm";

export default function TasksCard({ projectId }: { projectId: string }) {
    const tasks = useTasks();
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "in progress":
                return "bg-yellow-100 text-yellow-800";
            case "completed":
                return "bg-green-100 text-green-800";
            case "pending":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <AddBtn
                
                apiCall={createTask}
                onAdded={undefined}
                children={TaskUpdateForm}
                projectId={projectId}
                btnTitle={"Add New Task"}
            />

            {tasks
                .filter(task => task.projectId === projectId)
                .map(task => (
                    <div
                        key={task._id || ""}
                        className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 relative"
                    >

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-gray-800">
                                {task.title}
                            </h2>
                            <p className="text-gray-600 text-sm">{task.description}</p>

                            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
                                <span className={`px-3 py-1 rounded-full font-semibold ${getStatusColor(task.status)}`}>
                                    {task.status}
                                </span>
                                <span className="text-gray-500">
                                    Due: {new Date(task.dueDate).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <div className=" top-4 right-4 flex gap-2">
                            <DeleteBtn id={task._id} onDeleted={undefined} ApiCall={deleteTask} btnTitle={ "Delete Task"} />
                            <UpdateBtn id={task._id} onUpdated={undefined} ApiCall={updateTask} btnTitle={"Update Task"}>
                                {({ formData, setFormData }) => (
                                    <TaskUpdateForm formData={formData} setFormData={setFormData} />
                                )}
                            </UpdateBtn>
                        </div>
                    </div>
                ))}
        </div>
    );
}
