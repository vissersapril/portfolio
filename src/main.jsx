import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ArrowLeft,
  Bot,
  BrainCircuit,
  CircuitBoard,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react'
import './styles.css'

const basePath = import.meta.env.BASE_URL
const projectPath = (id) => `${basePath}projects/${id}/`

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Interests', href: `${basePath}interests/` },
  { label: 'Contact', href: '#contact' },
]

const capabilities = [
  { icon: Bot, label: 'Robotics', detail: 'FANUC, PLCs, ESP32, CAN bus, and I2C.' },
  { icon: BrainCircuit, label: 'Vibration analysis', detail: 'Field data, signal processing, and Python tooling.' },
  { icon: Wrench, label: 'Builds', detail: 'Fixtures, prototypes, troubleshooting, and documentation.' },
]

const projects = [
  {
    id: 'robotics-construction-cell',
    title: 'Automated Robotics Construction Cell',
    area: 'Robotics Automation',
    image: 'media/project-lego-cell.jpg',
    summary:
      'FANUC robot cell for autonomous LEGO sorting and assembly.',
    metrics: ['FANUC LR Mate', 'RSLogix 5000', 'Custom EOAT'],
    details: [
      'Programmed autonomous sorting and assembly sequences.',
      'Designed custom fixtures and end-of-arm tooling.',
      'Integrated Allen-Bradley PLC controls and documentation.',
    ],
    outcome:
      'A repeatable workcell concept combining tooling, controls, and process planning.',
  },
  {
    id: 'autonomous-collection-robot',
    title: 'Autonomous Collection Robot',
    area: 'Mobile Robotics',
    image: 'media/project-autonomous-car.jpg',
    summary:
      'Competition robot with embedded controls, sensors, and custom fabricated parts.',
    metrics: ['1st place', 'ESP32', 'SolidWorks'],
    details: [
      'Built ESP32 control software for autonomous collection.',
      'Integrated sensors and actuators over CAN bus and I2C.',
      'Fabricated custom parts with CAD, 3D printing, and laser cutting.',
    ],
    outcome:
      'Earned 1st place after iterative integration, debugging, and testing.',
  },
  {
    id: 'vertical-axis-wind-turbine',
    title: 'Vertical Axis Wind Turbine Prototype',
    area: 'Mechanical Design',
    image: 'media/project-wind-turbine-build.jpg',
    summary:
      'Vertical axis turbine prototype built from calculations, CAD, fabrication, and testing.',
    metrics: ['Load analysis', 'CAD modeling', 'Prototype testing'],
    details: [
      'Completed speed, efficiency, and load calculations.',
      'Modeled and fabricated prototype components.',
      'Presented and tested the full proof-of-concept system.',
    ],
    outcome:
      'A physical prototype connecting analysis, fabrication, and presentation.',
  },
]

const resumeItems = [
  {
    period: '2024 - 2026',
    role: 'Acoustics and Vibration Engineer, Aercoustics Engineering',
    detail: 'Field testing, vibration analysis, Python tools, technical reports, and mitigation strategies for sensitive equipment and building projects.',
  },
  {
    period: '2023 - 2024',
    role: 'Production Engineering Intern, Paradigm Electronics',
    detail: 'Manufacturing troubleshooting, product testing, tooling improvements, and process redesign that improved productivity by over 40%.',
  },
  {
    period: '2019 - 2024',
    role: 'Bachelor of Engineering Science, Western University',
    detail: "Mechanical and Materials Engineering. Dean's Honour List and Western Continuing Admission Scholarship.",
  },
  {
    period: 'Core Toolkit',
    role: 'Engineering Stack',
    detail: 'SolidWorks, Onshape, Python, Java, RSLogix 5000, PLCs, signal processing, vibration analysis, prototyping, and root-cause analysis.',
  },
]

const getSelectedProject = () => {
  const id = window.location.hash.replace('#/projects/', '')
  return projects.find((project) => project.id === id)
}

function ProjectPage({ project }) {
  return (
    <main className="pt-16">
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-ink" href="#projects">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </a>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">{project.area}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-steel">{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span key={metric} className="rounded-md border border-line bg-white px-3 py-1.5 text-xs font-semibold text-graphite">
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-3 shadow-soft">
              <img
                className="aspect-[4/3] w-full rounded-md object-cover"
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={`${project.title} technical illustration`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Project Detail</p>
            <h2 className="section-title">What this project demonstrates.</h2>
          </div>
          <div className="space-y-5">
            {project.details.map((detail) => (
              <article key={detail} className="rounded-lg border border-line bg-white p-6">
                <p className="text-sm leading-7 text-steel">{detail}</p>
              </article>
            ))}
            <article className="rounded-lg bg-ink p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Outcome</p>
              <p className="mt-3 text-sm leading-7 text-white/78">{project.outcome}</p>
            </article>
            <a className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink" href="#contact">
              Ask about this project
              <MoveRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState(getSelectedProject)

  const closeMenu = () => setMenuOpen(false)

  React.useEffect(() => {
    const handleHashChange = () => {
      setSelectedProject(getSelectedProject())
      closeMenu()
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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
              <a key={item.label} className="nav-link" href={item.href}>
                {item.label}
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
              <a key={item.label} className="block rounded-lg px-3 py-3 text-sm font-semibold text-steel hover:bg-mist hover:text-ink" href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {selectedProject ? (
        <ProjectPage project={selectedProject} />
      ) : (
      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fff7fb_0%,#fff0f8_100%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
            <div className="animate-rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                Mechanical Engineering / Robotics / Vibration Analysis
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                Mechanical engineer building practical systems from analysis to tested hardware.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                I bring field-tested acoustics and vibration experience, manufacturing engineering judgment, and hands-on
                robotics work to teams building reliable hardware.
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
                <div className="grid gap-4 sm:grid-cols-[1fr_0.45fr]">
                  <img
                    className="aspect-[4/3] w-full rounded-md bg-mist object-cover"
                    src={`${basePath}resume-systems-hero.svg`}
                    alt="Technical illustration showing vibration analysis, CAD, Python data, and mechanical testing"
                  />
                  <div className="flex flex-col gap-4">
                    <img
                      className="aspect-square w-full rounded-md border border-line bg-mist object-cover"
                      src={`${basePath}media/headshot.jpg`}
                      alt="Professional headshot of April Vissers"
                    />
                    <div className="rounded-md bg-ink p-4 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">April Vissers</p>
                      <p className="mt-2 text-sm leading-6 text-white/75">Mechanical engineering, vibration analysis, manufacturing, and robotics.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-steel">
                  <span className="rounded-md bg-mist px-2 py-3">CAD</span>
                  <span className="rounded-md bg-mist px-2 py-3">Python</span>
                  <span className="rounded-md bg-mist px-2 py-3">Testing</span>
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
                <h2 className="section-title">Engineer with a strong blend of analysis, prototyping, and real-world testing.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-steel">
                <p>
                  I am a mechanical engineering graduate with experience in field testing, vibration analysis, manufacturing, and hands-on robotics.
                </p>
                <p>
                  I like work that mixes analysis with real hardware: sensors, fixtures, CAD, controls, prototypes, and clean technical communication.
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
                <h2 className="section-title max-w-3xl">Selected robotics, controls, and mechanical design projects.</h2>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-ink" href="#contact">
                Discuss a project
                <MoveRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={projectPath(project.id)}
                  className="group rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-signal/30"
                  aria-label={`Read more about ${project.title}`}
                >
                  <img
                    className="mb-6 aspect-[4/3] w-full rounded-md object-cover"
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.title} project illustration`}
                  />
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
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow">Resume</p>
                <h2 className="section-title">Experience across vibration analysis, manufacturing, and robotics projects.</h2>
                <p className="mt-5 text-base leading-8 text-steel">
                  A quick scan of roles, education, and technical strengths.
                </p>
              </div>
              <div className="space-y-4">
                <article className="grid gap-5 rounded-lg border border-line bg-white p-5 transition hover:border-signal/40 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                  <img
                    className="aspect-[4/3] w-full rounded-md object-cover"
                    src={`${basePath}media/aercoustics-site.jpg`}
                    alt="April Vissers on site with vibration monitoring equipment"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Field Work</p>
                    <h3 className="mt-3 text-lg font-semibold text-ink">On-site acoustics and vibration testing</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">
                      Data acquisition, vibration analysis, and site-ready engineering judgment.
                    </p>
                  </div>
                </article>
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
                    <p className="mt-3 text-sm leading-7 text-white/75">Comfortable moving from CAD and calculations to prototype fabrication, test setup, troubleshooting, and manufacturing feedback.</p>
                  </div>
                  <div className="rounded-lg border border-line bg-white p-6">
                    <ShieldCheck className="mb-5 text-signal" size={24} aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-ink">Analysis mindset</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">Strong signal processing, vibration analysis, engineering data analysis, technical documentation, and root-cause investigation habits.</p>
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
                  Available for robotics, mechanical, vibration, and manufacturing engineering conversations.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                  Based in Vancouver, BC and interested in engineering roles where practical hardware, thoughtful analysis, and clear technical communication matter.
                </p>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/7 p-6">
                <a className="contact-row" href="mailto:vissersapril@gmail.com">
                  <Mail size={20} aria-hidden="true" />
                  vissersapril@gmail.com
                </a>
                <a className="contact-row" href="tel:+17054407473">
                  <Phone size={20} aria-hidden="true" />
                  (705) 440-7473
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
      )}

      <footer className="border-t border-line bg-white px-5 py-8 text-center text-sm text-steel sm:px-8">
        <p>Designed for robotics and advanced engineering teams. Built with React, Vite, and Tailwind CSS.</p>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
