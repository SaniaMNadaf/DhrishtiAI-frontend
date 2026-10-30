// WARNING: mock/demo-only authentication. Roles are stored in plain
// localStorage and are NOT security-enforced. Never use for production
// authorization; role checks must be enforced server-side.
const STORAGE_KEY = "dhristi_auth_user";

export const PRESET_ROLES = {
  operator: {
    role: "operator",
    name: "Sarah Jenkins",
    email: "s.jenkins@clinic.system",
    title: "Clinical Imaging Tech",
    initials: "SJ",
    defaultRoute: "/upload",
    allowedRoutes: ["/upload", "/", "/cases", "/cases/:id", "/evaluation"]
  },
  clinician: {
    role: "clinician",
    name: "Dr. Evelyn Chen",
    email: "dr.chen@clinic.system",
    title: "Attending Ophthalmologist",
    initials: "EC",
    defaultRoute: "/cases",
    allowedRoutes: ["/upload", "/", "/cases", "/cases/:id", "/evaluation"]
  },
  planner: {
    role: "planner",
    name: "Marcus Rivera",
    email: "m.rivera@clinic.system",
    title: "Healthcare Operations Planner",
    initials: "MR",
    defaultRoute: "/summary",
    allowedRoutes: ["/summary", "/simulation"]
  },
  admin: {
    role: "admin",
    name: "Dr. Alistair Vance",
    email: "dr.vance@clinic.system",
    title: "System Administrator",
    initials: "AV",
    defaultRoute: "/admin/users",
    allowedRoutes: ["/admin/users", "/admin/audit", "/admin/models"]
  }
};

export const mockAuth = {
  isAuthenticated() {
    return !!localStorage.getItem(STORAGE_KEY);
  },

  getUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : PRESET_ROLES.operator;
    } catch {
      return PRESET_ROLES.operator;
    }
  },

  login(user) {
    const roleKey = (user?.role || "operator").toLowerCase();
    const preset = PRESET_ROLES[roleKey] || PRESET_ROLES.operator;
    const fullUser = {
      ...preset,
      ...user,
      role: roleKey
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullUser));
    window.dispatchEvent(new Event("auth_change"));
    return fullUser;
  },

  logout() {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("auth_change"));
  },

  getDefaultRoute(role) {
    const roleKey = (role || "").toLowerCase();
    return PRESET_ROLES[roleKey]?.defaultRoute || "/upload";
  },

  isRouteAllowed(role, pathname) {
    const roleKey = (role || "operator").toLowerCase();
    const config = PRESET_ROLES[roleKey];
    if (!config) return false;

    // Check direct match or dynamic cases route
    return config.allowedRoutes.some((pattern) => {
      if (pattern === pathname) return true;
      if (pattern === "/" && pathname === "/upload") return true;
      if (pattern === "/cases/:id" && pathname.startsWith("/cases/") && pathname !== "/cases") return true;
      return false;
    });
  }
};

export const hasRole = (user, allowedRoles) => {
  if (!user) return false;
  const currentRole = String(user.role || "").toLowerCase();
  if (Array.isArray(allowedRoles)) {
    return allowedRoles.map(r => r.toLowerCase()).includes(currentRole);
  }
  return currentRole === String(allowedRoles || "").toLowerCase();
};
