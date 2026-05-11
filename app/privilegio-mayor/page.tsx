"use client";

import React, { useState } from "react";
import Link from "next/link";

const mockTechnicians = [
  {
    id: 1,
    username: "carlos_tec",
    name: "Carlos Mendoza",
    email: "carlos@empresa.com",
    role: "TECHNICIAN",
    tasks: [
      {
        id: 101,
        task_type: "CORRECTIVE",
        priority: "HIGH",
        description: "Revisión de bomba de agua del motor en linea 1.",
        status: "PENDING",
        equipment_name: "Motor Industrial X-200",
        scheduled_date: "2026-05-15T08:00:00Z",
      },
      {
        id: 102,
        task_type: "CORRECTIVE",
        priority: "CRITICAL",
        description: "Falla en el sistema de enfriamiento.",
        status: "IN_PROGRESS",
        equipment_name: "Bomba de Agua B-3",
        scheduled_date: "2026-05-12T10:00:00Z",
      },
    ],
  },
  {
    id: 2,
    username: "ana_mantenimiento",
    name: "Ana Silva",
    email: "ana@empresa.com",
    role: "TECHNICIAN",
    tasks: [
      {
        id: 103,
        task_type: "INSPECTION",
        priority: "MEDIUM",
        description: "Inspección de rutina en cableado eléctrico del panel C.",
        status: "PENDING",
        equipment_name: "Panel Eléctrico C",
        scheduled_date: "2026-05-20T09:00:00Z",
      },
    ],
  },
  {
    id: 3,
    username: "luis_mec",
    name: "Luis Torres",
    email: "luis@empresa.com",
    role: "TECHNICIAN",
    tasks: [],
  },
];

const priorityBadge: Record<string, { bg: string; color: string; border: string }> = {
  CRITICAL: { bg: "#fdecea", color: "#c0392b", border: "#f5c6c6" },
  HIGH: { bg: "#FFF0DC", color: "#8B5B34", border: "#e8c99a" },
  MEDIUM: { bg: "#fffbe6", color: "#856404", border: "#ffe58f" },
  LOW: { bg: "#eaf6ee", color: "#276749", border: "#b2dfca" },
};

const taskTypeTranslations: Record<string, string> = {
  PREVENTIVE: "Preventivo",
  CORRECTIVE: "Correctivo",
  INSPECTION: "Inspección",
};

export default function PrivilegioMayor() {
  const [expandedTech, setExpandedTech] = useState<number | null>(null);

  const toggleTech = (id: number) =>
    setExpandedTech(expandedTech === id ? null : id);

  return (
    <div
      style={{ background: "#FEBE8A", fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen p-6"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <header className="mb-10">
          <h1
            style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
            className="text-4xl font-bold tracking-tight"
          >
            Panel de Supervisión
          </h1>
          <p style={{ color: "#8B5B34" }} className="mt-2 text-base font-light">
            Vista de Privilegio Mayor. Selecciona un técnico para ver sus actividades pendientes.
          </p>
        </header>

        {/* Lista de técnicos */}
        <div className="space-y-5">
          {mockTechnicians.map((tech) => (
            <div
              key={tech.id}
              style={{
                background: "#FFFDF5",
                boxShadow: "0 4px 20px #BF8B5C22",
              }}
              className="overflow-hidden rounded-2xl transition-all duration-200"
            >
              {/* Fila del técnico */}
              <div
                onClick={() => toggleTech(tech.id)}
                style={{ borderBottom: expandedTech === tech.id ? "1px solid #BF8B5C22" : "none" }}
                className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-[#FFF0DC55]"
              >
                <div className="flex items-center gap-4">
                  <div
                    style={{ background: "#6F421C", color: "#FEBE8A" }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold"
                  >
                    {tech.name.charAt(0)}
                  </div>
                  <div>
                    <h2 style={{ color: "#6F421C" }} className="text-lg font-semibold">
                      {tech.name}
                    </h2>
                    <p style={{ color: "#BF8B5C" }} className="text-sm">
                      @{tech.username} &bull; {tech.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    style={
                      tech.tasks.length > 0
                        ? { background: "#FFF0DC", color: "#6F421C", border: "1px solid #BF8B5C55" }
                        : { background: "#f1efe8", color: "#8B5B34", border: "1px solid #BF8B5C33" }
                    }
                    className="rounded-full px-4 py-1 text-sm font-medium"
                  >
                    {tech.tasks.length}{" "}
                    {tech.tasks.length === 1 ? "actividad" : "actividades"}
                  </span>
                  <svg
                    style={{ color: "#BF8B5C" }}
                    className={`h-5 w-5 transition-transform duration-300 ${expandedTech === tech.id ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Tareas expandibles */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedTech === tech.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                style={{ background: "#FFF8EE" }}
              >
                <div className="space-y-4 p-6">
                  {tech.tasks.length > 0 ? (
                    tech.tasks.map((task) => {
                      const pb = priorityBadge[task.priority] ?? priorityBadge.MEDIUM;
                      return (
                        <div
                          key={task.id}
                          style={{
                            background: "#FFFDF5",
                            border: "1px solid #BF8B5C33",
                          }}
                          className="flex flex-col justify-between gap-4 rounded-xl p-5 transition-all hover:border-[#BF8B5C88] md:flex-row md:items-center"
                        >
                          <div className="flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span style={{ color: "#BF8B5C" }} className="text-xs font-bold">
                                #{task.id}
                              </span>
                              <span
                                style={{ background: "#FFF0DC", color: "#6F421C", border: "1px solid #BF8B5C44" }}
                                className="rounded px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
                              >
                                {taskTypeTranslations[task.task_type] ?? task.task_type}
                              </span>
                              <span
                                style={{ background: pb.bg, color: pb.color, border: `1px solid ${pb.border}` }}
                                className="rounded px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
                              >
                                {task.priority}
                              </span>
                            </div>
                            <h3 style={{ color: "#6F421C" }} className="mb-1 text-base font-semibold">
                              {task.equipment_name}
                            </h3>
                            <p style={{ color: "#8B5B34" }} className="line-clamp-2 text-sm font-light">
                              {task.description}
                            </p>
                          </div>

                          <div className="flex flex-col items-center gap-3 sm:flex-row md:mt-0">
                            <div className="hidden text-right text-sm xl:block">
                              <p style={{ color: "#BF8B5C" }}>Programada para:</p>
                              <p style={{ color: "#6F421C" }} className="font-medium">
                                {new Date(task.scheduled_date).toLocaleDateString()}
                              </p>
                            </div>
                            <Link
                              href={`/actividad/${task.id}`}
                              style={{
                                background: "#6F421C",
                                color: "#FFFDF5",
                                border: "2px solid #3d2008",
                                boxShadow: "3px 3px 0px #3d2008",
                              }}
                              className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:[box-shadow:1px_1px_0px_#3d2008] sm:w-auto"
                            >
                              <span>Ver Detalles</span>
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-8 text-center">
                      <svg
                        style={{ color: "#BF8B5C" }}
                        className="mx-auto mb-3 h-12 w-12 opacity-40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p style={{ color: "#6F421C" }} className="text-base font-medium">
                        Este técnico no tiene actividades pendientes.
                      </p>
                      <p style={{ color: "#BF8B5C" }} className="mt-1 text-sm">
                        ¡Todo al día!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
