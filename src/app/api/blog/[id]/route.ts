import { NextResponse } from "next/server";
import { deleteBlogPost } from "@/lib/cms";

interface Props {
  params: Promise<{ id: string }>;
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    deleteBlogPost(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
  }
}
