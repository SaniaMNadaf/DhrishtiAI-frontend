import React, { useState } from "react";


const modelList = [
  {
    name: "RetNet-DR",
    version: "v2.4.1",
    tagline: "Primary Retinal Evaluation Engine",
    buildCommit: "b21.10.18",
    commitHash: "bf42c18",
    releaseDate: "Oct 19, 2024 • 08:14 UTC",
    sens: "97.4%",
    spec: "96.8%",
    auc: "0.992",
    compute: "184 ms • 4.2 GB VRAM - CUDA 12.1",
    status: "Active",
    actionType: "Serving"
  },
  {
    name: "RetNet-DR",
    version: "v2.5.0-rc1",
    tagline: "Candidate Macular Edema Focus",
    buildCommit: "b21.11.02",
    commitHash: "d8fe499",
    releaseDate: "Nov 02, 2024 • 18:40 UTC",
    sens: "98.1%",
    spec: "97.2%",
    auc: "0.995",
    compute: "210 ms • 4.8 GB VRAM - TensorRT",
    status: "Staging",
    actionType: "Promote"
  },
  {
    name: "RetNet-DR",
    version: "v2.3.8",
    tagline: "Previous Baseline Ensemble",
    buildCommit: "b21.08.12",
    commitHash: "11a17eb",
    releaseDate: "Aug 12, 2024 • 11:05 UTC",
    sens: "96.2%",
    spec: "95.9%",
    auc: "0.984",
    compute: "178 ms • 3.8 GB VRAM - CUDA 12.0",
    status: "Archived",
    actionType: "Inspect"
  },
  {
    name: "RetNet-Lite",
    version: "v1.2",
    tagline: "Mobile / Edge Low-Resource Node",
    buildCommit: "b21.09.28",
    commitHash: "4ee92bb",
    releaseDate: "Sep 28, 2024 • 08:22 UTC",
    sens: "94.8%",
    spec: "94.1%",
    auc: "0.971",
    compute: "68 ms • 1.1 GB VRAM - ONNX",
    status: "Staging",
    actionType: "Promote"
  },
  {
    name: "RetNet-DR",
    version: "v2.2.0",
    tagline: "Legacy Monolithic Classifier",
    buildCommit: "b21.05.01",
    commitHash: "fa35082",
    releaseDate: "May 01, 2024 • 14:40 UTC",
    sens: "95.1%",
    spec: "93.9%",
    auc: "0.965",
    compute: "245 ms • 8.0 GB VRAM - PyTorch 2.1",
    status: "Archived",
    actionType: "Inspect"
  }
];

export default function AdminModels() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase">
              Clinical Pipeline / <span className="text-[#0f766e]">Artifact Registry</span>
            </div>
            <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">AI Model Version Control</h1>
            <p className="text-xs text-[#64748b] mt-0.5">
              Manage deployed model weights, evaluate inference benchmarks, and roll out updates across clinical nodes.
            </p>
          </div>

          <button className="px-3.5 py-2 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span>Upload New Model Weights</span>
          </button>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f0f9f8] border border-[#d1ebe7] flex items-center justify-center text-[#0f766e]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-[#0b1c30]">RetNet-DR v2.4.1</h2>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Active in Production
                  </span>
                </div>
                <p className="text-[11px] text-[#64748b]">Deep Retinopathy Ensemble (Multi-Scale Focal Loss)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-white border border-[#d9e2ec] hover:bg-[#f8fafc] text-[#334155] rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>View Benchmark Metrics</span>
              </button>
              <button className="px-3 py-1.5 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Run Diagnostic Verification</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">BUILD ID</span>
              <div className="font-mono font-bold text-[#0b1c30] mt-0.5">build-2024.1...</div>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">DEPLOYMENT SIGNATURE</span>
              <div className="font-mono text-[#0b1c30] mt-0.5">Oct 19, 2024 [G8x1...</div>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">SENSITIVITY 95% CI</span>
              <div className="font-bold text-[#0b1c30] mt-0.5">
                97.4% <span className="text-[10px] text-[#64748b] font-normal">[96.1 - 98.4%]</span>
              </div>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">SPECIFICITY 95% CI</span>
              <div className="font-bold text-[#0b1c30] mt-0.5">
                96.8% <span className="text-[10px] text-[#64748b] font-normal">[95.3 - 97.9%]</span>
              </div>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">INFERENCE LATENCY</span>
              <div className="font-mono font-bold text-[#0b1c30] mt-0.5">184 ms / scan</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-[#0b1c30]">Available Model Artifacts &amp; History</h2>
              <span className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[#64748b] text-[10px] font-bold font-mono">
                5 Versions
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative w-56">
                <svg className="w-3.5 h-3.5 text-[#94a3b8] absolute left-2.5 top-2.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search version, commit, tag..."
                  className="w-full pl-8 pr-2.5 py-1.5 text-xs text-[#0f172a] bg-[#fdfdfd] border border-[#d9e2ec] rounded-lg focus:outline-none"
                />
              </div>

              <div className="flex items-center bg-[#f1f5f9] p-0.5 rounded-lg border border-[#e2e8f0] text-xs font-semibold">
                {["All", "Active", "Staging", "Archived"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-1 rounded transition ${
                      activeTab === tab ? "bg-[#084c47] text-white shadow-xs" : "text-[#64748b] hover:text-[#0b1c30]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b] uppercase tracking-wider">
                  <th className="py-2.5 px-3">MODEL VERSION &amp; NAME</th>
                  <th className="py-2.5 px-3">BUILD &amp; COMMIT</th>
                  <th className="py-2.5 px-3">RELEASE DATE</th>
                  <th className="py-2.5 px-3">VALIDATION BENCHMARKS</th>
                  <th className="py-2.5 px-3">COMPUTE / LATENCY</th>
                  <th className="py-2.5 px-3">DEPLOYMENT STATUS</th>
                  <th className="py-2.5 px-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {modelList.map((m, i) => (
                  <tr key={i} className="hover:bg-[#f8fafc]/60 transition">
                    <td className="py-3 px-3">
                      <div className="font-bold text-[#0b1c30] text-xs flex items-center gap-1.5">
                        <span>{m.name}</span>
                        <span className="font-mono text-[#0f766e]">{m.version}</span>
                      </div>
                      <div className="text-[10px] text-[#64748b]">{m.tagline}</div>
                    </td>

                    <td className="py-3 px-3 font-mono text-[11px]">
                      <div className="font-bold text-[#0b1c30]">{m.buildCommit}</div>
                      <div className="text-[10px] text-[#94a3b8]">commit: {m.commitHash}</div>
                    </td>

                    <td className="py-3 px-3 font-mono text-[10px] text-[#64748b]">
                      {m.releaseDate}
                    </td>

                    <td className="py-3 px-3">
                      <div className="flex flex-col text-[10px] font-mono leading-tight">
                        <span>Sens: <strong className="text-[#0b1c30]">{m.sens}</strong></span>
                        <span>Spec: <strong className="text-[#0b1c30]">{m.spec}</strong></span>
                        <span>AUC: <strong className="text-[#0f766e]">{m.auc}</strong></span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-[10px] text-[#64748b]">
                      <div className="font-bold text-[#0b1c30]">{m.compute.split("•")[0]}</div>
                      <div className="text-[9px] text-[#94a3b8]">{m.compute.split("•")[1]}</div>
                    </td>

                    <td className="py-3 px-3">
                      {m.status === "Active" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Active
                        </span>
                      ) : m.status === "Staging" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fffbeb] text-[#b45309] border border-[#fef3c7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Staging
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f1f5f9] text-[#64748b] border border-[#e2e8f0]">
                          Archived
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-3 text-right">
                      {m.actionType === "Serving" ? (
                        <span className="text-[11px] font-semibold text-[#0f766e] flex items-center justify-end gap-1">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Currently Serving
                        </span>
                      ) : m.actionType === "Promote" ? (
                        <button className="px-2.5 py-1 bg-[#084c47] hover:bg-[#063b37] text-white rounded text-[11px] font-semibold flex items-center gap-1 ml-auto">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          <span>Promote to Prod</span>
                        </button>
                      ) : (
                        <button className="text-[11px] font-semibold text-[#64748b] hover:text-[#0b1c30]">
                          Inspect
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-xs text-[#64748b] pt-2 border-t border-[#f1f5f9]">
            <span>Showing 1 to 5 of 5 versions</span>
            <div className="flex items-center gap-1">
              <button className="px-2 py-0.5 border border-[#e2e8f0] rounded bg-white text-[#94a3b8] cursor-not-allowed">
                Previous
              </button>
              <button className="px-2 py-0.5 bg-[#0f766e] text-white rounded font-bold text-xs">
                1
              </button>
              <button className="px-2 py-0.5 border border-[#e2e8f0] rounded bg-white text-[#94a3b8] cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#f0f4f9] border border-[#e2e8f0] flex items-start gap-2.5 text-xs text-[#334155]">
          <svg className="w-4 h-4 text-[#0f766e] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <div>
            <div className="font-bold text-[#0b1c30]">Zero-Downtime Traffic Migration</div>
            <p className="text-[11px] text-[#64748b] mt-0.5">
              All production model handoffs execute canary routing across cluster workers to guarantee continuity without dropping active inference requests.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
