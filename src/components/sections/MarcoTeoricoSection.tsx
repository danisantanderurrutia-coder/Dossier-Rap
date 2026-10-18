import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Quote, 
  GraduationCap,
  Calendar,
  ArrowLeft
} from 'lucide-react';

interface MarcoTeoricoSectionProps {
  onBackToDashboard: () => void;
}

type ChapterTab = 'introduccion' | 'historia' | 'industria' | 'cooperativa' | 'conclusiones';

export const MarcoTeoricoSection: React.FC<MarcoTeoricoSectionProps> = ({ onBackToDashboard }) => {
  const [activeTab, setActiveTab] = useState<ChapterTab>('introduccion');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fadeIn space-y-12">
      
      {/* Top Breadcrumb & Back */}
      <div className="flex items-center justify-between border-b border-surface-border pb-4">
        <button
          onClick={onBackToDashboard}
          className="flex items-center gap-2 text-neutral-400 hover:text-crt-amber font-mono text-xs transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Dashboard General</span>
        </button>
        <span className="font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 rounded-md uppercase tracking-wider font-bold">
          FCFM · Universidad de Chile
        </span>
      </div>

      {/* Academic Paper Master Hero Card */}
      <div className="relative rounded-3xl bg-neutral-950 border-2 border-sky-500/40 p-6 sm:p-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-crt-amber/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            {/* Header logos and course tags */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-10 bg-white rounded-lg px-2.5 py-1 flex items-center justify-center border border-neutral-700 shadow-md">
                <img
                  src="./academic/fcfm-uchile-logo.jpg"
                  alt="FCFM Universidad de Chile"
                  className="h-full object-contain"
                />
              </div>
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-sky-300 font-bold">
                EH2405-1 Socioeconomía Latinoamericana
              </span>
              <span className="font-mono text-xs text-neutral-400">
                Prof. Dr. Nicolás Núñez Gómez
              </span>
            </div>

            {/* Paper Title */}
            <div>
              <span className="font-mono text-xs text-crt-amber uppercase tracking-widest font-black block mb-1">
                Ensayo Académico & Marco Teórico Fundacional
              </span>
              <h1 className="font-mono text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                DESARROLLO, RAP Y EVOLUCIÓN
              </h1>
              <p className="font-sans text-base sm:text-xl text-sky-200/90 font-medium mt-1">
                Cultura Urbana en la Construcción de Sociedad
              </p>
            </div>

            {/* Authors & Rap Beauchef note */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-neutral-300 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500">Autores:</span>
                <span className="text-white font-bold">Daniel Santander U. & Bruno Severi</span>
              </div>
              <div className="flex items-center gap-1.5 text-crt-amber font-semibold">
                <span>✕</span>
                <span>Comunidad Rap Beauchef</span>
              </div>
            </div>
          </div>

          {/* Action Box: Download PDF & Read */}
          <div className="flex flex-col gap-3 shrink-0 lg:w-72 bg-neutral-900/90 p-5 rounded-2xl border border-neutral-700 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-white font-bold block">Documento Original</span>
                <span className="font-mono text-[11px] text-neutral-400">PDF Académico · 17 Páginas</span>
              </div>
            </div>
            
            <a
              href="./docs/desarrollo-rap-y-evolucion-fcfm.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-950 font-mono text-xs font-black transition-all shadow-lg hover:shadow-sky-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DESCARGAR PAPER (PDF)</span>
            </a>

            <p className="font-mono text-[10px] text-neutral-400 text-center">
              Acreditación curricular formal que valida la matriz teórica del archivo.
            </p>
          </div>
        </div>
      </div>

      {/* Chapters Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-surface-border">
        {[
          { id: 'introduccion', label: '1. Desarrollo a Escala Humana', icon: BookOpen },
          { id: 'historia', label: '2. Las Calles Adquieren Voz (Historia)', icon: Calendar },
          { id: 'industria', label: '3. Industria Musical & Microempresas', icon: TrendingUp },
          { id: 'cooperativa', label: '4. Rap Beauchef: Los 7 Principios Cooperativos', icon: Users },
          { id: 'conclusiones', label: '5. Conclusiones & 15 Referencias', icon: GraduationCap },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ChapterTab)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-sky-500 text-neutral-950 shadow-md ring-2 ring-sky-400/50'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-850 border border-neutral-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT 1: INTRODUCCIÓN & DESARROLLO ENDÓGENO */}
      {activeTab === 'introduccion' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5 bg-surface/80 p-6 sm:p-8 rounded-2xl border border-surface-border font-sans leading-relaxed text-neutral-200">
              <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold block">
                Capítulo I & II · Fundamentación Teórica
              </span>
              <h2 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                Nuevas Relaciones Sociales Urbanas & Eficiencias No Mercantiles
              </h2>
              <p>
                El siglo XXI enfrenta transformaciones radicales: la globalización, el uso personalizado de internet y el aislamiento producto de crisis y pandemia rompieron las visiones clásicas de la economía. El análisis socioeconómico latinoamericano exige incorporar <strong className="text-white">componentes comunitarios en la búsqueda de eficiencias múltiples</strong> (ya no exclusivamente mercantiles) y en la producción a escala humana a partir de culturas vivas.
              </p>
              <p>
                El rap en Chile se explora aquí como una <strong className="text-white">expresión de nuevas relaciones sociales urbanas</strong> que desarrollan redes en autonomía, dinamizan las bases populares organizadas y encarnan modelos de desarrollo endógeno: de adentro hacia afuera, arraigados en el territorio y construidos desde la soberanía de las personas.
              </p>
              
              {/* Max Neef Quote Callout */}
              <div className="p-5 rounded-xl bg-neutral-900/90 border-l-4 border-crt-amber space-y-2">
                <Quote className="w-5 h-5 text-crt-amber opacity-60" />
                <p className="italic text-sm text-neutral-300">
                  «Debemos preguntarnos a nosotros mismos acerca de las condiciones necesarias para la realización del potencial de la personalidad humana, algo comúnmente aceptado como objetivo.»
                </p>
                <span className="font-mono text-xs text-crt-amber font-bold block">
                  — Manfred Max-Neef et al. (1989), Desarrollo a Escala Humana
                </span>
              </div>
            </div>

            {/* Documental 1986 Callout Card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-neutral-700 bg-black aspect-video relative group">
                  <img
                    src="./academic/estrellas-de-la-esquina-1986.jpg"
                    alt="Estrellas de la Esquina 1986 Teleanálisis"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="font-mono text-[10px] text-crt-amber font-bold uppercase">
                      Hito Audiovisual · 1986
                    </span>
                  </div>
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  Estrellas de la Esquina (1986)
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-normal">
                  Documental fundacional realizado por el <strong>Colectivo Teleanálisis</strong> con producción de Rodrigo Moreno. Registra los primeros círculos de breakdance y rap de base en dictadura, demostrando que la cultura urbana nació como refugio comunitario y autoafirmación social.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-400">
                <span className="text-sky-400 font-bold">Concepto Clave:</span> Las <em>crews</em> como células embrionarias de microeconomía solidaria.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: LAS CALLES ADQUIEREN VOZ (HISTORIA Y REGISTROS) */}
      {activeTab === 'historia' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="border-b border-surface-border pb-4">
            <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
              Capítulo III · Arqueología Cultural del Hip-Hop Nacional
            </span>
            <h2 className="font-mono text-2xl sm:text-3xl font-black text-white">
              Las Calles Adquieren Voz (1986–2020)
            </h2>
            <p className="font-sans text-sm text-neutral-400 mt-1 max-w-3xl">
              Evolución cronológica y rescate historiográfico desde Bombero Ossa hasta la consagración lírica universitaria y comunitaria.
            </p>
          </div>

          {/* Historic Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. De Kiruza 1988 */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-neutral-700 transition-all">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-neutral-700 aspect-square bg-black">
                  <img
                    src="./academic/de-kiruza-algo-esta-pasando-1988.jpg"
                    alt="De Kiruza Algo está pasando 1988"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-crt-amber font-bold">1988 · Dictadura</span>
                  <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">1er Registro Oficial</span>
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  De Kiruza: «Algo está pasando»
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Considerada la primera grabación profesional de rap en Chile. Desafió a la dictadura militar con un videoclip grabado en un descampado de Nataniel Cox con Santa Isabel, proyectando imágenes de Milton Friedman y fusionando soul, funk y lírica de protesta.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-800 font-mono text-[10px] text-neutral-400 italic">
                Pedro Foncea, Rodrigo Maturana y Ricardo Carrasco.
              </div>
            </div>

            {/* 2. Tiro de Gracia 1997 */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-neutral-700 transition-all">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-neutral-700 aspect-video bg-black">
                  <img
                    src="./academic/tiro-de-gracia-melaza-1997.jpg"
                    alt="Tiro de Gracia Melaza 1997"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-fuchsia-400 font-bold">1997 · Melaza</span>
                  <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">Boom Generacional</span>
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  Tiro de Gracia: Melaza (1997)
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Juan Sativo, Lengua Dura y Saturno abrieron el camino al mercado masivo sin perder la crudeza callejera. Su éxito probó la viabilidad del rap en la juventud chilena en plena transición democrática y globalización digital.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-800 font-mono text-[10px] text-neutral-400 italic">
                Hito de profesionalización del hip-hop chileno.
              </div>
            </div>

            {/* 3. Makiza 1999 */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-neutral-700 transition-all">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-neutral-700 aspect-square bg-black">
                  <img
                    src="./academic/makiza-aerolineas-1999.jpg"
                    alt="Makiza Aerolíneas Makiza 1999"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400 font-bold">1999 · Aerolíneas</span>
                  <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">Top 30 Rolling Stone</span>
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  Makiza: Aerolíneas Makiza (1999)
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Consagrado en 2008 por la edición chilena de Rolling Stone como el 30º mejor disco chileno de todos los tiempos. Producción a cargo de Makiza y Chalo-G, elevando la métrica, la voz de Ana Tijoux y la narrativa social a estándar de exportación.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-800 font-mono text-[10px] text-neutral-400 italic">
                La voz femenina y la crítica política en primera fila.
              </div>
            </div>

            {/* 4. Lineup 30 Años 2018 */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-neutral-700 transition-all">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-neutral-700 aspect-video bg-black">
                  <img
                    src="./academic/lineup-30-anos-rap-chileno.jpg"
                    alt="Lineup 30 Años del Rap Chileno 2018"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-400 font-bold">2018 · Teatro Caupolicán</span>
                  <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">Cumbre Histórica</span>
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  30 Años del Rap Chileno (2018)
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Recopilación exhaustiva impulsada con autogestión de la escena: Panteras Negras, Tiro de Gracia, La Pozze Latina, De Kiruza, Movimiento Original, Chystemc, Liricistas y Omega el CTM reunidos en un Caupolicán repleto.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-800 font-mono text-[10px] text-neutral-400 italic">
                De las tocatas de pasaje al principal recinto cultural.
              </div>
            </div>

            {/* 5. Mente Sabia Cru 2017 */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-neutral-700 transition-all">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-neutral-700 aspect-video bg-black">
                  <img
                    src="./academic/mente-sabia-cru-noisey-2017.jpg"
                    alt="Mente Sabia Cru Noisey 2017"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-rose-400 font-bold">2017 · Noisey / Vice</span>
                  <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">Lírica Subterránea</span>
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  Mente Sabia Cru: Insistir hasta la Muerte
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Entrevista de culto en Noisey. Demostró la vigencia del rap subterráneo independiente, donde los códigos del jazz, el sampleo analógico y la autogestión pura superan los circuitos comerciales tradicionales.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-800 font-mono text-[10px] text-neutral-400 italic">
                Dr. Bene, Terrible, Matiah Chinaski, DJ Perez.
              </div>
            </div>

            {/* 6. Bombero Ossa y Primeras Crews */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg border-l-4 border-l-sky-500">
              <div className="space-y-3">
                <span className="font-mono text-xs text-sky-400 font-bold block">1986 · Bombero Ossa</span>
                <h3 className="font-mono text-base font-bold text-white">
                  El Nacimiento Organizado en el Centro de Santiago
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  En 1986 se congregaron las primeras crews de breakdance en el pasaje Bombero Ossa (Santiago Centro). Allí se intercambiaban cassettes pirateados y se forjaron los pilares de la cultura: <strong>TNT, B-14, Night Fury, Trons y Electric Boys</strong>.
                </p>
                <div className="p-3 bg-neutral-900 rounded-xl font-mono text-xs text-neutral-400 space-y-1">
                  <span className="text-white font-bold block">Filosofía Fundacional:</span>
                  <span>«El hazlo tú mismo»: cuando no hay recursos del Estado ni de las multinacionales, la comunidad crea sus propios canales.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB CONTENT 3: INDUSTRIA MUSICAL & MICROEMPRESAS */}
      {activeTab === 'industria' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="border-b border-surface-border pb-4">
            <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
              Capítulo IV · Economía de la Cultura
            </span>
            <h2 className="font-mono text-2xl sm:text-3xl font-black text-white">
              La Industria Rapera en Chile: Cifras & Descentralización
            </h2>
            <p className="font-sans text-sm text-neutral-400 mt-1 max-w-3xl">
              Análisis económico de la producción discográfica, el streaming digital y la proliferación de microempresas autogestionadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Graphic 1: Porcentaje de Sellos en la Industria */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-crt-amber font-bold">Gráfico III · Celhay P. (2006)</span>
                <span className="font-mono text-xs text-neutral-400">Majors vs Indies</span>
              </div>
              <h3 className="font-mono text-lg font-bold text-white">
                Distribución de Sellos en la Industria Discográfica
              </h3>
              <div className="bg-white rounded-xl p-3 border border-neutral-700 flex items-center justify-center">
                <img
                  src="./academic/sellos-industria-discografica-2004.jpg"
                  alt="Gráfico Sellos Industria Celhay 2006"
                  className="max-h-56 object-contain"
                />
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                A nivel global, la industria estuvo dominada por 4 mega compañías (Sony BMG, EMI, Warner, Universal) que controlaban más del 70% del mercado. Las <strong>firmas independientes (Indies)</strong>, al carecer de burocracias trasnacionales, operaron con estructuras dinámicas y verticalmente integradas, convirtiéndose en el hogar natural del rap chileno.
              </p>
            </div>

            {/* Graphic 2: Tamaño Empresas Música */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-400 font-bold">Diagnóstico CORFO / SII</span>
                <span className="font-mono text-xs text-neutral-400">Año 2013</span>
              </div>
              <h3 className="font-mono text-lg font-bold text-white">
                82.5% de Microempresas en el Ecosistema Musical
              </h3>
              <div className="bg-white rounded-xl p-3 border border-neutral-700 flex items-center justify-center">
                <img
                  src="./academic/tamano-empresas-musica-2013.jpg"
                  alt="Gráfico Tamaño Empresas Música 2013"
                  className="max-h-56 object-contain"
                />
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                El <strong>82,5% de los agentes productivos musicales en Chile son microempresas</strong> (16,1% pequeñas y solo 0,1% grandes). El rap actúa como escuela y vivero de estas microestructuras: beatmakers, ingenieros de sonido caseros, diseñadores de afiches y camarógrafos autogestionados.
              </p>
            </div>

            {/* Graphic 3: Ventas Material Discográfico (Tabla) */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sky-400 font-bold">Tabla 14.17 · Celhay P. & INICHILE</span>
                <span className="font-mono text-xs text-neutral-400">Ventas 2013–2017</span>
              </div>
              <h3 className="font-mono text-lg font-bold text-white">
                Transición Radical: Del Soporte Físico a la Explosión Digital
              </h3>
              <div className="bg-white rounded-xl p-4 border border-neutral-700 overflow-x-auto flex items-center justify-center">
                <img
                  src="./academic/tabla-ventas-discograficas-2013-2017.jpg"
                  alt="Tabla Ventas Discográficas 2013-2017"
                  className="max-h-64 object-contain"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs pt-2">
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Streaming Spotify (2017):</span>
                  <span className="text-white font-bold">Top 3 Géneros en Chile:</span>
                  <span className="text-crt-amber block font-bold">Reggaetón, Rap y Cumbia</span>
                </div>
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Formación Académica (2015):</span>
                  <span className="text-white font-bold">6,000 Hombres vs 1,000 Mujeres</span>
                  <span className="text-rose-400 block">Disparidad estructural en carreras musicales</span>
                </div>
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Registro SCD (Derecho de Autor):</span>
                  <span className="text-white font-bold">9,015 autores registrados</span>
                  <span className="text-fuchsia-400 block font-bold">Solo 12% mujeres autoras</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB CONTENT 4: RAP BEAUCHEF & LOS 7 PRINCIPIOS COOPERATIVOS */}
      {activeTab === 'cooperativa' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="border-b border-surface-border pb-4">
            <span className="font-mono text-xs text-crt-amber font-bold uppercase tracking-wider block">
              Capítulo V · Caso de Estudio Empírico FCFM
            </span>
            <h2 className="font-mono text-2xl sm:text-3xl font-black text-white">
              Comunidad Rap Beauchef: Microeconomía Cooperativa
            </h2>
            <p className="font-sans text-sm text-neutral-400 mt-1 max-w-3xl">
              Cómo la organización nacida en el anfiteatro de la Facultad de Ciencias Físicas y Matemáticas cumplió empíricamente los 7 principios de la Alianza Cooperativa Internacional.
            </p>
          </div>

          {/* Theoretical Framing */}
          <div className="bg-surface/90 border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4 font-sans text-neutral-200 leading-relaxed">
            <h3 className="font-mono text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-crt-amber animate-pulse" />
              Propiedad Colectiva del Medio de Producción Cultural
            </h3>
            <p>
              Rap Beauchef fue constatado en el Campus FCFM por jóvenes estudiantes que compartían ideales con la cultura Hip-Hop. A través de <strong>LESINJENIEURS</strong> y el trabajo voluntario, la organización produjo ligas presenciales de freestyle, formato online en Discord, competencias escritas y los dispositivos solidarios <em>Rap Libre</em> y <em>Dueñas de la Voz</em>.
            </p>
            <p className="text-sky-200 font-medium">
              A diferencia de una empresa capitalista tradicional, el fin primordial nunca fue la extracción de renta económica, sino la <strong className="text-white">culturización, la soberanía lírica y la democratización del acceso</strong> a los medios de registro y difusión.
            </p>
          </div>

          {/* 7 Cooperative Principles Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: '1',
                title: 'Adhesión Voluntaria y Abierta',
                desc: 'La incorporación a la comunidad fue totalmente libre y sin barreras de entrada institucionales para estudiantes y MCs de todas las comunas de Santiago.',
                highlight: 'Círculo Abierto'
              },
              {
                num: '2',
                title: 'Gestión Democrática Directa',
                desc: 'Toma de decisiones asamblearia y horizontal coordinada en tiempo real mediante grupos de mensajería y asambleas presenciales antes de cada evento.',
                highlight: 'Democracia por Chat'
              },
              {
                num: '3',
                title: 'Participación Económica Solidaria',
                desc: 'Autofinanciamiento colectivo mediante aportes de los propios socios y acopio comunitario de víveres en Rap Libre durante el estallido social.',
                highlight: 'Acopio Comunitario'
              },
              {
                num: '4',
                title: 'Autonomía e Independencia Radical',
                desc: 'No se dependió de presupuestos institucionales condicionados ni de auspicios comerciales que alteraran las rúbricas ni la línea editorial de las batallas.',
                highlight: 'Autonomía FCFM'
              },
              {
                num: '5',
                title: 'Educación, Formación e Información',
                desc: 'Conversatorios en Dueñas de la Voz, rúbricas métricas en Las Escritas y talleres informales de oratoria e improvisación para nuevos competidores.',
                highlight: 'Formación Lírica'
              },
              {
                num: '6',
                title: 'Cooperación entre Comunidades',
                desc: 'Articulación federada con colectivos de plazas (Parque Almagro, San Borja, Bustamante) y certámenes internacionales en 5 países vía Discord.',
                highlight: 'Red Federada'
              },
              {
                num: '7',
                title: 'Interés por la Comunidad y Territorio',
                desc: 'Compromiso social tangible: donación directa de alimentos a comedores populares y habilitación de espacios seguros de catarsis durante la pandemia.',
                highlight: 'Impacto Social Real'
              },
            ].map((p) => (
              <div 
                key={p.num} 
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-md hover:border-crt-amber/40 transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-crt-amber/10 border border-crt-amber/30 text-crt-amber font-black">
                      Principio #{p.num}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {p.highlight}
                    </span>
                  </div>
                  <h4 className="font-mono text-base font-bold text-white group-hover:text-crt-amber transition-colors">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-800/80 flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verificado en el archivo empírico</span>
                </div>
              </div>
            ))}

            {/* Special Summary Card */}
            <div className="bg-gradient-to-br from-[#121c2e] via-neutral-950 to-black border-2 border-sky-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
              <div>
                <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block mb-1">
                  Síntesis del Modelo
                </span>
                <h4 className="font-mono text-lg font-bold text-white">
                  Desarrollo Endógeno Comprobado
                </h4>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed mt-2">
                  La experiencia de Rap Beauchef demostró empíricamente en la Escuela de Ingeniería de la U. de Chile que la cultura urbana es capaz de levantar plataformas de impacto masivo sin capital de riesgo tradicional, rigiéndose bajo principios cooperativos de fraternidad y racionalidad económica.
                </p>
              </div>
              <div className="font-mono text-[11px] text-crt-amber font-semibold">
                — Cátedra EH2405-1 Socioeconomía Latinoamericana
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: CONCLUSIONES & 15 REFERENCIAS BIBLIOGRÁFICAS */}
      {activeTab === 'conclusiones' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="border-b border-surface-border pb-4">
            <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
              Capítulo VI & VII · Cierre Académico
            </span>
            <h2 className="font-mono text-2xl sm:text-3xl font-black text-white">
              Conclusiones & 15 Referencias Bibliográficas
            </h2>
            <p className="font-sans text-sm text-neutral-400 mt-1 max-w-3xl">
              Síntesis final del ensayo y listado canónico de fuentes consultadas en la investigación socioeconómica.
            </p>
          </div>

          {/* Conclusiones Box */}
          <div className="bg-surface/90 border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4 font-sans text-neutral-200 leading-relaxed">
            <h3 className="font-mono text-xl font-bold text-white">
              El Rap como Organización Innovadora y Agente de Cambio Estructural
            </h3>
            <p>
              «El Rap es expresión, no sigue formas ni parámetros establecidos, se rige por lo general en base a la autonomía, el apoyo y la colaboración entre artistas. Los valores que esto produce implican <strong className="text-white">dimensiones nuevas en el desarrollo endógeno</strong> y en la producción de la industria musical. Su forma de organización es tan innovadora como el proceso creativo mismo.»
            </p>
            <p>
              «Rap Beauchef al igual que tantas competencias universitarias, de liceos y de plazas forman las nuevas redes del hip-hop pero que encarnan las tradiciones y experiencias de las generaciones o ‘escuelas’ anteriores. Ellas corresponden a <strong className="text-crt-amber">modelos de desarrollo endógeno que encarnan nuevas sociedades y nuevas formas de desarrollo</strong>.»
            </p>
            <div className="pt-2 font-mono text-xs text-neutral-400 text-right">
              — Daniel Santander U. & Bruno Severi (FCFM Universidad de Chile)
            </div>
          </div>

          {/* 15 References List */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="font-mono text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <span>Referencias Bibliográficas Citadas en el Paper (15 Fuentes)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                { n: '01', text: 'Imperioh2 (2010). Claudio Flores, una leyenda del hip-hop en Chile.' },
                { n: '02', text: 'Pedro Poch Plá (2009). Del Mensaje a la Acción: Construyendo el Movimiento Hip-Hop en Chile (1984-2008).' },
                { n: '03', text: 'La Tercera (2018). Algo está pasando: el rap chileno celebra tres décadas de su primer gran hito.' },
                { n: '04', text: 'ImperioH2 (2005). Un poco de la historia del Hip Hop Chileno.' },
                { n: '05', text: 'INICHILE (2018). La industria musical independiente de Chile.' },
                { n: '06', text: 'David Ponce et al. (2020). Se oía venir: cómo la música advirtió la explosión social en Chile. CuadernoyPauta.cl.' },
                { n: '07', text: 'Andrés Panes (2019). El rap como forma de conocimiento. La Tercera.' },
                { n: '08', text: 'Pablo Balmaceda (2006). Análisis Económico de la Industria Discográfica. Universidad de Chile.' },
                { n: '09', text: 'Redbull music (2017). ¿Qué se escucha en Chile?' },
                { n: '10', text: 'Chilevisión (2012). Al ritmo de la ira, Documental.' },
                { n: '11', text: 'Colectivo Teleanálisis (1986). Estrellas de la esquina. Producción de Rodrigo Moreno.' },
                { n: '12', text: 'Romero de García E. (2002). Claves para entender el desarrollo endógeno en la globalización.' },
                { n: '13', text: 'TerceraVoz (2019). Panteras Negras celebra 30 años de Hip Hop.' },
                { n: '14', text: 'Consejo Nacional de la Cultura y las Artes (2015). Informe de estadísticas culturales. Gobierno de Chile.' },
                { n: '15', text: 'Consejo Nacional de la Cultura y las Artes (2017). Informe de estadísticas culturales. Gobierno de Chile.' },
              ].map((ref) => (
                <div key={ref.n} className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-sky-400 shrink-0">{ref.n}.</span>
                  <p className="font-sans text-xs text-neutral-300 leading-normal">{ref.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Download Prompt */}
      <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-neutral-900/80 to-neutral-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <GraduationCap className="w-8 h-8 text-sky-400 shrink-0" />
          <div>
            <span className="font-mono text-xs text-sky-300 uppercase tracking-wider font-bold block">
              Acreditación Académica Oficial
            </span>
            <p className="font-sans text-sm text-neutral-200">
              «Desarrollo, Rap y Evolución» (Daniel Santander U. & Bruno Severi, FCFM Universidad de Chile)
            </p>
          </div>
        </div>

        <a
          href="./docs/desarrollo-rap-y-evolucion-fcfm.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-950 font-mono text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Ver PDF Completo</span>
        </a>
      </div>

    </div>
  );
};
