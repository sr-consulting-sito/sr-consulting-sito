import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  FileText,
  Building2,
  Calculator,
  BriefcaseBusiness,
  Landmark,
  UsersRound,
} from "lucide-react";
import "./index.css";

function Button({ children, className = "", variant = "default", ...props }) {
  const base = "inline-flex items-center justify-center font-semibold transition";
  const style = variant === "outline" ? "border" : "";
  return <button className={`${base} ${style} ${className}`} {...props}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function SRConsultingWebsite() {
  const mainServices = [
    {
      icon: Building2,
      title: "Supporto PMI in fase di startup",
      text: "Affianchiamo nuove imprese e PMI nella fase di avvio, organizzazione, pratiche e pianificazione operativa.",
    },
    {
      icon: Landmark,
      title: "Consulenza bandi nazionali e regionali",
      text: "Analisi delle opportunità, verifica requisiti, preparazione documentale e supporto nella presentazione delle domande.",
    },
    {
      icon: Calculator,
      title: "Consulenza fiscale",
      text: "Assistenza fiscale e contabile per imprese, professionisti e attività in crescita.",
    },
  ];

  const secondaryActivities = [
    "Contabilità ordinaria imprese",
    "Contabilità semplificata imprese",
    "Contabilità professionisti",
    "Inserimento dati contabili",
    "Liquidazione IVA",
    "Gestione ritenute",
    "Gestione cespiti ammortizzabili",
    "Scadenzari clienti e fornitori",
    "Stampa registri IVA, libro giornale e schede contabili",
    "Bilanci di verifica intermedi e di chiusura",
    "Dichiarazioni fiscali",
    "Modello IVA, IRAP e dichiarazioni redditi",
    "Invii telematici e pagamenti F24",
    "Contratti di locazione",
    "Pratiche telematiche Camera di Commercio",
    "Conteggi IVA",
    "Elaborazione modello Intrastat",
    "Comunicazioni Black List",
    "Avvio nuove imprese",
    "Professionisti e Collaboratori: assistenza aziendale a 360 gradi con Consulenti del Lavoro, Avvocati, Geometri, Architetti e tecnici specializzati",
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-lg font-bold text-white shadow-sm">SR</div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">S & R Consulting</p>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-800">S.r.l.s.</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#home" className="hover:text-emerald-800">Home</a>
            <a href="#servizi" className="hover:text-emerald-800">Servizi</a>
            <a href="#attivita" className="hover:text-emerald-800">Attività</a>
            <a href="#contatti" className="hover:text-emerald-800">Contatti</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50">Consulenza per imprese • Fiscalità • Bandi pubblici</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Supportiamo PMI e startup nella crescita, dall’avvio alla gestione fiscale.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85">S & R Consulting S.r.l.s. offre consulenza professionale per nuove imprese, accesso a bandi nazionali e regionali, servizi fiscali e gestione contabile.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contatti"><Button className="rounded-2xl bg-white px-6 py-6 text-base font-semibold text-emerald-950 hover:bg-emerald-50">Richiedi una consulenza <ArrowRight className="ml-2 h-5 w-5" /></Button></a>
              <a href="#servizi"><Button variant="outline" className="rounded-2xl border-white/30 bg-white/10 px-6 py-6 text-base text-white hover:bg-white/20">Scopri i servizi</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] bg-white/10 p-4 shadow-2xl ring-1 ring-white/20">
            <div className="rounded-[1.5rem] bg-white p-7 text-slate-900">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-800 text-2xl font-black text-white">SR</div>
                <div>
                  <h2 className="text-2xl font-bold">S & R Consulting</h2>
                  <p className="text-sm text-slate-500">Soluzioni concrete per imprese e professionisti</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Startup e avvio nuove imprese", "Bandi e agevolazioni", "Consulenza fiscale e contabile"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Servizi principali</h2>
          <p className="mt-4 text-lg text-slate-600">Un approccio professionale, chiaro e orientato ai risultati per sostenere imprese e professionisti.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800"><Icon className="h-7 w-7" /></div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="attivita" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-800">Attività secondarie</p>
              <h2 className="text-3xl font-bold md:text-4xl">Servizi contabili, fiscali e amministrativi</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Oltre alla consulenza strategica, S & R Consulting S.r.l.s. offre un supporto operativo completo per la gestione quotidiana dell’impresa.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {secondaryActivities.map((activity) => (
                <div key={activity} className="flex gap-3 rounded-2xl border border-slate-200 bg-stone-50 p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-emerald-800" />
                  <span className="text-sm font-medium leading-6 text-slate-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-emerald-900 p-8 text-white"><BriefcaseBusiness className="mb-5 h-9 w-9" /><h3 className="text-2xl font-bold">Metodo pratico</h3><p className="mt-3 text-emerald-50/85">Analisi, pianificazione e assistenza concreta in ogni fase.</p></div>
          <div className="rounded-3xl bg-slate-800 p-8 text-white"><UsersRound className="mb-5 h-9 w-9" /><h3 className="text-2xl font-bold">Rete professionale</h3><p className="mt-3 text-slate-200">Collaborazione con consulenti, tecnici e figure specializzate.</p></div>
          <div className="rounded-3xl bg-stone-200 p-8 text-slate-900"><Calculator className="mb-5 h-9 w-9 text-emerald-800" /><h3 className="text-2xl font-bold">Gestione ordinata</h3><p className="mt-3 text-slate-700">Processi chiari per contabilità, fiscalità e scadenze.</p></div>
        </div>
      </section>

      <section id="contatti" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Parliamo del tuo progetto</h2>
              <p className="mt-4 text-slate-300">Contattaci per una consulenza dedicata a startup, PMI, bandi e fiscalità.</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/10 p-6">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-300" /> +39 392 347 5882</div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-300" /> sr.consultings.srls@gmail.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-300" /> Via Cavallacci 59/8, Monreale (PA)</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">© S & R Consulting S.r.l.s. — P.IVA 07327860826 — Consulenza per imprese, bandi e fiscalità</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<SRConsultingWebsite />);
