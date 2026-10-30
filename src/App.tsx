import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Braces,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Download,
  FileCheck2,
  FileSpreadsheet,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Sun,
  Tag,
  X,
} from "lucide-react";

type Mode = "light" | "dark";
const tools = [
  {
    name: "Microsoft Excel",
    sub: "Data cleaning · formulas · reporting",
    icon: FileSpreadsheet,
    level: "Data analysis",
  },
  {
    name: "Power BI",
    sub: "Dashboards · visual storytelling",
    icon: BarChart3,
    level: "Visualization",
  },
  {
    name: "SQL",
    sub: "Queries · filtering · aggregation",
    icon: Database,
    level: "Data querying",
  },
  {
    name: "Python",
    sub: "Data handling · analysis workflows",
    icon: Braces,
    level: "Programming",
  },
  {
    name: "AI Annotation",
    sub: "Labeling · categorization · metadata",
    icon: Tag,
    level: "AI data workflows",
  },
  {
    name: "Quality Review",
    sub: "Validation · consistency checks",
    icon: ShieldCheck,
    level: "Quality assurance",
  },
];
const capabilities = [
  {
    num: "01",
    icon: Tag,
    title: "AI Data Annotation",
    body: "Text and image labeling, classification, categorization, and metadata review guided by clear annotation instructions.",
    tags: ["Text labeling", "Image labeling", "Taxonomy"],
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    body: "Turning structured data into understandable findings using spreadsheets, queries, visualizations, and repeatable analysis workflows.",
    tags: ["Excel", "Power BI", "SQL", "Python"],
  },
  {
    num: "03",
    icon: SearchCheck,
    title: "Data Quality & Validation",
    body: "Reviewing records for completeness, consistency, labeling errors, and alignment with project standards.",
    tags: ["Quality checks", "Validation", "Accuracy"],
  },
  {
    num: "04",
    icon: FileCheck2,
    title: "Healthcare Data Context",
    body: "Applying a nursing and clinical documentation background to information-intensive healthcare and research workflows.",
    tags: ["Clinical records", "Research", "Data ethics"],
  },
];
const process = [
  {
    step: "01",
    title: "Understand the guidelines",
    text: "Review the task objectives, label definitions, quality criteria, and edge cases.",
  },
  {
    step: "02",
    title: "Organize & analyze",
    text: "Structure data, apply the relevant tools, and keep workflows consistent and traceable.",
  },
  {
    step: "03",
    title: "Validate the output",
    text: "Check accuracy, completeness, and exceptions before final delivery.",
  },
];
const email = "anjiigold@gmail.com";
function App() {
  const [mode, setMode] = useState<Mode>(() =>
    localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("portfolio-theme", mode);
  }, [mode]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="wordmark" href="#home" aria-label="Go to top">
            <span className="brand-mark">
              W<span>.</span>
            </span>
            <span className="brand-label">
              WINIFRED OSENI<span>DATA & AI PROFESSIONAL</span>
            </span>
          </a>
          <nav
            className={menuOpen ? "links open" : "links"}
            aria-label="Main navigation"
          >
            {[
              ["About", "#about"],
              ["Expertise", "#expertise"],
              ["Tools", "#tools"],
              ["Experience", "#experience"],
            ].map(([name, href]) => (
              <a key={name} href={href} onClick={() => setMenuOpen(false)}>
                {name}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="theme-btn"
              aria-label={
                mode === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              title="Toggle theme"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a className="nav-contact" href="#contact">
              Let's connect <ArrowUpRight size={15} />
            </a>
            <button
              className="mobile-menu"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="eyebrow">
                <span className="status-dot" />
                OPEN TO AI DATA & ANALYTICS OPPORTUNITIES
              </div>
              <h1>
                Making data
                <br />
                <span>meaningful.</span>
                <br />
                Making AI
                <br />
                <em>more accurate.</em>
              </h1>
              <p className="hero-copy">
                I'm <strong>Winifred A. Oseni</strong> — a detail-driven data
                and AI annotation professional with a healthcare background,
                focused on transforming complex information into reliable,
                actionable data.
              </p>
              <div className="hero-cta">
                <a className="primary-btn" href="#expertise">
                  Explore my expertise <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#contact">
                  Get in touch <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-footer">
                <span>
                  <CheckCircle2 size={15} /> Detail-oriented
                </span>
                <span>
                  <CheckCircle2 size={15} /> Guideline-driven
                </span>
                <span>
                  <CheckCircle2 size={15} /> Quality-focused
                </span>
              </div>
            </div>
            <div className="hero-right">
              <div className="visual-top">
                <span className="visual-overline">
                  THE WORK BEHIND THE DATA
                </span>
                <span className="visual-index">FIG. 01 / DATA OPERATIONS</span>
              </div>
              <div
                className="data-visual"
                aria-label="Decorative data analytics dashboard"
              >
                <div className="graph-card">
                  <div className="graph-head">
                    <div>
                      <small>DATA QUALITY</small>
                      <strong>Consistency matters.</strong>
                    </div>
                    <span className="live-dot">● SAMPLE VIEW</span>
                  </div>
                  <div className="bars">
                    {[36, 54, 46, 72, 58, 80, 64, 91, 76, 94, 83, 100].map(
                      (v, i) => (
                        <div key={i} className="bar-col">
                          <span style={{ height: `${v}%` }} />
                        </div>
                      ),
                    )}
                  </div>
                  <div className="graph-bottom">
                    <span>Structured data</span>
                    <span>Validated output</span>
                  </div>
                </div>
                <div className="floating-tag label-one">
                  <Tag size={15} /> Annotation & classification
                </div>
                <div className="floating-tag label-two">
                  <ShieldCheck size={15} /> Quality assurance
                </div>
                <div className="float-grid">
                  {Array.from({ length: 36 }, (_, i) => (
                    <i key={i} />
                  ))}
                </div>
              </div>
              <div className="visual-bottom">
                <span>DATA → INSIGHT → IMPACT</span>
                <span>01 — 04</span>
              </div>
            </div>
          </div>
        </section>
        <section className="ticker">
          <div className="container ticker-inner">
            <span>AI DATA ANNOTATION</span>
            <i />
            <span>DATA ANALYTICS</span>
            <i />
            <span>QUALITY ASSURANCE</span>
            <i />
            <span>HEALTHCARE DATA</span>
            <i />
            <span>RESEARCH & REVIEW</span>
          </div>
        </section>
        <section className="section about" id="about">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">01 / ABOUT ME</p>
              <h2>
                Curiosity for data.
                <br />
                <em>Commitment to precision.</em>
              </h2>
            </div>
            <div className="about-text">
              <p>
                My work sits at the intersection of{" "}
                <strong>data, technology, and human judgment.</strong> I bring
                clinical documentation experience, careful information handling,
                and an analytical mindset to data labeling, categorization, and
                validation.
              </p>
              <p>
                I'm especially interested in projects where reliable datasets
                help improve AI systems, research, and informed decision-making
                — including healthcare and other detail-intensive domains.
              </p>
              <a className="inline-link" href="#experience">
                More about my background <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">02 / WHAT I DO</p>
                <h2>
                  Areas of <em>expertise.</em>
                </h2>
              </div>
              <p>
                Combining analytical tools with a methodical approach to data
                accuracy, annotation, and review.
              </p>
            </div>
            <div className="cap-grid">
              {capabilities.map((c) => (
                <article className="cap-card" key={c.num}>
                  <div className="cap-top">
                    <div className="cap-icon">
                      <c.icon size={22} strokeWidth={1.75} />
                    </div>
                    <span>{c.num} / 04</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <div className="chips">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section tools-section" id="tools">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">03 / SOFTWARE & PLATFORMS</p>
                <h2>
                  Tools of <em>the trade.</em>
                </h2>
              </div>
              <p>
                Hands-on interests and working knowledge across analytics,
                labeling, data organization, and review.
              </p>
            </div>
            <div className="tools-grid">
              {tools.map((t) => (
                <div className="tool-card" key={t.name}>
                  <div className="tool-icon">
                    <t.icon size={25} strokeWidth={1.6} />
                  </div>
                  <div className="tool-info">
                    <h3>{t.name}</h3>
                    <p>{t.sub}</p>
                    <span>{t.level}</span>
                  </div>
                  <ArrowUpRight className="tool-arrow" size={18} />
                </div>
              ))}
            </div>
            <div className="tools-note">
              <Sparkles size={18} />
              <p>
                <strong>Relevant to software-tool surveys:</strong> Data and
                information analysis, office productivity, AI annotation,
                dataset classification, and quality review. Always select only
                tools and experience levels that match actual use.
              </p>
            </div>
          </div>
        </section>
        <section className="section experience-section" id="experience">
          <div className="container exp-grid">
            <div>
              <p className="section-kicker">04 / PROFESSIONAL FOUNDATION</p>
              <h2>
                Experience that
                <br />
                <em>transfers.</em>
              </h2>
              <p className="exp-intro">
                A healthcare and research-oriented background built around
                careful observation, accurate records, and consistent processes.
              </p>
              <div className="education-card">
                <span className="mini-label">EDUCATION</span>
                <h3>Master of Science in Nursing</h3>
                <p>Currently enrolled</p>
                <hr />
                <h3>Bachelor of Science in Nursing</h3>
                <p>University of the Cordilleras · 2014–2018</p>
              </div>
            </div>
            <div className="timeline">
              <div className="time-item">
                <div className="time-marker" />
                <div className="time-date">SEP 2021 — OCT 2022</div>
                <h3>Registered Nurse</h3>
                <p className="time-org">
                  Federal Medical Centre · Ogun State, Nigeria
                </p>
                <p>
                  Clinical documentation, patient observations,
                  interdisciplinary handovers, and following defined quality and
                  safety procedures.
                </p>
              </div>
              <div className="time-item">
                <div className="time-marker" />
                <div className="time-date">JAN 2020 — SEP 2021</div>
                <h3>Registered Nurse</h3>
                <p className="time-org">
                  Toun Memorial Hospital · Oyo State, Nigeria
                </p>
                <p>
                  Electronic and manual records, accurate reporting, structured
                  assessments, and detail-sensitive clinical workflows.
                </p>
              </div>
              <div className="time-item">
                <div className="time-marker" />
                <div className="time-date">CURRENT PROFESSIONAL DIRECTION</div>
                <h3>AI Data & Analytics</h3>
                <p className="time-org">
                  Annotation · Categorization · Data review
                </p>
                <p>
                  Applying transferable quality-control and
                  information-management skills to AI training data and
                  analytics opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section process-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">05 / MY APPROACH</p>
                <h2>
                  Thoughtful by <em>design.</em>
                </h2>
              </div>
              <p>
                High-quality outputs start with a clear process, attention to
                detail, and consistent checks.
              </p>
            </div>
            <div className="process-grid">
              {process.map((p) => (
                <div className="process-step" key={p.step}>
                  <span className="process-number">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ArrowDownRight size={21} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="section-kicker">06 / LET'S CONNECT</p>
              <h2>
                Have a data project
                <br />
                <em>in mind?</em>
              </h2>
              <p>
                I'm interested in opportunities in AI data annotation, quality
                evaluation, data analytics, research, and healthcare data
                workflows.
              </p>
              <div className="contact-actions">
                <a
                  className="contact-primary"
                  href={`mailto:${email}?subject=Portfolio%20Inquiry`}
                >
                  Start a conversation <ArrowUpRight size={19} />
                </a>
                <button className="copy-btn" onClick={copyEmail}>
                  {copied ? <Check size={17} /> : <ClipboardCheck size={17} />}{" "}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>
            <div className="contact-panel">
              <span className="mini-label">DIRECT CONTACT</span>
              <Mail size={26} />
              <span>Email</span>
              <a href={`mailto:${email}`}>
                {email} <ArrowUpRight size={17} />
              </a>
              <div className="contact-panel-footer">
                <span>Based in Columbus, Ohio, USA</span>
                <span>Open to remote opportunities</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <span className="footer-name">
              Winifred A. Oseni<span> / Data & AI</span>
            </span>
            <p>Thoughtful data. Reliable outcomes.</p>
          </div>
          <div className="footer-right">
            <a href="#home">Back to top ↑</a>
            <span>© {new Date().getFullYear()} Winifred A. Oseni</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
