'use client';
import { createContext, useContext } from "react";




const TasksContext = createContext<any>(null);
export function TasksProvider({ tasks, children }: { tasks: any; children: any }) {
    return (
        <TasksContext.Provider value={tasks}>
            {children}
        </TasksContext.Provider>
    );
}
export function useTasks() {
    return useContext(TasksContext);
}