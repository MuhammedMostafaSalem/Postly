import React from 'react'

const CreatePost = () => {
    return (
        <form
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
            <label htmlFor="name" className="block mb-1 font-medium">
                Title
            </label>
            <input
                type="text"
                name="title"
                id="title"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
            />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block mb-1 font-medium">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                    required
                />
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
