import { getDatabase, BlogPost as DbBlogPost } from "./db";

export type BlogPost = DbBlogPost;

// Helper to get all published blog posts dynamically at request/render time
export function getBlogPosts(): BlogPost[] {
  try {
    const db = getDatabase();
    return db.articles.filter((post) => post.status === "PUBLISHED");
  } catch (error) {
    console.error("Error fetching blog posts from database:", error);
    return [];
  }
}

// Helper to fetch all articles (including drafts) for the admin dashboard
export function getAllBlogPostsForAdmin(): BlogPost[] {
  try {
    return getDatabase().articles;
  } catch (error) {
    console.error("Error fetching all blog posts for admin:", error);
    return [];
  }
}

// Helper to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

// Helper to get all slugs for static site generation
export function getAllSlugs(): string[] {
  return getBlogPosts().map((p) => p.slug);
}

// Export for backward compatibility (evaluates on module load)
export const BLOG_POSTS = getBlogPosts();
