"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Section = "blog" | "portfolio" | "team" | "testimonials" | "careers";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [activeSection, setActiveSection] = useState<Section>("blog");

  // Data lists
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<any[]>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [careers, setCareers] = useState<any[]>([]);

  // Selected item for edit or new item
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [isNewItem, setIsNewItem] = useState(false);

  useEffect(() => {
    // Check local storage for auth session
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadAllData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      sessionStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
      setError("");
      loadAllData();
    } else {
      setError("Invalid administrative security key");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
  };

  const loadAllData = async () => {
    try {
      const [blogRes, portRes, teamRes, testRes, careerRes] = await Promise.all([
        fetch("/api/blog"),
        fetch("/api/portfolio"),
        fetch("/api/team"),
        fetch("/api/testimonials"),
        fetch("/api/careers"),
      ]);

      const [blogs, projects, team, tests, careerList] = await Promise.all([
        blogRes.json(),
        portRes.json(),
        teamRes.json(),
        testRes.json(),
        careerRes.json(),
      ]);

      setBlogPosts(blogs);
      setPortfolioProjects(projects);
      setTeamMembers(team);
      setTestimonials(tests);
      setCareers(careerList);
    } catch (err) {
      console.error("Failed to load CMS data:", err);
    }
  };

  // CRUD actions
  const handleEdit = (item: any) => {
    setEditingItem({ ...item });
    setIsNewItem(false);
  };

  const handleCreateNew = () => {
    setIsNewItem(true);
    let defaultItem: any = {};
    if (activeSection === "blog") {
      defaultItem = {
        id: Math.random().toString(36).substr(2, 9),
        slug: "",
        title: "",
        excerpt: "",
        content: "",
        category: "Technology",
        author: "Dr. Elias Vance",
        authorRole: "Chief of Intelligence Architecture",
        authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv5lV4twyP2lCtTfBsbYHz0FPZzgXhJ_-1669niDrV_Z2qStswKyCSpIdIOqPrAQRIar6lnESRPHeExJ4o9X_A268DC5tFHnrNLfVCsBcPaDvJtvh1l6GMl0JySe0cbUIYRsMqmf3ynSM4B0KXQzsZeNU7IjA8bNeMFBoXeXNgUn-M0rDxxQWXgcLgoVjl1i1VCva04kGI8uCRtxXGd2rxXB1cZ7wxOZFfbOWleNFofssXoG2oVCR48YgQZbzpMtobA3j2L4dTXBs",
        image: "",
        readTime: "5 min read",
        featured: false,
        status: "draft",
        createdAt: new Date().toISOString(),
      };
    } else if (activeSection === "portfolio") {
      defaultItem = {
        id: Math.random().toString(36).substr(2, 9),
        slug: "",
        title: "",
        description: "",
        category: "EdTech",
        tags: [],
        techStack: [],
        metrics: [],
        testimonial: { quote: "", author: "" },
        image: "",
        mobileImage: "",
        featured: false,
        status: "draft",
        createdAt: new Date().toISOString(),
      };
    } else if (activeSection === "team") {
      defaultItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: "",
        role: "",
        image: "",
        accentColor: "secondary",
        status: "draft",
      };
    } else if (activeSection === "testimonials") {
      defaultItem = {
        id: Math.random().toString(36).substr(2, 9),
        quote: "",
        author: "",
        company: "",
        status: "draft",
      };
    } else if (activeSection === "careers") {
      defaultItem = {
        id: Math.random().toString(36).substr(2, 9),
        title: "",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        icon: "terminal",
        iconBg: "bg-primary-container",
        description: "",
        requirements: [],
        status: "draft",
        createdAt: new Date().toISOString(),
      };
    }
    setEditingItem(defaultItem);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    let endpoint = "";
    if (activeSection === "blog") endpoint = "/api/blog";
    else if (activeSection === "portfolio") endpoint = "/api/portfolio";
    else if (activeSection === "team") endpoint = "/api/team";
    else if (activeSection === "testimonials") endpoint = "/api/testimonials";
    else if (activeSection === "careers") endpoint = "/api/careers";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem),
      });

      if (res.ok) {
        setEditingItem(null);
        loadAllData();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to save data");
      }
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;

    let endpoint = "";
    if (activeSection === "blog") endpoint = `/api/blog/${id}`;
    else if (activeSection === "portfolio") endpoint = `/api/portfolio/${id}`;
    else if (activeSection === "team") endpoint = `/api/team/${id}`;
    else if (activeSection === "testimonials") endpoint = `/api/testimonials/${id}`;
    else if (activeSection === "careers") endpoint = `/api/careers/${id}`;

    try {
      const res = await fetch(endpoint, { method: "DELETE" });
      if (res.ok) {
        loadAllData();
      } else {
        alert("Failed to delete item");
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  // Render auth page if not validated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]" />
        <div className="relative z-10 w-full max-w-md glass-card p-10 rounded-3xl border border-[var(--color-outline-variant)]">
          <div className="text-center mb-8">
            <h1 className="font-[var(--font-heading)] text-[32px] font-bold text-white mb-2">
              RUNA Control Panel
            </h1>
            <p className="text-[var(--color-on-surface-variant)] text-xs font-semibold uppercase tracking-wider">
              Enter Administrative Cryptokey
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block font-semibold text-xs text-white uppercase tracking-wider">
                Security Key
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)] text-white text-sm"
              />
            </div>
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button
              type="submit"
              className="w-full glow-button py-4 rounded-xl font-[var(--font-heading)] text-white text-sm font-semibold shadow-lg"
            >
              Verify Credentials
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-5 md:px-16 max-w-[1280px] mx-auto min-h-screen flex flex-col">
      <div className="flex justify-between items-center mb-12 border-b border-[var(--color-outline-variant)] pb-6">
        <div>
          <h1 className="font-[var(--font-heading)] text-[32px] font-bold text-white">
            RUNA CMS Control Panel
          </h1>
          <p className="text-[var(--color-on-surface-variant)] text-sm">
            Manage the intelligence layers and site resources.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-red-500/50 hover:bg-red-500/10 text-red-400 rounded-lg text-xs font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation sidebar */}
        <aside className="lg:col-span-3 space-y-2">
          {(["blog", "portfolio", "team", "testimonials", "careers"] as Section[]).map((sect) => (
            <button
              key={sect}
              onClick={() => {
                setActiveSection(sect);
                setEditingItem(null);
              }}
              className={`w-full text-left px-5 py-4 rounded-xl font-semibold text-sm transition-all border ${
                activeSection === sect
                  ? "bg-[var(--color-primary)] text-black border-[var(--color-primary)]"
                  : "bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)] border-transparent"
              }`}
            >
              {sect.charAt(0).toUpperCase() + sect.slice(1)} Management
            </button>
          ))}
        </aside>

        {/* Dashboard workspace */}
        <main className="lg:col-span-9 space-y-6">
          {editingItem ? (
            /* Editing form */
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-8 border-b border-[var(--color-outline-variant)] pb-4">
                <h2 className="font-[var(--font-heading)] text-[20px] font-semibold text-white">
                  {isNewItem ? "Create New" : "Edit"} {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Item
                </h2>
                <button
                  onClick={() => setEditingItem(null)}
                  className="text-xs text-[var(--color-on-surface-variant)] hover:text-white"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                {activeSection === "blog" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Slug</label>
                        <input
                          required
                          type="text"
                          value={editingItem.slug}
                          onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                          placeholder="quantum-frontier"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Title</label>
                        <input
                          required
                          type="text"
                          value={editingItem.title}
                          onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Excerpt</label>
                      <input
                        required
                        type="text"
                        value={editingItem.excerpt}
                        onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        placeholder="Short summary..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Content (HTML allowed)</label>
                      <textarea
                        required
                        rows={8}
                        value={editingItem.content}
                        onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        placeholder="HTML content body..."
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Category</label>
                        <input
                          required
                          type="text"
                          value={editingItem.category}
                          onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Read Time</label>
                        <input
                          required
                          type="text"
                          value={editingItem.readTime}
                          onChange={(e) => setEditingItem({ ...editingItem, readTime: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Status</label>
                        <select
                          value={editingItem.status}
                          onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Featured Image URL</label>
                      <input
                        type="text"
                        value={editingItem.image}
                        onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        placeholder="https://..."
                      />
                    </div>
                  </>
                )}

                {activeSection === "portfolio" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Slug</label>
                        <input
                          required
                          type="text"
                          value={editingItem.slug}
                          onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                          placeholder="edunexus-enterprise"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Title</label>
                        <input
                          required
                          type="text"
                          value={editingItem.title}
                          onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Description</label>
                      <textarea
                        required
                        rows={4}
                        value={editingItem.description}
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Category</label>
                        <input
                          required
                          type="text"
                          value={editingItem.category}
                          onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Status</label>
                        <select
                          value={editingItem.status}
                          onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Featured Image URL</label>
                      <input
                        type="text"
                        value={editingItem.image}
                        onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                      />
                    </div>
                  </>
                )}

                {activeSection === "team" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Name</label>
                        <input
                          required
                          type="text"
                          value={editingItem.name}
                          onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Role</label>
                        <input
                          required
                          type="text"
                          value={editingItem.role}
                          onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Image URL</label>
                        <input
                          type="text"
                          value={editingItem.image}
                          onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Status</label>
                        <select
                          value={editingItem.status}
                          onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {activeSection === "testimonials" && (
                  <>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Quote</label>
                      <textarea
                        required
                        rows={3}
                        value={editingItem.quote}
                        onChange={(e) => setEditingItem({ ...editingItem, quote: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Author</label>
                        <input
                          required
                          type="text"
                          value={editingItem.author}
                          onChange={(e) => setEditingItem({ ...editingItem, author: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Company</label>
                        <input
                          required
                          type="text"
                          value={editingItem.company}
                          onChange={(e) => setEditingItem({ ...editingItem, company: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Status</label>
                        <select
                          value={editingItem.status}
                          onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {activeSection === "careers" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Job Title</label>
                        <input
                          required
                          type="text"
                          value={editingItem.title}
                          onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Department</label>
                        <input
                          required
                          type="text"
                          value={editingItem.department}
                          onChange={(e) => setEditingItem({ ...editingItem, department: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Location</label>
                        <input
                          required
                          type="text"
                          value={editingItem.location}
                          onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Type</label>
                        <input
                          required
                          type="text"
                          value={editingItem.type}
                          onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-semibold text-xs text-white uppercase tracking-wider">Status</label>
                        <select
                          value={editingItem.status}
                          onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                          className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">Description</label>
                      <textarea
                        required
                        rows={4}
                        value={editingItem.description}
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-3 text-white text-sm"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full glow-button py-4 rounded-xl font-[var(--font-heading)] text-white text-sm font-semibold shadow-lg"
                >
                  Save Changes
                </button>
              </form>
            </div>
          ) : (
            /* Items list */
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-[var(--font-heading)] text-[20px] font-semibold text-white">
                  Active {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} List
                </h2>
                <button
                  onClick={handleCreateNew}
                  className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-lg text-xs font-semibold hover:opacity-95"
                >
                  Create New Item
                </button>
              </div>

              <div className="space-y-4">
                {activeSection === "blog" &&
                  blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-between border border-[var(--color-outline-variant)]"
                    >
                      <div>
                        <h4 className="font-semibold text-white text-sm">{post.title}</h4>
                        <span className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          {post.category} • {post.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="px-3 py-1.5 bg-red-600 text-white rounded text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                {activeSection === "portfolio" &&
                  portfolioProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-between border border-[var(--color-outline-variant)]"
                    >
                      <div>
                        <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                        <span className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          {proj.category} • {proj.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(proj)}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(proj.id)}
                          className="px-3 py-1.5 bg-red-600 text-white rounded text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                {activeSection === "team" &&
                  teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="p-4 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-between border border-[var(--color-outline-variant)]"
                    >
                      <div>
                        <h4 className="font-semibold text-white text-sm">{member.name}</h4>
                        <span className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          {member.role} • {member.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(member)}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(member.id)}
                          className="px-3 py-1.5 bg-red-600 text-white rounded text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                {activeSection === "testimonials" &&
                  testimonials.map((test) => (
                    <div
                      key={test.id}
                      className="p-4 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-between border border-[var(--color-outline-variant)]"
                    >
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {test.author} ({test.company})
                        </h4>
                        <span className="text-xs text-[var(--color-on-surface-variant)] line-clamp-1">
                          &ldquo;{test.quote}&rdquo; • {test.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(test)}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(test.id)}
                          className="px-3 py-1.5 bg-red-600 text-white rounded text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                {activeSection === "careers" &&
                  careers.map((job) => (
                    <div
                      key={job.id}
                      className="p-4 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-between border border-[var(--color-outline-variant)]"
                    >
                      <div>
                        <h4 className="font-semibold text-white text-sm">{job.title}</h4>
                        <span className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          {job.department} • {job.location} • {job.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(job)}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="px-3 py-1.5 bg-red-600 text-white rounded text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
