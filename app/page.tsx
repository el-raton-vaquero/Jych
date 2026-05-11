import Image from "next/image";
import Link from "next/link";

export default function PaginaInicial() {
  return (
    <div
      style={{ background: "#FEBE8A", fontFamily: "'DM Sans', sans-serif" }}
      className="relative flex min-h-screen w-full overflow-hidden"
    >
      {/* ── Lado izquierdo ── */}
      <div className="relative flex flex-[1.1] flex-col items-center justify-center px-10 py-16 text-center">

        {/* Círculos decorativos de fondo */}
        <div
          style={{ border: "1.5px solid #6F421C22" }}
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full"
        />
        <div
          style={{ border: "1.5px solid #6F421C22" }}
          className="pointer-events-none absolute -bottom-10 -right-5 h-44 w-44 rounded-full"
        />
        <div
          style={{ background: "#6F421C0D" }}
          className="pointer-events-none absolute bottom-16 left-8 h-24 w-24 rounded-full"
        />

        {/* Separador vertical sutil */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent, #BF8B5C44, transparent)",
          }}
          className="absolute right-0 top-[8%] h-[84%] w-px"
        />

        {/* Logo */}
        <div className="relative mb-6">
          <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-[20px]">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={72}
              height={72}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Badge decorativo */}
          <div
            style={{ background: "#BF8B5C", border: "2px solid #FEBE8A" }}
            className="absolute -right-1.5 -top-1.5 h-5 w-5 rounded-full"
          />
        </div>

        {/* Eyebrow */}
        <p
          style={{ color: "#8B5B34", letterSpacing: "0.12em" }}
          className="mb-4 text-[11px] font-medium uppercase"
        >
          Sistema de mantenimiento
        </p>

        {/* Título principal */}
        <h1
          style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
          className="mb-3 text-[2.4rem] font-bold leading-[1.2]"
        >
          Mantén tu
          <br />
          maquinaria
          <br />
          <em style={{ color: "#8B5B34", fontStyle: "italic", fontWeight: 400 }}>
            siempre
          </em>{" "}
          activa.
        </h1>

        {/* Subtítulo */}
        <p
          style={{ color: "#8B5B34" }}
          className="mx-auto mb-8 max-w-[260px] text-sm font-light leading-relaxed"
        >
          Automatización inteligente de mantenimiento preventivo para equipos
          industriales.
        </p>

        {/* Métricas */}
        <div className="flex items-stretch gap-6">
          {[
            { num: "99%", label: "Uptime" },
            { num: "24/7", label: "Monitoreo" },
            { num: "-40%", label: "Fallas" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-stretch gap-6">
              {i > 0 && (
                <div
                  style={{ background: "#6F421C22" }}
                  className="w-px self-stretch"
                />
              )}
              <div className="flex flex-col items-center gap-1">
                <span
                  style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
                  className="text-[1.6rem] font-bold"
                >
                  {stat.num}
                </span>
                <span
                  style={{ color: "#BF8B5C", letterSpacing: "0.08em" }}
                  className="text-[10px] uppercase"
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lado derecho ── */}
      <div className="flex flex-1 items-center justify-center px-8 py-12">
        <div
          style={{
            background: "#FFFDF5",
            boxShadow: "0 8px 32px #BF8B5C33, 0 1px 4px #BF8B5C22",
          }}
          className="w-full max-w-xs rounded-[20px] p-10"
        >
          <p
            style={{ color: "#6F421C", fontFamily: "Georgia, serif" }}
            className="mb-1 text-xl font-bold"
          >
            ¿Cómo podemos ayudarte?
          </p>
          <p style={{ color: "#BF8B5C" }} className="mb-8 text-xs">
            Selecciona una opción para continuar
          </p>

          <div className="flex flex-col gap-6">
            {/* Botón — Reportar anomalía */}
            <div className="flex flex-col gap-1.5">
              <Link
                href="/privilegio-aun-menor"
                style={{ background: "#6F421C", color: "#FEBE8A" }}
                className="block rounded-xl px-5 py-3 text-center text-sm font-medium transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Reportar anomalía
              </Link>
              <p style={{ color: "#BF8B5C" }} className="text-xs leading-relaxed">
                Haga clic para reportar alguna anomalía en la maquinaria.
              </p>
            </div>

            {/* Divisor */}
            <div
              style={{
                background:
                  "linear-gradient(to right, transparent, #BF8B5C33, transparent)",
              }}
              className="h-px"
            />

            {/* Botón — Iniciar sesión */}
            <div className="flex flex-col gap-1.5">
              <Link
                href="/login"
                style={{ borderColor: "#BF8B5C", color: "#6F421C" }}
                className="block rounded-xl border-[1.5px] bg-transparent px-5 py-3 text-center text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#BF8B5C18]"
              >
                Iniciar sesión
              </Link>
              <p style={{ color: "#BF8B5C" }} className="text-xs leading-relaxed">
                Inicie sesión para acceder a su información.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}