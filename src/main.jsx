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

const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact']

const capabilities = [
  { icon: Bot, label: 'Robotics and controls', detail: 'FANUC automation, PLC logic, ESP32 controls, CAN bus, and I2C integration.' },
  { icon: BrainCircuit, label: 'Signal and vibration analysis', detail: 'Python tools for automated signal processing, vibration analysis, and large-scale engineering data.' },
  { icon: Wrench, label: 'Manufacturing improvement', detail: 'Production troubleshooting, fixture design, workflow optimization, and technical documentation.' },
]

const projects = [
  {
    id: 'robotics-construction-cell',
    title: 'Automated Robotics Construction Cell',
    area: 'Robotics Automation',
    image: 'project-robotics-cell.svg',
    summary:
      'Programmed robotic automation sequences for autonomous LEGO sorting and assembly, designed custom fixtures and end-of-arm tooling, and integrated a 6-axis FANUC LR Mate cell with Allen-Bradley PLCs.',
    metrics: ['FANUC LR Mate', 'RSLogix 5000', 'Custom EOAT'],
    details: [
      'Programmed autonomous sorting and assembly sequences for a 6-axis industrial robot.',
      'Designed and fabricated custom fixtures and end-of-arm tooling to support repeatable operation.',
      'Integrated Allen-Bradley PLC controls and created process documentation for the robotic cell.',
    ],
    outcome:
      'The result was a repeatable robotic workcell concept that combined mechanical fixturing, controls logic, and process documentation into one integrated automation project.',
  },
  {
    id: 'autonomous-collection-robot',
    title: 'Autonomous Collection Robot',
    area: 'Mobile Robotics',
    image: 'project-collection-robot.svg',
    summary:
      'Designed, built, and tested an autonomous mobile robot in a three-person engineering team, developing ESP32 control software and integrating sensors and actuators over CAN bus and I2C.',
    metrics: ['1st place', 'ESP32', 'SolidWorks'],
    details: [
      'Developed embedded control software on an ESP32 for autonomous collection behavior.',
      'Implemented CAN bus and I2C communication for sensor and actuator integration.',
      'Designed and fabricated custom components using SolidWorks, 3D printing, and laser cutting.',
    ],
    outcome:
      'The robot earned 1st place in the final autonomous robotics competition after iterative system integration, debugging, and performance optimization.',
  },
  {
    id: 'vertical-axis-wind-turbine',
    title: 'Vertical Axis Wind Turbine Prototype',
    area: 'Mechanical Design',
    image: 'project-wind-turbine.svg',
    summary:
      'Developed a novel vertical axis wind turbine concept, completed efficiency and load calculations, created detailed SolidWorks models, and fabricated proof-of-concept parts with 3D printing.',
    metrics: ['Load analysis', 'CAD modeling', 'Prototype testing'],
    details: [
      'Completed efficiency, rotational speed, and component load calculations to guide the design.',
      'Created detailed SolidWorks models and fabricated prototype components with 3D printing.',
      'Assembled and tested a proof-of-concept prototype through iterative design refinement.',
    ],
    outcome:
      'The project translated early design calculations into a physical prototype, connecting mechanical analysis, CAD, fabrication, and hands-on testing.',
  },
]

const resumeItems = [
  {
    period: '2024 - 2026',
    role: 'Acoustics and Vibration Engineer, Aercoustics Engineering',
    detail: 'Delivered acoustics and vibration projects across residential, commercial, institutional, and transit developments. Built Python tools for signal processing and vibration analysis, prepared technical reports and calculations, and developed mitigation strategies for sensitive equipment installations including an MRI facility with vibration levels exceeding criteria by 30x.',
  },
  {
    period: '2023 - 2024',
    role: 'Production Engineering Intern, Paradigm Electronics',
    detail: 'Supported loudspeaker manufacturing process development, product testing, root-cause investigations, tooling improvements, and lean manufacturing initiatives. Redesigned a baffle painting process, increasing productivity by over 40% and reducing annual operating costs by approximately $9,000.',
  },
  {
    period: '2019 - 2024',
    role: 'Bachelor of Engineering Science, Western University',
    detail: "Mechanical and Materials Engineering graduate on the Dean's Honour List from 2019 to 2024 and recipient of the Western Continuing Admission Scholarship.",
  },
  {
    period: 'Core Toolkit',
    role: 'Engineering Stack',
    detail: 'SolidWorks, Onshape, Rhinoceros 3D, Python, Java, RSLogix 5000, PLC programming, signal processing, vibration analysis, microcontroller programming, prototype development, root-cause analysis, and manufacturing process improvement.',
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

      {selectedProject ? (
        <ProjectPage project={selectedProject} />
      ) : (
      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)]" />
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
                robotics project work to teams building reliable automation, mobility, and advanced hardware systems.
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
                  I am a mechanical engineering graduate from Western University with professional experience in acoustics and vibration engineering and production engineering. My work has included field investigations, data acquisition, engineering calculations, Python-based analysis tools, 3D simulation models, manufacturing troubleshooting, and technical reporting for multidisciplinary teams.
                </p>
                <p>
                  My academic project experience adds a robotics and controls foundation: FANUC automation, Allen-Bradley PLC integration, autonomous mobile robot design, embedded controls, CAD, 3D printing, laser cutting, and iterative prototype testing.
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
                  href={`#/projects/${project.id}`}
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
                  A focused snapshot of roles, education, and technical strengths for engineering hiring teams reviewing mechanical, robotics, automation, or product development candidates.
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
