'use client';
import { useState } from "react";

export default function AddBtn({ onAdded, children, apiCall, projectId, btnTitle }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleAdd = async () => {
        try {
            setLoading(true);

            const body = { ...formData, projectId };
            await apiCall(body);

            if (onAdded) onAdded();
            alert("Added successfully!");
            setOpen(false);
        } catch (error) {
            console.error("Error while adding:", error);
            alert("Failed to add.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105"
            >
                {btnTitle}
            </button>

            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-96 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Task</h2>
                        {children({ formData, setFormData })}

                        <div className="flex justify-end gap-3 mt-5">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAdd}
                                disabled={loading}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                            >
                                {loading ? "Adding..." : btnTitle}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
