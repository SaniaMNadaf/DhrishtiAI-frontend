import React, { useState } from "react";


const usersList = [
  {
    id: "U-1",
    initials: "AV",
    name: "Dr. Alistair Vance",
    title: "Attending Ophthalmologist",
    npi: "NPI 194200881",
    email: "dr.vance@dhristi.ai",
    role: "Clinician (MD)",
    lastActive: "Just now",
    status: "Active"
  },
  {
    id: "U-2",
    initials: "ER",
    name: "Elena Rostova",
    title: "Lead Clinical Operator • Triage Diagnostic",
    email: "e.rostova@dhristi.ai",
    role: "Operator",
    lastActive: "14 mins ago",
    status: "Active"
  },
  {
    id: "U-3",
    initials: "MC",
    name: "Dr. Maya Chen",
    title: "Ophthalmic Specialist • Retinal Biomarker Division",
    email: "m.chen@dhristi.ai",
    role: "Clinician (MD)",
    lastActive: "1 hr ago",
    status: "Active"
  },
  {
    id: "U-4",
    initials: "MT",
    name: "Marcus Thorne",
    title: "Healthcare Operations Director • Clinical Workflow",
    email: "m.thorne@dhristi.ai",
    role: "Planner",
    lastActive: "3 hrs ago",
    status: "Active"
  },
  {
    id: "U-5",
    initials: "SJ",
    name: "Sarah Jenkins",
    title: "System & Security Administrator • SecOps",
    email: "s.jenkins@dhristi.ai",
    role: "Admin",
    lastActive: "5 mins ago",
    status: "Active"
  },
  {
    id: "U-6",
    initials: "DP",
    name: "Dev Patel",
    title: "Field Technician • Deployment Node 3",
    email: "d.patel@dhristi.ai",
    role: "Operator",
    lastActive: "18 days ago",
    status: "Deactivated"
  },
  {
    id: "U-7",
    initials: "RM",
    name: "Dr. Rajiv Menon",
    title: "Consulting Retinal Fellow • Tele-Ophthalmology",
    email: "r.menon@dhristi.ai",
    role: "Clinician (MD)",
    lastActive: "42 mins ago",
    status: "Active"
  }
];

export default function AdminUsers() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">User Account Management</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#eff6ff] text-[#1e40af] border border-[#dbeafe]">
                v2.4.1 Directory
              </span>
            </div>
            <p className="text-xs text-[#64748b] mt-0.5">
              Provision user roles, manage authentication credentials, and audit access permissions across clinical and operational staff.
            </p>
          </div>

          <button className="px-3.5 py-2 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Create New User</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Total Accounts</span>
              <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-[#0b1c30] mt-1">24 <span className="text-xs font-normal text-[#64748b]">provisioned</span></div>
            <div className="text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9]">
              23 verified with institutional NPI / ID
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Active Sessions</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-2xl font-bold text-[#0b1c30] mt-1">18 <span className="text-xs font-normal text-[#64748b]">online now</span></div>
            <div className="text-[10px] text-[#16a34a] font-medium mt-2 pt-2 border-t border-[#f1f5f9]">
              +12% vs yesterday
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Role Allocation</span>
              <svg className="w-4 h-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mt-1 text-xs">
              <div><strong className="text-[#0b1c30] text-sm">4</strong> <span className="text-[#64748b]">Admin</span></div>
              <div><strong className="text-[#0b1c30] text-sm">8</strong> <span className="text-[#64748b]">MD</span></div>
              <div><strong className="text-[#0b1c30] text-sm">9</strong> <span className="text-[#64748b]">Ops</span></div>
            </div>
            <div className="text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9] flex justify-between">
              <span>Planners allocated:</span>
              <strong className="text-[#0b1c30]">3 seats</strong>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">MFA Enrollment</span>
              <svg className="w-4 h-4 text-[#0f766e]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-[#0b1c30] mt-1">100% <span className="text-xs font-semibold text-[#16a34a]">Enforced</span></div>
            <div className="text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9]">
              FIPS 140-2 Level 3 Hardware Key supported
            </div>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <svg className="w-4 h-4 text-[#94a3b8] absolute left-3 top-2.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by user name, email, or NPI..."
              className="w-full pl-9 pr-3 py-1.5 text-xs text-[#0f172a] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
              <option>All Roles (Admin, Clinician, Operator, Planner)</option>
              <option>Clinician (MD)</option>
              <option>Operator</option>
              <option>Planner</option>
              <option>Admin</option>
            </select>

            <select className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
              <option>Status: All (Active, Deactivated)</option>
              <option>Active</option>
              <option>Deactivated</option>
            </select>

            <button className="px-3 py-1.5 bg-[#eff6ff] text-[#1e40af] text-xs font-semibold rounded-lg border border-[#dbeafe] flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Audit Log</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b] uppercase tracking-wider">
                  <th className="py-2.5 px-4">USER</th>
                  <th className="py-2.5 px-4">EMAIL ADDRESS</th>
                  <th className="py-2.5 px-4">ASSIGNED ROLE</th>
                  <th className="py-2.5 px-4">LAST ACTIVE / MFA</th>
                  <th className="py-2.5 px-4">ACCOUNT STATUS</th>
                  <th className="py-2.5 px-4 text-right">ADMIN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {usersList.map((u) => (
                  <tr key={u.id} className="hover:bg-[#f8fafc]/60 transition">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                          u.role === "Admin" ? "bg-[#1e40af]" :
                          u.role === "Planner" ? "bg-[#7c3aed]" :
                          u.role === "Operator" ? "bg-[#0284c7]" :
                          "bg-[#0f766e]"
                        }`}>
                          {u.initials}
                        </div>
                        <div>
                          <div className="font-bold text-[#0b1c30] text-xs">{u.name}</div>
                          <div className="text-[10px] text-[#64748b]">
                            {u.title} {u.npi && <span>• <span className="font-mono">{u.npi}</span></span>}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 font-mono text-[11px] text-[#475569]">
                      {u.email}
                    </td>

                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-semibold border ${
                        u.role === "Clinician (MD)" ? "bg-[#f0f9f8] text-[#0f766e] border-[#ccede8]" :
                        u.role === "Operator" ? "bg-[#f0f9ff] text-[#0284c7] border-[#bae6fd]" :
                        u.role === "Planner" ? "bg-[#faf5ff] text-[#7c3aed] border-[#e9d5ff]" :
                        "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                      }`}>
                        {u.role}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-[11px] text-[#64748b]">
                      <div className="flex items-center gap-1.5">
                        <span>{u.lastActive}</span>
                        <svg className="w-3.5 h-3.5 text-[#16a34a]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      {u.status === "Active" ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#166534]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94a3b8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          Deactivated
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button className="text-[11px] text-[#0f766e] font-semibold hover:underline">
                        Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b]">
            <span>Showing 1 to 7 of 24 clinical accounts</span>

            <div className="flex items-center gap-1">
              <button className="px-2 py-1 rounded border border-[#e2e8f0] bg-white text-[#94a3b8] cursor-not-allowed">
                &lsaquo;
              </button>
              <span className="text-xs font-semibold px-2">Page 1 of 4</span>
              <button className="px-2 py-1 rounded border border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f1f5f9]">
                &rsaquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
