import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");

function readJsonFile<T>(filename: string): T {
  const filePath = path.join(dataDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function writeJsonFile<T>(filename: string, data: T): void {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

/* ---------- Types ---------- */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  readTime: string;
  featured: boolean;
  status: "published" | "draft";
  createdAt: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  techStack: string[];
  metrics: { value: string; label: string }[];
  testimonial?: { quote: string; author: string };
  image: string;
  image2?: string;
  mobileImage?: string;
  featured: boolean;
  status: "published" | "draft";
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  accentColor: string;
  status: "published" | "draft";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  status: "published" | "draft";
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  icon: string;
  iconBg: string;
  description: string;
  requirements: string[];
  status: "published" | "draft";
  createdAt: string;
}

/* ---------- Blog Posts ---------- */

export function getBlogPosts(): BlogPost[] {
  const data = readJsonFile<{ posts: BlogPost[] }>("blog-posts.json");
  return data.posts;
}

export function getPublishedBlogPosts(): BlogPost[] {
  return getBlogPosts().filter((p) => p.status === "published");
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function saveBlogPost(post: BlogPost): void {
  const data = readJsonFile<{ posts: BlogPost[] }>("blog-posts.json");
  const index = data.posts.findIndex((p) => p.id === post.id);
  if (index >= 0) {
    data.posts[index] = post;
  } else {
    data.posts.push(post);
  }
  writeJsonFile("blog-posts.json", data);
}

export function deleteBlogPost(id: string): void {
  const data = readJsonFile<{ posts: BlogPost[] }>("blog-posts.json");
  data.posts = data.posts.filter((p) => p.id !== id);
  writeJsonFile("blog-posts.json", data);
}

/* ---------- Portfolio Projects ---------- */

export function getPortfolioProjects(): PortfolioProject[] {
  const data = readJsonFile<{ projects: PortfolioProject[] }>("portfolio-projects.json");
  return data.projects;
}

export function getPublishedPortfolioProjects(): PortfolioProject[] {
  return getPortfolioProjects().filter((p) => p.status === "published");
}

export function getPortfolioProjectBySlug(slug: string): PortfolioProject | undefined {
  return getPortfolioProjects().find((p) => p.slug === slug);
}

export function savePortfolioProject(project: PortfolioProject): void {
  const data = readJsonFile<{ projects: PortfolioProject[] }>("portfolio-projects.json");
  const index = data.projects.findIndex((p) => p.id === project.id);
  if (index >= 0) {
    data.projects[index] = project;
  } else {
    data.projects.push(project);
  }
  writeJsonFile("portfolio-projects.json", data);
}

export function deletePortfolioProject(id: string): void {
  const data = readJsonFile<{ projects: PortfolioProject[] }>("portfolio-projects.json");
  data.projects = data.projects.filter((p) => p.id !== id);
  writeJsonFile("portfolio-projects.json", data);
}

/* ---------- Team Members ---------- */

export function getTeamMembers(): TeamMember[] {
  const data = readJsonFile<{ members: TeamMember[] }>("team-members.json");
  return data.members;
}

export function getPublishedTeamMembers(): TeamMember[] {
  return getTeamMembers().filter((m) => m.status === "published");
}

export function saveTeamMember(member: TeamMember): void {
  const data = readJsonFile<{ members: TeamMember[] }>("team-members.json");
  const index = data.members.findIndex((m) => m.id === member.id);
  if (index >= 0) {
    data.members[index] = member;
  } else {
    data.members.push(member);
  }
  writeJsonFile("team-members.json", data);
}

export function deleteTeamMember(id: string): void {
  const data = readJsonFile<{ members: TeamMember[] }>("team-members.json");
  data.members = data.members.filter((m) => m.id !== id);
  writeJsonFile("team-members.json", data);
}

/* ---------- Testimonials ---------- */

export function getTestimonials(): Testimonial[] {
  const data = readJsonFile<{ testimonials: Testimonial[] }>("testimonials.json");
  return data.testimonials;
}

export function getPublishedTestimonials(): Testimonial[] {
  return getTestimonials().filter((t) => t.status === "published");
}

export function saveTestimonial(testimonial: Testimonial): void {
  const data = readJsonFile<{ testimonials: Testimonial[] }>("testimonials.json");
  const index = data.testimonials.findIndex((t) => t.id === testimonial.id);
  if (index >= 0) {
    data.testimonials[index] = testimonial;
  } else {
    data.testimonials.push(testimonial);
  }
  writeJsonFile("testimonials.json", data);
}

export function deleteTestimonial(id: string): void {
  const data = readJsonFile<{ testimonials: Testimonial[] }>("testimonials.json");
  data.testimonials = data.testimonials.filter((t) => t.id !== id);
  writeJsonFile("testimonials.json", data);
}

/* ---------- Career Positions ---------- */

export function getCareerPositions(): CareerPosition[] {
  const data = readJsonFile<{ positions: CareerPosition[] }>("careers.json");
  return data.positions;
}

export function getPublishedCareerPositions(): CareerPosition[] {
  return getCareerPositions().filter((p) => p.status === "published");
}

export function saveCareerPosition(position: CareerPosition): void {
  const data = readJsonFile<{ positions: CareerPosition[] }>("careers.json");
  const index = data.positions.findIndex((p) => p.id === position.id);
  if (index >= 0) {
    data.positions[index] = position;
  } else {
    data.positions.push(position);
  }
  writeJsonFile("careers.json", data);
}

export function deleteCareerPosition(id: string): void {
  const data = readJsonFile<{ positions: CareerPosition[] }>("careers.json");
  data.positions = data.positions.filter((p) => p.id !== id);
  writeJsonFile("careers.json", data);
}
