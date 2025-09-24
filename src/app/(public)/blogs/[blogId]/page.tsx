/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

interface IProps {
    params: Promise<any>
}

const BlogDetailsPage = async ({ params }: IProps) => {
    const { blogId } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
    const blog = await res.json();

    return (
        <div className='py-30 px-4 max-w-7xl mx-auto'>
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;