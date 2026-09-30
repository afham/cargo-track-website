import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  coverImage: string;
  readTime: string;
  category: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllPosts(locale: string = "en"): BlogPostMeta[] {
  const localizedDir = path.join(blogsDirectory, locale);

  if (!fs.existsSync(localizedDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(localizedDir);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(localizedDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled Post",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Cargo Track",
        coverImage: data.coverImage || "/assets/blog/moving-riyadh.jpg",
        readTime: data.readTime || "5 min read",
        category: data.category || "General",
      };
    });

  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export async function getPostBySlug(
  slug: string,
  locale: string = "en",
): Promise<BlogPost | null> {
  const fullPath = path.join(blogsDirectory, locale, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled Post",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Cargo Track",
    coverImage: data.coverImage || "/assets/blog/moving-riyadh.jpg",
    readTime: data.readTime || "5 min read",
    category: data.category || "General",
    content,
  };
}
