import { NextResponse } from "next/server";
import { getTeamMembers, saveTeamMember } from "@/lib/cms";

export async function GET() {
  try {
    const members = getTeamMembers();
    return NextResponse.json(members);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const member = await req.json();
    if (!member.id || !member.name || !member.role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    saveTeamMember(member);
    return NextResponse.json({ success: true, member });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save team member" }, { status: 500 });
  }
}
