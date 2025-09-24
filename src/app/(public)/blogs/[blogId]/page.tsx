/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

interface IProps {
    params: Promise<any>
};

/**
 * eti return korbe array of object
 * id name same to same dynamic folder name hote hobe(blogId)
 * id/value string hote hobe
 */

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`);
    const { data: blogs } = await res.json();

    return blogs?.slice(0, 2)?.map((blog: any) => ({
        blogId: String(blog?.id)
    }));
};

export const generateMetadata = async ({ params }: IProps) => {
    const { blogId } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
    const blog = await res.json();

    return {
        title: blog?.title,
        description: blog?.content
    };
};

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