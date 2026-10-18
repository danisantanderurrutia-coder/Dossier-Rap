import React, { useState } from 'react';
import { Copy, Check, Calendar, ExternalLink, ShieldCheck, Sparkles, Radio, Users, Scale } from 'lucide-react';

interface TimelineEvent {
  period: string;
  quarter: string;
  production: 'Rap Beauchef' | 'Rap Libre' | 'Cuarentena Rap';
  title: string;
  roleTag: string;
  roleColor: 'cyan' | 'magenta' | 'red' | 'amber' | 'green';
  challenge: string;
  strategy: string;
  impact: string;
  evidenceThumb: string;
  evidenceLabel: string;
  skills: string[];
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

  // Exact authentic 6 milestones of The Spine from step 249
  const timelineEvents: TimelineEvent[] = [
    {
      period: "2019",
      quarter: "Q2 · ABR – JUN",
      title: "Autogestión Sonora & Arena Universitaria",
      production: "Rap Beauchef",
      roleTag: "DIRECTOR DE PRODUCCIÓN & RIGGING TÉCNICO",
      roleColor: "cyan",
      challenge: "Inexistencia de plataformas formales para hip-hop dentro de la Facultad de Ciencias Físicas y Matemáticas (FCFM), sumada a la ausencia de presupuesto institucional para amplificación acústica en espacios abiertos.",
      strategy: "Acondicionamiento y rigging acústico autogestionado del anfiteatro de la FCFM: montaje de microfonía dinámica conectada a consolas análogas, cableado de potencia protegido y cobertura multicámara en vivo.",
      impact: "Convocatoria masiva de más de 400 estudiantes por fecha; consagración del anfiteatro como una de las plazas universitarias de referencia en Santiago sin costo para la comunidad.",
      evidenceThumb: "./covers/instagram/B3VR8cqABYU.jpg",
      evidenceLabel: "Cypher Masivo en Anfiteatro FCFM Beauchef",
      skills: ["Acústica en Espacios Abiertos", "Gestión de Permisos Universitarios", "Dirección de Micrófonos en Vivo"],
    },
    {
      period: "2019",
      quarter: "Q3 · JUL – SEP",
      title: "Hito 'Dueñas de la Voz': Soberanía Lírica Femenina",
      production: "Rap Beauchef",
      roleTag: "DIRECTOR CREATIVO & DISEÑADOR DE RÚBRICAS",
      roleColor: "magenta",
      challenge: "Histórica subrepresentación y hostilidad de género hacia las mujeres en las plazas de freestyle, con certámenes masculinizados y descalificaciones machistas normalizadas.",
      strategy: "Creación de 'Dueñas de la Voz': certamen y conversatorio pionero de visibilización lírica femenina con paridad de tarima, jurados especializadas y una rúbrica de ponderación basada en poesía, métrica y contenido empoderado.",
      impact: "Consagración histórica de la emcee QUEENA en una final aclamada; establecimiento de un protocolo de respeto que sirvió de referencia para otras plazas de Santiago.",
      evidenceThumb: "./covers/instagram/B1k2tdFgYoK.jpg",
      evidenceLabel: "Afiche Fundacional con Cita de Malala Yousafzai",
      skills: ["Diseño de Políticas de Inclusión", "Curaduría Poética", "Moderación de Espacios Seguros"],
    },
    {
      period: "2019",
      quarter: "Q4 · OCT – DIC",
      title: "Rap Libre: Solidaridad Barrial en el Estallido Social",
      production: "Rap Libre",
      roleTag: "PRODUCTOR EJECUTIVO & ARTICULADOR COMUNITARIO",
      roleColor: "red",
      challenge: "Coyuntura de máxima tensión sociopolítica durante el estallido social de octubre de 2019, acompañada de megaincendios forestales en la zona centro y precariedad extrema de personas en situación de calle.",
      strategy: "Conquista pacífica de parques y plazas públicas de Santiago (Parque Almagro, San Borja, Bustamante) transformando la inscripción competitiva en un centro de acopio directo de víveres, ropa de abrigo y botiquines.",
      impact: "Recolección y entrega transparente de toneladas de ayuda comunitaria a asambleas territoriales sin un solo peso de lucro ni patrocinio corporativo.",
      evidenceThumb: "./covers/instagram/B46IqYzHJkB.jpg",
      evidenceLabel: "Emcees con Banderas de Chile y Mapuche en Parques",
      skills: ["Logística de Ayuda Humanitaria", "Articulación Territorial", "Resolución de Conflictos en Espacios Públicos"],
    },
    {
      period: "2020",
      quarter: "Q2 · MAR – JUN",
      title: "Migración a la Nube: Arquitectura Discord +12,400 Miembros",
      production: "Rap Beauchef",
      roleTag: "ARQUITECTO DE COMUNIDADES & DEVOPS DIGITAL",
      roleColor: "cyan",
      challenge: "El confinamiento sanitario por COVID-19 cerró los anfiteatros y las plazas. Las herramientas corporativas (Zoom/Meet) introducían latencias de +400ms que destruían el flow y el ritmo en batallas a distancia.",
      strategy: "Despliegue de un servidor Discord internacional con canales de voz dedicados configurados con códec Opus a 64-96kbps sin compresión de eco, bots personalizados para sorteo de turnos y sincronización de transmisiones en Twitch y YouTube.",
      impact: "Crecimiento orgánico a una comunidad activa de más de 12.400 miembros conectados desde 5 países, convirtiéndose en el epicentro digital del freestyle hispanohablante durante la pandemia.",
      evidenceThumb: "./covers/instagram/CBV5veZFbFw.jpg",
      evidenceLabel: "Lanzamiento Oficial de Rap Beauchef en Discord",
      skills: ["Optimización de Protocolos de Voz (Opus)", "Automatización de Bots", "Moderación Masiva a Escala"],
    },
    {
      period: "2020",
      quarter: "Q3 · JUL – OCT",
      title: "Cuarentena Rap: El Rito de Muerte Simbólica & Fase de Karmas",
      production: "Cuarentena Rap",
      roleTag: "DIRECTOR CREATIVO & NARRADOR TRANSMEDIA",
      roleColor: "amber",
      challenge: "Agotamiento psicológico generalizado por el aislamiento pandémico y proliferación de batallas virtuales monótonas centradas en el insulto superficial.",
      strategy: "Diseño de un certamen conceptual transmedia de 4 fases iniciáticas: los emcees ingresaban muertos en la Fase de Tumbas (con causas asignadas como peste negra, suicidio, traición), purgan sus crisis en la Fase de Karmas y compiten con textos escritos de alta densidad poética.",
      impact: "Participación de más de 100 letristas evaluados a ciegas por un jurado internacional; integración de torneos virtuales de Breaking en video de alto framerate, beatmakers boom-bap y beatbox.",
      evidenceThumb: "./covers/instagram/CFwD6Nqjbrn.jpg",
      evidenceLabel: "Rúbrica de Evaluaciones y Fase de Tumbas",
      skills: ["Diseño de Mundos & Storytelling", "Rúbricas Métricas Rigurosas", "Curaduría Transdisciplinaria"],
    },
    {
      period: "2021",
      quarter: "Q1 · ENE – MAR",
      title: "Gran Final, Red Federada & Liberación Colectiva",
      production: "Cuarentena Rap",
      roleTag: "PRODUCTOR GENERAL & COORDINADOR INTERNACIONAL",
      roleColor: "green",
      challenge: "Coordinar en tiempo real a jurados, competidores y público de 5 países (Chile, Argentina, Colombia, Perú, México) para una final escrita transmitida en vivo sin desfase ni errores de emisión.",
      strategy: "Dirección de una mesa de control multicámara con software OBS, enlaces dedicados y rúbricas matriciales públicas de evaluación, culminando con la consagración de Crizzo como campeón y el showcase de beatbox de OES.",
      impact: "Clímax de catarsis y liberación artística con miles de espectadores simultáneos en YouTube y Twitch, cerrando un ciclo cultural trienal documentado para la posteridad.",
      evidenceThumb: "./covers/instagram/CKu2R9qgy3Q.jpg",
      evidenceLabel: "Crizzo Campeón de Cuarentena Rap (UAH Freestyle)",
      skills: ["Broadcast & Streaming de Alta Demanda", "Coordinación Interregional", "Documentación de Archivo Histórico"],
    },
  ];

  // Las Tres Macro-Obras (mantenidas exactamente como le gustaron al usuario)
  const works = [
    {
      number: "01",
      period: "2020 — 2021",
      name: "LA MUERTE SIMBÓLICA & LA LIBERACIÓN",
      production: "Cuarentena Rap",
      role: "Dirección Creativa · Narrativa Transmedia · Red Internacional",
      statement: "Convertir el trauma del encierro pandémico en un rito poético de cuatro fases: entrar muertos en las Tumbas, purgar la angustia en los Karmas y resurgir en la Gran Final.",
      metrics: ["100+ Letristas a Ciegas", "5 Países Federados", "4 Elementos en Cuarentena"],
      heroImage: "./covers/instagram/CIOORNBA_Pg.jpg",
      secondaryImage: "./covers/instagram/CGjb8FRAGms.jpg",
      quote: "El hip-hop no como entretenimiento pasivo, sino como dispositivo ritual de sanación colectiva.",
      tagBg: "bg-neutral-900 text-white",
    },
    {
      number: "02",
      period: "2019 — 2021",
      name: "SOBERANÍA LÍRICA & LA VOZ EN EL HORMIGÓN",
      production: "Rap Beauchef · Dueñas de la Voz",
      role: "Producción Acústica · Paridad de Género · Arquitectura Discord (+12k)",
      statement: "Poblar el anfiteatro de ingeniería con sonido autogestionado, consagrar 'Dueñas de la Voz' como precedente de igualdad de tarima, y construir el mayor servidor de audio sin latencia de habla hispana.",
      metrics: ["+12,400 Miembros Discord", "Canales Opus 64kbps", "Final Histórica QUEENA"],
      heroImage: "./covers/instagram/B1k2tdFgYoK.jpg",
      secondaryImage: "./covers/instagram/CBV5veZFbFw.jpg",
      quote: "Cuando el mundo está en silencio, hasta una sola voz en el anfiteatro se vuelve un trueno.",
      tagBg: "bg-[#9d174d] text-white",
    },
    {
      number: "03",
      period: "2019 — 2020",
      name: "LA CALLE COMO TRINCHERA DE SOLIDARIDAD",
      production: "Rap Libre",
      role: "Articulación Popular · Acopio Humanitario · Resistencia Territorial",
      statement: "Transformar las plazas públicas de Santiago en plataformas de dignidad ciudadana durante el estallido social: la rima callejera convertida en acopio directo para damnificados de incendios.",
      metrics: ["Plazas de Santiago", "100% Solidaridad Popular", "Cero Lucro Corporativo"],
      heroImage: "./covers/instagram/B46IqYzHJkB.jpg",
      secondaryImage: "./covers/instagram/B42bAbtnntp.jpg",
      quote: "Conquistar el espacio público no para vender marcas, sino para abrigar y alimentar la resistencia comunitaria.",
      tagBg: "bg-[#991b1b] text-white",
    },
  ];

  const transferableCompetencies: TransferableCompetency[] = [
    {
      title: "Dirección Creativa, Narrativa Transmedia & Worldbuilding",
      subtitle: "Concepción conceptual, universo de marca y dirección de arte visual",
      icon: "sparkles",
      badge: "DIRECCIÓN ARTÍSTICA",
      outputs: [
        "Diseño conceptual de certámenes por fases iniciáticas (Muerte Simbólica, Tumbas, Karmas y Liberación).",
        "Curaduría gráfica y dirección de arte para más de 160 publicaciones oficiales y afiches editoriales.",
        "Redacción poética de manifiestos, bases y rúbricas competitivas de alta densidad reflexiva."
      ],
      corporateValue: "Capacidad para concebir universos de marca integrales, campañas con narrativa inmersiva de alto impacto y cohesión estética multiplataforma."
    },
    {
      title: "Producción Ejecutiva, Rigging Acústico & Broadcast en Vivo",
      subtitle: "Ingeniería de sonido en vivo, streaming OBS y coordinación multicámara",
      icon: "radio",
      badge: "PRODUCCIÓN TÉCNICA",
      outputs: [
        "Acondicionamiento y rigging acústico autogestionado en el Anfiteatro FCFM (U. de Chile) para +400 asistentes.",
        "Mesa de transmisión multicámara en vivo vía OBS con enrutamiento de audio sin desfase para miles de espectadores.",
        "Gestión logística y coordinación simultánea de jurados y competidores en 5 países sin presupuesto corporativo."
      ],
      corporateValue: "Liderazgo técnico en eventos masivos y transmisiones en vivo bajo alta demanda, optimización de recursos y resolución de problemas bajo presión."
    },
    {
      title: "Arquitectura de Comunidades Digitales & Gestión de Crisis",
      subtitle: "Escalamiento a +12,400 usuarios, canales Opus y gobernanza en línea",
      icon: "users",
      badge: "COMMUNITY SYSTEMS",
      outputs: [
        "Despliegue y escalamiento de servidor Discord pionero con +12.400 miembros activos en 5 países durante pandemia.",
        "Configuración de canales de voz con códec Opus a 64-96kbps sin compresión destructiva para batallas en tiempo real.",
        "Automatización de bots para sorteo de turnos, verificación de roles y protocolos de moderación pacífica a gran escala."
      ],
      corporateValue: "Diseño de infraestructura digital, moderación masiva de comunidades, retención de audiencias y facilitación de dinámicas colaborativas complejas."
    },
    {
      title: "Ética Competitiva, Rúbricas & Equidad de Género",
      subtitle: "Gobernanza imparcial, resolución de disputas y espacios seguros",
      icon: "scale",
      badge: "GOBERNANZA & DEI",
      outputs: [
        "Creación de 'Dueñas de la Voz', certamen y conversatorio pionero de soberanía lírica femenina en la escena universitaria.",
        "Diseño de rúbricas matriciales transparentes de evaluación decimal, erradicando insultos vacíos o discriminatorios.",
        "Dirección de cuerpos colegiados de jurados internacionales con emisión de fallos argumentados por escrito."
      ],
      corporateValue: "Diseño de marcos de evaluación por mérito objetivo, políticas de Diversidad, Equidad e Inclusión (DEI) y mediación imparcial en entornos competitivos."
    }
  ];

  const handleCopyMarkdownLetter = () => {
    const text = `# Daniel Santander — Carta de Presentación Ejecutiva & Dossier Cultural
**Roles:** Director Creativo · Productor Ejecutivo · Arquitecto de Comunidades · Diseñador de Rúbricas
**Periodo de Operaciones:** 2019 – 2021 | Santiago de Chile
**Proyectos Dirigidos:** Cuarentena Rap · Rap Beauchef · Rap Libre
**Verificación Oficial Canónica:** https://www.instagram.com/cuarentenarap/ (160 entregas registradas · Acreditación formal en biografía: @dani.santanderurrutia)

---

## Declaración Ejecutiva (Executive Statement)
Mi trayectoria en producción cultural y liderazgo se fundamenta en un principio operativo: transformar momentos de crisis extrema —como el confinamiento pandémico por COVID-19 o el estallido social de 2019— en dispositivos colectivos de resiliencia comunitaria, rigor de ingeniería y alta calidad artística.

A lo largo de tres producciones emblemáticas entre 2019 y 2021:
1. **Cuarentena Rap (2020-2021):** Diseñé y dirigí una liga conceptual multiplataforma basada en el viaje arquetípico de la 'Muerte Simbólica y la Liberación', integrando los 4 elementos del hip-hop y federando una red de jurados y plazas en Chile, Argentina, Colombia, Perú y México bajo rúbricas transparentes.
2. **Rap Beauchef (2019-2021):** Autogestioné el montaje técnico y acústico en el Anfiteatro FCFM de la Universidad de Chile, impulsé el hito de soberanía lírica femenina 'Dueñas de la Voz' (consagrando a QUEENA) y escalé un servidor de Discord a más de 12.400 miembros con canales Opus de ultra baja latencia.
3. **Rap Libre (2019-2020):** Conquisté plazas públicas para articular campañas de acopio directo de toneladas de ayuda para damnificados por megaincendios y personas en situación de calle en plena coyuntura de movilización social.

---

## Matriz de Competencias Profesionales Transferibles:
1. **Dirección Creativa & Narrativa Transmedia:** Worldbuilding conceptual, curaduría de más de 160 piezas de arte gráfico, redacción poética de bases y manifiestos de alto impacto.
2. **Producción Ejecutiva & Rigging Broadcast:** Acústica en anfiteatros, microfonía dinámica, streaming multicámara vía OBS y coordinación de transmisiones internacionales en vivo.
3. **Arquitectura de Comunidades Digitales (+12.4k miembros):** Servidores Discord con códec Opus sin latencia, automatización de bots, protocolos de moderación a gran escala.
4. **Ética Competitiva, Rúbricas & DEI:** Rúbricas matriciales transparentes sin discriminación, creación del certamen femenino pionero 'Dueñas de la Voz' y mediación colegiada internacional.

---

## The Spine: 6 Hitos de Resolución Técnica & Crisis
- **2019.Q2 (Rap Beauchef):** Autogestión sonora y rigging acústico en anfiteatro FCFM (+400 estudiantes/fecha).
- **2019.Q3 (Dueñas de la Voz):** Paridad de tarima y rúbricas de inclusión lírica femenina (Final con QUEENA).
- **2019.Q4 (Rap Libre):** Acopio directo barrial durante el estallido social y megaincendios.
- **2020.Q2 (Rap Beauchef):** Servidor Discord +12,400 miembros con códec Opus a 64kbps sin latencia.
- **2020.Q3 (Cuarentena Rap):** Certamen de 4 fases iniciáticas (Muerte Simbólica, Tumbas y Karmas) con 4 elementos.
- **2021.Q1 (Cuarentena Rap):** Final escrita multicámara con red federada de 5 países (Chile, Arg, Col, Perú, Méx).

---

## Métricas de Impacto Comprobable:
- **+12,400 miembros** gestionados en infraestructura digital propia con canales de voz sin latencia.
- **5 países federados** de forma descentralizada y autogestionada (Chile, Argentina, Colombia, Perú, México).
- **100% independencia corporativa** con enfoque de solidaridad comunitaria.
- **Integración plena de las 4 disciplinas del hip-hop** (MCing, Breaking, Beatmaking, Beatbox).
- **160 piezas de archivo registradas** en fuente primaria verificable.

Contacto / Archivo Web: Disponible en el Dossier Interactivo de Competencias de Rap.
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const roleColors = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    red: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    magenta: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30',
    green: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  };


  return (
    <section className="bg-[#fbfbfa] text-neutral-900 py-16 sm:py-24 border-b border-neutral-300 transition-colors duration-500 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. CURATORIAL LETTERHEAD / MEMBRETE DE ALTA DIRECCIÓN                     */}
        {/* ========================================================================= */}
        <div className="border-b border-neutral-300 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-neutral-200 text-neutral-800 px-2.5 py-0.5 rounded font-bold">
                CURATORIAL DOSSIER · PRESENTACIÓN DE OBRA
              </span>
              <span className="font-mono text-xs text-neutral-500">TRIENIO 2019 — 2021</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-950 font-serif leading-none">
              DANIEL SANTANDER
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
                  <span>Resumen Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Resumen Ejecutivo (CV)</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. MANIFIESTO CURATORIAL & ESCALA TELEMÉTRICA                             */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block font-bold">
              DECLARACIÓN DE OBRA
            </span>
            <p className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-snug tracking-tight">
              &ldquo;Mi trabajo no consiste en organizar eventos; consiste en concebir y presentar <span className="underline decoration-neutral-400 underline-offset-4 font-semibold">obras culturales vivas</span> que rompen los márgenes tradicionales para transformar la crisis en memoria colectiva.&rdquo;
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
                100%
              </div>
              <div className="font-mono text-xs text-neutral-700 uppercase font-bold mt-1">
                Autogestión Ética
              </div>
              <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                Cero patrocinio corporativo
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
                  Acreditación de Autoría, Dirección Ejecutiva & Gráficas
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans max-w-2xl">
                  Certificación documental pública en la biografía oficial de <strong className="text-white">@cuarentenarap</strong>: <em>&ldquo;Producción, Dirección y Gráficas: M S T ! Z V J E @dani.santanderurrutia&rdquo;</em>, ratificando la autoría intelectual, curaduría de arte y ejecución técnica de la trilogía.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/cuarentenarap/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 transition-all font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0 shadow-md group"
            >
              <span>Ver Archivo en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* 3. THE SPINE: TIMELINE DE DEDICACIÓN & HITOS TÉCNICOS (EL ORIGINAL EXACTO) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-4">
          
          {/* Header of The Spine */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-neutral-300">
            <div>
              <span className="font-mono text-xs text-[#b8860b] sm:text-amber-700 uppercase tracking-widest flex items-center gap-2 mb-1 font-bold">
                <Calendar className="w-4 h-4 text-amber-700" /> THE SPINE · LÍNEA TEMPORAL DE LIDERAZGO TÉCNICO
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                6 Etapas de Ejecución & Resolución de Problemas en Crisis
              </h2>
            </div>
            <div className="font-mono text-xs text-neutral-500 font-medium">
              CRONOLOGÍA SECUENCIAL (2019 &rarr; 2021)
            </div>
          </div>

          {/* Vertical Spine Timeline with original high-contrast dark precision cards */}
          <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-amber-500 before:to-emerald-500">
            
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                
                {/* Pin Node on the Spine (Original Precision Pin) */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#101217] border-2 border-white group-hover:scale-125 group-hover:border-[#e2b170] transition-all shadow-md" />

                {/* Event Card: Original Sleek Dark Slate Hardware Card */}
                <div className="bg-[#12141c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all shadow-2xl hover:-translate-y-0.5 text-white">
                  
                  {/* Top Row: Year, Production & Role Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-white px-2.5 py-1 rounded bg-white/10 border border-white/15">
                        {evt.quarter}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        PRODUCCIÓN: <strong className="text-white">{evt.production.toUpperCase()}</strong>
                      </span>
                    </div>

                    <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${roleColors[evt.roleColor]}`}>
                      {evt.roleTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {evt.title}
                  </h3>

                  {/* 3-Step Problem vs Strategy vs Impact Matrix (Exact Original 3 Boxes) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    
                    {/* Box 1: Crisis */}
                    <div className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 space-y-2">
                      <span className="font-mono text-[10px] font-bold text-rose-400 uppercase tracking-wider block">
                        01. Desafío / Crisis
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                        {evt.challenge}
                      </p>
                    </div>

                    {/* Box 2: Strategy */}
                    <div className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 space-y-2">
                      <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                        02. Estrategia & Rigging
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                        {evt.strategy}
                      </p>
                    </div>

                    {/* Box 3: Impact */}
                    <div className="bg-[#0b0c10] border border-emerald-500/20 rounded-xl p-4 space-y-2 bg-emerald-950/10">
                      <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                        03. Impacto Tangible
                      </span>
                      <p className="text-xs text-neutral-200 leading-relaxed font-sans font-medium">
                        {evt.impact}
                      </p>
                    </div>

                  </div>

                  {/* Evidence Badge & Skills Pill (Exact Original) */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    
                    {/* Evidence thumbnail preview */}
                    <div className="flex items-center gap-3">
                      <img
                        src={evt.evidenceThumb}
                        alt={evt.evidenceLabel}
                        className="w-12 h-12 rounded-lg object-cover border border-white/20 shadow-md flex-shrink-0"
                      />
                      <div className="space-y-0.5">
                        <span className="font-mono text-[9px] text-[#e2b170] uppercase tracking-widest block font-bold">
                          EVIDENCIA DOCUMENTADA
                        </span>
                        <span className="text-xs text-neutral-300 font-mono">
                          {evt.evidenceLabel}
                        </span>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {evt.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ========================================================================= */}
        {/* MATRIZ DE COMPETENCIAS PROFESIONALES TRANSFERIBLES (CV / TRADUCCIÓN EJECUTIVA) */}
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
              TRADUCCIÓN DE IMPACTO CULTURAL &rarr; EJECUTIVO
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
        {/* 4. PRESENTACIÓN DE LAS TRES MACRO-OBRAS (LO QUE TE GUSTÓ, MANTENIDO)       */}
        {/* ========================================================================= */}
        <div className="space-y-32 pt-16 border-t border-neutral-300">

          
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block font-bold">
              CATÁLOGO RAZONADO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              Las Tres Macro-Obras
            </h2>
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

              {/* Main Artwork Showcase Layout (Bleeding outside the frame) */}
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
                      <span className="font-mono text-xs text-neutral-500">
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
        {/* 5. FOOTER OF DOSSIER                                                      */}
        {/* ========================================================================= */}
        <div className="border-t border-neutral-300 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-neutral-500">
          <div>
            CURADURÍA & DIRECCIÓN EJECUTIVA: <strong>DANIEL SANTANDER</strong> (2019–2021)
          </div>
          <div className="flex items-center gap-4">
            <span>SANTIAGO DE CHILE</span>
            <span>•</span>
            <span>PORTAFOLIO DE OBRA CULTURAL</span>
          </div>
        </div>

      </div>
    </section>
  );
};
