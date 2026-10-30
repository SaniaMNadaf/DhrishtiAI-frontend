import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { mockAuth } from "@/utils/auth";

import LoginPage from "@/pages/Login";
import UploadPage from "@/pages/Upload";
import CasesTablePage from "@/pages/CasesTable";
import CaseResultPage from "@/pages/CaseResult";
import EvaluationPage from "@/pages/Evaluation";
import SummaryPage from "@/pages/Summary";
import SimulationPage from "@/pages/Simulation";
import AdminUsersPage from "@/pages/admin/AdminUsers";
import AdminAuditPage from "@/pages/admin/AdminAudit";
import AdminModelsPage from "@/pages/admin/AdminModels";

export function ProtectedRoute({ children, allowedRoles }) {
  const location = useLocation();

  if (!mockAuth.isAuthenticated()) {
    return <Navigate to={`/login?from=${encodeURIComponent(location.pathname)}`} replace />;
  }

  const user = mockAuth.getUser();
  const currentRole = (user?.role || "operator").toLowerCase();

  // If specific roles required, check authorization
  if (allowedRoles && !allowedRoles.map(r => r.toLowerCase()).includes(currentRole)) {
    // Redirect unauthorized attempt to user's permitted default landing page
    const defaultRoute = mockAuth.getDefaultRoute(currentRole);
    return <Navigate to={defaultRoute} replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Root Layout for all dashboard pages */}
      <Route element={<AppLayout />}>
        {/* Operator & Clinician Routes */}
        <Route
          index
          element={
            <ProtectedRoute allowedRoles={["operator", "clinician"]}>
              <UploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="upload"
          element={
            <ProtectedRoute allowedRoles={["operator", "clinician"]}>
              <UploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="cases"
          element={
            <ProtectedRoute allowedRoles={["operator", "clinician"]}>
              <CasesTablePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="cases/:id"
          element={
            <ProtectedRoute allowedRoles={["operator", "clinician"]}>
              <CaseResultPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="evaluation"
          element={
            <ProtectedRoute allowedRoles={["operator", "clinician"]}>
              <EvaluationPage />
            </ProtectedRoute>
          }
        />

        {/* Planner Routes */}
        <Route
          path="summary"
          element={
            <ProtectedRoute allowedRoles={["planner"]}>
              <SummaryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="simulation"
          element={
            <ProtectedRoute allowedRoles={["planner"]}>
              <SimulationPage />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="admin/users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminUsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/audit"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminAuditPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/models"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminModelsPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Fallback for any unknown route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
