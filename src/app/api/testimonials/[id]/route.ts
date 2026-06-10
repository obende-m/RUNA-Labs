import { NextResponse } from "next/server";
import { deleteTestimonial } from "@/lib/cms";

interface Props {
  params: Promise<{ id: string }>;
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    deleteTestimonial(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 });
  }
}
