import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const clinicalSamples = [
  {
    id: "PK-4012",
    title: "Normal Fundus - Baseline",
    badge: "Verified Clean Quality",
    badgeType: "success",
    format: "2048x1536 PNG • 4.2 MB",
    modality: "Digital Retinal Camera",
    fov: "45° FOV",
    image: "/retinal/fundus-3.png",
    caseId: "DR-2024-8841"
  },
  {
    id: "PK-3189",
    title: "Mild NPDR / Microaneurysms",
    badge: "Triage Priority",
    badgeType: "warning",
    format: "2160x1800 PNG • 3.8 MB",
    modality: "Digital Retinal Camera",
    fov: "50° FOV",
    image: "/retinal/fundus-1.png",
    caseId: "DR-2024-8842"
  },
  {
    id: "PK-8821",
    title: "Suspected Glaucoma / CDR = 0.7",
    badge: "Triage Priority",
    badgeType: "warning",
    format: "2048x1536 PNG • 4.8 MB",
    modality: "Digital Retinal Camera",
    fov: "Disc Focus",
    image: "/retinal/fundus-2.png",
    caseId: "DR-2024-8843"
  },
  {
    id: "PK-4410",
    title: "Macular Edema Risk",
    badge: "High Quality Scan",
    badgeType: "success",
    format: "3000x2000 JPEG • 6.1 MB",
    modality: "Digital Retinal Camera",
    fov: "45° FOV",
    image: "/retinal/fundus-4.png",
    caseId: "DR-2024-8844"
  }
];

export default function Upload() {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [loadingSample, setLoadingSample] = useState(null);

  const handleLoadSample = (caseId, sampleId) => {
    setLoadingSample(sampleId);
    setTimeout(() => {
      navigate(`/cases/${caseId}`);
    }, 500);
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f0f9f8] text-[#0f766e] text-[10px] font-bold tracking-wider uppercase mb-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Retinal Screening</span>
          </div>
          <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">Upload retinal image</h1>
          <p className="text-xs text-[#64748b] mt-0.5">
            Upload a retinal photograph to check for diabetic retinopathy. Use an image or photograph, not fundus, in operator-facing text.
          </p>
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); handleLoadSample("DR-2024-8841", "drag"); }}
          className={`border border-dashed rounded-xl py-9 px-6 bg-white flex flex-col items-center justify-center text-center transition ${
            dragActive ? "border-[#0f766e] bg-[#f0f9f8]/60" : "border-[#cbd5e1] hover:border-[#94a3b8]"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-[#eff6ff] text-[#3b82f6] flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h3 className="text-xs font-bold text-[#0b1c30]">
            Drag a retinal image here or choose a file
          </h3>
          <span className="text-[11px] text-[#94a3b8] mt-0.5">JPEG or PNG</span>

          <button
            onClick={() => handleLoadSample("DR-2024-8841", "browse")}
            className="mt-3.5 px-4 py-2 bg-[#084c47] hover:bg-[#063b37] text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span>Browse Local Files</span>
          </button>

          <div className="flex items-center gap-4 text-[10px] text-[#64748b] mt-3 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-[#0f766e]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Lossless preferred
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Max file size 25MB
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-[#0b1c30]">
              Or select a pre-loaded clinical reference sample
            </h2>
            <span className="text-[10px] text-[#94a3b8] font-mono">Benchmark Cohort v1.3</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clinicalSamples.map((sample) => (
              <div key={sample.id} className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex flex-col justify-between shadow-xs hover:border-[#cbd5e1] transition">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    {sample.badgeType === "success" ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803d]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                        {sample.badge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#b45309]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                        {sample.badge}
                      </span>
                    )}

                    <svg className="w-3.5 h-3.5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  <div className="relative w-full h-36 bg-[#0c121e] rounded-lg overflow-hidden flex items-center justify-center border border-[#1e293b]">
                    <img src={sample.image} alt={sample.title} className="w-28 h-28 object-cover rounded-full shadow-lg" />
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[9px] font-mono px-1.5 py-0.5 rounded border border-white/20">
                      {sample.fov}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-xs font-bold text-[#0b1c30]">{sample.title}</h3>
                    <div className="text-[10px] text-[#0f766e] font-semibold mt-0.5">
                      Patient: {sample.id}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#64748b] mt-2 pt-2 border-t border-[#f1f5f9]">
                      <span>Format: {sample.format}</span>
                    </div>
                    <div className="text-[10px] text-[#64748b]">
                      Modality: {sample.modality}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleLoadSample(sample.caseId, sample.id)}
                  disabled={loadingSample === sample.id}
                  className="w-full mt-3 py-1.5 px-3 bg-[#f0f9f8] hover:bg-[#e1f3f0] text-[#0f766e] border border-[#ccede8] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>{loadingSample === sample.id ? "Loading..." : "Load Sample"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f0f4f9] rounded-xl border border-[#e2e8f0] p-4 text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]/80">
            <div className="flex items-center gap-2 font-bold text-[#0b1c30]">
              <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span>Operator Ingestion Specifications</span>
            </div>
            <span className="text-[10px] font-mono text-[#64748b]">ISO/DIS 10940</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 text-[11px]">
            <div>
              <div className="font-bold text-[#0b1c30] flex items-center gap-1.5 mb-1">
                <span className="text-[#0f766e]">■</span> DICOM • Full Anonymized
              </div>
              <p className="text-[#64748b] leading-relaxed text-[10px]">
                All PHI header tags must be stripped before ingestion. Client-side checksums auto-verified.
              </p>
            </div>
            <div>
              <div className="font-bold text-[#0b1c30] flex items-center gap-1.5 mb-1">
                <span className="text-[#0f766e]">■</span> &ge; 1000px Resolution
              </div>
              <p className="text-[#64748b] leading-relaxed text-[10px]">
                Sub-megapixel images degrade deep biomarker detection and are automatically rejected.
              </p>
            </div>
            <div>
              <div className="font-bold text-[#0b1c30] flex items-center gap-1.5 mb-1">
                <span className="text-[#d97706]">■</span> Centering Mandate
              </div>
              <p className="text-[#64748b] leading-relaxed text-[10px]">
                Macula or Optic Disc must be centered within the inner 60% circle of the optical sensor frame.
              </p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#e2e8f0]/80 flex items-center justify-between text-[10px]">
            <span className="text-[#0f766e] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              System Protocol 30.1.0 Validation Enabled
            </span>
            <a href="#" className="text-[#0f766e] font-semibold hover:underline flex items-center gap-0.5">
              Review Full Protocol Manual &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
