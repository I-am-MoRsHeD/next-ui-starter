import BlogCard from "@/components/modules/Blogs/BlogCard";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    cache: 'no-store'
  });
  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto my-10">
        {
          blogs?.map((blog: any) => <BlogCard post={blog} key={blog?.id} />)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
