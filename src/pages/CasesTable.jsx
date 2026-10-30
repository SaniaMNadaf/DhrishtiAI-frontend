import React, { useState } from "react";
import { Link } from "react-router-dom";


const initialCases = [
  {
    id: "DR-2024-8841",
    patientRef: "PT-4012",
    timestamp: "Oct 24, 2024 14:32:05 UTC",
    quality: "Usable",
    qualityPct: "98.4%",
    qualityType: "success",
    severityTitle: "Level 3: Severe NPDR",
    severityGrade: "L3",
    severityBarPct: 88,
    confidence: "88%",
    status: "in_review",
    image: "/retinal/fundus-1.png"
  },
  {
    id: "DR-2024-8840",
    patientRef: "PT-3988",
    timestamp: "Oct 24, 2024 13:58:19 UTC",
    quality: "Usable",
    qualityPct: "99.1%",
    qualityType: "success",
    severityTitle: "Level 0: No referable DR predicted",
    severityGrade: "L0",
    severityBarPct: 96,
    confidence: "96%",
    status: "reviewed",
    image: "/retinal/fundus-3.png"
  },
  {
    id: "DR-2024-8839",
    patientRef: "PT-4855",
    timestamp: "Oct 24, 2024 12:15:09 UTC",
    quality: "Usable",
    qualityPct: "94.2%",
    qualityType: "success",
    severityTitle: "Level 4: Proliferative DR",
    severityGrade: "L4",
    severityBarPct: 92,
    confidence: "92%",
    status: "graded",
    image: "/retinal/fundus-4.png"
  },
  {
    id: "DR-2024-8838",
    patientRef: "PT-4205",
    timestamp: "Oct 24, 2024 11:06:12 UTC",
    quality: "Needs Recapture",
    qualityPct: "51%",
    qualityType: "warning",
    severityTitle: "Indeterminate / Low Conf.",
    severityGrade: "IND",
    severityBarPct: 32,
    confidence: "32% confidence",
    status: "needs_recapture",
    image: "/retinal/fundus-2.png"
  },
  {
    id: "DR-2024-8837",
    patientRef: "PT-4591",
    timestamp: "Oct 24, 2024 09:48:42 UTC",
    quality: "Usable",
    qualityPct: "96.5%",
    qualityType: "success",
    severityTitle: "Level 2: Moderate NPDR",
    severityGrade: "L2",
    severityBarPct: 82,
    confidence: "82%",
    status: "reviewed",
    image: "/retinal/fundus-5.png"
  },
  {
    id: "DR-2024-8836",
    patientRef: "PT-4428",
    timestamp: "Oct 23, 2024 18:28:55 UTC",
    quality: "Usable",
    qualityPct: "97.0%",
    qualityType: "success",
    severityTitle: "Level 1: Mild NPDR",
    severityGrade: "L1",
    severityBarPct: 71,
    confidence: "71%",
    status: "in_review",
    image: "/retinal/fundus-1.png"
  }
];

export default function CasesTable() {
  const [search, setSearch] = useState("");
  const [filterSeverity, setFilterSeverity] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-[#64748b]">
              <span>Operator Workspace</span> / <strong className="text-[#0b1c30]">Cases Registry</strong>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">All Clinical Screenings</h1>
              <span className="text-xs text-[#64748b] font-medium">showing 24 active cases</span>
            </div>
          </div>

          <Link
            to="/upload"
            className="px-3.5 py-2 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Upload new photograph</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#334155] font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#475569]"></span>
            All Screenings: 24
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff6ff] text-[#1e40af] font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
            Needs Review: 8
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0fdf4] text-[#166534] font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
            Confirmed: 12
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffbeb] text-[#b45309] font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
            Recapture Flagged: 3
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf4ff] text-[#86198f] font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c026d3]"></span>
            Referred: 1
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col gap-2.5">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <div className="relative w-full md:w-96 flex items-center">
              <svg className="w-4 h-4 text-[#94a3b8] absolute left-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reference code, patient ID hash, or..."
                className="w-full pl-9 pr-3 py-1.5 text-xs text-[#0f172a] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
              <select value={filterSeverity} onChange={(e) => setFilterSeverity(e.target.value)} className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
                <option>Severity: All levels</option>
                <option>Level 0</option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Level 4</option>
              </select>

              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
                <option>Status: All status</option>
                <option>In Review</option>
                <option>Reviewed</option>
                <option>Graded</option>
                <option>Needs Recapture</option>
              </select>

              <select className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
                <option>Image Quality: All</option>
                <option>Usable (&ge;90%)</option>
                <option>Needs Recapture (&lt;60%)</option>
              </select>

              <select className="px-2.5 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg focus:outline-none">
                <option>Sort: Recent upload</option>
                <option>Oldest</option>
                <option>Highest Severity</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-[#f1f5f9]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#64748b]">Active filters:</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[10px] font-medium border border-[#e2e8f0]">
                Registry: Eye Clinic 4A
                <button className="text-[#94a3b8] hover:text-[#0f172a]">&times;</button>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[10px] font-medium border border-[#e2e8f0]">
                Ingested: Last 14 Days
                <button className="text-[#94a3b8] hover:text-[#0f172a]">&times;</button>
              </span>
              <button className="text-[10px] text-[#0f766e] font-semibold hover:underline">
                Clear all filters
              </button>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[#64748b]">
              <span>Registry Sync: <strong className="text-[#15803d]">Live</strong></span>
              <button className="hover:underline text-[10px] text-[#94a3b8]">Simulate Empty State</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b] uppercase tracking-wider">
                  <th className="py-2.5 px-4 w-16">Thumbnail</th>
                  <th className="py-2.5 px-4">Reference Code</th>
                  <th className="py-2.5 px-4">Patient Ref</th>
                  <th className="py-2.5 px-4">Ingestion Timestamp &darr;</th>
                  <th className="py-2.5 px-4">Image Quality</th>
                  <th className="py-2.5 px-4">AI Severity Grade</th>
                  <th className="py-2.5 px-4 text-right">Case Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {initialCases.map((c) => (
                  <tr key={c.id} className="hover:bg-[#f8fafc]/80 transition group">
                    <td className="py-3 px-4">
                      <Link to={`/cases/${c.id}`} className="block">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-black border border-[#e2e8f0] flex items-center justify-center group-hover:ring-2 group-hover:ring-[#0f766e] transition">
                          <img src={c.image} alt={c.id} className="w-full h-full object-cover" />
                        </div>
                      </Link>
                    </td>

                    <td className="py-3 px-4">
                      <Link to={`/cases/${c.id}`} className="hover:underline">
                        <div className="font-bold text-[#0b1c30] flex items-center gap-1.5">
                          <span>{c.id}</span>
                          <svg className="w-3.5 h-3.5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </Link>
                    </td>

                    <td className="py-3 px-4 font-mono text-[11px] font-bold text-[#475569]">
                      {c.patientRef}
                    </td>

                    <td className="py-3 px-4 font-mono text-[10px] text-[#64748b]">
                      {c.timestamp}
                    </td>

                    <td className="py-3 px-4">
                      {c.qualityType === "success" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                          {c.quality} ({c.qualityPct})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#fffbeb] text-[#b45309] border border-[#fef3c7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                          {c.quality} ({c.qualityPct})
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex flex-col gap-1 max-w-[210px]">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0b1c30]">
                          {c.severityGrade === "L3" && (
                            <span className="w-3.5 h-3.5 rounded-full bg-[#ea580c] text-white flex items-center justify-center text-[9px] font-bold">!</span>
                          )}
                          {c.severityGrade === "L0" && (
                            <span className="text-[#16a34a] font-bold">✓</span>
                          )}
                          {c.severityGrade === "L4" && (
                            <span className="text-[#dc2626] font-bold">✱</span>
                          )}
                          {c.severityGrade === "IND" && (
                            <span className="text-[#d97706] font-bold">?</span>
                          )}
                          {c.severityGrade === "L2" && (
                            <span className="text-[#d97706] font-bold">▲</span>
                          )}
                          {c.severityGrade === "L1" && (
                            <span className="text-[#0284c7] font-bold">ℹ</span>
                          )}
                          <span className="truncate">{c.severityTitle}</span>
                        </div>
                        <div className="w-full bg-[#f1f5f9] h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              c.severityGrade === "L4" ? "bg-red-600" :
                              c.severityGrade === "L3" ? "bg-orange-500" :
                              c.severityGrade === "L2" ? "bg-amber-500" :
                              c.severityGrade === "L1" ? "bg-sky-500" :
                              c.severityGrade === "L0" ? "bg-emerald-500" : "bg-slate-400"
                            }`}
                            style={{ width: `${c.severityBarPct}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-[#94a3b8] font-mono leading-none">
                          {c.confidence}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-right">
                      {c.status === "in_review" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>in_review</span>
                        </span>
                      )}
                      {c.status === "reviewed" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0]">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>reviewed</span>
                        </span>
                      )}
                      {c.status === "graded" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#faf5ff] text-[#9333ea] border border-[#e9d5ff]">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>graded</span>
                        </span>
                      )}
                      {c.status === "needs_recapture" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#fffbeb] text-[#b45309] border border-[#fde68a]">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>needs_recapture</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b]">
            <div className="flex items-center gap-2">
              <span>Showing <strong>1-6</strong> of <strong>24</strong> cases</span>
              <span className="text-[#cbd5e1]">|</span>
              <span>Rows:</span>
              <select className="border border-[#d9e2ec] rounded px-1.5 py-0.5 bg-white text-xs">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>

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
              <button className="px-2 py-1 rounded border border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f1f5f9]">
                &rsaquo;
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#f0f9f8] text-[#0f766e] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#0b1c30]">Triage Accuracy Protocol</h3>
              <p className="text-[10px] text-[#64748b] mt-1 leading-relaxed">
                All Level 3 &amp; Level 4 classifications bypass non-urgent queues and flag attending retinal specialists within 15 minutes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#0b1c30]">PACS / DICOM Interop</h3>
              <p className="text-[10px] text-[#64748b] mt-1 leading-relaxed">
                Integrated directly via FHIR endpoint. Operator ingestion automatically assigns cryptographic pseudonym hashes (P-Hash).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#fefce8] text-[#ca8a04] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#0b1c30]">Audit Trail &amp; Chain of Custody</h3>
              <p className="text-[10px] text-[#64748b] mt-1 leading-relaxed">
                Logged under HIPAA §164.312(b). Review decisions are cryptographically timestamped to clinician ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
