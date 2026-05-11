"use client";

import { useState } from "react";

interface FormData {
  codigo: string;
  maquinaria: string;
  descripcion: string;
}

export default function PrivilegioAunMenor() {
  const [form, setForm] = useState<FormData>({
    codigo: "",
    maquinaria: "",
    descripcion: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    // TODO: enviar datos al backend
    alert("Reporte enviado correctamente.");
    setForm({ codigo: "", maquinaria: "", descripcion: "" });
  };

  const previewDesc =
    form.descripcion.length > 80
      ? form.descripcion.substring(0, 80) + "…"
      : form.descripcion;

  return (
    <div
      style={{ background: "#FEBE8A", fontFamily: "'DM Sans', sans-serif" }}
      className="relative flex min-h-screen items-center justify-center px-6 py-10"
    >
      {/* ── Tarjeta del formulario ── */}
      <div
        style={{
          background: "#FFFDF5",
          boxShadow: "0 8px 32px #BF8B5C33, 0 1px 4px #BF8B5C22",
        }}
        className="w-full max-w-md rounded-[20px] p-8"
      >
        {/* Header */}
        <div
          style={{ borderBottom: "1px solid #BF8B5C22" }}
          className="mb-8 flex items-center gap-3 pb-5"
        >
          <div
            style={{ background: "#6F421C" }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FEBE8A"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <p
              style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
              className="text-lg font-bold"
            >
              Reportar anomalía
            </p>
            <p style={{ color: "#BF8B5C" }} className="text-xs">
              Complete todos los campos para enviar el reporte
            </p>
          </div>
        </div>

        {/* Campo: Código de trabajador */}
        <div className="mb-5 flex flex-col gap-1.5">
          <label
            style={{ color: "#8B5B34", letterSpacing: "0.04em" }}
            className="text-[11px] font-medium uppercase"
          >
            Código de trabajador
          </label>
          <input
            name="codigo"
            value={form.codigo}
            onChange={handleChange}
            maxLength={20}
            placeholder="Ej. TRB-00142"
            style={{
              background: "#FFF8EE",
              border: "1.5px solid #BF8B5C55",
              color: "#6F421C",
            }}
            className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#BF8B5C99] focus:border-[#6F421C]"
          />
        </div>

        {/* Campo: Maquinaria (combobox) */}
        <div className="mb-5 flex flex-col gap-1.5">
          <label
            style={{ color: "#8B5B34", letterSpacing: "0.04em" }}
            className="text-[11px] font-medium uppercase"
          >
            Maquinaria
          </label>
          <div className="relative">
            <select
              name="maquinaria"
              value={form.maquinaria}
              onChange={handleChange}
              style={{
                background: "#FFF8EE",
                border: "1.5px solid #BF8B5C55",
                color: form.maquinaria ? "#6F421C" : "#BF8B5C99",
                appearance: "none",
              }}
              className="w-full cursor-pointer rounded-xl px-3.5 py-2.5 pr-9 text-sm outline-none transition-all focus:border-[#6F421C]"
            >
              <option value="" disabled>
                Selecciona la maquinaria
              </option>
              {[0,1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)} style={{ color: "#6F421C" }}>
                  Motor Industrial X-20{n}
                </option>
              ))}
            </select>
            {/* Chevron */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#BF8B5C"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute right-3.5 top-1/2 h-3 w-3 -translate-y-1/2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Campo: Descripción */}
        <div className="mb-6 flex flex-col gap-1.5">
          <label
            style={{ color: "#8B5B34", letterSpacing: "0.04em" }}
            className="text-[11px] font-medium uppercase"
          >
            Descripción de la anomalía
          </label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            maxLength={500}
            rows={5}
            placeholder="Describa detalladamente la anomalía observada en la maquinaria..."
            style={{
              background: "#FFF8EE",
              border: "1.5px solid #BF8B5C55",
              color: "#6F421C",
              resize: "none",
            }}
            className="w-full rounded-xl px-3.5 py-2.5 text-sm leading-relaxed outline-none transition-all placeholder:text-[#BF8B5C99] focus:border-[#6F421C]"
          />
          <span style={{ color: "#BF8B5C" }} className="self-end text-[11px]">
            {form.descripcion.length} / 500
          </span>
        </div>

        {/* Botón enviar */}
        <button
          onClick={handleSubmit}
          style={{
            background: "#FEBE8A",
            color: "#6F421C",
            border: "2px solid #6F421C",
            boxShadow: "3px 3px 0px #6F421C",
          }}
          className="w-full rounded-xl py-3 text-sm font-semibold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:[box-shadow:1px_1px_0px_#6F421C] active:scale-[0.98]"
        >
          Enviar reporte
        </button>
      </div>

      {/* ── Modal de confirmación ── */}
      {modalOpen && (
        <div
          style={{ background: "rgba(58, 32, 14, 0.55)" }}
          className="absolute inset-0 flex items-center justify-center rounded-2xl"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div
            style={{
              background: "#FFFDF5",
              boxShadow: "0 16px 48px #6F421C44",
            }}
            className="mx-4 w-full max-w-xs rounded-[18px] p-7"
          >
            {/* Ícono */}
            <div
              style={{ background: "#FEBE8A" }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6F421C"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            <p
              style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
              className="mb-2 text-center text-lg font-bold"
            >
              ¿Confirmar reporte?
            </p>
            <p style={{ color: "#8B5B34" }} className="mb-5 text-center text-[13px] leading-relaxed">
              Revisa la información antes de enviar. Una vez confirmado, el
              reporte será registrado en el sistema.
            </p>

            {/* Preview de datos */}
            <div
              style={{ background: "#FFF0DC" }}
              className="mb-5 rounded-xl px-4 py-3 text-[12px]"
            >
              {[
                { label: "Trabajador", value: form.codigo || "—" },
                {
                  label: "Maquinaria",
                  value: form.maquinaria
                    ? `Maquinaria ${form.maquinaria}`
                    : "—",
                },
                { label: "Descripción", value: previewDesc || "—" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{ color: "#6F421C" }}
                  className="flex justify-between gap-4 py-1"
                >
                  <span style={{ color: "#BF8B5C" }} className="font-medium shrink-0">
                    {label}
                  </span>
                  <span className="text-right">{value}</span>
                </div>
              ))}
            </div>

            {/* Acciones */}
            <div className="flex gap-2.5">
              <button
                onClick={() => setModalOpen(false)}
                style={{ borderColor: "#BF8B5C", color: "#6F421C" }}
                className="flex-1 rounded-xl border-[1.5px] bg-transparent py-2.5 text-[13px] transition-all hover:bg-[#BF8B5C18]"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                style={{ background: "#6F421C", color: "#FEBE8A" }}
                className="flex-1 rounded-xl py-2.5 text-[13px] font-medium transition-all hover:bg-[#8B5C2A]"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
