import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { DateTime } from "luxon";
import path from "path";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import torchlight from "remark-torchlight";
import { unified } from "unified";
import z from "zod";

const metadataValidator = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  lead: z.string(),
  date: z.string(),
  image: z.string().optional(),
});

export type BlogPost = { id: string; date: DateTime } & Omit<
  z.infer<typeof metadataValidator>,
  "date"
>;

export type BlogPostWithContent = BlogPost & { content: string };

const postsDirectory = path.join(process.cwd(), "src/posts");

async function markdownToHtml(content: string) {
  return String(
    await unified()
      .use(torchlight, {
        config: {
          token: process.env.TORCHLIGHT_TOKEN,
          theme: `slack-theme-dark-mode`,
          // options: { lineNumbers: false },
        },
      })
      .use(remarkParse)
      .use(rehypeStringify)
      .use(remarkRehype)
      .process(content),
  );
}

function parsePostMetadata(matterResult: GrayMatterFile<string>) {
  const data = matterResult.data;
  const metadata = metadataValidator.parse(data);

  return {
    ...metadata,
    date: DateTime.fromISO(metadata.date),
  };
}

export async function getPostData(slug: string): Promise<BlogPostWithContent> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const metadata = parsePostMetadata(matterResult);
  const contentHtml = await markdownToHtml(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    content: contentHtml,
    ...metadata,
  };
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const metadata = parsePostMetadata(matterResult);

    // Combine the data with the id
    return {
      id,
      ...metadata,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
