import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { RetinalViewer } from "@/components/viewer";

export default function CaseResult() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("heatmap");
  const [selectedDecision, setSelectedDecision] = useState("confirm");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSaveReview = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const caseId = id || "DR-2024-8841";

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs">
              <Link to="/cases" className="text-[#64748b] hover:text-[#0b1c30] flex items-center gap-1 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span>Cases</span>
              </Link>
              <span className="text-[#cbd5e1]">/</span>
              <span className="font-bold text-[#0b1c30]">Case #{caseId}</span>
              <span className="px-2 py-0.5 rounded bg-[#f0f9f8] text-[#0f766e] font-mono text-[11px] font-bold">
                Patient Ref: Anonymized #P-4012
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#64748b] pt-0.5 flex-wrap">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Oct 24, 2024 • 14:32 UTC
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                Modality: 45° Digital Retinal Camera
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Operator: Sarah Jenkins <strong className="text-[#0f766e] font-semibold">(Validated)</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#eff6ff] text-[#1e40af] border border-[#dbeafe]">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
              Ingested via Gateway 4A
            </span>
            <button className="p-1.5 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:bg-[#f8fafc]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 002 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="bg-[#0b1220] rounded-2xl overflow-hidden border border-[#1e293b] shadow-xl flex flex-col">
              <div className="px-4 py-2.5 bg-[#0e1726] border-b border-[#1e293b] flex items-center justify-between text-xs text-white">
                <div className="flex items-center bg-[#070d18] rounded-lg p-0.5 border border-[#1e293b]">
                  <button
                    onClick={() => setActiveTab("original")}
                    className={`px-3 py-1 rounded text-xs font-medium transition ${
                      activeTab === "original" ? "bg-[#0f766e] text-white shadow-xs" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Original
                  </button>
                  <button
                    onClick={() => setActiveTab("clahe")}
                    className={`px-3 py-1 rounded text-xs font-medium transition ${
                      activeTab === "clahe" ? "bg-[#0f766e] text-white shadow-xs" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    CLAHE Processed
                  </button>
                  <button
                    onClick={() => setActiveTab("heatmap")}
                    className={`px-3 py-1 rounded text-xs font-medium transition flex items-center gap-1.5 ${
                      activeTab === "heatmap" ? "bg-[#0f766e] text-white shadow-xs" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>Heatmap [Active]</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <button className="p-1 hover:text-white transition" title="Zoom in">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:text-white transition" title="Measure">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="p-1 hover:text-white transition" title="Rotate">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <button className="p-1 hover:text-white transition" title="Fullscreen">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative min-h-[460px] flex items-center justify-center p-6 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-xs text-[10px] text-white px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>FOV: 45° Posterior Pole (Right Eye - OD)</span>
                </div>

                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-2 border-[#1e293b] shadow-2xl bg-black">
                  <img
                    src="/retinal/fundus-1.png"
                    alt="Retinal Fundus"
                    className="w-full h-full object-cover"
                    style={{ filter: activeTab === "clahe" ? "contrast(1.35) saturate(1.15)" : "none" }}
                  />

                  {activeTab === "heatmap" && (
                    <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-80">
                      <div
                        className="absolute rounded-full"
                        style={{
                          top: "35%",
                          left: "52%",
                          width: "80px",
                          height: "80px",
                          background: "radial-gradient(circle, rgba(239, 68, 68, 0.9) 0%, rgba(245, 158, 11, 0.7) 40%, rgba(34, 197, 94, 0.2) 75%, transparent 100%)"
                        }}
                      />
                      <div
                        className="absolute rounded-full"
                        style={{
                          top: "56%",
                          left: "60%",
                          width: "70px",
                          height: "70px",
                          background: "radial-gradient(circle, rgba(239, 68, 68, 0.85) 0%, rgba(245, 158, 11, 0.6) 40%, transparent 80%)"
                        }}
                      />
                      <div
                        className="absolute rounded-full"
                        style={{
                          top: "60%",
                          left: "38%",
                          width: "55px",
                          height: "55px",
                          background: "radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, rgba(34, 197, 94, 0.3) 60%, transparent 90%)"
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="px-4 py-3 bg-[#0e1726] border-t border-[#1e293b] flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-teal-400 font-medium text-[11px]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Model attribution, not a lesion</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                    <span>Lower Influence</span>
                    <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500"></div>
                    <span>Higher Influence</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400">
                  Preprocessing: CLAHE Normalized • Subpixel Res: 2160x1800
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3.5 flex flex-col gap-1 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-[#166534] text-xs">
                  <svg className="w-4 h-4 text-[#16a34a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Image usable</span>
                </div>
                <button className="text-[11px] font-semibold text-[#16a34a] hover:underline flex items-center gap-0.5">
                  Criteria checklist &darr;
                </button>
              </div>
              <p className="text-[10px] text-[#15803d] pl-6 leading-relaxed">
                Field clarity: 98.4% • Focus score: Optimal (Sharpening passed) • Inner 60% disc centered
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#64748b] text-[10px] tracking-wider uppercase">
                  AI Biomarker Inference
                </span>
                <span className="text-[10px] text-[#0f766e] font-mono font-bold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Model v3.8.2-dr
                </span>
              </div>

              <div className="p-3 bg-[#fffbeb] border border-[#fef3c7] rounded-lg">
                <div className="flex items-center gap-1.5 font-bold text-[#b45309] text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                  <span>Level 2: Moderate NPDR</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block mb-1.5">
                  ICDR Severity Grade
                </span>
                <div className="grid grid-cols-5 gap-1 text-[10px] text-center font-semibold">
                  <div className="py-1 rounded bg-[#f1f5f9] text-[#64748b]">L0</div>
                  <div className="py-1 rounded bg-[#f1f5f9] text-[#64748b]">L1 Mild</div>
                  <div className="py-1 rounded bg-[#f59e0b] text-white shadow-xs">L2 Mod</div>
                  <div className="py-1 rounded bg-[#f1f5f9] text-[#64748b]">L3 Sev</div>
                  <div className="py-1 rounded bg-[#f1f5f9] text-[#64748b]">L4 PDR</div>
                </div>
                <div className="text-[10px] text-[#94a3b8] mt-1 text-center">
                  &ge; Level 0: No referable DR predicted
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#fff7ed] border border-[#ffedd5] flex items-center gap-2 text-xs text-[#c2410c] font-medium">
                <svg className="w-4 h-4 shrink-0 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Referable DR predicted. Clinician review needed</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0f9f8] text-[#0f766e] text-xs font-semibold w-fit">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Model score 71%</span>
              </div>

              <div className="text-[10px] text-[#64748b] bg-[#f8fafc] p-2 rounded border border-[#f1f5f9] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Predicted category, not a diagnosis.</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col gap-3">
              <div>
                <h3 className="text-xs font-bold text-[#0b1c30]">Clinician Final Assessment & Triage</h3>
                <p className="text-[10px] text-[#64748b] mt-0.5">
                  Review algorithmic inference, confirm diagnosis, or establish alternative treatment pathways.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left">
                <button
                  type="button"
                  onClick={() => setSelectedDecision("confirm")}
                  className={`p-2.5 rounded-lg border text-left flex items-start gap-2 transition ${
                    selectedDecision === "confirm"
                      ? "border-[#0f766e] bg-[#f0f9f8] text-[#084c47]"
                      : "border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569]"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="radio" checked={selectedDecision === "confirm"} readOnly className="accent-[#0f766e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-none">Confirm</div>
                    <div className="text-[10px] text-[#64748b] mt-0.5">Validate Moderate NPDR category</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDecision("override")}
                  className={`p-2.5 rounded-lg border text-left flex items-start gap-2 transition ${
                    selectedDecision === "override"
                      ? "border-[#0f766e] bg-[#f0f9f8] text-[#084c47]"
                      : "border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569]"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="radio" checked={selectedDecision === "override"} readOnly className="accent-[#0f766e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-none">Override</div>
                    <div className="text-[10px] text-[#64748b] mt-0.5">Reclassify to alternate grade</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDecision("recapture")}
                  className={`p-2.5 rounded-lg border text-left flex items-start gap-2 transition ${
                    selectedDecision === "recapture"
                      ? "border-[#0f766e] bg-[#f0f9f8] text-[#084c47]"
                      : "border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569]"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="radio" checked={selectedDecision === "recapture"} readOnly className="accent-[#0f766e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-none">Recapture</div>
                    <div className="text-[10px] text-[#64748b] mt-0.5">Flag acquisition artifact</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDecision("refer")}
                  className={`p-2.5 rounded-lg border text-left flex items-start gap-2 transition ${
                    selectedDecision === "refer"
                      ? "border-[#0f766e] bg-[#f0f9f8] text-[#084c47]"
                      : "border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569]"
                  }`}
                >
                  <div className="mt-0.5">
                    <input type="radio" checked={selectedDecision === "refer"} readOnly className="accent-[#0f766e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-none">Refer</div>
                    <div className="text-[10px] text-[#64748b] mt-0.5">Fast-track ophthalmology consult</div>
                  </div>
                </button>
              </div>

              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-[#334155]">Clinical Notes & Differential</label>
                  <span className="text-[10px] text-[#94a3b8]">Encrypted Field</span>
                </div>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Do not enter patient names"
                  className="w-full p-2.5 text-xs text-[#0f172a] placeholder-[#94a3b8] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]/20 focus:border-[#0f766e]"
                />
              </div>

              {saved && (
                <div className="p-2 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold text-center border border-emerald-200">
                  Review & Audit Stamp Signed Successfully
                </div>
              )}

              <button
                type="button"
                onClick={handleSaveReview}
                className="w-full mt-1 py-2.5 px-4 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Save review</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
