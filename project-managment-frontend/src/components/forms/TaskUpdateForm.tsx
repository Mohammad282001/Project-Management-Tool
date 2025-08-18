export default function TaskUpdateForm({ formData, setFormData }) {
    return (
        <>
            <input
                type="text"
                placeholder="Enter task title"
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border w-full rounded px-3 py-2 mb-3"
            />

            <input
                type="text"
                placeholder="Enter task description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border w-full rounded px-3 py-2 mb-3"
            />

            <select
                value={formData.status || ""}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="border w-full rounded px-3 py-2 mb-3"
            >
                <option value="">Select status</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>

            <input
                type="date"
                value={formData.dueDate || ""}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="border w-full rounded px-3 py-2 mb-3"
            />
        </>
    );
}