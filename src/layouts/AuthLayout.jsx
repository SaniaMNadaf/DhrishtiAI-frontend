import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function AuthLayout({ children } = {}) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

      <div className="relative z-10 max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
              <span className="material-symbols-outlined text-[24px]">visibility</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">DhristiAI</span>
          </Link>
          <p className="text-slate-400 text-sm">Tomorrow&apos;s Vision Starts Today</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-8 backdrop-blur-md">
          <Outlet />
        </div>

        <div className="text-center mt-6 text-xs text-slate-500">
          Clinical Decision Support Prototype • Medical Device Grade Access Control
        </div>
      </div>
    </div>
  );
}
