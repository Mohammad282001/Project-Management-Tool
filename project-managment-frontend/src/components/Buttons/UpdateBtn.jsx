'use client';

import { useState } from "react";

export default function UpdateBtn({ id, ApiCall, onUpdated, children, btnTitle }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleUpdate = async () => {
        try {
            setLoading(true);
            await ApiCall(id, formData);
            if (onUpdated) onUpdated();
            alert("Updated successfully!");
            setOpen(false);
        } catch (error) {
            console.error("Error updating:", error);
            alert("Failed to update.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="cursor-pointer bg-amber-500 text-white px-2 py-2 rounded-lg shadow hover:bg-amber-600 transition transform hover:scale-105 text-xs"
            >
                {btnTitle}
            </button>

            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-96 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{btnTitle}</h2>
                        {children({ formData, setFormData })}

                        <div className="flex justify-end gap-3 mt-5">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                disabled={loading}
                                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition disabled:opacity-50"
                            >
                                {loading ? "Updating..." : btnTitle}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
