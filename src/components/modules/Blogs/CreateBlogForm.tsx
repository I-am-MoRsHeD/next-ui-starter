'use client'
import React, { useState } from 'react';
import Form from 'next/form'
import { create } from '@/actions/create';

const CreateBlogForm = () => {
    const [isFeatured, setIsFeatured] = useState("false");

    return (
        <div>
            <Form
                action={create}
                className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl space-y-4"
            >
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter title"
                        required
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium mb-1">Content</label>
                    <textarea
                        name="content"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        rows={4}
                        placeholder="Write content here..."
                        required
                    />
                </div>

                {/* Thumbnail URL */}
                <div>
                    <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
                    <input
                        type="text"
                        name="thumbnail"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium mb-1">Tags</label>
                    <input
                        type="text"
                        name="tags"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="tag1, tag2, tag3"
                    />
                </div>

                {/* Featured */}
                <div>
                    <label className="block text-sm font-medium mb-1">Featured</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="isFeatured"
                                value="true"
                                checked={isFeatured === "true"}
                                onChange={(e) => setIsFeatured(e.target.value)}
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="isFeatured"
                                value="false"
                                checked={isFeatured === "false"}
                                onChange={(e) => setIsFeatured(e.target.value)}
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
                >
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default CreateBlogForm;