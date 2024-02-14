import fs from "fs";
import RSS, { FeedOptions } from "rss";

import { getSortedPostsData } from "./posts";

export default async function generateRssFeed() {
  const site_url = "https://dominiccarrington.github.io";

  const feedOptions: FeedOptions = {
    title: "Dominic Carrington",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Dominic Carrington`,
  };
  const feed = new RSS(feedOptions);

  const allPosts = getSortedPostsData();

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.lead,
      url: `${site_url}/blog/${post.id}`,
      date: post.date.toJSDate(),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
