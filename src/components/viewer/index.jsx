import React, { useState } from "react";

export function RetinalViewer({
  imageUrl = "/retinal/fundus-1.png",
  patientRef = "P-4012",
  modality = "45° Non-Mydriatic Digital Fundus"
} = {}) {
  const [activeMode, setActiveMode] = useState("heatmap");
  const [zoom, setZoom] = useState(1.0);
  const [inverted, setInverted] = useState(false);
  const [showOverlays, setShowOverlays] = useState(true);

  const handleZoom = (delta) => {
    setZoom((prev) => Math.min(Math.max(Number((prev + delta).toFixed(2)), 0.8), 2.5));
  };

  const getImageStyle = () => {
    if (activeMode === "original") {
      return { filter: inverted ? "invert(1)" : "none" };
    }
    if (activeMode === "clahe") {
      return { filter: inverted ? "invert(1) contrast(1.4)" : "contrast(1.35) brightness(1.05) saturate(1.15)" };
    }
    return { filter: inverted ? "invert(1) contrast(1.2)" : "contrast(1.1)" };
  };

  return (
    <div className="bg-slate-950 rounded-xl overflow-hidden min-h-[580px] flex flex-col justify-between relative shadow-lg border border-slate-800">
      <div className="h-14 px-4 bg-slate-900/90 backdrop-blur-md flex items-center justify-between text-slate-200 z-20 border-b border-slate-800">
        <div className="flex items-center p-1 bg-slate-950 rounded-lg gap-1 border border-slate-800">
          <button
            onClick={() => setActiveMode("original")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeMode === "original" ? "bg-teal-700 text-white shadow-xs" : "text-slate-400 hover:text-white"
            }`}
          >
            Original
          </button>
          <button
            onClick={() => setActiveMode("clahe")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeMode === "clahe" ? "bg-teal-700 text-white shadow-xs" : "text-slate-400 hover:text-white"
            }`}
          >
            CLAHE Enhanced
          </button>
          <button
            onClick={() => setActiveMode("heatmap")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeMode === "heatmap" ? "bg-teal-700 text-white shadow-xs" : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            Grad-CAM Heatmap
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setInverted(!inverted)}
            className={`px-2.5 py-1 text-xs font-medium rounded-md border flex items-center gap-1 transition ${
              inverted ? "bg-slate-700 text-white border-slate-600" : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
            }`}
            title="Invert Colors for Microaneurysm Isolation"
          >
            <span className="material-symbols-outlined text-[15px]">invert_colors</span>
            Invert
          </button>
          <button
            onClick={() => setShowOverlays(!showOverlays)}
            className={`px-2.5 py-1 text-xs font-medium rounded-md border flex items-center gap-1 transition ${
              showOverlays ? "bg-slate-700 text-white border-slate-600" : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">layers</span>
            Lesions
          </button>

          <div className="flex items-center bg-slate-800 rounded-md border border-slate-700 p-0.5">
            <button
              onClick={() => handleZoom(-0.2)}
              className="p-1 hover:text-white text-slate-400 disabled:opacity-30"
              disabled={zoom <= 0.8}
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="text-[11px] font-mono px-2 text-slate-300 select-none">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => handleZoom(0.2)}
              className="p-1 hover:text-white text-slate-400 disabled:opacity-30"
              disabled={zoom >= 2.5}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center p-6 overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
        <div
          className="relative transition-transform duration-200 ease-out origin-center select-none"
          style={{ transform: `scale(${zoom})` }}
        >
          <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-2 border-slate-700 shadow-2xl bg-black">
            <img
              src={imageUrl}
              alt="Patient Fundus Examination"
              className="w-full h-full object-cover"
              style={getImageStyle()}
            />

            {activeMode === "heatmap" && (
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-75"
                style={{
                  background:
                    "radial-gradient(circle at 45% 55%, rgba(239, 68, 68, 0.85) 0%, rgba(245, 158, 11, 0.6) 20%, rgba(34, 197, 94, 0.3) 40%, transparent 65%)"
                }}
              />
            )}

            {showOverlays && (
              <>
                <div
                  className="absolute border border-rose-500 bg-rose-500/20 rounded-xs flex items-start p-1 pointer-events-none"
                  style={{ top: "52%", left: "42%", width: "55px", height: "45px" }}
                >
                  <span className="text-[8px] bg-rose-600 text-white font-mono px-0.5 rounded leading-none">
                    MA #1
                  </span>
                </div>
                <div
                  className="absolute border border-amber-400 bg-amber-400/20 rounded-xs flex items-start p-1 pointer-events-none"
                  style={{ top: "46%", left: "54%", width: "70px", height: "55px" }}
                >
                  <span className="text-[8px] bg-amber-500 text-slate-900 font-bold font-mono px-0.5 rounded leading-none">
                    HEM #2
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 pointer-events-none text-slate-400 font-mono text-[11px] bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
          <div>PATIENT: {patientRef}</div>
          <div>SENSOR: {modality}</div>
          <div>COLOR DEPTH: 24-bit RGB sRGB</div>
        </div>
      </div>
    </div>
  );
}
