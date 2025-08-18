'use client';

import { useState } from "react";

export default function DeleteBtn({ id, onDeleted, ApiCall,btnTitle }) {
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        if (!confirm("Are you sure you want to delete this item?")) return;
        setLoading(true);
        try {
            await ApiCall(id);
            alert("Deleted successfully!");
            if (onDeleted) onDeleted();
        } catch (error) {
            console.error(error);
            alert("Failed to delete.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="cursor-pointer bg-red-500 text-white px-2 py-2 rounded-lg shadow hover:bg-red-600 transition transform hover:scale-105 disabled:opacity-50 text-xs"
        >
            {loading ? "Deleting..." : btnTitle }
        </button>
    );
}
