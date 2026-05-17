import React from "react";
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
  Menu,
} from "lucide-react";

const Button = ({ children, variant = "solid", className = "", ...props }) => (
  <button className={`btn ${variant === "outline" ? "btn-outline" : "btn-solid"} ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children }) => <div className="card">{children}</div>;

export default function App() {
  const mainServices = [
    {
      icon: Building2,
      title: "Supporto PMI in fase di startup",
      text: "Affianchiamo nuove imprese e PMI dalla fase iniziale fino all’avvio operativo, offrendo supporto nella pianificazione, nell’organizzazione e nella gestione delle pratiche.",
    },
    {
      icon: Landmark,
      title: "Consulenza bandi nazionali e regionali",
      text: "Individuiamo le opportunità più adatte, verifichiamo i requisiti e supportiamo il cliente nella preparazione e presentazione delle domande.",
    },
    {
      icon: Calculator,
      title: "Consulenza fiscale",
      text: "Offriamo assistenza fiscale e contabile per imprese, professionisti e startup, con attenzione a scadenze, adempimenti e gestione amministrativa.",
    },
  ];

  const serviceGroups = [
    {
      title: "Contabilità ordinaria imprese",
      items: [
        "Inserimento dei dati contabili",
        "Liquidazione IVA",
        "Gestione ritenute",
        "Gestione cespiti ammortizzabili",
        "Scadenzari clienti e fornitori",
        "Stampa libro giornale, registri IVA, libro inventari e schede contabili",
        "Stampa bilanci di verifica intermedi e di chiusura",
      ],
    },
    {
      title: "Contabilità semplificata imprese",
      items: [
        "Inserimento dei dati contabili",
        "Liquidazione IVA",
        "Gestione ritenute",
        "Gestione cespiti ammortizzabili",
        "Stampa registri IVA",
        "Stampa bilanci di verifica intermedi e di chiusura",
      ],
    },
    {
      title: "Contabilità professionisti",
      items: [
        "Inserimento dei dati contabili",
        "Liquidazione IVA",
        "Gestione ritenute",
        "Gestione cespiti ammortizzabili",
        "Stampa registri IVA",
        "Stampa bilanci di verifica intermedi e di chiusura",
      ],
    },
    {
      title: "Dichiarazioni fiscali",
      description:
        "Predisposizione ed elaborazione di dichiarazioni fiscali, modello IVA, IRAP, dichiarazione dei redditi, invii telematici, F24, comunicazioni fiscali e certificazioni dei compensi assoggettati a ritenuta d’acconto.",
    },
    {
      title: "Altre attività",
      items: [
        "Contratti di locazione",
        "Pratiche telematiche Camera di Commercio",
        "Conteggi IVA",
        "Elaborazione modello Intrastat",
        "Comunicazioni Black List",
        "Avvio nuove imprese",
      ],
    },
    {
      title: "Professionisti e Collaboratori",
      description:
        "La S & R Consulting s.r.l.s. offre inoltre ai propri clienti assistenza aziendale a 360 gradi, avvalendosi di una équipe di professionisti quali: Consulenti del Lavoro, Avvocati, Geometri, Architetti, Tecnici per la sicurezza luoghi di lavoro, verifiche degli impianti di terra e consulenza impiantistica.",
    },
  ];

  return (
    <main>
      <header className="header">
        <nav className="nav">
          <a href="#home" className="brand">
            <div className="logo"><span>S</span><span>R</span></div>
            <div>
              <p className="brand-title">S & R Consulting S.r.l.s.</p>
              <p className="brand-subtitle">Consulenza | Fiscale | Bandi | Startup</p>
            </div>
          </a>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#chi-siamo">Chi siamo</a>
            <a href="#servizi">Servizi</a>
            <a href="#attivita">Altre attività</a>
            <a href="#contatti">Contatti</a>
          </div>
          <a href="#contatti" className="top-btn">Contattaci</a>
          <Menu className="mobile-menu" />
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="badge">Consulenza per imprese • Fiscalità • Bandi pubblici</p>
            <h1>Il partner giusto per far crescere <span>la tua impresa.</span></h1>
            <p className="hero-text">
              S & R Consulting S.r.l.s. supporta PMI, startup, professionisti e nuove imprese con consulenza specializzata in fase di avvio, accesso a bandi nazionali e regionali, gestione fiscale e servizi contabili.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#servizi">Scopri i nostri servizi <ArrowRight size={20} /></a>
              <a className="btn btn-outline" href="#contatti">Contattaci</a>
            </div>

            <div className="quick-grid">
              {["Supporto startup", "Bandi nazionali e regionali", "Consulenza fiscale"].map((item) => (
                <div key={item} className="quick-card">
                  <CheckCircle2 size={22} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-panel">
            <div className="big-logo"><span>S</span><span>R</span></div>
            <h2>S & R Consulting S.r.l.s.</h2>
            <p>Consulenza | Fiscale | Bandi | Startup</p>
            <div className="panel-list">
              {["Dalla tua idea alla tua impresa", "Troviamo le migliori opportunità", "Soluzioni su misura per la tua azienda"].map((item) => (
                <div key={item}><CheckCircle2 size={20} /><span>{item}</span></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="chi-siamo" className="section white">
        <div className="container two-col">
          <div>
            <p className="section-label">Chi siamo</p>
            <h2>Consulenza professionale per imprese, startup e professionisti.</h2>
          </div>
          <p>
            S & R Consulting S.r.l.s. nasce per offrire un supporto concreto e organizzato alle realtà imprenditoriali che vogliono avviare, gestire o far crescere la propria attività, con un approccio professionale, chiaro e orientato ai risultati.
          </p>
        </div>
      </section>

      <section id="servizi" className="section">
        <div className="container center">
          <h2>I nostri servizi principali</h2>
          <p>Soluzioni concrete per accompagnare la tua impresa verso il successo.</p>
        </div>
        <div className="container cards-grid">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <div className="icon-circle"><Icon size={34} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="attivita" className="section white">
        <div className="container center">
          <h2>Le nostre altre attività</h2>
          <p>Servizi contabili, fiscali e amministrativi per una gestione completa dell’impresa.</p>
        </div>

        <div className="container activity-grid">
          {serviceGroups.map((group) => (
            <div key={group.title} className="activity-card">
              <div className="activity-title">
                <div className="small-icon"><FileText size={20} /></div>
                <h3>{group.title}</h3>
              </div>
              {group.description ? (
                <p>{group.description}</p>
              ) : (
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <div className="feature dark-green">
            <BriefcaseBusiness size={38} />
            <h3>Metodo pratico</h3>
            <p>Analisi, pianificazione e assistenza concreta in ogni fase.</p>
          </div>
          <div className="feature dark-gray">
            <UsersRound size={38} />
            <h3>Rete professionale</h3>
            <p>Collaborazione con consulenti, tecnici e figure specializzate.</p>
          </div>
          <div className="feature light-gray">
            <Calculator size={38} />
            <h3>Gestione ordinata</h3>
            <p>Processi chiari per contabilità, fiscalità e scadenze.</p>
          </div>
        </div>
      </section>

      <section id="contatti" className="contact-section">
        <div className="container contact-box">
          <div>
            <h2>Hai bisogno di una consulenza personalizzata?</h2>
            <p>Siamo pronti ad ascoltare le tue esigenze e trovare insieme la soluzione migliore.</p>
            <a className="btn btn-light" href="mailto:sr.consultings.srls@gmail.com">Contattaci ora <ArrowRight size={20} /></a>
          </div>
          <div className="contact-card">
            <div><MapPin size={20} /> <span>Via Cavallacci 59/8<br />Monreale (PA)</span></div>
            <div><Phone size={20} /> <span>+39 392 347 5882</span></div>
            <div><Mail size={20} /> <span>sr.consultings.srls@gmail.com</span></div>
            <div><FileText size={20} /> <span>P.IVA 07327860826</span></div>
          </div>
        </div>
      </section>

      <footer>© 2024 S & R Consulting S.r.l.s. — P.IVA 07327860826 — Tutti i diritti riservati</footer>
    </main>
  );
}
