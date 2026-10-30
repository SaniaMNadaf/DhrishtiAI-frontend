import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockAuth, PRESET_ROLES } from "@/utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("operator");
  const [email, setEmail] = useState("s.jenkins@clinic.system");
  const [password, setPassword] = useState("••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (roleKey) => {
    setSelectedRole(roleKey);
    const preset = PRESET_ROLES[roleKey];
    if (preset) {
      setEmail(preset.email);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const preset = PRESET_ROLES[selectedRole] || PRESET_ROLES.operator;
      mockAuth.login({
        ...preset,
        email: email || preset.email,
        role: selectedRole
      });
      navigate(preset.defaultRoute || "/upload");
    }, 450);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] flex flex-col justify-center items-center px-4 py-8 relative">
      <div className="absolute inset-0 bg-radial from-white/90 via-[#f3f7fc] to-[#eaf0f8] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[440px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#e8edf5] px-7 py-8">
        {/* Brand Icon */}
        <div className="flex justify-center mb-4">
          <div className="relative w-20 h-20 rounded-full bg-[#f0f9f8] border border-[#d1ebe7] flex items-center justify-center p-2 shadow-xs">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#0f766e]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="44" stroke="#a7d9d3" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M32 25 H25 V32 M68 25 H75 V32 M25 68 V75 H32 M75 68 V75 H68" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="50" x2="22" y2="50" stroke="#99f6e4" strokeWidth="1.5" />
              <line x1="78" y1="50" x2="88" y2="50" stroke="#99f6e4" strokeWidth="1.5" />
              <path d="M20 50 C30 35, 70 35, 80 50 C70 65, 30 65, 20 50 Z" stroke="#0f766e" strokeWidth="2" fill="#ffffff" />
              <circle cx="50" cy="50" r="14" fill="#0f766e" />
              <circle cx="50" cy="50" r="10" fill="#044e47" />
              <circle cx="50" cy="50" r="5" fill="#022c27" />
              <circle cx="48" cy="48" r="2" fill="#ffffff" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-5">
          <h1 className="text-xl font-bold text-[#0c2340] tracking-tight">Clinical Sign In</h1>
          <p className="text-xs text-[#6b7c93] mt-1 font-medium">Medical Decision Support System</p>
        </div>

        {/* Role Selector Tabs / Buttons */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs mb-1.5">
            <label className="font-semibold text-[#334155]">Select Operating Role</label>
            <span className="text-[#94a3b8] text-[11px]">RBAC Access</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#f1f5f9] rounded-lg border border-[#e2e8f0]">
            {[
              { id: "operator", label: "Operator" },
              { id: "clinician", label: "Clinician" },
              { id: "planner", label: "Planner" },
              { id: "admin", label: "Admin" }
            ].map((role) => (
              <button
                type="button"
                key={role.id}
                onClick={() => handleRoleChange(role.id)}
                className={`py-1.5 text-[11px] font-semibold rounded-md transition duration-150 ${
                  selectedRole === role.id
                    ? "bg-[#0f766e] text-white shadow-xs"
                    : "text-[#64748b] hover:text-[#0f172a] hover:bg-white/60"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-[#334155]">Clinical Email or ID</label>
              <span className="text-[#94a3b8] text-[11px] font-medium">NPI / Org Auth</span>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-[#94a3b8] flex items-center pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@clinic.system"
                required
                className="w-full pl-9 pr-3 py-2 text-xs text-[#0f172a] placeholder-[#94a3b8] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]/20 focus:border-[#0f766e] transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-[#334155]">Password</label>
              <a href="#" className="text-[#0f766e] hover:underline text-[11px] font-semibold">
                Forgot credentials?
              </a>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-[#94a3b8] flex items-center pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-9 pr-9 py-2 text-xs text-[#0f172a] placeholder-[#94a3b8] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]/20 focus:border-[#0f766e] transition"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-[#94a3b8] hover:text-[#475569] transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            <input id="remember" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4 rounded text-[#0f766e] accent-[#0f766e] border-[#cbd5e1] focus:ring-[#0f766e] cursor-pointer" />
            <label htmlFor="remember" className="text-xs font-medium text-[#475569] cursor-pointer select-none">
              Remember clinical workstation
            </label>
          </div>

          <button type="submit" disabled={loading} className="w-full mt-2 py-2.5 px-4 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition duration-150 disabled:opacity-60 cursor-pointer">
            <span>{loading ? "Authorizing Session..." : `Authorize Session as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>

          <button type="button" className="w-full py-2 px-4 bg-[#eff5fb] hover:bg-[#e4eff8] text-[#334155] border border-[#d8e3ed] rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition duration-150 cursor-pointer">
            <svg className="w-4 h-4 text-[#64748b]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 00-.707.293L4.586 7A1 1 0 004 7.707V13a6 6 0 006 6 6 6 0 006-6V7.707a1 1 0 00-.586-.707l-4.707-4.707A1 1 0 0010 2zm0 2.414l3.293 3.293A1 1 0 0113.707 8H6.293a1 1 0 01.414-.293L10 4.414zM6 9.5h8v3.5a4 4 0 11-8 0V9.5z" clipRule="evenodd" />
            </svg>
            <span>Use Clinical Smart Badge or FIDO2</span>
          </button>
        </form>
      </div>

      <div className="relative z-10 max-w-[420px] text-center mt-6 flex flex-col items-center gap-1.5 text-[11px] text-[#64748b]">
        <div className="flex items-center gap-1.5 font-semibold text-[#334155]">
          <svg className="w-3.5 h-3.5 text-[#0f766e]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>HIPAA Compliant & 256-Bit TLS Encrypted</span>
        </div>
        <p className="leading-relaxed text-[#7c8ba1] text-[10px]">
          Authorized use only. All diagnostic interactions and patient data queries are audited under FHIR standard protocols.
        </p>
      </div>
    </div>
  );
}
