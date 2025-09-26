'use server';

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
    const blogInfo = Object.fromEntries(data.entries());

    const tags = blogInfo.tags.toString().split(',').map(tag => tag.trim());

    const modifiedData = {
        ...blogInfo,
        authorId: 2,
        tags,
        isFeatured: Boolean(blogInfo.isFeatured)
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(modifiedData)
    });

    const result = await res.json();

    if (result?.id) {
        revalidateTag("BLOGS");
        revalidatePath('/blogs'); // blog post howar sathe sathe jodi kono whole page ke refetch korte hoi,tahole eti use korle hobe
        redirect('/');
    };
    return result;
};