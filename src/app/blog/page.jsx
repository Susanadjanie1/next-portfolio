export const revalidate = 60; // Revalidate the page every 60 seconds

async function getBlogPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4000";
    const res = await fetch(`${baseUrl}/blog`);

    if (!res.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16 pt-6">
        My Blog
      </h1>

      {blogPosts.length > 0 ? (
        <ul className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li
              key={post.id}
              className="relative p-8 bg-blue-300 text-black rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-semibold mb-4 italic">{post.title}</h2>
              <p className="text-lg">{post.body}</p>
              <div className="absolute inset-0 bg-black opacity-0"></div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No blog posts available.
        </p>
      )}
    </section>
  );
}
