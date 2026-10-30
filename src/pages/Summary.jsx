import React, { useState } from "react";


const hourlyBars = [
  { hour: "08:00", complete: 16, triage: 6, total: 22 },
  { hour: "09:00", complete: 24, triage: 8, total: 32 },
  { hour: "10:00", complete: 30, triage: 9, total: 39 },
  { hour: "11:00", complete: 28, triage: 7, total: 35 },
  { hour: "12:00", complete: 14, triage: 9, total: 23 },
  { hour: "13:00", complete: 22, triage: 7, total: 29 },
  { hour: "14:00", complete: 32, triage: 6, total: 38 },
  { hour: "15:00", complete: 26, triage: 8, total: 34 },
  { hour: "16:00", complete: 18, triage: 4, total: 22 },
  { hour: "17:00", complete: 10, triage: 3, total: 13 }
];

export default function Summary() {
  const [timeFilter, setTimeFilter] = useState("Today");

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase">
              Station Analytics • Fleet Monitoring — <span className="text-[#0f766e]">Station Group G4-A</span>
            </div>
            <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">Operational Summary</h1>
            <p className="text-xs text-[#64748b] mt-0.5">
              Real-time workflow monitoring, triage queue throughput, and clinician review latency across clinical screening stations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#64748b] font-medium hidden sm:inline">
              Last refreshed: 18s ago • Auto-sync active (60s)
            </span>
            <div className="flex items-center bg-[#f1f5f9] p-0.5 rounded-lg border border-[#e2e8f0]">
              {["Today", "Past 7 Days", "Past 30 Days"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTimeFilter(tab)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                    timeFilter === tab
                      ? "bg-[#084c47] text-white shadow-xs"
                      : "text-[#64748b] hover:text-[#0b1c30]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs pb-1 border-b border-[#f1f5f9]">
            <div>
              <h2 className="font-bold text-[#0b1c30] text-sm">Queue Ingestion &amp; Triage Lifecycle</h2>
              <span className="text-[10px] text-[#64748b]">Live telemetry aggregated across 12 connected fundus stations.</span>
            </div>
            <span className="text-xs font-bold text-[#0b1c30]">
              Aggregated Volume: <strong className="text-[#0f766e]">156 Total Operations Today</strong>
            </span>
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-[#64748b] mb-1.5">
              <span>Pipeline Allocation &amp; Routing Split</span>
              <span>100% Volume Distributed</span>
            </div>
            <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-[#f1f5f9]">
              <div style={{ width: "9%" }} className="bg-[#3b82f6]" title="Uploaded (9%)" />
              <div style={{ width: "2%" }} className="bg-[#ef4444]" title="Recapture (2%)" />
              <div style={{ width: "27%" }} className="bg-[#0f766e]" title="Graded (27%)" />
              <div style={{ width: "5%" }} className="bg-[#06b6d4]" title="In Review (5%)" />
              <div style={{ width: "57%" }} className="bg-[#10b981]" title="Reviewed (57%)" />
            </div>
            <div className="flex items-center gap-4 text-[10px] text-[#64748b] mt-2 flex-wrap">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span> Uploaded (9%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ef4444]"></span> Recapture (2%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#0f766e]"></span> Graded (27%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#06b6d4]"></span> In Review (5%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#10b981]"></span> Reviewed (57%)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2">
            <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#64748b] uppercase">
                  <span>Uploaded</span>
                  <svg className="w-3.5 h-3.5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-[#0b1c30] mt-1">14 <span className="text-xs font-normal text-[#64748b]">cases</span></div>
                <p className="text-[10px] text-[#64748b] mt-1 leading-snug">Newly received awaiting automated triage...</p>
              </div>
              <div className="pt-2 border-t border-[#e2e8f0] mt-2 flex justify-between text-[10px] text-[#64748b]">
                <span>Buffer load:</span>
                <strong className="text-[#0b1c30]">Nominal</strong>
              </div>
            </div>

            <div className="p-3 bg-[#fef2f2] rounded-xl border border-[#fee2e2] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#dc2626] uppercase">
                  <span>Needs Recapture</span>
                  <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
                </div>
                <div className="text-xl font-bold text-[#991b1b] mt-1">3 <span className="text-xs font-normal text-[#991b1b]">cases</span></div>
                <p className="text-[10px] text-[#7f1d1d] mt-1 leading-snug">Quality below threshold; flagged for technician...</p>
              </div>
              <div className="pt-2 border-t border-[#fecaca] mt-2 flex justify-between text-[10px] text-[#991b1b]">
                <span>Intervention needed:</span>
                <strong className="text-[#dc2626]">1.8% rate</strong>
              </div>
            </div>

            <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#64748b] uppercase">
                  <span>Graded</span>
                  <svg className="w-3.5 h-3.5 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-[#0b1c30] mt-1">42 <span className="text-xs font-normal text-[#64748b]">cases</span></div>
                <p className="text-[10px] text-[#64748b] mt-1 leading-snug">AI-graded; staged for secondary clinician...</p>
              </div>
              <div className="pt-2 border-t border-[#e2e8f0] mt-2 flex justify-between text-[10px] text-[#64748b]">
                <span>Queue depth:</span>
                <strong className="text-[#0f766e]">Active queue</strong>
              </div>
            </div>

            <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#64748b] uppercase">
                  <span>In Review</span>
                  <svg className="w-3.5 h-3.5 text-[#0284c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-[#0b1c30] mt-1">8 <span className="text-xs font-normal text-[#64748b]">cases</span></div>
                <p className="text-[10px] text-[#64748b] mt-1 leading-snug">Currently opened and undergoing clinician...</p>
              </div>
              <div className="pt-2 border-t border-[#e2e8f0] mt-2 flex justify-between text-[10px] text-[#64748b]">
                <span>Workstation lock:</span>
                <strong className="text-[#0b1c30]">Concurrent</strong>
              </div>
            </div>

            <div className="p-3 bg-[#f0fdf4] rounded-xl border border-[#bbf7d0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#166534] uppercase">
                  <span>Reviewed</span>
                  <svg className="w-3.5 h-3.5 text-[#16a34a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-[#14532d] mt-1">89 <span className="text-xs font-normal text-[#14532d]">cases</span></div>
                <p className="text-[10px] text-[#166534] mt-1 leading-snug">Final clinical assessments finalised...</p>
              </div>
              <div className="pt-2 border-t border-[#bbf7d0] mt-2 flex justify-between text-[10px] text-[#166534]">
                <span>Completion:</span>
                <strong className="text-[#15803d]">57.1%</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col gap-4">
          <div className="flex items-center justify-between pb-1 border-b border-[#f1f5f9]">
            <div>
              <h2 className="font-bold text-[#0b1c30] text-sm">Queue Latency &amp; Cycle Times</h2>
              <span className="text-[10px] text-[#64748b]">Continuous measurements across ingestion, algorithmic inference, and clinician closure.</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f0fdf4] text-[#166534] text-[11px] font-semibold border border-[#bbf7d0]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              98.2% within operational latency targets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">Average Waiting Time</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-[#0b1c30]">18</span>
                <span className="text-xs font-semibold text-[#64748b]">min</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#16a34a] font-semibold mt-1">
                <span>&darr; 4 min vs yesterday</span>
                <span className="text-[#94a3b8] font-normal">• Target: &lt;30 min</span>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e2e8f0] flex items-center justify-between text-[10px] text-[#64748b]">
                <span>Rolling 6-Hour Trend:</span>
                <span className="font-bold text-[#0b1c30] font-mono">18.2 min avg</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">Longest Waiting Time</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-[#0b1c30]">54</span>
                <span className="text-xs font-semibold text-[#64748b]">min</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#d97706] font-semibold mt-1">
                <span>▲ Near SLA limit</span>
                <span className="text-[#94a3b8] font-normal">• Queue cap: 60 min</span>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e2e8f0] flex items-center justify-between text-[10px] text-[#64748b]">
                <span>SLA Threshold Safety Buffer:</span>
                <span className="font-bold text-[#dc2626] font-mono">6 min left</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between">
              <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider mb-2">Phase Interval Latency</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Ingestion &rarr; Graded</span>
                  <span className="font-mono font-bold text-[#0b1c30]">Avg: 2.1 min <span className="text-[10px] text-[#16a34a] font-normal">(Fast Pass)</span></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Graded &rarr; Clinician Review</span>
                  <span className="font-mono font-bold text-[#0b1c30]">Avg: 15.9 min <span className="text-[10px] text-[#64748b] font-normal">(Queue Dep.)</span></span>
                </div>
              </div>
              <div className="text-[10px] text-[#94a3b8] pt-2 border-t border-[#e2e8f0] mt-2">
                All sub-phases run within standard deviation bounds.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-[#0b1c30] text-sm">Queue Flow &amp; Throughput Velocity</h2>
              <span className="text-[10px] text-[#64748b]">Hourly cases completed across active clinical duty shifts (08:00 to 17:00).</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-[#475569]">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#0f766e]"></span>
                Clinical Assessment Complete
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#475569]">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#dbeafe]"></span>
                AI Triage Ingest
              </span>
            </div>
          </div>

          <div className="h-48 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-[#e2e8f0] px-4">
            {hourlyBars.map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                <span className="text-[10px] font-mono text-[#64748b] opacity-0 group-hover:opacity-100 transition">
                  {bar.total}
                </span>
                <div className="w-full max-w-[36px] flex flex-col rounded-t overflow-hidden bg-[#e2e8f0]">
                  <div style={{ height: `${(bar.triage / 40) * 120}px` }} className="bg-[#dbeafe] w-full" />
                  <div style={{ height: `${(bar.complete / 40) * 120}px` }} className="bg-[#0f766e] w-full" />
                </div>
                <span className="text-[10px] font-mono text-[#64748b] mt-1">{bar.hour}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-3">
            <span>*Current active shift in progress</span>
            <span>Peak Velocity: <strong>39 scans/hr</strong> (10:00 - 11:00)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-3 border-t border-[#f1f5f9]">
            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">IMAGE CAPTURE QUALITY INDEX</span>
              <div className="text-sm font-bold text-[#0b1c30] mt-0.5">
                98.08% Valid <span className="text-xs text-[#dc2626] font-normal">(1.92% Recapture)</span>
              </div>
              <p className="text-[10px] text-[#94a3b8] mt-0.5">Within target standard deviation (&plusmn;0.8%)</p>
            </div>

            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">MODEL INGESTION LATENCY</span>
              <div className="text-sm font-bold text-[#0b1c30] mt-0.5">
                1.24s / volume <span className="text-xs text-[#16a34a] font-normal">(Healthy)</span>
              </div>
              <p className="text-[10px] text-[#94a3b8] mt-0.5">Cloud inference nodes operating at nominal capacity</p>
            </div>

            <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase">STATION ROUTING HEALTH</span>
              <div className="text-sm font-bold text-[#0b1c30] mt-0.5">
                12 / 12 Active <span className="text-xs text-[#16a34a] font-normal">(All Synced)</span>
              </div>
              <p className="text-[10px] text-[#94a3b8] mt-0.5">Zero dropped frame packets detected</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#94a3b8] pt-2">
          <span>■ Operational telemetry stream: Dhristi Diagnostics Pipeline v2.6.1</span>
          <span>No PHI is stored or rendered in operational telemetry view • <a href="#" className="text-[#0f766e] underline">Manual Sync</a></span>
        </div>
      </div>
    </>
  );
}
