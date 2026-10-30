"use client";

import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Sidebar, LimitsNoticeBanner } from "@/components/common";

export function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Upload page doesn't show notice in reference screenshot, others do
  const showNotice = location.pathname !== "/" && location.pathname !== "/upload";

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} isSidebarOpen={sidebarOpen} />
      <div className="pt-14 flex-1 flex relative">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {showNotice && <LimitsNoticeBanner />}
          <main className="p-6 w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
