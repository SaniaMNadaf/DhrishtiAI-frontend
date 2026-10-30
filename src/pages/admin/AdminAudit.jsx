import React, { useState } from "react";


const auditLogs = [
  {
    id: "LOG-101",
    timestamp: "Oct 27, 2024 • 14:32:08",
    eventType: "ROLE_PERM_MODIFIED",
    actor: "Dr. Alistair Vance",
    actorEmail: "dr.vance@dhristi.ai",
    actorInitials: "AV",
    sourceIp: "172.16.8.99",
    node: "Admin-Workstation-01",
    severity: "Warning",
    auditAction: "User role upgraded to Clinician (MD)"
  },
  {
    id: "LOG-102",
    timestamp: "Oct 27, 2024 • 14:15:43",
    eventType: "EXPORT_CASE_BATCH",
    actor: "Elena Rostova",
    actorEmail: "e.rostova@dhristi.ai",
    actorInitials: "ER",
    sourceIp: "192.168.10.42",
    node: "Station-ICU-04",
    severity: "Info",
    auditAction: "Batch export of 12 validated studies"
  },
  {
    id: "LOG-103",
    timestamp: "Oct 27, 2024 • 13:58:19",
    eventType: "SCAN_DECRYPT_FAIL",
    actor: "System Daemon",
    actorEmail: "cron.dicom_pipeline",
    actorInitials: "SD",
    sourceIp: "10.0.2.15",
    node: "Gateway-Node-Alpha",
    severity: "Critical",
    auditAction: "Private key handshake timeout"
  },
  {
    id: "LOG-104",
    timestamp: "Oct 27, 2024 • 13:40:02",
    eventType: "AUTH_LOGIN_SUCCESS",
    actor: "Sarah Jenkins",
    actorEmail: "s.jenkins@dhristi.ai",
    actorInitials: "SJ",
    sourceIp: "10.0.4.112",
    node: "Alpha-Triage-Tablet",
    severity: "Info",
    auditAction: "Hardware key FIDO2 challenge passed"
  },
  {
    id: "LOG-105",
    timestamp: "Oct 27, 2024 • 12:22:15",
    eventType: "EMERGENCY_OVERRIDE",
    actor: "Dr. Alistair Vance",
    actorEmail: "dr.vance@dhristi.ai",
    actorInitials: "AV",
    sourceIp: "192.168.10.42",
    node: "Station-ICU-04",
    severity: "Warning",
    auditAction: "Override L2 -> L3 tertiary escalation"
  },
  {
    id: "LOG-106",
    timestamp: "Oct 27, 2024 • 11:04:55",
    eventType: "API_KEY_REVOKED",
    actor: "Sarah Jenkins [SecOps]",
    actorEmail: "s.jenkins@dhristi.ai",
    actorInitials: "SJ",
    sourceIp: "172.16.8.102",
    node: "SecOps-HQ-Terminal",
    severity: "Info",
    auditAction: "Key rotation cycle completed"
  },
  {
    id: "LOG-107",
    timestamp: "Oct 27, 2024 • 10:18:22",
    eventType: "SESSION_TIMEOUT",
    actor: "Marcus Rivera",
    actorEmail: "m.rivera@dhristi.ai",
    actorInitials: "MR",
    sourceIp: "192.168.12.80",
    node: "Station-ER-02",
    severity: "Info",
    auditAction: "Inactivity timeout after 15 min"
  }
];

export default function AdminAudit() {
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">System Audit Log</h1>
          <p className="text-xs text-[#64748b] mt-0.5">
            Immutable event tracking, compliance logging, and system security monitoring across clinical and administrative nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Total Events Logged</span>
                <span className="p-1 rounded bg-[#f0f9f8] text-[#0f766e]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-[#0b1c30]">142,890</span>
                <span className="text-[10px] font-bold text-[#16a34a] bg-[#f0fdf4] px-1.5 py-0.5 rounded border border-[#bbf7d0]">
                  +1,240 today
                </span>
              </div>
              <div className="w-full bg-[#f1f5f9] h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#0f766e] h-full rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div className="text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9]">
              Ledger sync interval: <strong>150ms</strong>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Security Warnings</span>
                <span className="p-1 rounded bg-[#eff6ff] text-[#2563eb]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-[#0b1c30]">14</span>
                <span className="text-xs text-[#64748b]">flagged in 24h</span>
              </div>
              <div className="w-full bg-[#f1f5f9] h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#2563eb] h-full rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
            <div className="text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9]">
              0 unaddressed breaches
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Critical Incidents</span>
                <span className="p-1 rounded bg-[#fef2f2] text-[#dc2626]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-[#0b1c30]">0</span>
                <span className="text-[10px] font-bold text-[#16a34a] bg-[#f0fdf4] px-1.5 py-0.5 rounded border border-[#bbf7d0]">
                  100% resolved
                </span>
              </div>
              <div className="w-full bg-[#f1f5f9] h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#22c55e] h-full rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9]">
              Zero downtime anomalies
            </div>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col gap-2.5">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <div className="relative w-full md:w-80">
              <svg className="w-4 h-4 text-[#94a3b8] absolute left-3 top-2.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by User ID, Actor Name, IP, code..."
                className="w-full pl-9 pr-3 py-1.5 text-xs text-[#0f172a] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
              <select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)} className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
                <option>All Severities</option>
                <option>Info</option>
                <option>Warning</option>
                <option>Critical</option>
              </select>

              <select className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
                <option>All Categories</option>
                <option>Authentication</option>
                <option>Role Modification</option>
                <option>Scan Pipeline</option>
                <option>Overrides</option>
              </select>

              <button className="px-3 py-1.5 bg-white border border-[#d9e2ec] rounded-lg text-xs font-semibold text-[#334155] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Past 7 Days</span>
              </button>

              <button className="px-2.5 py-1.5 text-xs font-semibold text-[#64748b] hover:text-[#0b1c30] flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs pt-1 border-t border-[#f1f5f9] flex-wrap">
            <span className="text-[11px] text-[#64748b]">Active filters:</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[10px] font-medium border border-[#e2e8f0]">
              Severity: All
              <button className="text-[#94a3b8] hover:text-[#0f172a]">&times;</button>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[10px] font-medium border border-[#e2e8f0]">
              Range: Last 7 Days
              <button className="text-[#94a3b8] hover:text-[#0f172a]">&times;</button>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[10px] font-medium border border-[#e2e8f0]">
              Node Cluster: All Clinical
              <button className="text-[#94a3b8] hover:text-[#0f172a]">&times;</button>
            </span>
            <button className="text-[10px] text-[#0f766e] font-semibold hover:underline">
              Clear all active
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b] uppercase tracking-wider">
                  <th className="py-2.5 px-4">TIMESTAMP (UTC)</th>
                  <th className="py-2.5 px-4">EVENT TYPE</th>
                  <th className="py-2.5 px-4">ACTOR / USER ID</th>
                  <th className="py-2.5 px-4">SOURCE IP &amp; NODE</th>
                  <th className="py-2.5 px-4">SEVERITY</th>
                  <th className="py-2.5 px-4">AUDIT PAYLOAD / ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-[#f8fafc]/60 transition">
                    <td className="py-3 px-4 font-mono text-[11px] text-[#475569]">
                      {log.timestamp}
                    </td>

                    <td className="py-3 px-4">
                      {log.eventType === "SCAN_DECRYPT_FAIL" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#fef2f2] text-[#dc2626] border border-[#fecaca]">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          {log.eventType}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#eff6ff] text-[#1e40af] border border-[#bfdbfe]">
                          {log.eventType}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold text-[10px]">
                          {log.actorInitials}
                        </div>
                        <div>
                          <div className="font-bold text-[#0b1c30] text-[11px]">{log.actor}</div>
                          <div className="text-[10px] text-[#64748b] font-mono">{log.actorEmail}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-mono text-[11px] font-bold text-[#0b1c30]">{log.sourceIp}</div>
                      <div className="text-[10px] text-[#64748b]">{log.node}</div>
                    </td>

                    <td className="py-3 px-4">
                      {log.severity === "Critical" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#fef2f2] text-[#dc2626] border border-[#fecaca]">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                          Critical
                        </span>
                      ) : log.severity === "Warning" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          Warning
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Info
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-[11px] text-[#475569] max-w-xs truncate">
                      {log.auditAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b]">
            <span>Showing 1 to 7 of 1,420 filtered audit events</span>

            <div className="flex items-center gap-1">
              <button className="px-2 py-1 rounded border border-[#e2e8f0] bg-white text-[#94a3b8] cursor-not-allowed">
                &lsaquo;
              </button>
              <button className="px-2.5 py-1 rounded bg-[#0f766e] text-white font-bold text-xs">
                1
              </button>
              <button className="px-2.5 py-1 rounded hover:bg-[#e2e8f0] text-[#475569]">
                2
              </button>
              <button className="px-2.5 py-1 rounded hover:bg-[#e2e8f0] text-[#475569]">
                3
              </button>
              <button className="px-2.5 py-1 rounded hover:bg-[#e2e8f0] text-[#475569]">
                4
              </button>
              <span className="px-1 text-[#94a3b8]">...</span>
              <button className="px-2.5 py-1 rounded hover:bg-[#e2e8f0] text-[#475569]">
                142
              </button>
              <button className="px-2 py-1 rounded border border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f1f5f9]">
                &rsaquo;
              </button>
            </div>

            <button className="text-[10px] text-[#0f766e] font-semibold hover:underline flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>Download Signed Audit Manifest (SHA-256)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
