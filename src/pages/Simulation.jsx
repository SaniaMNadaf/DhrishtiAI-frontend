import React, { useState } from "react";


const historicalRuns = [
  {
    id: "SIM-2024-088",
    name: "Peak Outreach Shift",
    details: "High volume district drive",
    timestamp: "Today, 09:40",
    acq: "45 c/h",
    bw: "15 Mbps",
    reviewers: "4 MDs",
    throughput: "38.2 c/h",
    avgWait: "24.5 m",
    peakQueue: "22 cases",
    status: "Within SLA",
    statusType: "success"
  },
  {
    id: "SIM-2024-086",
    name: "Baseline Polyclinic",
    details: "Standard daytime operational baseline",
    timestamp: "Yesterday, 14:15",
    acq: "25 c/h",
    bw: "15 Mbps",
    reviewers: "3 MDs",
    throughput: "32.4 c/h",
    avgWait: "16.2 m",
    peakQueue: "14 cases",
    status: "Optimal",
    statusType: "success"
  },
  {
    id: "SIM-2024-087",
    name: "Single Clinician Night Shift",
    details: "Emergency intake on call skeleton crew",
    timestamp: "Oct 24, 21:05",
    acq: "20 c/h",
    bw: "50 Mbps",
    reviewers: "1 MD",
    throughput: "13.2 c/h",
    avgWait: "52.8 m",
    peakQueue: "28 cases",
    status: "SLA Breach Risk",
    statusType: "danger"
  },
  {
    id: "SIM-2024-085",
    name: "Mobile Van Low Bandwidth",
    details: "Cellular tethering edge node sync test",
    timestamp: "Oct 23, 11:20",
    acq: "28 c/h",
    bw: "2 Mbps",
    reviewers: "2 MDs",
    throughput: "24.1 c/h",
    avgWait: "28.4 m",
    peakQueue: "18 cases",
    status: "Within SLA",
    statusType: "success"
  }
];

export default function Simulation() {
  const [acqRate, setAcqRate] = useState(25);
  const [bandwidth, setBandwidth] = useState("15 Mbps (DSL)");
  const [reviewers, setReviewers] = useState(3);
  const [readingTime, setReadingTime] = useState(4.5);
  const [peakSurge, setPeakSurge] = useState(true);
  const [autoTriage, setAutoTriage] = useState(true);
  const [simulating, setSimulating] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase flex items-center gap-2">
              <span>STATION ANALYTICS • WORKFLOW MODELING</span>
              <span>•</span>
              <span className="text-[#0f766e]">ACTIVE MODEL: RETINET-DR V2.4</span>
            </div>
            <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">Operational Simulation &amp; Scenarios</h1>
            <p className="text-xs text-[#64748b] mt-0.5">
              Test screening station queue throughput, model ingestion capacity, and clinician staffing models under variable intake loads and latency conditions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 text-xs text-[#334155] bg-white border border-[#d9e2ec] rounded-lg">
              <option>Preset: Routine Polyclinic Shift (Standard)</option>
              <option>Preset: Mobile Outreach Camp (High Volume)</option>
              <option>Preset: Remote Clinic (Bandwidth Constrained)</option>
            </select>
            <button className="px-3 py-1.5 text-xs font-semibold text-[#0f766e] bg-[#f0f9f8] hover:bg-[#e1f3f0] rounded-lg border border-[#ccede8]">
              Reset Defaults
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <h2 className="text-xs font-bold text-[#0b1c30]">Simulation Configuration Parameters</h2>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#0f766e] bg-[#f0f9f8] px-2 py-0.5 rounded border border-[#d1ebe7]">
                Monte Carlo Engine
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-[#334155]">Acquisition Rate (cases/hr)</span>
                <span className="font-bold text-[#0b1c30] font-mono px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0]">
                  {acqRate} <span className="text-[10px] font-normal text-[#64748b]">cs/h</span>
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={acqRate}
                onChange={(e) => setAcqRate(Number(e.target.value))}
                className="accent-[#0f766e] cursor-pointer mt-1"
              />
              <div className="flex justify-between text-[10px] text-[#94a3b8]">
                <span>5 min</span>
                <span>Standard Triage Baseline</span>
                <span>100 min</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-[#334155]">
                <span>Uplink Bandwidth (DICOM Sync)</span>
                <span className="text-[10px] text-[#64748b]">Latency: 42ms</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["5 Mbps (Edge)", "15 Mbps (DSL)", "100+ (Fiber)"].map((bw) => (
                  <button
                    key={bw}
                    type="button"
                    onClick={() => setBandwidth(bw)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition ${
                      bandwidth === bw
                        ? "bg-[#084c47] text-white border-[#084c47]"
                        : "bg-white text-[#475569] border-[#d9e2ec] hover:bg-[#f8fafc]"
                    }`}
                  >
                    {bw}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-[#334155]">Reviewers (MDs)</span>
                <div className="flex items-center border border-[#d9e2ec] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setReviewers(Math.max(1, reviewers - 1))}
                    className="px-3 py-1 text-[#64748b] hover:bg-[#f1f5f9] font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-xs text-[#0b1c30]">{reviewers}</span>
                  <button
                    type="button"
                    onClick={() => setReviewers(reviewers + 1)}
                    className="px-3 py-1 text-[#64748b] hover:bg-[#f1f5f9] font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-[10px] text-[#94a3b8]">Target: 3 Attending on duty</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-[#334155]">Reading Time</span>
                <div className="flex items-center border border-[#d9e2ec] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setReadingTime(Math.max(1, Number((readingTime - 0.5).toFixed(1))))}
                    className="px-3 py-1 text-[#64748b] hover:bg-[#f1f5f9] font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-xs text-[#0b1c30]">{readingTime}m</span>
                  <button
                    type="button"
                    onClick={() => setReadingTime(Number((readingTime + 0.5).toFixed(1)))}
                    className="px-3 py-1 text-[#64748b] hover:bg-[#f1f5f9] font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-[10px] text-[#94a3b8]">Refinement validation + grading</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-[#f1f5f9]">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={peakSurge}
                  onChange={(e) => setPeakSurge(e.target.checked)}
                  className="mt-0.5 rounded accent-[#0f766e]"
                />
                <div>
                  <div className="text-xs font-semibold text-[#0b1c30]">Peak Surge Modeling (+35% 10:00 - 12:00)</div>
                  <p className="text-[10px] text-[#64748b]">Simulates morning walk-in accumulation spike typical of tertiary clinics.</p>
                </div>
              </label>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoTriage}
                  onChange={(e) => setAutoTriage(e.target.checked)}
                  className="mt-0.5 rounded accent-[#0f766e]"
                />
                <div>
                  <div className="text-xs font-semibold text-[#0b1c30]">Auto-triage High Confidence (Level 0 skips 60%)</div>
                  <p className="text-[10px] text-[#64748b]">Normal baseline scans bypass secondary human reads automatically.</p>
                </div>
              </label>
            </div>

            <button
              type="button"
              onClick={() => {
                setSimulating(true);
                setTimeout(() => setSimulating(false), 800);
              }}
              className="w-full mt-2 py-2.5 px-4 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{simulating ? "Computing 10,000 Iterations..." : "Run Simulation (10,000 iterations)"}</span>
            </button>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#f1f5f9]">
                <h2 className="text-xs font-bold text-[#0b1c30]">Projected Operational Impact</h2>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#166534] bg-[#f0fdf4] px-2 py-0.5 rounded border border-[#bbf7d0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Converged (99.4% confidence)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="text-[10px] font-bold text-[#64748b] uppercase">Throughput per Hour</div>
                  <div className="text-2xl font-bold text-[#0b1c30] mt-1">32.4 <span className="text-xs font-normal text-[#64748b]">cases/hr</span></div>
                  <div className="text-[10px] text-[#16a34a] font-medium mt-1">
                    ▲ Demand: 25 cases/hr (129.6% absorption)
                  </div>
                </div>

                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="text-[10px] font-bold text-[#64748b] uppercase">Peak Queue Length</div>
                  <div className="text-2xl font-bold text-[#0b1c30] mt-1">14 <span className="text-xs font-normal text-[#64748b]">cases backlog</span></div>
                  <div className="text-[10px] text-[#0f766e] font-medium mt-1">
                    ■ Buffer Safe (&lt;20 cap)
                  </div>
                </div>

                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="text-[10px] font-bold text-[#64748b] uppercase">Average Wait Minutes</div>
                  <div className="text-2xl font-bold text-[#0b1c30] mt-1">16.2 <span className="text-xs font-normal text-[#64748b]">minutes</span></div>
                  <div className="text-[10px] text-[#16a34a] font-medium mt-1">
                    • Target: &lt;30 min (Within SLA)
                  </div>
                </div>

                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="text-[10px] font-bold text-[#64748b] uppercase">Longest Wait Minutes</div>
                  <div className="text-2xl font-bold text-[#0b1c30] mt-1">41.5 <span className="text-xs font-normal text-[#64748b]">minutes (p99)</span></div>
                  <div className="text-[10px] text-[#d97706] font-medium mt-1">
                    ▲ SLA Ceiling: 60 min (18.5 min margin)
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div className="flex items-center justify-between text-xs font-bold text-[#0b1c30] mb-2">
                  <span>Queue Saturation &amp; Backlog Trajectory (08:00 - 18:00)</span>
                  <div className="flex items-center gap-3 text-[10px] font-normal text-[#64748b]">
                    <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-red-400"></span> Clinician Clearance Cap</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-xs bg-[#3b82f6]/40"></span> Simulated Patient Queue</span>
                  </div>
                </div>
                <div className="h-28 w-full relative flex items-end justify-center overflow-hidden pt-4 pb-2 border-b border-[#e2e8f0]">
                  <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 90 Q 150 90, 180 30 T 220 30 Q 250 90, 380 90 Z"
                      fill="url(#curveGradient)"
                    />
                    <path
                      d="M 20 90 Q 150 90, 180 30 T 220 30 Q 250 90, 380 90"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    />
                    <line x1="10" y1="20" x2="390" y2="20" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="310" y="16" fill="#ef4444" fontSize="8" fontFamily="monospace">Max Cap: 45 cases/hr</text>
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[#94a3b8] mt-1">
                  <span>08:00</span>
                  <span>10:00 (Surge Peak)</span>
                  <span>12:00</span>
                  <span>14:00</span>
                  <span>16:00</span>
                  <span>18:00</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#f0f9f8] border border-[#d1ebe7] rounded-xl flex items-start gap-2 text-xs text-[#0f766e]">
              <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="font-bold">Operational Staffing Recommendation:</strong>
                <p className="text-[11px] text-[#084c47] mt-0.5">
                  Recommended: Add 1 additional clinician between 11:00-13:00 to prevent queue accumulation exceeding 45 minutes during the midday influx.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-xs font-bold text-[#0b1c30]">Historical Simulation Runs</h2>
                <p className="text-[10px] text-[#64748b]">Archive of evaluated staffing scenarios, stress tests, and queue parameters for audit and compliance.</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <button className="px-2.5 py-1 rounded-md bg-[#084c47] text-white text-[11px] font-semibold">
                  All Scenarios
                </button>
                <button className="px-2.5 py-1 rounded-md text-[#475569] hover:bg-[#f1f5f9] text-[11px]">
                  Compliant (&lt;30m SLA)
                </button>
                <button className="px-2.5 py-1 rounded-md text-[#475569] hover:bg-[#f1f5f9] text-[11px]">
                  Overcapacity Risks
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10px] font-bold text-[#64748b] uppercase">
                    <th className="py-2.5 px-3">Scenario Name / ID</th>
                    <th className="py-2.5 px-3">Timestamp</th>
                    <th className="py-2.5 px-3">Acquisition</th>
                    <th className="py-2.5 px-3">Bandwidth</th>
                    <th className="py-2.5 px-3">Reviewers</th>
                    <th className="py-2.5 px-3">Throughput</th>
                    <th className="py-2.5 px-3">Avg Wait</th>
                    <th className="py-2.5 px-3">Peak Queue</th>
                    <th className="py-2.5 px-3">SLA Status</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f5f9]">
                  {historicalRuns.map((run) => (
                    <tr key={run.id} className="hover:bg-[#f8fafc]/60 transition">
                      <td className="py-2.5 px-3">
                        <div className="font-bold text-[#0b1c30] text-[11px]">{run.id}</div>
                        <div className="text-[10px] font-semibold text-[#0f766e]">{run.name}</div>
                        <div className="text-[9px] text-[#94a3b8]">{run.details}</div>
                      </td>
                      <td className="py-2.5 px-3 text-[10px] text-[#64748b] font-mono">{run.timestamp}</td>
                      <td className="py-2.5 px-3 font-mono text-[11px] font-semibold">{run.acq}</td>
                      <td className="py-2.5 px-3 font-mono text-[11px]">{run.bw}</td>
                      <td className="py-2.5 px-3 font-semibold text-[#334155]">{run.reviewers}</td>
                      <td className="py-2.5 px-3 font-bold font-mono text-[#0b1c30]">{run.throughput}</td>
                      <td className="py-2.5 px-3 font-mono text-[#475569]">{run.avgWait}</td>
                      <td className="py-2.5 px-3 font-mono text-[#475569]">{run.peakQueue}</td>
                      <td className="py-2.5 px-3">
                        {run.statusType === "success" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {run.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fef2f2] text-[#dc2626] border border-[#fecaca]">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            {run.status}
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <button className="text-[11px] text-[#0f766e] font-semibold hover:underline">
                          Load Parameters
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#94a3b8] pt-1">
            <span>Operational simulation logs retention: 90 days audit policy.</span>
            <span>Model Version RetiNet-DR v2.4 (Build 88219)</span>
          </div>
        </div>
      </div>
    </>
  );
}
