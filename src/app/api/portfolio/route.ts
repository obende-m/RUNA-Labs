import { NextResponse } from "next/server";
import { getPortfolioProjects, savePortfolioProject } from "@/lib/cms";

export async function GET() {
  try {
    const projects = getPortfolioProjects();
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch portfolio projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const project = await req.json();
    if (!project.id || !project.slug || !project.title) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    savePortfolioProject(project);
    return NextResponse.json({ success: true, project });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save portfolio project" }, { status: 500 });
  }
}
