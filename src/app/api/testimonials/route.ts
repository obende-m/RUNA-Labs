import { NextResponse } from "next/server";
import { getTestimonials, saveTestimonial } from "@/lib/cms";

export async function GET() {
  try {
    const testimonials = getTestimonials();
    return NextResponse.json(testimonials);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const testimonial = await req.json();
    if (!testimonial.id || !testimonial.quote || !testimonial.author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    saveTestimonial(testimonial);
    return NextResponse.json({ success: true, testimonial });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save testimonial" }, { status: 500 });
  }
}
