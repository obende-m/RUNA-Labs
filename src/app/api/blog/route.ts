import { NextResponse } from "next/server";
import { getBlogPosts, saveBlogPost } from "@/lib/cms";

export async function GET() {
  try {
    const posts = getBlogPosts();
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const post = await req.json();
    if (!post.id || !post.slug || !post.title) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    saveBlogPost(post);
    return NextResponse.json({ success: true, post });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save blog post" }, { status: 500 });
  }
}
