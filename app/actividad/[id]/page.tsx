import React from "react";
import Link from "next/link";

export default async function ActividadDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const mockTask = {
    id: id,
    task_type: "CORRECTIVE",
    priority: "HIGH",
    description:
      "Revisión de bomba de agua del motor en linea 1. Nivel de agua bajo",
    status: "PENDING",
    equipment_name: "Motor Industrial X-200",
    equipment_type: "Mecánico",
    equipment_status: "OPERATIONAL",
    assigned_technician_name: "Carlos Mendoza",
    reporter_name: "Operador J. Pérez (ID: OP-1042)",
    failure_classification: "Desgaste Normal / Mantenimiento Programado",
    llm_summary:
      "El historial del equipo indica que el último mantenimiento preventivo fue hace 30 días. Se sugiere especial atención a las bandas de transmisión debido a fallas previas similares en otros equipos del mismo lote.",
    preliminary_diagnosis: "N/A - Tarea programada",
    scheduled_date: "2026-05-11T18:00:00Z",
    created_at: "2026-05-01T10:00:00Z",
  };

  const priorityBadge: Record<string, { bg: string; text: string; border: string }> = {
    CRITICAL: { bg: "#fdecea", text: "#c0392b", border: "#f5c6c6" },
    HIGH: { bg: "#FFF0DC", text: "#8B5B34", border: "#e8c99a" },
    MEDIUM: { bg: "#fffbe6", text: "#856404", border: "#ffe58f" },
    LOW: { bg: "#eaf6ee", text: "#276749", border: "#b2dfca" },
  };

  const statusBadge: Record<string, { bg: string; text: string; border: string }> = {
    PENDING: { bg: "#FFF8EE", text: "#8B5B34", border: "#BF8B5C55" },
    IN_PROGRESS: { bg: "#e8f0fe", text: "#1a56a0", border: "#c3d7fa" },
    COMPLETED: { bg: "#eaf6ee", text: "#276749", border: "#b2dfca" },
  };

  const taskTypeTranslations: Record<string, string> = {
    PREVENTIVE: "Preventivo",
    CORRECTIVE: "Correctivo",
    INSPECTION: "Inspección",
  };

  const pBadge = priorityBadge[mockTask.priority] ?? priorityBadge.MEDIUM;
  const sBadge = statusBadge[mockTask.status] ?? statusBadge.PENDING;

  return (
    <div
      style={{ background: "#FEBE8A", fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen p-6"
    >
      <div className="mx-auto max-w-4xl">

        {/* Volver */}
        <Link
          href="/privilegio-mayor"
          style={{ color: "#6F421C" }}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al Panel
        </Link>

        {/* Header */}
        <div
          style={{
            background: "#FFFDF5",
            boxShadow: "0 4px 20px #BF8B5C22",
            borderLeft: "4px solid #6F421C",
          }}
          className="mb-6 overflow-hidden rounded-2xl p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span style={{ color: "#BF8B5C" }} className="text-xs font-bold uppercase tracking-wider">
                  Actividad #{mockTask.id}
                </span>
                {/* Tipo */}
                <span
                  style={{ background: "#FFF0DC", color: "#6F421C", border: "1px solid #BF8B5C55" }}
                  className="rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide"
                >
                  {taskTypeTranslations[mockTask.task_type] ?? mockTask.task_type}
                </span>
                {/* Prioridad */}
                <span
                  style={{ background: pBadge.bg, color: pBadge.text, border: `1px solid ${pBadge.border}` }}
                  className="rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide"
                >
                  Prioridad {mockTask.priority}
                </span>
                {/* Estado */}
                <span
                  style={{ background: sBadge.bg, color: sBadge.text, border: `1px solid ${sBadge.border}` }}
                  className="rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide"
                >
                  {mockTask.status}
                </span>
              </div>

              <h1 style={{ color: "#6F421C", fontFamily: "Georgia, serif" }} className="mb-2 text-3xl font-bold">
                {mockTask.equipment_name}
              </h1>
              <p style={{ color: "#BF8B5C" }} className="text-sm">
                Reportado por:{" "}
                <span style={{ color: "#6F421C" }} className="font-medium">
                  {mockTask.reporter_name}
                </span>
              </p>
            </div>

            {/* Técnico asignado */}
            <div
              style={{ background: "#FFF0DC", border: "1px solid #BF8B5C44" }}
              className="min-w-[190px] rounded-xl p-4"
            >
              <p style={{ color: "#BF8B5C" }} className="mb-2 text-[10px] font-bold uppercase tracking-wider">
                Técnico Asignado
              </p>
              <div className="flex items-center gap-3">
                <div
                  style={{ background: "#6F421C", color: "#FEBE8A" }}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                >
                  {mockTask.assigned_technician_name.charAt(0)}
                </div>
                <p style={{ color: "#6F421C" }} className="font-medium text-sm">
                  {mockTask.assigned_technician_name}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Columna principal */}
          <div className="space-y-6 md:col-span-2">
            <div
              style={{ background: "#FFFDF5", boxShadow: "0 4px 20px #BF8B5C22" }}
              className="rounded-2xl p-8"
            >
              <h2
                style={{ color: "#6F421C", fontFamily: "Georgia, serif", borderBottom: "1px solid #BF8B5C22" }}
                className="mb-4 pb-3 text-xl font-bold"
              >
                Descripción de la Tarea
              </h2>
              <p style={{ color: "#8B5B34" }} className="mb-6 leading-relaxed">
                {mockTask.description}
              </p>

              <h3 style={{ color: "#BF8B5C" }} className="mb-2 text-xs font-bold uppercase tracking-wider">
                Diagnóstico Preliminar
              </h3>
              <div
                style={{ background: "#FFF0DC", border: "1px solid #BF8B5C33", color: "#6F421C" }}
                className="mb-6 rounded-xl p-4 text-sm"
              >
                {mockTask.preliminary_diagnosis}
              </div>

              <h3 style={{ color: "#6F421C" }} className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Sugerencia IA (Gemini)
              </h3>
              <div
                style={{ background: "#FFF8EE", border: "1px solid #BF8B5C44" }}
                className="rounded-xl p-5"
              >
                <p style={{ color: "#6F421C" }} className="leading-relaxed text-sm">
                  {mockTask.llm_summary}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Detalles del equipo */}
            <div
              style={{ background: "#FFFDF5", boxShadow: "0 4px 20px #BF8B5C22" }}
              className="rounded-2xl p-6"
            >
              <h2
                style={{ color: "#6F421C", fontFamily: "Georgia, serif", borderBottom: "1px solid #BF8B5C22" }}
                className="mb-4 pb-2 text-base font-bold"
              >
                Detalles del Equipo
              </h2>
              <div className="space-y-4">
                <div>
                  <p style={{ color: "#BF8B5C" }} className="mb-0.5 text-[10px] font-bold uppercase tracking-wider">
                    Tipo de Equipo
                  </p>
                  <p style={{ color: "#6F421C" }} className="font-medium text-sm">
                    {mockTask.equipment_type}
                  </p>
                </div>
                <div>
                  <p style={{ color: "#BF8B5C" }} className="mb-1 text-[10px] font-bold uppercase tracking-wider">
                    Estado Actual
                  </p>
                  <span
                    style={{ background: "#eaf6ee", color: "#276749", border: "1px solid #b2dfca" }}
                    className="inline-block rounded-lg px-2.5 py-1 text-xs font-bold"
                  >
                    {mockTask.equipment_status}
                  </span>
                </div>
                <div>
                  <p style={{ color: "#BF8B5C" }} className="mb-0.5 text-[10px] font-bold uppercase tracking-wider">
                    Clasificación de Falla
                  </p>
                  <p style={{ color: "#6F421C" }} className="text-sm">
                    {mockTask.failure_classification}
                  </p>
                </div>
              </div>
            </div>

            {/* Programación */}
            <div
              style={{ background: "#FFFDF5", boxShadow: "0 4px 20px #BF8B5C22" }}
              className="rounded-2xl p-6"
            >
              <h2
                style={{ color: "#6F421C", fontFamily: "Georgia, serif", borderBottom: "1px solid #BF8B5C22" }}
                className="mb-4 pb-2 text-base font-bold"
              >
                Programación
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg style={{ color: "#BF8B5C" }} className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p style={{ color: "#BF8B5C" }} className="text-[10px] font-bold uppercase tracking-wider">
                      Fecha Programada
                    </p>
                    <p style={{ color: "#6F421C" }} className="text-sm font-medium">
                      {new Date(mockTask.scheduled_date).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg style={{ color: "#BF8B5C" }} className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p style={{ color: "#BF8B5C" }} className="text-[10px] font-bold uppercase tracking-wider">
                      Creado el
                    </p>
                    <p style={{ color: "#6F421C" }} className="text-sm">
                      {new Date(mockTask.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div
              style={{ background: "#6F421C" }}
              className="rounded-2xl p-6"
            >
              <h2 style={{ color: "#FEBE8A", fontFamily: "Georgia, serif" }} className="mb-4 text-base font-bold">
                Acciones de Tarea
              </h2>
              <button
                style={{
                  background: "#FEBE8A",
                  color: "#6F421C",
                  border: "2px solid #3d2008",
                  boxShadow: "3px 3px 0px #3d2008",
                }}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:[box-shadow:1px_1px_0px_#3d2008]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Marcar Completada
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#FEBE8A",
                  border: "1.5px solid #BF8B5C",
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:bg-[#FEBE8A22]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar Actividad
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}