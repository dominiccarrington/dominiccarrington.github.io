export interface Posts {
  [key: string]: Post
}

export interface Post {
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

export interface Tags {
  [key: string]: string[];
}

export interface SearchResult {
  ref: string;
  score: number;
}
