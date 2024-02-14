---
title: "Using torchlight.dev with Unified/Remark"
tags:
  - Torchlight
  - JavaScript
date: "2024-02-13"
lead: "Lorem ipsum dot asim apploe"
---

Torchlight.dev is an amazing HTTP API for creating syntax highlighting. It has first-party libraries for [Laravel](https://torchlight.dev/docs/clients/laravel), [Remark JS](https://torchlight.dev/docs/clients/remark) and a [CLI](https://torchlight.dev/docs/clients/cli).

Unlike traditional syntax highlighters, Torchlight creates static HTML using VS Code themes instead of relying on the browser to tokenise and highlight the code using JavaScript.

After a lot of trial and error, this is the function used to convert Markdown into HTML:

```typescript
// torchlight! {"lineNumbers": false}
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import torchlight from "remark-torchlight";
import { unified } from "unified";

async function markdownToHtml(content: string) {
  return String(
    await unified()
      .use(torchlight, {
        config: {
          token: process.env.TORCHLIGHT_TOKEN,
          theme: `slack-theme-dark-mode`,
        },
      })
      .use(remarkParse)
      .use(rehypeStringify)
      .use(remarkRehype)
      .process(content),
  );
}
```

The order of the plugins is critical. If `remarkParse` is before `torchlight` the torchlight output isn't used as the compiled version of the code block instead the standard compilation is used.
