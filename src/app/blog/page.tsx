import { getSortedPostsData, getTags } from "@/lib/posts";
import { Metadata } from "next";

import BlogPosts from "./BlogPosts";

export const metadata: Metadata = {
  title: "Blog | Dominic Carrington"
};

export default function Blog() {
  const tags = getTags();
  const posts = getSortedPostsData();

  return (
    <main className="px-8">
      <h1>Blog</h1>
      <p></p>

      <BlogPosts tags={tags} posts={posts} />
    </main>
  );
}
