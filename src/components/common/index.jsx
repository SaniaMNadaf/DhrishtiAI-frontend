import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { mockAuth } from "@/utils/auth";

export function Navbar({ onToggleSidebar, isSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminSection = location.pathname.startsWith("/admin");
  const [user, setUser] = useState(() => mockAuth.getUser());
  const [isAuthenticated, setIsAuthenticated] = useState(() => mockAuth.isAuthenticated());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(mockAuth.getUser());
      setIsAuthenticated(mockAuth.isAuthenticated());
    };
    window.addEventListener("auth_change", handleAuthChange);
    return () => window.removeEventListener("auth_change", handleAuthChange);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setDropdownOpen(false);
    mockAuth.logout();
    navigate("/login");
  };

  const handleDropdownItemClick = (action) => {
    setDropdownOpen(false);
    if (typeof action === "function") {
      action();
    } else if (typeof action === "string") {
      navigate(action);
    }
  };

  const role = (user?.role || "operator").toLowerCase();

  // Role-specific profile dropdown items
  const getRoleDropdownItems = () => {
    switch (role) {
      case "clinician":
        return [
          { label: "Assigned Reviews", route: "/cases", icon: "clipboard-check" },
          { label: "Accreditation & NPI", route: "#", badge: "Verified", icon: "badge" },
        ];
      case "planner":
        return [
          { label: "Active Simulation Presets", route: "/simulation", icon: "adjustments" },
          { label: "Export Fleet Report", route: "/summary", icon: "download" },
        ];
      case "admin":
        return [
          { label: "Security Status & HSM Key", route: "/admin/users", badge: "Active", icon: "key" },
          { label: "System Audit Shortcut", route: "/admin/audit", icon: "shield" },
        ];
      case "operator":
      default:
        return [
          { label: "My Cases", route: "/cases", icon: "folder" },
          { label: "Station Status", route: "#", badge: "Online", icon: "desktop" },
        ];
    }
  };

  const dropdownItems = getRoleDropdownItems();

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-4 sm:px-6">
      {/* Brand logo, Hamburger Toggle & breadcrumb info */}
      <div className="flex items-center gap-3">
        {/* Three lines (Hamburger) Navigation Toggle */}
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
          title="Toggle Navigation"
          className="p-1.5 -ml-1 text-[#475569] hover:text-[#0b1c30] hover:bg-[#f1f5f9] rounded-lg transition duration-150 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          {/* Rounded Teal Logo with Distinct White Eye Symbol */}
          <div className="w-8 h-8 rounded-lg bg-[#005c55] text-white flex items-center justify-center shadow-xs">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Eye contour */}
              <path
                d="M1 12C3.5 6.5 7.5 4 12 4C16.5 4 20.5 6.5 23 12C20.5 17.5 16.5 20 12 20C7.5 20 3.5 17.5 1 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner Iris */}
              <circle
                cx="12"
                cy="12"
                r="4.5"
                stroke="white"
                strokeWidth="2"
              />
              {/* Center Pupil */}
              <circle
                cx="12"
                cy="12"
                r="2"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[15px] font-bold text-[#0b1c30] tracking-tight">DhristiAI</span>
            <span className="text-[11px] text-[#64748b] hidden sm:inline">Tomorrow&apos;s Vision Starts Today</span>
            {!isAdminSection && (
              <>
                <span className="text-[#cbd5e1] hidden md:inline">/</span>
                <span className="text-[#475569] font-medium capitalize hidden md:inline">
                  {user?.role === "planner" ? "Operations Console" : "Operator Console"}
                </span>
              </>
            )}
          </div>
        </Link>

        {!isAdminSection && (
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0f9f8] border border-[#d1ebe7] text-[#0f766e] text-[11px] font-semibold">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Validated Ingestion Gateway</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {!isAdminSection && (
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f8fafc] border border-[#e2e8f0] text-[11px] text-[#475569] font-medium">
            <svg className="w-3.5 h-3.5 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Telemetry: Synced</span>
          </div>
        )}

        {/* User Profile Trigger & Dropdown Menu */}
        <div className="relative pl-2 border-l border-[#e2e8f0]" ref={dropdownRef}>
          <div className="flex items-center gap-2">
            <div
              onClick={() => isAuthenticated && setDropdownOpen(!dropdownOpen)}
              className="flex flex-col text-right cursor-pointer select-none"
            >
              <span className="text-xs font-bold text-[#0b1c30] leading-none hover:text-[#0f766e] transition">
                {user?.name || "Clinical Operator"}
              </span>
              <span className="text-[10px] text-[#64748b] leading-tight mt-0.5">
                {user?.title || "Imaging Technician"}
              </span>
            </div>

            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="w-8 h-8 rounded-full bg-[#084c47] hover:bg-[#063b37] text-white flex items-center justify-center font-bold text-xs ring-2 ring-transparent hover:ring-[#0f766e]/40 transition cursor-pointer relative"
              >
                <span className="font-bold text-xs text-white">{user?.initials || "SJ"}</span>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-white" />
              </button>
            ) : (
              <Link
                to="/login"
                className="w-8 h-8 rounded-full bg-[#084c47] text-white flex items-center justify-center font-bold text-xs hover:ring-2 hover:ring-[#0f766e] transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </Link>
            )}
          </div>

          {/* Role-Specific Dropdown Menu */}
          {isAuthenticated && dropdownOpen && (
            <div className="absolute right-0 mt-2.5 w-60 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[#e2e8f0] py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              {/* Header inside dropdown */}
              <div className="px-3.5 py-2.5 border-b border-[#f1f5f9] bg-[#f8fafc]/70 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">
                    Active Role
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase bg-[#e6f4f2] text-[#0f766e] border border-[#bbf0e8]">
                    {role}
                  </span>
                </div>
                <div className="mt-1 font-semibold text-xs text-[#0f172a] truncate">{user?.name}</div>
                <div className="text-[11px] text-[#64748b] truncate">{user?.email}</div>
              </div>

              {/* Dynamic Role Items */}
              <div className="py-1">
                {dropdownItems.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleDropdownItemClick(item.route)}
                    className="w-full text-left px-3.5 py-2 text-xs text-[#334155] hover:bg-[#f1f5f9] hover:text-[#0f172a] flex items-center justify-between transition cursor-pointer"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#0f766e] border border-[#cbd5e1]/60">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Log Out Action */}
              <div className="border-t border-[#f1f5f9] pt-1 mt-1">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 hover:text-rose-700 flex items-center gap-2 transition cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function Sidebar({ isOpen = true, onClose }) {
  const location = useLocation();
  const [user, setUser] = useState(() => mockAuth.getUser());

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(mockAuth.getUser());
    };
    window.addEventListener("auth_change", handleAuthChange);
    return () => window.removeEventListener("auth_change", handleAuthChange);
  }, []);

  const currentRole = (user?.role || "operator").toLowerCase();

  // Role-specific navigation groups per requirements:
  // Operator / Clinician Navigation: Only show Upload, My Cases, and Evaluation. Hide Admin and Planner.
  const operatorLinks = [
    { href: "/upload", label: "Upload", active: location.pathname === "/upload" || location.pathname === "/" },
    { href: "/cases", label: "My cases", active: location.pathname === "/cases" },
    { href: "/evaluation", label: "Evaluation", active: location.pathname === "/evaluation" || location.pathname.startsWith("/cases/") }
  ];

  // Planner Navigation: Only show Summary and Simulation.
  const plannerLinks = [
    { href: "/summary", label: "Summary", active: location.pathname === "/summary" },
    { href: "/simulation", label: "Simulation", active: location.pathname === "/simulation" }
  ];

  // Admin Navigation: Only show User Accounts, Audit Log, and Model Versions.
  const adminLinks = [
    { href: "/admin/users", label: "User Accounts", active: location.pathname === "/admin/users" },
    { href: "/admin/audit", label: "Audit Log", active: location.pathname === "/admin/audit" },
    { href: "/admin/models", label: "Model Versions", active: location.pathname === "/admin/models" }
  ];

  if (!isOpen) return null;

  return (
    <aside className="w-56 bg-[#f8fafc] border-r border-[#e2e8f0] flex flex-col justify-between py-5 px-3 shrink-0 select-none min-h-[calc(100vh-3.5rem)] transition-all duration-200">
      <div className="flex flex-col gap-4">
        {/* Operator / Clinician View */}
        {(currentRole === "operator" || currentRole === "clinician") && (
          <div className="flex flex-col gap-1">
            <span className="px-3 pb-1 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">
              {currentRole === "clinician" ? "Clinician Navigation" : "Operator Navigation"}
            </span>
            <nav className="flex flex-col gap-1">
              {operatorLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                    link.active
                      ? "bg-[#0f766e] text-white shadow-xs"
                      : "text-[#475569] hover:bg-[#edf2f7] hover:text-[#0b1c30]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Planner View */}
        {currentRole === "planner" && (
          <div className="flex flex-col gap-1">
            <span className="px-3 pb-1 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">
              Planner Navigation
            </span>
            <nav className="flex flex-col gap-1">
              {plannerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                    link.active
                      ? "bg-[#0f766e] text-white shadow-xs"
                      : "text-[#475569] hover:bg-[#edf2f7] hover:text-[#0b1c30]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Admin View */}
        {currentRole === "admin" && (
          <div className="flex flex-col gap-1">
            <span className="px-3 pb-1 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">
              Admin Navigation
            </span>
            <nav className="flex flex-col gap-1">
              {adminLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                    link.active
                      ? "bg-[#0f766e] text-white shadow-xs"
                      : "text-[#475569] hover:bg-[#edf2f7] hover:text-[#0b1c30]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-4 border-t border-[#e2e8f0]">
        <div className="p-2.5 rounded-lg bg-[#f0f4f9] border border-[#e2e8f0]">
          <div className="flex items-center justify-between text-[11px] font-bold text-[#0b1c30]">
            <span>Active Registry</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-[10px] text-[#64748b] mt-0.5 font-medium">
            Clinic 4A • Inpatient Eye Care
          </div>
        </div>
      </div>
    </aside>
  );
}

export function LimitsNoticeBanner({ codeBadge = "" } = {}) {
  return (
    <div className="w-full bg-[#eff6ff] border-b border-[#dbeafe] text-[#1e40af] px-4 py-1.5 text-xs flex items-center justify-between">
      <div className="flex items-center gap-2 mx-auto">
        <svg className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span className="font-medium text-[11px]">
          Prototype for decision support only. Results are not a diagnosis. A clinician makes every decision.
        </span>
      </div>
      {codeBadge && (
        <span className="text-[10px] font-mono font-bold bg-[#dbeafe] text-[#1e40af] px-2 py-0.5 rounded border border-[#bfdbfe]">
          {codeBadge}
        </span>
      )}
    </div>
  );
}

export function Badges({ status, quality, grade } = {}) {
  if (status) {
    const statusStyles = {
      Confirmed: "bg-emerald-50 text-emerald-700 border-emerald-200",
      "Pending Review": "bg-blue-50 text-blue-700 border-blue-200",
      Overridden: "bg-purple-50 text-purple-700 border-purple-200",
      "Flagged For Recapture": "bg-rose-50 text-rose-700 border-rose-200",
      "Referred to Specialist": "bg-amber-50 text-amber-700 border-amber-200"
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusStyles[status] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
        {status}
      </span>
    );
  }

  if (quality) {
    const qualityStyles = {
      Optimal: "bg-emerald-50 text-emerald-700 border-emerald-200",
      Suboptimal: "bg-amber-50 text-amber-700 border-amber-200",
      "Artifacts Detected": "bg-rose-50 text-rose-700 border-rose-200"
    };
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border ${qualityStyles[quality] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        {quality}
      </span>
    );
  }

  if (grade) {
    return (
      <span className="font-semibold text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
        {grade}
      </span>
    );
  }

  return null;
}
