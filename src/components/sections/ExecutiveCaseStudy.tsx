import React, { useState } from 'react';
import {
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Radio,
  Users,
  Scale,
  ArrowUpRight,
  Terminal,
} from 'lucide-react';

interface MacroWork {
  number: string;
  period: string;
  name: string;
  production: string;
  role: string;
  statement: string;
  highlights: string[];
  metrics: string[];
  heroImage: string;
  secondaryImage: string;
  quote: string;
  tagBg: string;
}

interface TransferableCompetency {
  title: string;
  subtitle: string;
  icon: 'sparkles' | 'radio' | 'users' | 'scale';
  outputs: string[];
  corporateValue: string;
  badge: string;
}

export const ExecutiveCaseStudy: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Las Tres Macro-Obras auténticas reflejadas en la plataforma
  const works: MacroWork[] = [
    {
      number: "01",
      period: "2020 — 2021",
      name: "LA MUERTE SIMBÓLICA & LA LIBERACIÓN",
      production: "Cuarentena Rap",
      role: "Dirección Creativa · Narrativa Transmedia · Red Internacional",
      statement: "Conversión del trauma del confinamiento por COVID-19 en un certamen poético ritual de 8 portales dimensionales (Muerte, Tumbas, Karmas, Liberación). Integración de los 4 elementos del hip-hop, registro adaptativo vertical (9:16) y horizontal (16:9), y federación de ligas de 5 países bajo rúbricas éticas transparentes.",
      highlights: [
        "Certamen conceptual con cosmología iniciática y 8 portales interactivos",
        "Integración plena de MCing, Breaking, Beatmaking exclusivo y Beatbox",
        "Archivo de 160 publicaciones oficiales con dirección de arte y gráfica propia"
      ],
      metrics: ["160 Entregas Documentadas", "5 Países Federados", "4 Elementos 2H"],
      heroImage: "/covers/instagram/CIOORNBA_Pg.jpg",
      secondaryImage: "/covers/instagram/CGjb8FRAGms.jpg",
      quote: "El hip-hop no como mero espectáculo, sino como dispositivo ritual de sanación colectiva y memoria viva en tiempos de aislamiento.",
      tagBg: "bg-neutral-900 text-white",
    },
    {
      number: "02",
      period: "2019 — 2021",
      name: "SOBERANÍA LÍRICA & LA VOZ EN EL HORMIGÓN",
      production: "Rap Beauchef · Dueñas de la Voz",
      role: "Producción Acústica · Paridad de Género · Arquitectura Discord (+12k)",
      statement: "Acondicionamiento y montaje sonoro en el anfiteatro de la Facultad de Ciencias Físicas y Matemáticas (FCFM, U. de Chile). Creación de 'Dueñas de la Voz' como certamen pionero de igualdad de tarima para mujeres, y posterior despliegue de un servidor Discord internacional con canales Opus sin latencia.",
      highlights: [
        "Rigging acústico y sonido autogestionado en anfiteatro universitario (+400 asistentes/fecha)",
        "Creación de 'Dueñas de la Voz': visibilización femenina y consagración de QUEENA",
        "Servidor Discord internacional con canales VoIP Opus a 64kbps sin desfase"
      ],
      metrics: ["+12,400 Miembros Discord", "Canales Opus 64kbps", "Final Histórica QUEENA"],
      heroImage: "/covers/instagram/B1k2tdFgYoK.jpg",
      secondaryImage: "/covers/instagram/CBV5veZFbFw.jpg",
      quote: "Cuando el mundo está en silencio, hasta una sola voz en el anfiteatro se vuelve un trueno.",
      tagBg: "bg-[#9d174d] text-white",
    },
    {
      number: "03",
      period: "2019 — 2020",
      name: "LA CALLE COMO TRINCHERA DE SOLIDARIDAD",
      production: "Rap Libre",
      role: "Articulación Popular · Acopio Humanitario · Resistencia Territorial",
      statement: "Transformación de las plazas públicas de Santiago (Parque Almagro, Bustamante, San Borja) en plataformas de dignidad ciudadana durante el estallido social: la rima callejera convertida en acopio directo de víveres, abrigo y botiquines para damnificados de incendios y personas en situación de calle.",
      highlights: [
        "Ocupación pacífica y cultural del espacio público en contexto de crisis social",
        "Campañas de acopio solidario con entrega directa a asambleas territoriales",
        "100% autogestión ética, horizontal y sin financiamiento corporativo"
      ],
      metrics: ["Plazas de Santiago", "100% Solidaridad Popular", "Cero Lucro Corporativo"],
      heroImage: "/covers/instagram/B46IqYzHJkB.jpg",
      secondaryImage: "/covers/instagram/B42bAbtnntp.jpg",
      quote: "Conquistar el espacio público no para vender marcas, sino para abrigar y alimentar la resistencia comunitaria.",
      tagBg: "bg-[#991b1b] text-white",
    },
  ];

  // Matriz de Competencias Profesionales Transferibles
  const transferableCompetencies: TransferableCompetency[] = [
    {
      title: "Dirección Creativa, Narrativa Transmedia & Worldbuilding",
      subtitle: "Concepción conceptual, universo de marca y dirección de arte visual",
      icon: "sparkles",
      badge: "DIRECCIÓN ARTÍSTICA",
      outputs: [
        "Diseño del universo conceptual de 8 portales iniciáticos (Muerte, Tumbas, Karmas y Liberación).",
        "Dirección de arte y diseño gráfico para más de 160 publicaciones oficiales y afiches editoriales.",
        "Redacción poética de manifiestos, bases y rúbricas competitivas con valor literario."
      ],
      corporateValue: "Capacidad comprobada para concebir universos de marca integrales, campañas con narrativa inmersiva de alta pregnancia y dirección de arte con rigor estético."
    },
    {
      title: "Producción Ejecutiva, Rigging Acústico & Broadcast en Vivo",
      subtitle: "Ingeniería de sonido en directo, streaming multicámara y coordinación de eventos",
      icon: "radio",
      badge: "PRODUCCIÓN TÉCNICA",
      outputs: [
        "Acondicionamiento y rigging acústico autogestionado en el Anfiteatro FCFM (U. de Chile) para +400 personas.",
        "Mesa de transmisión multicámara en vivo vía OBS con enrutamiento de audio sin desfase para miles de espectadores.",
        "Coordinación técnica simultánea de jurados y competidores en 5 países sin presupuesto institucional."
      ],
      corporateValue: "Liderazgo técnico en eventos masivos y transmisiones en vivo bajo alta demanda, optimización rigurosa de presupuestos y resolución ágil de problemas en directo."
    },
    {
      title: "Arquitectura de Comunidades Digitales & Gestión de Crisis",
      subtitle: "Escalamiento a +12,400 usuarios, canales Opus y gobernanza comunitaria",
      icon: "users",
      badge: "COMMUNITY SYSTEMS",
      outputs: [
        "Despliegue y escalamiento de servidor Discord pionero con +12.400 miembros activos en 5 países durante la pandemia.",
        "Configuración de canales de voz con códec Opus a 64-96kbps sin compresión destructiva para batallas en tiempo real.",
        "Automatización de bots para asignación de roles, sorteos competitivos y protocolos de moderación pacífica."
      ],
      corporateValue: "Diseño de infraestructura digital, moderación masiva de comunidades, retención de audiencias y facilitación de dinámicas colaborativas complejas."
    },
    {
      title: "Ética Competitiva, Rúbricas & Equidad de Género (DEI)",
      subtitle: "Gobernanza imparcial, resolución de disputas y creación de espacios seguros",
      icon: "scale",
      badge: "GOBERNANZA & DEI",
      outputs: [
        "Creación de 'Dueñas de la Voz', certamen y conversatorio pionero de visibilización lírica femenina universitaria.",
        "Diseño de rúbricas matriciales transparentes de evaluación decimal, erradicando insultos vacíos o discriminatorios.",
        "Dirección de cuerpos colegiados de jurados internacionales con emisión de fallos argumentados por escrito."
      ],
      corporateValue: "Diseño de marcos de evaluación por mérito objetivo, políticas de Diversidad, Equidad e Inclusión (DEI) y mediación imparcial en entornos competitivos."
    }
  ];

  const handleCopyMarkdownLetter = () => {
    const text = `# Daniel S. Santander Urrutia — Resumen Ejecutivo & Dossier Cultural
**Roles:** Director Creativo · Productor Ejecutivo · Arquitecto de Comunidades · Diseñador de Rúbricas
**Periodo de Operaciones:** 2019 – 2021 | Santiago de Chile
**Fuente Primaria Verificada:** https://www.instagram.com/cuarentenarap/ (160 publicaciones · Acreditación formal en biografía: @dani.santanderurrutia)

---

## Declaración Ejecutiva (Executive Statement)
Mi trayectoria en producción cultural y liderazgo se fundamenta en un principio operativo: transformar momentos de crisis extrema —como el confinamiento pandémico por COVID-19 o el estallido social de 2019— en dispositivos colectivos de resiliencia comunitaria, rigor de ingeniería y alta calidad artística.

A lo largo de tres producciones emblemáticas entre 2019 y 2021:
1. **Cuarentena Rap (2020–2021):** Diseñé y dirigí una liga conceptual multiplataforma estructurada en 8 portales dimensionales (Muerte, Tumbas, Karmas y Liberación), integrando los 4 elementos del hip-hop (MCing, Breaking, Beatmaking exclusivo y Beatboxing) y federando una red de jurados y plazas en Chile, Argentina, Colombia, Perú y México bajo rúbricas decimales transparentes.
2. **Rap Beauchef (2019–2021):** Autogestioné el montaje técnico y acústico en el Anfiteatro FCFM de la Universidad de Chile (+400 asistentes/fecha), impulsé el certamen pionero de soberanía lírica femenina 'Dueñas de la Voz' (consagrando a QUEENA) y escalé un servidor de Discord a más de 12.400 miembros con canales de audio Opus sin latencia.
3. **Rap Libre (2019–2020):** Conquisté plazas públicas de Santiago para articular campañas de acopio directo de toneladas de ayuda para damnificados por megaincendios y personas en situación de calle en plena coyuntura de movilización social.

---

## Métricas de Impacto Comprobable:
- **+12,400 miembros** gestionados en infraestructura digital propia con canales de voz sin latencia.
- **5 países federados** de forma descentralizada y autogestionada (Chile, Argentina, Colombia, Perú, México).
- **160 entregas documentadas** con autoría, dirección y gráficas verificables en fuente primaria pública.
- **Integración plena de las 4 disciplinas del hip-hop** (MCing, Breaking, Beatmaking, Beatbox).
- **100% autogestión e independencia** con enfoque de solidaridad comunitaria y cero financiamiento corporativo.

---

## Matriz de Competencias Profesionales Transferibles:
1. **Dirección Creativa & Narrativa Transmedia:** Worldbuilding conceptual, curaduría de más de 160 piezas de arte gráfico, redacción poética de bases y manifiestos de alto impacto.
2. **Producción Técnica & Rigging Broadcast:** Acústica en anfiteatros, microfonía dinámica, streaming multicámara vía OBS y coordinación de transmisiones internacionales en vivo.
3. **Arquitectura de Comunidades Digitales (+12.4k miembros):** Servidores Discord con códec Opus sin latencia, automatización de bots, protocolos de moderación a gran escala.
4. **Ética Competitiva, Rúbricas & DEI:** Rúbricas matriciales transparentes sin discriminación, creación del certamen femenino pionero 'Dueñas de la Voz' y mediación colegiada internacional.

Contacto / Archivo Web: Disponible en el Dossier Interactivo de Competencias de Rap.
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-[#fbfbfa] text-neutral-900 py-16 sm:py-24 border-b border-neutral-300 transition-colors duration-500 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. CURATORIAL LETTERHEAD / MEMBRETE EDITORIAL DE ALTA DIRECCIÓN            */}
        {/* ========================================================================= */}
        <div className="border-b border-neutral-300 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-neutral-900 text-white px-2.5 py-0.5 rounded font-bold">
                CASO DE ESTUDIO · DIRECCIÓN & PRODUCCIÓN EJECUTIVA
              </span>
              <span className="font-mono text-xs text-neutral-500">TRIENIO 2019 — 2021</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 font-serif leading-none">
              DANIEL S. SANTANDER URRUTIA
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-sans font-light leading-relaxed">
              Director Creativo · Productor Ejecutivo · Arquitecto de Comunidades · Diseñador de Rúbricas
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={handleCopyMarkdownLetter}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Resumen Copiado al Portapapeles</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Resumen para CV / Fondos</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. DECLARACIÓN DE OBRA & TELEMETRÍA DE IMPACTO                            */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block font-bold">
              DECLARACIÓN OPERATIVA
            </span>
            <p className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-snug tracking-tight">
              &ldquo;Transformar la crisis extrema —desde el confinamiento sanitario hasta la agitación social— en <span className="underline decoration-neutral-400 underline-offset-4 font-semibold">dispositivos colectivos de resiliencia comunitaria</span>, rigor de ingeniería y alta calidad artística.&rdquo;
            </p>
          </div>

          {/* Scale Telemetry: 4 Clean Minimal Strips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-neutral-300">
            <div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-neutral-950">
                +12.4k
              </div>
              <div className="font-mono text-xs text-neutral-700 uppercase font-bold mt-1">
                Comunidad en Discord
              </div>
              <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                Canales Opus de audio sin latencia
              </p>
            </div>

            <div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-neutral-950">
                5 Países
              </div>
              <div className="font-mono text-xs text-neutral-700 uppercase font-bold mt-1">
                Red Federada
              </div>
              <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                Chile, Arg, Col, Perú, México
              </p>
            </div>

            <div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-neutral-950">
                4 / 4
              </div>
              <div className="font-mono text-xs text-neutral-700 uppercase font-bold mt-1">
                Elementos del Hip-Hop
              </div>
              <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                MCing, Breaking, Beatmaking, Beatbox
              </p>
            </div>

            <div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-neutral-950">
                160
              </div>
              <div className="font-mono text-xs text-neutral-700 uppercase font-bold mt-1">
                Entregas Registradas
              </div>
              <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                Archivo oficial en Instagram
              </p>
            </div>
          </div>

          {/* Canonical Verification Banner: Primary Source */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    FUENTE PRIMARIA VERIFICADA
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    160 ENTREGAS CATALOGADAS EN INSTAGRAM
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Acreditación Canónica de Autoría, Dirección & Gráficas
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans max-w-2xl">
                  Certificación documental pública en la biografía oficial de <strong className="text-white">@cuarentenarap</strong>: <em>&ldquo;Producción, Dirección y Gráficas: M S T ! Z V J E @dani.santanderurrutia&rdquo;</em>, respaldando la autoría intelectual, curaduría de arte y ejecución técnica de la trilogía.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/cuarentenarap/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 transition-all font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0 shadow-md group"
            >
              <span>Ver Archivo Oficial</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. LAS TRES MACRO-OBRAS (CATÁLOGO RAZONADO & RESULTADOS COMPROBABLES)     */}
        {/* ========================================================================= */}
        <div className="space-y-24 pt-8 border-t border-neutral-300">
          
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block font-bold">
              CATÁLOGO RAZONADO DE PRODUCCIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              Las Tres Macro-Obras
            </h2>
            <p className="text-sm text-neutral-600 font-sans max-w-2xl">
              Tres hitos ejecutados entre 2019 y 2021 que abarcan el espacio público urbano, la arena universitaria y la infraestructura digital transfronteriza.
            </p>
          </div>

          {works.map((work, idx) => (
            <div
              key={work.number}
              className="relative space-y-8"
            >
              
              {/* Massive Number Watermark */}
              <div className="select-none pointer-events-none font-serif text-[120px] sm:text-[180px] font-black text-neutral-200/60 leading-none -mb-16 sm:-mb-24 -ml-4">
                {work.number}
              </div>

              {/* Main Artwork Showcase Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Visual Artwork Composition */}
                <div className={`lg:col-span-7 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  
                  {/* Primary Canvas with Gallery Frame & Soft Shadow */}
                  <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-neutral-300 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                      <img
                        src={work.heroImage}
                        alt={work.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Secondary Stamped Image Bleeding Outside the Frame */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 sm:w-48 aspect-square bg-white p-2 sm:p-2.5 rounded-xl border border-neutral-300 shadow-2xl transform rotate-3 hover:scale-105 transition-transform duration-300 hidden sm:block">
                    <img
                      src={work.secondaryImage}
                      alt={work.production}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                </div>

                {/* Editorial Concept & Curation Text */}
                <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded ${work.tagBg}`}>
                        OBRA {work.number}
                      </span>
                      <span className="font-mono text-xs text-neutral-500 font-semibold">
                        {work.period} · {work.production}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 tracking-tight leading-tight">
                      {work.name}
                    </h3>

                    <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                      {work.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
                    {work.statement}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-neutral-200">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Hitos de Ejecución Real:
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-700 font-sans">
                      {work.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-neutral-400 font-mono mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-2 border-neutral-900 pl-4 py-1 italic text-xs sm:text-sm text-neutral-800 font-serif">
                    &ldquo;{work.quote}&rdquo;
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="font-mono text-[11px] bg-white border border-neutral-300 text-neutral-800 px-3 py-1 rounded-full shadow-xs font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ========================================================================= */}
        {/* 4. MATRIZ DE COMPETENCIAS PROFESIONALES TRANSFERIBLES (CV / CORPORATIVO)  */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8 border-t border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-neutral-300">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                TRANSFERABLE LEADERSHIP MATRIX
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                Matriz de Competencias Profesionales Transferibles
              </h2>
            </div>
            <div className="font-mono text-xs text-neutral-500 font-medium">
              TRADUCCIÓN DE LIDERAZGO CULTURAL &rarr; EJECUTIVO
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transferableCompetencies.map((comp, cIdx) => (
              <div
                key={cIdx}
                className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase bg-neutral-100 text-neutral-800 px-2.5 py-0.5 rounded border border-neutral-200">
                      {comp.badge}
                    </span>
                    <h3 className="text-lg font-bold font-serif text-neutral-950 leading-tight pt-1">
                      {comp.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans">
                      {comp.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 flex-shrink-0">
                    {comp.icon === 'sparkles' && <Sparkles className="w-5 h-5 text-amber-600" />}
                    {comp.icon === 'radio' && <Radio className="w-5 h-5 text-cyan-600" />}
                    {comp.icon === 'users' && <Users className="w-5 h-5 text-fuchsia-600" />}
                    {comp.icon === 'scale' && <Scale className="w-5 h-5 text-emerald-600" />}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Salidas Concretas de Producción:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700 font-sans">
                    {comp.outputs.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="text-neutral-400 font-mono mt-0.5">•</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200/80 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800 block">
                    Valor Transferible a Equipos / Empresas:
                  </span>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {comp.corporateValue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. HERRAMIENTAS, STACK & RIGGING TÉCNICO                                  */}
        {/* ========================================================================= */}
        <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold block">
                RIGGING TÉCNICO & TOOLING
              </span>
              <h3 className="font-serif text-xl font-bold text-neutral-950">
                Herramientas e Infraestructura de Producción
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-neutral-100 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Audio & Acústica</span>
              <p className="text-neutral-800 font-medium">Consolas Análogas</p>
              <p className="text-neutral-800 font-medium">Micrófonos Dinámicos</p>
              <p className="text-neutral-600 text-[11px]">Enrutamiento sin feedback</p>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Streaming & Broadcast</span>
              <p className="text-neutral-800 font-medium">OBS Studio Multicámara</p>
              <p className="text-neutral-800 font-medium">YouTube & Twitch Live</p>
              <p className="text-neutral-600 text-[11px]">Sincronía A/V en vivo</p>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">VoIP & Comunidad</span>
              <p className="text-neutral-800 font-medium">Discord Server (+12.4k)</p>
              <p className="text-neutral-800 font-medium">Códec Opus (64–96kbps)</p>
              <p className="text-neutral-600 text-[11px]">Bots de sorteo y moderación</p>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Diseño & Curaduría</span>
              <p className="text-neutral-800 font-medium">Suite Editorial (160+ piezas)</p>
              <p className="text-neutral-800 font-medium">Rúbricas Decimales</p>
              <p className="text-neutral-600 text-[11px]">Archivo Web Inmersivo</p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. FOOTER DEL DOSSIER EJECUTIVO                                           */}
        {/* ========================================================================= */}
        <div className="border-t border-neutral-300 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-neutral-500">
          <div>
            CURADURÍA & DIRECCIÓN EJECUTIVA: <strong>DANIEL S. SANTANDER URRUTIA</strong> (2019–2021)
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cuarentenarap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-950 underline underline-offset-2 flex items-center gap-1"
            >
              <span>@cuarentenarap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span>SANTIAGO DE CHILE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
