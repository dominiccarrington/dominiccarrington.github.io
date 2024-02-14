import { getSortedPostsData } from "@/lib/posts";
import type { BlogPost } from "@/lib/posts";
import Link from "next/link";

function PostLink({ post }: { post: BlogPost }) {
  return (
    <li>
      <Link href={`/blog/${post.id}`}>
        <article className="flex flex-col md:flex-row gap-x-4 rounded overflow-hidden bg-slate-900 hover:ring-1 ring-slate-600 transition">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-40 aspect-square"
            />
          )}

          <div className="p-4">
            <h2>{post.title}</h2>
            <p className="text-slate-300">
              Published: {post.date.toLocaleString()}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default function Blog() {
  return (
    <main className="px-8">
      <h1>Blog</h1>
      <p></p>

      <ul>
        {getSortedPostsData().map((post) => (
          <PostLink post={post} key={post.id} />
        ))}
      </ul>
    </main>
  );
}
