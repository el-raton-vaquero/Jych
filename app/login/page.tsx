"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = () => {
    setError(false);

    // TODO: reemplazar con llamada real a la base de datos
    if (codigo === "1") {
      router.push("/privilegio-mayor");
      return;
    }
    if (codigo === "2") {
      router.push("/privilegio-menor");
      return;
    }

    setError(true);
  };

  return (
    <div
      style={{ background: "#FEBE8A", fontFamily: "'DM Sans', sans-serif" }}
      className="flex min-h-screen items-center justify-center px-6 py-10"
    >
      <div
        style={{
          background: "#FFFDF5",
          boxShadow: "0 8px 32px #BF8B5C33, 0 1px 4px #BF8B5C22",
        }}
        className="w-full max-w-sm rounded-[20px] p-8"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div
            style={{ background: "#6F421C" }}
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FEBE8A"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <p
            style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
            className="mb-1 text-xl font-bold"
          >
            Iniciar sesión
          </p>
          <p style={{ color: "#BF8B5C" }} className="text-xs">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Campo: Código */}
        <div className="mb-5 flex flex-col gap-1.5">
          <label
            style={{ color: "#8B5B34", letterSpacing: "0.04em" }}
            className="text-[11px] font-medium uppercase"
          >
            Código de trabajador
          </label>
          <input
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Ej. TRB-00142"
            style={{
              background: "#FFF8EE",
              border: "1.5px solid #BF8B5C55",
              color: "#6F421C",
            }}
            className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#BF8B5C88] focus:border-[#6F421C]"
          />
        </div>

        {/* Campo: Contraseña */}
        <div className="mb-5 flex flex-col gap-1.5">
          <label
            style={{ color: "#8B5B34", letterSpacing: "0.04em" }}
            className="text-[11px] font-medium uppercase"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              style={{
                background: "#FFF8EE",
                border: "1.5px solid #BF8B5C55",
                color: "#6F421C",
              }}
              className="w-full rounded-xl px-3.5 py-2.5 pr-10 text-sm outline-none transition-all placeholder:text-[#BF8B5C88] focus:border-[#6F421C]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              style={{ color: "#BF8B5C" }}
              className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors hover:text-[#6F421C]"
              aria-label="Mostrar contraseña"
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            style={{ background: "#fdecea", color: "#c0392b" }}
            className="mb-4 rounded-xl px-4 py-2.5 text-xs"
          >
            Código o contraseña incorrectos. Inténtalo de nuevo.
          </div>
        )}

        {/* Botón */}
        <button
          onClick={handleLogin}
          style={{
            background: "#6F421C",
            color: "#FFFDF5",
            border: "2px solid #3d2008",
            boxShadow: "3px 3px 0px #3d2008",
          }}
          className="w-full rounded-xl py-3 text-sm font-semibold transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:[box-shadow:1px_1px_0px_#3d2008] active:[box-shadow:none] active:translate-x-[2px] active:translate-y-[2px]"
        >
          Iniciar sesión
        </button>

        {/* Volver */}
        <a
          href="/"
          style={{ color: "#BF8B5C" }}
          className="mt-5 block text-center text-xs transition-colors hover:text-[#6F421C]"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}