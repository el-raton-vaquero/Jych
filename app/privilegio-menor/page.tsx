import React from "react";
import Link from "next/link";

const mockMyTasks = [
  {
    id: 101,
    task_type: "PREVENTIVE",
    priority: "HIGH",
    description: "Revisión mensual del motor principal en la línea 1.",
    status: "PENDING",
    equipment_name: "Motor Industrial X-200",
    scheduled_date: "2026-05-15T08:00:00Z",
  },
  {
    id: 102,
    task_type: "CORRECTIVE",
    priority: "CRITICAL",
    description: "Falla en el sistema de enfriamiento. Reportado como fuga.",
    status: "IN_PROGRESS",
    equipment_name: "Bomba de Agua B-3",
    scheduled_date: "2026-05-12T10:00:00Z",
  },
];

const priorityBadge: Record<string, { bg: string; color: string; border: string }> = {
  CRITICAL: { bg: "#fdecea", color: "#c0392b", border: "#f5c6c6" },
  HIGH:     { bg: "#FFF0DC", color: "#8B5B34", border: "#e8c99a" },
  MEDIUM:   { bg: "#fffbe6", color: "#856404", border: "#ffe58f" },
  LOW:      { bg: "#eaf6ee", color: "#276749", border: "#b2dfca" },
};

const statusBadge: Record<string, { bg: string; color: string; border: string; label: string }> = {
  PENDING:     { bg: "#FFF8EE", color: "#8B5B34", border: "#BF8B5C55", label: "Pendiente" },
  IN_PROGRESS: { bg: "#e8f0fe", color: "#1a56a0", border: "#c3d7fa", label: "En Progreso" },
  COMPLETED:   { bg: "#eaf6ee", color: "#276749", border: "#b2dfca", label: "Completada" },
};

const taskTypeTranslations: Record<string, string> = {
  PREVENTIVE: "Preventivo",
  CORRECTIVE: "Correctivo",
  INSPECTION: "Inspección",
};

export default function PrivilegioMenor() {
  return (
    <div
      style={{ background: "#FEBE8A", fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen p-6"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <header className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div
                style={{ background: "#6F421C", color: "#FEBE8A" }}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
              >
                C
              </div>
              <h2 style={{ color: "#8B5B34" }} className="text-base font-medium">
                Hola, Carlos Mendoza
              </h2>
            </div>
            <h1
              style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
              className="text-4xl font-bold tracking-tight"
            >
              Mis Actividades
            </h1>
            <p style={{ color: "#8B5B34" }} className="mt-2 text-base font-light">
              Vista de Privilegio Menor (Técnico). Aquí están tus tareas asignadas.
            </p>
          </div>

          <button
            style={{
              background: "#FFFDF5",
              color: "#6F421C",
              border: "1.5px solid #BF8B5C55",
            }}
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all hover:border-[#BF8B5C] hover:bg-[#FFF0DC]"
          >
            <svg
              style={{ color: "#BF8B5C" }}
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtrar Tareas
          </button>
        </header>

        {/* Grid de tareas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mockMyTasks.map((task) => {
            const pb = priorityBadge[task.priority] ?? priorityBadge.MEDIUM;
            const sb = statusBadge[task.status] ?? statusBadge.PENDING;

            return (
              <div
                key={task.id}
                style={{
                  background: "#FFFDF5",
                  boxShadow: "0 4px 20px #BF8B5C22",
                }}
                className="flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
              >
                {/* Cuerpo */}
                <div className="flex-1 p-6">
                  {/* ID + badges */}
                  <div className="mb-4 flex items-center justify-between">
                    <span style={{ color: "#BF8B5C" }} className="text-xs font-bold">
                      #{task.id}
                    </span>
                    <div className="flex gap-2">
                      <span
                        style={{ background: pb.bg, color: pb.color, border: `1px solid ${pb.border}` }}
                        className="rounded px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide"
                      >
                        {task.priority}
                      </span>
                      <span
                        style={{ background: sb.bg, color: sb.color, border: `1px solid ${sb.border}` }}
                        className="rounded px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide"
                      >
                        {sb.label}
                      </span>
                    </div>
                  </div>

                  {/* Tipo */}
                  <span
                    style={{ background: "#FFF0DC", color: "#6F421C", border: "1px solid #BF8B5C44" }}
                    className="mb-3 inline-block rounded px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
                  >
                    {taskTypeTranslations[task.task_type] ?? task.task_type}
                  </span>

                  <h3
                    style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
                    className="mb-2 text-xl font-bold"
                  >
                    {task.equipment_name}
                  </h3>
                  <p style={{ color: "#8B5B34" }} className="mb-4 line-clamp-3 text-sm font-light leading-relaxed">
                    {task.description}
                  </p>

                  {/* Fecha */}
                  <div className="flex items-center gap-2 text-sm">
                    <svg style={{ color: "#BF8B5C" }} className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span style={{ color: "#BF8B5C" }}>Programada:</span>
                    <span style={{ color: "#6F421C" }} className="font-medium">
                      {new Date(task.scheduled_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div
                  style={{ background: "#FFF0DC", borderTop: "1px solid #BF8B5C22" }}
                  className="flex justify-end p-4"
                >
                  <Link
                    href={`/actividad/${task.id}`}
                    style={{
                      background: "#6F421C",
                      color: "#FFFDF5",
                      border: "2px solid #3d2008",
                      boxShadow: "3px 3px 0px #3d2008",
                    }}
                    className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:[box-shadow:1px_1px_0px_#3d2008]"
                  >
                    Continuar Actividad
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}