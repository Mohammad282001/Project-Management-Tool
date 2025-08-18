export default function ProjectUpdateForm({ formData, setFormData }) {
    return (
        <>
            <input
                type="text"
                placeholder="Enter project title"
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border w-full rounded px-3 py-2 mb-3"
            />

            <input
                type="text"
                placeholder="Enter project description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border w-full rounded px-3 py-2 mb-3"
            />
        </>
    );
}