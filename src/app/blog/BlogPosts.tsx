"use client";

import type { BlogPost } from "@/lib/posts";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

function PostLink({ post }: { post: BlogPost }) {
  return (
    <li>
      <Link href={`/blog/${post.id}`}>
        <article className="flex flex-col gap-x-4 rounded overflow-hidden bg-slate-900 hover:ring-1 ring-slate-600 transition">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-square"
            />
          )}

          <div className="p-4 space-y-2">
            <h2>{post.title}</h2>
            <p className="text-xs">{post.tags.join(" | ")}</p>
            <p className="text-sm text-slate-300">
              Published: {post.localeDate}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default function BlogPosts({
  tags,
  posts,
}: {
  tags: Record<string, number>;
  posts: BlogPost[];
}) {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <>
      <ul className="flex gap-2 my-4">
        {Object.keys(tags)
          .sort((a, b) =>
            tags[a] === tags[b] ? a.localeCompare(b) : tags[b] - tags[a],
          )
          .map((tag) => (
            <li key={tag}>
              <button
                className={`flex rounded-full text-xs cursor-pointer hover:shadow transition ${filter === tag ? `bg-slate-600` : `bg-slate-700`}`}
                onClick={() => setFilter(tag)}
              >
                <span className="px-2 py-2">{tag}</span>
                <span className="border-l px-2 py-2">{tags[tag]}</span>
              </button>
            </li>
          ))}
        {filter !== null && (
          <li className="flex items-center ml-2">
            <button onClick={() => setFilter(null)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </li>
        )}
      </ul>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts
          .filter((post) => filter === null || post.tags.includes(filter))
          .map((post) => (
            <PostLink post={post} key={post.id} />
          ))}
      </ul>
    </>
  );
}
