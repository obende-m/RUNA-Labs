import { NextResponse } from "next/server";
import { deleteCareerPosition } from "@/lib/cms";

interface Props {
  params: Promise<{ id: string }>;
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    deleteCareerPosition(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete career position" }, { status: 500 });
  }
}
