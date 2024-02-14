import generateRssFeed from "@/lib/generateRSSFeed";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Params = {
  slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  await generateRssFeed();
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({
  params: { slug },
}: {
  params: Params;
}) {
  const postData = await getPostData(slug);

  return (
    <main className="px-8">
      <article className="prose max-w-2xl mx-auto prose-slate prose-invert bg-slate-900 p-8 rounded shadow-sm">
        <header>
          <Link
            href="/blog"
            className="not-prose mb-4 items-center flex gap-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span>Blog</span>
          </Link>
          <h1>{postData.title}</h1>
          Published: {postData.date.toLocaleString()} |{" "}
          {postData.tags.join(", ")}
        </header>
        <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
        <footer>
          <div className="py-2">- Dominic</div>

          <div className="border-t border-slate-700 py-2">
            Syntax Highlighting by{" "}
            <a href="https://torchlight.dev/">torchlight.dev</a>
          </div>
        </footer>
      </article>
    </main>
  );
}
