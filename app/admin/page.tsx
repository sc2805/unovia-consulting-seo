"use client";

// =============================================================================
// Admin Dashboard — Premium Content & SEO Automation Control Center
// =============================================================================

import { useState, useEffect } from "react";
import { 
  Database as DbIcon, 
  Settings, 
  RefreshCw, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Edit3, 
  Trash2, 
  Eye, 
  Globe, 
  Search,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { Database, BlogPost } from "@/lib/db";

export default function AdminDashboard() {
  const [db, setDb] = useState<Database | null>(null);
  const [loading, setLoading] = useState(true);
  const [runningResearch, setRunningResearch] = useState(false);
  const [activeTab, setActiveTab] = useState<"articles" | "research" | "gaps">("articles");
  const [editingArticle, setEditingArticle] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    fetchDatabase();
  }, []);

  const fetchDatabase = async () => {
    try {
      const res = await fetch("/api/admin/database");
      if (res.status === 401) {
        setIsLoggedIn(false);
        return;
      }
      const data = await res.json();
      if (res.ok) {
        setDb(data);
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.error("Error loading database:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleAutoPublish = async () => {
    if (!db) return;
    const newStatus = !db.settings.autoPublish;
    try {
      const res = await fetch("/api/admin/toggle-autopublish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ autoPublish: newStatus })
      });
      if (res.ok) {
        setDb({
          ...db,
          settings: { ...db.settings, autoPublish: newStatus }
        });
      }
    } catch (err) {
      console.error("Error toggling auto-publish:", err);
    }
  };

  const handleTriggerResearch = async () => {
    setRunningResearch(true);
    try {
      const res = await fetch("/api/admin/generate-post", { method: "POST" });
      const data = await res.json();
      alert(data.message || (data.error ? `Error: ${data.error}` : "Workflow run finished."));
      fetchDatabase();
    } catch (err) {
      console.error("Error running research engine:", err);
      alert("Failed to run automated research engine.");
    } finally {
      setRunningResearch(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
      });
      const data = await res.json();
      if (res.ok) {
        setIsLoggedIn(true);
        fetchDatabase();
      } else {
        setAuthError(data.error || "Invalid username or password");
      }
    } catch {
      setAuthError("Network error. Please try again.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/login", { method: "DELETE" });
      if (res.ok) {
        setIsLoggedIn(false);
        setDb(null);
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;
    try {
      const res = await fetch("/api/admin/database", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", article: editingArticle })
      });
      if (res.ok) {
        setEditingArticle(null);
        fetchDatabase();
      }
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

  const handlePublishArticle = async (article: BlogPost) => {
    try {
      const res = await fetch("/api/admin/database", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish", article })
      });
      if (res.ok) {
        fetchDatabase();
      }
    } catch (err) {
      console.error("Error publishing article:", err);
    }
  };

  const handleDeleteArticle = async (article: BlogPost) => {
    if (!confirm(`Are you sure you want to delete "${article.title}"?`)) return;
    try {
      const res = await fetch("/api/admin/database", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", article })
      });
      if (res.ok) {
        fetchDatabase();
      }
    } catch (err) {
      console.error("Error deleting article:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-navy-800">
          <RefreshCw className="w-6 h-6 animate-spin text-gold-600" />
          <span className="font-semibold">Loading Admin Database...</span>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-gray-50/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl w-full max-w-md shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy-800">Admin Console Sign In</h2>
            <p className="text-sm text-gray-500 mt-2">Manage Unovia&apos;s SEO and daily blog automation</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 text-sm text-gray-700">
            {authError && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl font-medium">
                {authError}
              </div>
            )}

            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">User ID</label>
              <input
                type="text"
                placeholder="connect@unovia.in"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-300"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full py-3 bg-navy-800 text-white font-semibold rounded-xl hover:bg-navy-700 disabled:bg-navy-300 transition-colors mt-2"
            >
              {loggingIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  const articles = db?.articles || [];
  const logs = db?.researchLogs || [];

  const pendingDrafts = articles.filter(a => a.status !== "PUBLISHED");
  const publishedArticles = articles.filter(a => a.status === "PUBLISHED");

  const filteredArticles = articles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-gold-600 mb-2">
              <DbIcon className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Unovia.in SEO Console</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">Content Administration Dashboard</h1>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handleToggleAutoPublish}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                db?.settings.autoPublish 
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100" 
                  : "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
              }`}
            >
              <Settings className="w-4 h-4" />
              Auto-Publish: {db?.settings.autoPublish ? "ENABLED" : "DISABLED"}
            </button>
            
            <button
              onClick={handleTriggerResearch}
              disabled={runningResearch}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy-800 text-white hover:bg-navy-700 disabled:bg-navy-300 text-sm font-semibold rounded-xl transition-all duration-300 shadow-md shadow-navy-800/10 hover:shadow-lg"
            >
              <RefreshCw className={`w-4 h-4 ${runningResearch ? "animate-spin" : ""}`} />
              {runningResearch ? "Running..." : "Daily Research Sweep"}
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold rounded-xl transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Articles</p>
            <p className="text-3xl font-black text-navy-800">{articles.length}</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <Globe className="w-3.5 h-3.5 text-navy-600" />
              <span>{publishedArticles.length} active in public sitemap</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pending Review</p>
            <p className="text-3xl font-black text-navy-800">{pendingDrafts.length}</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <FileText className="w-3.5 h-3.5 text-gold-600" />
              <span>Drafts created by auto-generator</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Daily News Sweeps</p>
            <p className="text-3xl font-black text-navy-800">{logs.length}</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Checked ET, CBDT, and CBIC feeds</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Content Clusters</p>
            <p className="text-3xl font-black text-navy-800">5</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <TrendingUp className="w-3.5 h-3.5 text-navy-600" />
              <span>Taxation, GST, Startups, Wealth, Business</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("articles")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "articles" ? "bg-white text-navy-800 shadow-sm" : "text-gray-500 hover:text-navy-800"
              }`}
            >
              All Articles & Queue
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "research" ? "bg-white text-navy-800 shadow-sm" : "text-gray-500 hover:text-navy-800"
              }`}
            >
              Daily Research Logs
            </button>
            <button
              onClick={() => setActiveTab("gaps")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "gaps" ? "bg-white text-navy-800 shadow-sm" : "text-gray-500 hover:text-navy-800"
              }`}
            >
              SEO Content Gaps
            </button>
          </div>

          {activeTab === "articles" && (
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles/categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-300"
              />
            </div>
          )}
        </div>

        {/* TAB 1: ARTICLES MANAGEMENT */}
        {activeTab === "articles" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/75 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Pillar</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {filteredArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-navy-800 line-clamp-1">{article.title}</div>
                        <div className="text-xs text-gray-400 font-medium">Keyword: {article.primaryKeyword}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-medium">{article.category}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 bg-navy-50 text-navy-800 text-[10px] font-bold uppercase rounded">
                          {article.pillar}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border ${
                          article.status === "PUBLISHED" 
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
                            : article.status === "DRAFT"
                            ? "bg-amber-50 border-amber-200 text-amber-700"
                            : "bg-gray-100 border-gray-200 text-gray-600"
                        }`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 font-medium">{article.publicationDate}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditingArticle(article)}
                            className="p-1.5 text-gray-500 hover:text-navy-800 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit Article"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          {article.status !== "PUBLISHED" && (
                            <button
                              onClick={() => handlePublishArticle(article)}
                              className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                              title="Approve & Publish"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteArticle(article)}
                            className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Delete Article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <Link
                            href={article.status === "PUBLISHED" ? article.url : `/insights`}
                            className="p-1.5 text-navy-600 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors"
                            title="View Public Page"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredArticles.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                        No articles matched the filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: RESEARCH LOGS */}
        {activeTab === "research" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/75 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <th className="px-6 py-4">Discovery Date</th>
                    <th className="px-6 py-4">Source feed</th>
                    <th className="px-6 py-4">Headline / Item</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Verification notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-500 font-medium">
                        {new Date(log.date).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </td>
                      <td className="px-6 py-4 font-bold text-navy-800">{log.source}</td>
                      <td className="px-6 py-4">
                        <a 
                          href={log.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:underline text-navy-800 line-clamp-1"
                        >
                          {log.title}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded border border-emerald-100">
                          {log.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-xs">{log.notes}</td>
                    </tr>
                  ))}
                  {logs.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                        No daily research scans completed yet. Click &quot;Trigger Daily Research&quot; above.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: SEO CONTENT GAPS */}
        {activeTab === "gaps" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-gold-500" />
                Missing SEO Keywords & Gaps
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                The content engine identified the following missing pillars. These will be automatically prioritized in the upcoming daily research sweeps.
              </p>
              
              <div className="space-y-3.5">
                {[
                  { keyword: "gst-input-tax-credit-rule-37a", status: "Priority 1", category: "GST Advisory" },
                  { keyword: "capital-gains-tax-property-exemptions", status: "Priority 1", category: "Tax Planning" },
                  { keyword: "virtual-cfo-services-kolkata-sme", status: "Priority 2", category: "Business Strategy" },
                  { keyword: "nri-taxation-repatriation-guide", status: "Covered", category: "Tax Planning" },
                  { keyword: "input-tax-credit-optimization", status: "Covered", category: "GST Advisory" },
                ].map((gap, i) => (
                  <div key={i} className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-bold text-sm text-navy-800">{gap.keyword}</p>
                      <p className="text-xs text-gray-400">{gap.category}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      gap.status === "Covered" 
                        ? "bg-emerald-50 text-emerald-700" 
                        : "bg-amber-50 text-amber-700"
                    }`}>
                      {gap.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-navy-600" />
                SEO Content Strategy Rules
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                <li><strong>No AI Spam:</strong> Articles must contain genuine examples, tax rule sections, and verified circulars.</li>
                <li><strong>Strict Exemption Checking:</strong> Do not auto-generate fictional exemptions or rates. Always reference standard Ministry codes.</li>
                <li><strong>Contextual Internal Linking:</strong> Generated drafts automatically index key phrases to their corresponding Service pages in Unovia.</li>
                <li><strong>Kolkata Local Focus:</strong> Prioritize localized financial search intent (e.g. &quot;Virtual CFO Kolkata&quot;, &quot;CA in Kolkata&quot;).</li>
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* EDIT ARTICLE MODAL */}
      {editingArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl border border-gray-100 overflow-hidden max-h-[85vh] flex flex-col">
            
            <div className="bg-navy-800 text-white p-6 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">{editingArticle.category} Pillar</span>
                <h3 className="text-xl font-bold">Edit Article Draft</h3>
              </div>
              <button 
                onClick={() => setEditingArticle(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="p-6 space-y-5 overflow-y-auto flex-1 text-sm text-gray-700">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-bold mb-1">Title</label>
                  <input
                    type="text"
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Category</label>
                  <select
                    value={editingArticle.category}
                    onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300"
                  >
                    <option value="Tax Planning">Tax Planning</option>
                    <option value="GST Advisory">GST Advisory</option>
                    <option value="Investment & Wealth">Investment & Wealth</option>
                    <option value="Business Strategy">Business Strategy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Excerpt (Meta Description)</label>
                <textarea
                  value={editingArticle.excerpt}
                  onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300 h-16"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block font-bold mb-1">Primary Keyword</label>
                  <input
                    type="text"
                    value={editingArticle.primaryKeyword}
                    onChange={(e) => setEditingArticle({ ...editingArticle, primaryKeyword: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Search Intent</label>
                  <input
                    type="text"
                    value={editingArticle.searchIntent}
                    onChange={(e) => setEditingArticle({ ...editingArticle, searchIntent: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Article Status</label>
                  <select
                    value={editingArticle.status}
                    onChange={(e) => setEditingArticle({ ...editingArticle, status: e.target.value as BlogPost["status"] })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300"
                  >
                    <option value="DRAFT">DRAFT</option>
                    <option value="FACT CHECK">FACT CHECK</option>
                    <option value="READY">READY</option>
                    <option value="PUBLISHED">PUBLISHED</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Article Content (Markdown Body)</label>
                <textarea
                  value={editingArticle.content}
                  onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-navy-300 h-64 font-mono text-xs leading-relaxed"
                  required
                />
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingArticle(null)}
                  className="px-4 py-2 border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-navy-800 text-white rounded-xl hover:bg-navy-700 transition-colors"
                >
                  Save Draft
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </main>
  );
}
