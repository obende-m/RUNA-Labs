import { NextResponse } from "next/server";
import { getCareerPositions, saveCareerPosition } from "@/lib/cms";

export async function GET() {
  try {
    const positions = getCareerPositions();
    return NextResponse.json(positions);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch positions" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const position = await req.json();
    if (!position.id || !position.title || !position.department) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    saveCareerPosition(position);
    return NextResponse.json({ success: true, position });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save career position" }, { status: 500 });
  }
}
