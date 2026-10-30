import React from "react";


const confusionMatrix = [
  { label: "Actual Level 0\nNo DR (mOD)", counts: [684, 26, 8, 2, 0], total: 720, percentages: ["95.0%", "3.6%", "1.1%", "0.3%", "0.0%"] },
  { label: "Actual Level 1\nMild NPDR (mOD)", counts: [22, 128, 26, 4, 0], total: 180, percentages: ["12.2%", "71.1%", "14.4%", "2.2%", "0.0%"] },
  { label: "Actual Level 2\nModerate NPDR (mOD)", counts: [10, 20, 184, 20, 6], total: 240, percentages: ["4.2%", "8.3%", "76.7%", "8.3%", "2.5%"] },
  { label: "Actual Level 3\nSevere NPDR (mOD)", counts: [1, 3, 24, 118, 14], total: 160, percentages: ["0.6%", "1.9%", "15.0%", "73.8%", "8.8%"] },
  { label: "Actual Level 4\nProliferative DR (mOD)", counts: [0, 1, 3, 12, 64], total: 80, percentages: ["0.0%", "1.3%", "3.8%", "15.0%", "80.0%"] }
];

const classRows = [
  { level: "Level 0", desc: "No referable DR predicted", count: "n = 720", recall: "95.0%", spec: "95.7%", ppv: "95.4%", notes: "Baseline non-referable triage" },
  { level: "Level 1", desc: "Mild", count: "n = 180", recall: "71.1%", spec: "96.5%", ppv: "69.8%", notes: "Low clinical risk, early microaneurysms" },
  { level: "Level 2", desc: "Moderate", count: "n = 240", recall: "76.7%", spec: "94.8%", ppv: "81.5%", notes: "Referable threshold; specialist consult recommended" },
  { level: "Level 3", desc: "Severe", count: "n = 160", recall: "73.8%", spec: "96.5%", ppv: "71.9%", notes: "High risk proliferative conversion" },
  { level: "Level 4", desc: "Proliferative", count: "n = 80", recall: "80.7%", spec: "99.0%", ppv: "78.7%", notes: "Few examples - interpret with caution", isWarning: true }
];

export default function Evaluation() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f0f9f8] text-[#0f766e] text-[10px] font-bold tracking-wider uppercase mb-1">
              <span>Validation Governance &amp; Benchmarks</span>
            </div>
            <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">Model Evaluation</h1>
            <p className="text-xs text-[#64748b] mt-0.5">
              Benchmark validation metrics and diagnostic performance analysis on certified retinal screening cohorts. Clinical decision support algorithm <strong className="text-[#0b1c30]">v3.8-CLIN</strong>.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-[#eff6ff] text-[#1e40af] text-xs font-semibold border border-[#dbeafe]">
              ADVISORY MODE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Overall Diagnostic Metric</span>
                <span className="text-[#0f766e]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <div className="text-xs font-bold text-[#0b1c30] mt-1">Overall Sensitivity</div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-[#0b1c30]">92.4%</span>
                <span className="text-[10px] font-bold text-[#15803d] bg-[#f0fdf4] px-1.5 py-0.5 rounded border border-[#bbf7d0]">
                  Target above 90%
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#f1f5f9] mt-3 flex justify-between text-[10px] text-[#64748b]">
              <span>95% Confidence Interval:</span>
              <strong className="text-[#0b1c30] font-mono">[89.5% - 94.6%]</strong>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Overall Diagnostic Metric</span>
                <span className="text-[#0f766e]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <div className="text-xs font-bold text-[#0b1c30] mt-1">Overall Specificity</div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-[#0b1c30]">94.1%</span>
                <span className="text-[10px] font-bold text-[#15803d] bg-[#f0fdf4] px-1.5 py-0.5 rounded border border-[#bbf7d0]">
                  Target above 90%
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#f1f5f9] mt-3 flex justify-between text-[10px] text-[#64748b]">
              <span>95% Confidence Interval:</span>
              <strong className="text-[#0b1c30] font-mono">[91.7% - 96.0%]</strong>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Cohort Population</span>
                <svg className="w-4 h-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-xs font-bold text-[#0b1c30] mt-1">Evaluation Sample Count</div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-[#0b1c30]">n = 1,480</span>
                <span className="text-[10px] text-[#64748b]">studies</span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#f1f5f9] mt-3 text-[10px] text-[#64748b]">
              Total adjudicated retinal scans • Certified cohort test evaluations
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Reference Baseline</span>
                <svg className="w-4 h-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-xs font-bold text-[#0b1c30] mt-1">Benchmark Dataset</div>
              <div className="mt-2">
                <span className="text-base font-bold text-[#0b1c30]">APTOS 2019 dataset</span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#f1f5f9] mt-3 flex items-center justify-between text-[10px] text-[#0f766e]">
              <span className="font-semibold">External multi-center...</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <div>
              <h2 className="text-sm font-bold text-[#0b1c30] flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>Multi-Class Confusion Matrix (Actual vs Predicted)</span>
              </h2>
              <p className="text-[10px] text-[#64748b] mt-0.5">
                Rows represent the <strong>Actual level</strong> (ground truth) and columns represent the <strong>Predicted level</strong> (Levels 0 through 4). Cell shading ramps from #F0FDF4 to #005C55 based on row share percentage.
              </p>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-[#64748b]">
              <span className="font-semibold">ROW SHARE DISTRIBUTION:</span>
              <span className="px-1.5 py-0.5 bg-[#f0fdf4] text-[#166534] font-mono rounded">0-5%</span>
              <span className="px-1.5 py-0.5 bg-[#ccfbf1] text-[#0f766e] font-mono rounded">15-30%</span>
              <span className="px-1.5 py-0.5 bg-[#5eead4] text-[#0f766e] font-mono rounded">30-60%</span>
              <span className="px-1.5 py-0.5 bg-[#0f766e] text-white font-mono rounded">60-75%</span>
              <span className="px-1.5 py-0.5 bg-[#044e47] text-white font-mono rounded">&gt;75%</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b]">
                  <th className="py-2.5 px-3 text-left w-44">ACTUAL \ PREDICTED</th>
                  <th className="py-2.5 px-3">LEVEL 0<br /><span className="text-[9px] font-normal text-[#94a3b8]">mOD</span></th>
                  <th className="py-2.5 px-3">LEVEL 1<br /><span className="text-[9px] font-normal text-[#94a3b8]">mild</span></th>
                  <th className="py-2.5 px-3">LEVEL 2<br /><span className="text-[9px] font-normal text-[#94a3b8]">moderate</span></th>
                  <th className="py-2.5 px-3">LEVEL 3<br /><span className="text-[9px] font-normal text-[#94a3b8]">severe</span></th>
                  <th className="py-2.5 px-3">LEVEL 4<br /><span className="text-[9px] font-normal text-[#94a3b8]">proliferative</span></th>
                  <th className="py-2.5 px-3 font-bold text-[#0b1c30]">TOTAL (ACTUAL)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {confusionMatrix.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="py-2.5 px-3 text-left font-bold text-[#0b1c30] whitespace-pre-line text-[11px] bg-[#f8fafc]/50">
                      {row.label}
                    </td>
                    {row.counts.map((cnt, cIdx) => {
                      const isDiagonal = rIdx === cIdx;
                      return (
                        <td
                          key={cIdx}
                          className={`py-2 px-3 border-x border-[#e2e8f0]/40 transition ${
                            isDiagonal
                              ? "bg-[#044e47] text-white font-bold"
                              : cnt > 15
                              ? "bg-[#ccfbf1]/60 text-[#0f766e] font-semibold"
                              : cnt > 0
                              ? "bg-[#f0fdf4]/50 text-[#334155]"
                              : "text-[#94a3b8]"
                          }`}
                        >
                          <div className="text-xs">{cnt}</div>
                          <div className={`text-[9px] font-mono leading-none mt-0.5 ${isDiagonal ? "text-teal-200" : "text-[#94a3b8]"}`}>
                            {row.percentages[cIdx]}
                          </div>
                        </td>
                      );
                    })}
                    <td className="py-2.5 px-3 font-bold text-[#0b1c30] font-mono text-xs bg-[#f8fafc]/50">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-[#f0f9f8] border border-[#d1ebe7] flex items-center gap-2 text-xs text-[#0f766e]">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[11px]">
              <strong>Off-diagonal classification margins:</strong> 91.7% of off-diagonal errors occur strictly in adjacent severity classes (&plusmn;1 ICDR grade), matching clinical consensus tolerances between secondary ophthalmologists.
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-bold text-[#0b1c30] flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Per-Class Validation Performance</span>
              </h2>
              <p className="text-[10px] text-[#64748b] mt-0.5">
                Detailed precision, recall, and triage efficacy metrics disaggregated by ICDR clinical grading tiers.
              </p>
            </div>
            <span className="text-[10px] text-[#64748b] font-mono">■ Adjudication Threshold: &ge;0.50</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b] uppercase tracking-wider">
                  <th className="py-2.5 px-3">ICDR SEVERITY LEVEL</th>
                  <th className="py-2.5 px-3">LEVEL DESCRIPTION</th>
                  <th className="py-2.5 px-3">SAMPLE COUNT (N)</th>
                  <th className="py-2.5 px-3">SENSITIVITY (RECALL)</th>
                  <th className="py-2.5 px-3">SPECIFICITY</th>
                  <th className="py-2.5 px-3">PPV (PRECISION)</th>
                  <th className="py-2.5 px-3">CLINICAL RELIABILITY NOTES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {classRows.map((r, i) => (
                  <tr key={i} className="hover:bg-[#f8fafc]/60 transition">
                    <td className="py-3 px-3 font-bold text-[#0b1c30]">
                      {r.level} {r.isWarning && <span className="text-[#f59e0b]">▲</span>}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        r.level === "Level 4" ? "bg-red-50 text-red-700 border border-red-200" :
                        r.level === "Level 3" ? "bg-orange-50 text-orange-700 border border-orange-200" :
                        r.level === "Level 2" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                        r.level === "Level 1" ? "bg-blue-50 text-blue-700 border border-blue-200" :
                        "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}>
                        {r.desc}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-[#475569]">{r.count}</td>
                    <td className="py-3 px-3 font-bold text-[#0b1c30] font-mono">{r.recall}</td>
                    <td className="py-3 px-3 font-bold text-[#0b1c30] font-mono">{r.spec}</td>
                    <td className="py-3 px-3 font-bold text-[#0b1c30] font-mono">{r.ppv}</td>
                    <td className="py-3 px-3 text-[11px] text-[#64748b]">
                      {r.isWarning ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fefce8] text-[#854d0e] border border-[#fef08a] font-medium text-[10px]">
                          ▲ {r.notes}
                        </span>
                      ) : (
                        r.notes
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-[10px] text-[#94a3b8]">
            <span>Statistical Protocol Rule: Any grade cohort with n &lt; 50 invokes automated clinical sensitivity warnings.</span>
            <span className="font-mono">VALID-PROTO-2024</span>
          </div>
        </div>
      </div>
    </>
  );
}
