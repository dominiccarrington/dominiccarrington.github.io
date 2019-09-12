export interface SearchResult {
  ref: string;
  score: number;
}

export interface Post {
  id?: string,
  type: 'md'|'vue',
  component?: string,
  title: string;
  author: string;
  date: string;
  tags: string[];
  preview: string;
  content: string;
  iso8601Date: string;
  basename: string;
  mtime: string;
  search?: SearchResult;
}

export interface Posts {
  [key: string]: Post;
}

export interface Tags {
  [key: string]: string[];
}
