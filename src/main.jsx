import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CircuitBoard,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Microscope,
  MoveRight,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react'
import './styles.css'

const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact']

const capabilities = [
  { icon: Bot, label: 'Robotics integration', detail: 'Mobile platforms, actuators, sensors, and test rigs.' },
  { icon: BrainCircuit, label: 'Autonomy systems', detail: 'Controls, perception pipelines, and field validation.' },
  { icon: Microscope, label: 'Medical device rigor', detail: 'Verification-first development and clear documentation.' },
]

const projects = [
  {
    title: 'Autonomous Indoor Navigation Platform',
    area: 'Robotics',
    summary:
      'Designed a modular navigation stack for an indoor service robot, pairing sensor fusion with repeatable bench and hallway tests.',
    metrics: ['42% lower localization drift', 'ROS 2', 'LiDAR + IMU'],
  },
  {
    title: 'Cardiac Tooling Motion Test Fixture',
    area: 'MedTech',
    summary:
      'Built a compact electromechanical fixture to characterize catheter-like tool motion across force, repeatability, and duty cycles.',
    metrics: ['0.2 mm repeatability', 'Python DAQ', 'Design controls'],
  },
  {
    title: 'Human-Safe Manipulator Prototype',
    area: 'AI Robotics',
    summary:
      'Prototyped a perception-assisted manipulator workflow focused on safe interaction, clear fault states, and rapid iteration.',
    metrics: ['Force limits', 'CV pipeline', 'Risk analysis'],
  },
]

const resumeItems = [
  {
    period: '2024 - Present',
    role: 'Robotics Systems Engineer',
    detail: 'Own subsystem architecture, prototype builds, design reviews, validation plans, and cross-functional engineering handoffs.',
  },
  {
    period: '2022 - 2024',
    role: 'Mechanical / Mechatronics Engineer',
    detail: 'Developed assemblies, test fixtures, manufacturing drawings, tolerance studies, and instrumentation workflows.',
  },
  {
    period: 'Core Toolkit',
    role: 'Engineering Stack',
    detail: 'SolidWorks, ROS 2, Python, MATLAB, C++, sensor integration, DFM, FMEA, verification testing, and technical writing.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu} aria-label="Home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white transition group-hover:bg-signal">
              <CircuitBoard size={18} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-wide">APRIL VISSERS</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>

          <a className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-signal md:flex" href="#contact">
            <Mail size={16} aria-hidden="true" />
            Contact
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-line bg-white px-5 py-3 shadow-soft md:hidden">
            {navItems.map((item) => (
              <a key={item} className="block rounded-lg px-3 py-3 text-sm font-semibold text-steel hover:bg-mist hover:text-ink" href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
            <div className="animate-rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                Robotics / Mechatronics / Product Engineering
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                Engineering reliable robots from concept to field-ready systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                A clean technical portfolio for roles at robotics and engineering companies building autonomous mobility,
                medical devices, and human-centered automation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-signal" href="#projects">
                  View Projects
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-signal hover:text-signal" href="#resume">
                  <Download size={17} aria-hidden="true" />
                  Resume Snapshot
                </a>
              </div>
            </div>

            <div className="animate-rise-delay">
              <div className="relative rounded-lg border border-line bg-white p-4 shadow-soft">
                <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-md bg-mist">
                  <div className="robot-visual" aria-hidden="true">
                    <div className="rail rail-one" />
                    <div className="rail rail-two" />
                    <div className="node node-a" />
                    <div className="node node-b" />
                    <div className="arm arm-one" />
                    <div className="arm arm-two" />
                    <div className="end-effector" />
                    <div className="sensor" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-steel">
                  <span className="rounded-md bg-mist px-2 py-3">CAD</span>
                  <span className="rounded-md bg-mist px-2 py-3">Controls</span>
                  <span className="rounded-md bg-mist px-2 py-3">Validation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow">About</p>
                <h2 className="section-title">Engineer with a bias for prototypes that teach quickly.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-steel">
                <p>
                  I build across mechanical design, embedded-adjacent systems, controls, and verification. My strongest work sits where hardware needs to be made understandable: clear requirements, disciplined tests, and practical design decisions under uncertainty.
                </p>
                <p>
                  For teams like A&K Robotics, Kardium, and Sanctuary AI, this portfolio emphasizes the qualities that matter in advanced engineering environments: thoughtful systems thinking, rigorous documentation, clean prototypes, and calm collaboration across disciplines.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {capabilities.map(({ icon: Icon, label, detail }) => (
                    <article key={label} className="rounded-lg border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
                      <Icon className="mb-4 text-signal" size={24} aria-hidden="true" />
                      <h3 className="text-sm font-semibold text-ink">{label}</h3>
                      <p className="mt-2 text-sm leading-6 text-steel">{detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section bg-mist">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Projects</p>
                <h2 className="section-title max-w-3xl">Selected systems work for robotics, MedTech, and intelligent automation.</h2>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-ink" href="#contact">
                Discuss a project
                <MoveRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="rounded-md bg-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-signal">{project.area}</span>
                    <ExternalLink className="text-steel transition group-hover:text-signal" size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-4 min-h-28 text-sm leading-7 text-steel">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-graphite">
                        {metric}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow">Resume</p>
                <h2 className="section-title">A concise profile for engineering hiring teams.</h2>
                <p className="mt-5 text-base leading-8 text-steel">
                  Replace this content with your exact roles, dates, and project outcomes when you are ready. The structure is tuned for quick recruiter and engineering-manager scanning.
                </p>
              </div>
              <div className="space-y-4">
                {resumeItems.map((item) => (
                  <article key={item.role} className="rounded-lg border border-line bg-white p-6 transition hover:border-signal/40">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                      <span className="text-sm font-semibold text-signal">{item.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-steel">{item.detail}</p>
                  </article>
                ))}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-ink p-6 text-white">
                    <Wrench className="mb-5 text-amber" size={24} aria-hidden="true" />
                    <h3 className="text-lg font-semibold">Hands-on build fluency</h3>
                    <p className="mt-3 text-sm leading-7 text-white/75">Comfortable moving from CAD and calculations to prototypes, lab tests, and manufacturing feedback.</p>
                  </div>
                  <div className="rounded-lg border border-line bg-white p-6">
                    <ShieldCheck className="mb-5 text-signal" size={24} aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-ink">Verification mindset</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">Clear acceptance criteria, traceable test records, and technical communication that reduces ambiguity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Contact</p>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
                  Available for robotics, mechatronics, and product engineering conversations.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                  Use this section for direct hiring links, project inquiries, or a short note about relocation and work authorization.
                </p>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/7 p-6">
                <a className="contact-row" href="mailto:april@example.com">
                  <Mail size={20} aria-hidden="true" />
                  april@example.com
                </a>
                <a className="contact-row" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <ExternalLink size={20} aria-hidden="true" />
                  LinkedIn profile
                </a>
                <p className="contact-row">
                  <MapPin size={20} aria-hidden="true" />
                  Vancouver, BC
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white px-5 py-8 text-center text-sm text-steel sm:px-8">
        <p>Designed for robotics and advanced engineering teams. Built with React, Vite, and Tailwind CSS.</p>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
