import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreatePost = () => {
    const router = useRouter();

    //Basic case for storing field values
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        userId: 10,
    });

    //State to store errors for each field
    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });

    // When handle change values ​​in any field
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the field value in formData
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Immediate field validation (if empty, error appears)
        setErrors((prev) => ({
            ...prev,
            [name]: value.trim() === "" ? `${name[0].toUpperCase() + name.slice(1)} is required` : "",
        }));
    }

    // When you press the send button submit
    const handleSubmit = async(e) => {
        e.preventDefault();

        // Check that all fields are not empty
        let newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.description.trim()) newErrors.description = "Description is required";

        setErrors(newErrors);

        // If there is any error, we stop the process.
        if (Object.keys(newErrors).length > 0) {
            return;
        }


        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: formData.title,
                body: formData.description,
                userId: formData.userId,
            });

            console.log("Post created:", response.data);

            toast.success("Post submitted successfully!");

            setTimeout(() => {
                setFormData({ title: "", description: "" });
            }, 2000)
            setTimeout(() => {
                router.push('/')
            }, 3000)

            setErrors({});
        } catch (error) {
            console.error("Error creating post:", error);
            toast.error("Failed to submit post");
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white
            dark:bg-gray-900
            text-gray-800
            dark:text-white
            shadow-lg
            rounded-2xl
            p-6
            max-w-md
            w-full
            mx-auto"
        >
            <h2 className="text-xl font-semibold mb-4 text-center">Create New Post</h2>

            <div className="mb-4">
                <label htmlFor="title" className="block mb-1 font-medium">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full
                    p-2
                    rounded-md
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gray-900
                    ${errors.title && 'border-red-500'}`}
                    required
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block mb-1 font-medium">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full
                    p-2
                    rounded-md
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gray-900
                    resize-none
                    ${errors.description && 'border-red-500'}`}
                    required
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
            >
                Submit
            </button>
        </form>
    )
}

export default CreatePost
