// src/app/admin/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Briefcase,
  FileText,
  Plus,
  RefreshCw,
  LogOut,
  ExternalLink,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Trash2,
  Edit,
  Database,
  Eye,
  Download,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("applications");

  // State
  const [applications, setApplications] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Job Modal State
  const [showJobModal, setShowJobModal] = useState(false);
  const [editingJob, setEditingJob] = useState<any | null>(null);
  const [jobForm, setJobForm] = useState({
    title: "",
    slug: "",
    department: "Engineering",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Competitive",
    description: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
    isActive: true,
  });

  // Blog Modal State
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    category: "Products & ERP",
    tags: "",
    coverImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=630&fit=crop",
    readTime: "5 min read",
    featured: false,
    isPublished: true,
    seoKeywords: "",
  });

  // Fetch initial data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [appsRes, jobsRes, blogsRes] = await Promise.all([
        fetch("/api/admin/applications"),
        fetch("/api/admin/jobs"),
        fetch("/api/admin/blogs"),
      ]);

      if (appsRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      const appsData = await appsRes.json();
      const jobsData = await jobsRes.json();
      const blogsData = await blogsRes.json();

      setApplications(appsData.applications || []);
      setJobs(jobsData.jobs || []);
      setBlogs(blogsData.posts || []);
    } catch (err: any) {
      toast.error("Error loading dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    toast.success("Logged out successfully");
    router.push("/admin/login");
  };

  const handleSeedDatabase = async () => {
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      toast.success(data.message || "Database seeded!");
      fetchData();
    } catch (err: any) {
      toast.error(err.message || "Failed to seed database");
    }
  };

  const updateAppStatus = async (id: string, status: string) => {
    try {
      const res = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      toast.success(`Application marked as ${status}`);
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status } : app))
      );
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Job Actions
  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...jobForm,
        responsibilities: jobForm.responsibilities
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        requirements: jobForm.requirements
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        benefits: jobForm.benefits
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      const url = "/api/admin/jobs";
      const method = editingJob ? "PUT" : "POST";
      const body = editingJob ? { ...payload, _id: editingJob._id } : payload;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success(editingJob ? "Job updated successfully!" : "New job posted!");
      setShowJobModal(false);
      setEditingJob(null);
      fetchData();
    } catch (err: any) {
      toast.error(err.message || "Failed to save job");
    }
  };

  const handleDeleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const res = await fetch(`/api/admin/jobs?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete job");
      toast.success("Job deleted");
      fetchData();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Blog Actions
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...blogForm,
        tags: blogForm.tags
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        seoKeywords: blogForm.seoKeywords
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      const url = "/api/admin/blogs";
      const method = editingBlog ? "PUT" : "POST";
      const body = editingBlog ? { ...payload, _id: editingBlog._id } : payload;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success(editingBlog ? "Article updated successfully!" : "New article published!");
      setShowBlogModal(false);
      setEditingBlog(null);
      fetchData();
    } catch (err: any) {
      toast.error(err.message || "Failed to save article");
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const res = await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete article");
      toast.success("Article deleted");
      fetchData();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Filtered Applications
  const filteredApps = applications.filter((app) => {
    const matchesStatus = filterStatus === "All" || app.status === filterStatus;
    const matchesSearch =
      searchTerm === "" ||
      app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Top Navbar */}
      <header className="border-b bg-card/60 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center">
              LT
            </div>
            <div>
              <h1 className="font-bold text-base leading-none">Lars Tech Portal</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Admin Management Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSeedDatabase}
              title="Populate MongoDB with default jobs and blog articles if empty"
              className="hidden sm:flex items-center gap-1.5"
            >
              <Database className="w-3.5 h-3.5" />
              Seed DB
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchData}
              title="Refresh"
              className="text-muted-foreground"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 py-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/50">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                <h3 className="text-3xl font-bold mt-1">{applications.length}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {applications.filter((a) => a.status === "Pending").length} pending review
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Job Openings</p>
                <h3 className="text-3xl font-bold mt-1">
                  {jobs.filter((j) => j.isActive).length}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{jobs.length} total listed</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Published Articles</p>
                <h3 className="text-3xl font-bold mt-1">
                  {blogs.filter((b) => b.isPublished !== false).length}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Product, ERP &amp; AI insights</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
            <TabsList className="bg-muted/40 p-1">
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Applications ({applications.length})
              </TabsTrigger>
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Job Openings ({jobs.length})
              </TabsTrigger>
              <TabsTrigger value="blogs" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Blog CMS ({blogs.length})
              </TabsTrigger>
            </TabsList>

            {activeTab === "jobs" && (
              <Button
                onClick={() => {
                  setEditingJob(null);
                  setJobForm({
                    title: "",
                    slug: "",
                    department: "Engineering",
                    location: "Najibabad, UP (On-site)",
                    type: "Full-time",
                    experience: "2-4 years",
                    salary: "Competitive",
                    description: "",
                    responsibilities: "",
                    requirements: "",
                    benefits: "",
                    isActive: true,
                  });
                  setShowJobModal(true);
                }}
                className="gap-1.5"
              >
                <Plus className="w-4 h-4" /> Post New Job
              </Button>
            )}

            {activeTab === "blogs" && (
              <Button
                onClick={() => {
                  setEditingBlog(null);
                  setBlogForm({
                    title: "",
                    slug: "",
                    description: "",
                    content: "",
                    category: "Products & ERP",
                    tags: "School ERP, Automation",
                    coverImage:
                      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=630&fit=crop",
                    readTime: "5 min read",
                    featured: false,
                    isPublished: true,
                    seoKeywords: "school erp, ai automation",
                  });
                  setShowBlogModal(true);
                }}
                className="gap-1.5"
              >
                <Plus className="w-4 h-4" /> Write New Article
              </Button>
            )}
          </div>

          {/* TAB 1: APPLICATIONS */}
          <TabsContent value="applications" className="space-y-4">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search applicants, roles, emails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-muted-foreground whitespace-nowrap">Filter Status:</span>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Reviewing">Reviewing</SelectItem>
                    <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Applications List */}
            {filteredApps.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg">No Applications Found</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    {searchTerm || filterStatus !== "All"
                      ? "Try adjusting your search criteria or status filter."
                      : "When candidates apply through the Careers or Apply page, their full profiles will appear here."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredApps.map((app) => (
                  <Card key={app._id} className="hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-bold text-lg">{app.fullName}</h3>
                            <Badge variant="outline">{app.jobTitle}</Badge>
                            <Badge
                              className={
                                app.status === "Shortlisted"
                                  ? "bg-green-500/10 text-green-600 border-green-500/20"
                                  : app.status === "Reviewing"
                                  ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                  : app.status === "Rejected"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20"
                                  : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              }
                            >
                              {app.status}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <span>📧 {app.email}</span>
                            <span>📞 {app.phone}</span>
                            <span>⏳ Experience: {app.experience}</span>
                            <span>
                              📅 Applied:{" "}
                              {new Date(app.createdAt || Date.now()).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>

                          {app.coverLetter && (
                            <p className="text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground mt-2 italic">
                              "{app.coverLetter}"
                            </p>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                          {app.resumeDataUrl ? (
                            <a
                              href={app.resumeDataUrl}
                              download={app.resumeFileName || "resume.pdf"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="outline" size="sm" className="gap-1.5">
                                <Download className="w-3.5 h-3.5" />
                                Resume
                              </Button>
                            </a>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              {app.resumeFileName || "Resume Attached"}
                            </Badge>
                          )}

                          {app.portfolioUrl && (
                            <a
                              href={app.portfolioUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline flex items-center gap-1"
                            >
                              Portfolio <ExternalLink className="w-3 h-3" />
                            </a>
                          )}

                          {/* Status Dropdown */}
                          <Select
                            value={app.status}
                            onValueChange={(val) => updateAppStatus(app._id, val)}
                          >
                            <SelectTrigger className="w-[130px] h-8 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pending">Pending</SelectItem>
                              <SelectItem value="Reviewing">Reviewing</SelectItem>
                              <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                              <SelectItem value="Rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* TAB 2: JOBS */}
          <TabsContent value="jobs" className="space-y-4">
            <div className="grid gap-4">
              {jobs.map((job) => (
                <Card key={job._id || job.slug} className="hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge
                          variant={job.isActive ? "default" : "outline"}
                          className={job.isActive ? "bg-green-600" : "text-muted-foreground"}
                        >
                          {job.isActive ? "Active / Open" : "Draft / Closed"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {job.location} • {job.type} • {job.salary} • Experience: {job.experience}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2 max-w-2xl mt-1">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`/careers/${job.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="w-3.5 h-3.5" /> View Live
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingJob(job);
                          setJobForm({
                            title: job.title,
                            slug: job.slug,
                            department: job.department,
                            location: job.location,
                            type: job.type,
                            experience: job.experience,
                            salary: job.salary,
                            description: job.description,
                            responsibilities: (job.responsibilities || []).join("\n"),
                            requirements: (job.requirements || []).join("\n"),
                            benefits: (job.benefits || []).join("\n"),
                            isActive: job.isActive !== false,
                          });
                          setShowJobModal(true);
                        }}
                        className="gap-1"
                      >
                        <Edit className="w-3.5 h-3.5" /> Edit
                      </Button>
                      {job._id && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteJob(job._id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TAB 3: BLOGS */}
          <TabsContent value="blogs" className="space-y-4">
            <div className="grid gap-4">
              {blogs.map((post) => (
                <Card key={post._id || post.slug} className="hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <Badge variant="secondary">{post.category}</Badge>
                        {post.featured && <Badge variant="default">Featured</Badge>}
                        <Badge variant={post.isPublished ? "outline" : "destructive"}>
                          {post.isPublished ? "Published" : "Draft"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Slug: /blog/{post.slug} • Read time: {post.readTime} • Author:{" "}
                        {post.author?.name}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2 max-w-2xl mt-1">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="w-3.5 h-3.5" /> View Live
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingBlog(post);
                          setBlogForm({
                            title: post.title,
                            slug: post.slug,
                            description: post.description,
                            content: post.content || "",
                            category: post.category,
                            tags: (post.tags || []).join(", "),
                            coverImage: post.coverImage,
                            readTime: post.readTime || "5 min read",
                            featured: !!post.featured,
                            isPublished: post.isPublished !== false,
                            seoKeywords: (post.seoKeywords || []).join(", "),
                          });
                          setShowBlogModal(true);
                        }}
                        className="gap-1"
                      >
                        <Edit className="w-3.5 h-3.5" /> Edit
                      </Button>
                      {post._id && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteBlog(post._id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* JOB MODAL */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{editingJob ? "Edit Job Opening" : "Create New Job Opening"}</CardTitle>
                <CardDescription>Configure role details, requirements &amp; perks</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowJobModal(false)}>
                ✕
              </Button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveJob} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      value={jobForm.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setJobForm((p) => ({
                          ...p,
                          title: val,
                          slug: editingJob
                            ? p.slug
                            : val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
                        }));
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      value={jobForm.slug}
                      onChange={(e) => setJobForm((p) => ({ ...p, slug: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label>Department</Label>
                    <Input
                      value={jobForm.department}
                      onChange={(e) => setJobForm((p) => ({ ...p, department: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Location</Label>
                    <Input
                      value={jobForm.location}
                      onChange={(e) => setJobForm((p) => ({ ...p, location: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Type</Label>
                    <Input
                      value={jobForm.type}
                      onChange={(e) => setJobForm((p) => ({ ...p, type: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label>Experience</Label>
                    <Input
                      value={jobForm.experience}
                      onChange={(e) => setJobForm((p) => ({ ...p, experience: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Salary Range</Label>
                    <Input
                      value={jobForm.salary}
                      onChange={(e) => setJobForm((p) => ({ ...p, salary: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label>Short Overview / Description *</Label>
                  <Textarea
                    rows={3}
                    value={jobForm.description}
                    onChange={(e) => setJobForm((p) => ({ ...p, description: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label>Responsibilities (1 per line)</Label>
                  <Textarea
                    rows={4}
                    placeholder="Architect scalable microservices&#10;Conduct code reviews"
                    value={jobForm.responsibilities}
                    onChange={(e) => setJobForm((p) => ({ ...p, responsibilities: e.target.value }))}
                  />
                </div>

                <div className="space-y-1">
                  <Label>Requirements (1 per line)</Label>
                  <Textarea
                    rows={4}
                    placeholder="3+ years React experience&#10;Proficiency in TypeScript"
                    value={jobForm.requirements}
                    onChange={(e) => setJobForm((p) => ({ ...p, requirements: e.target.value }))}
                  />
                </div>

                <div className="space-y-1">
                  <Label>Benefits &amp; Perks (1 per line)</Label>
                  <Textarea
                    rows={3}
                    placeholder="Health insurance coverage&#10;Learning budget"
                    value={jobForm.benefits}
                    onChange={(e) => setJobForm((p) => ({ ...p, benefits: e.target.value }))}
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={jobForm.isActive}
                    onChange={(e) => setJobForm((p) => ({ ...p, isActive: e.target.checked }))}
                    className="w-4 h-4 rounded"
                  />
                  <Label htmlFor="isActive" className="cursor-pointer">
                    Job is Active &amp; Accepting Applications
                  </Label>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setShowJobModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Job Opening</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* BLOG MODAL */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{editingBlog ? "Edit Article" : "Write New Article"}</CardTitle>
                <CardDescription>Publish SEO-optimized guides &amp; tech insights</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowBlogModal(false)}>
                ✕
              </Button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveBlog} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="blog-title">Article Title *</Label>
                    <Input
                      id="blog-title"
                      value={blogForm.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setBlogForm((p) => ({
                          ...p,
                          title: val,
                          slug: editingBlog
                            ? p.slug
                            : val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
                        }));
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="blog-slug">URL Slug *</Label>
                    <Input
                      id="blog-slug"
                      value={blogForm.slug}
                      onChange={(e) => setBlogForm((p) => ({ ...p, slug: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label>Category</Label>
                    <Select
                      value={blogForm.category}
                      onValueChange={(val: any) => setBlogForm((p) => ({ ...p, category: val }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Products & ERP">Products &amp; ERP</SelectItem>
                        <SelectItem value="AI & Emerging Tech">AI &amp; Emerging Tech</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label>Read Time</Label>
                    <Input
                      value={blogForm.readTime}
                      onChange={(e) => setBlogForm((p) => ({ ...p, readTime: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Cover Image URL</Label>
                    <Input
                      value={blogForm.coverImage}
                      onChange={(e) => setBlogForm((p) => ({ ...p, coverImage: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label>Short SEO Description *</Label>
                  <Textarea
                    rows={2}
                    value={blogForm.description}
                    onChange={(e) => setBlogForm((p) => ({ ...p, description: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label>Article Content (Markdown supported) *</Label>
                  <Textarea
                    rows={12}
                    className="font-mono text-sm leading-relaxed"
                    placeholder="## Introduction&#10;&#10;Write article paragraphs here with headings and code blocks..."
                    value={blogForm.content}
                    onChange={(e) => setBlogForm((p) => ({ ...p, content: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label>Tags (comma separated)</Label>
                    <Input
                      placeholder="School ERP, EdTech, SaaS"
                      value={blogForm.tags}
                      onChange={(e) => setBlogForm((p) => ({ ...p, tags: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>SEO Keywords (comma separated)</Label>
                    <Input
                      placeholder="school erp software, automated fees"
                      value={blogForm.seoKeywords}
                      onChange={(e) => setBlogForm((p) => ({ ...p, seoKeywords: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPublished"
                      checked={blogForm.isPublished}
                      onChange={(e) => setBlogForm((p) => ({ ...p, isPublished: e.target.checked }))}
                      className="w-4 h-4 rounded"
                    />
                    <Label htmlFor="isPublished" className="cursor-pointer">
                      Published Live
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={blogForm.featured}
                      onChange={(e) => setBlogForm((p) => ({ ...p, featured: e.target.checked }))}
                      className="w-4 h-4 rounded"
                    />
                    <Label htmlFor="featured" className="cursor-pointer">
                      Feature on Blog Hero
                    </Label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setShowBlogModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Article</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
