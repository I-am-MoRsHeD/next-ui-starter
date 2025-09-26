

export const getBlogById = async (blogId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
    return await res.json();
}