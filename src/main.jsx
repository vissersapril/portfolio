import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ArrowLeft,
  Bot,
  BrainCircuit,
  Download,
  ExternalLink,
  FileText,
  Linkedin,
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
const resumeUrl = `${basePath}April Vissers - Resume.pdf`
const linkedInUrl = 'https://www.linkedin.com/in/april-vissers-849a56207'
const projectPath = (id) => `#/projects/${id}`
const sectionPath = (id) => `${basePath}#${id}`
const projectImageClass = (project, spacing = '') =>
  `${spacing}aspect-[4/3] w-full rounded-md ${project.imageFit === 'contain' ? 'bg-mist object-contain p-2' : 'object-cover'}`

const navItems = [
  { label: 'Home', href: sectionPath('home') },
  { label: 'About', href: sectionPath('about') },
  { label: 'Projects', href: sectionPath('projects') },
  { label: 'Resume', href: sectionPath('resume') },
  { label: 'Interests', href: `${basePath}interests/` },
  { label: 'Contact', href: sectionPath('contact') },
]

const capabilities = [
  { icon: BrainCircuit, label: 'Noise and Vibration analysis', detail: 'Field data, signal processing, and Python tooling.' },
  { icon: Wrench, label: 'Manufacturing', detail: 'Fixtures, prototypes, troubleshooting, and documentation.' },
  { icon: Bot, label: 'Robotics', detail: 'FANUC, PLCs, ESP32, CAN bus, and I2C.' },
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
    video: {
      title: 'Automated Robotics Construction Cell video',
      embedUrl: 'https://www.youtube.com/embed/SXRrbNrCMVc?autoplay=1&mute=1&loop=1&playlist=SXRrbNrCMVc&playsinline=1&rel=0',
    },
    outcome:
      'A repeatable workcell concept combining tooling, controls, and process planning.',
  },
  {
    id: 'hospital-mri-vibration-investigation',
    title: 'New Hospital MRI Vibration Investigation',
    area: 'Sensitive Equipment Isolation',
    image: 'media/project-mri-vibration.jpg',
    summary:
      'Low-frequency vibration investigation and isolation concept for an MRI suite affected by elevated low-frequency vibration levels.',
    metrics: ['Low frequency vibration', 'LS-DYNA modelling', 'Spring isolators'],
    details: [
      'Investigated elevated low-frequency vibration levels driven by water-saturated soil.',
      'Predicted minimal attenuation through the structure supported by LS-DYNA dynamic modelling and validation against measurements.',
      'Supported design of a recessed-slab isolator system with a 0.8 Hz natural frequency.',
      'Analyzed settling time and rocking modes to prevent usability issues for staff, patients, or equipment users.',
      'Coordinated with technical teams on space requirements, shielding constraints, and integration around the MRI installation.',
      'Presented in front of industry experts at the Canadian Acoustical Association conference.',
    ],
    gallery: [
      {
        src: 'media/CAA presentation.jpeg',
        alt: 'April Presenting at CAA Conference',
      },
    ],
    outcome:
      'Delivered a practical vibration isolation strategy for sensitive imaging equipment in a challenging soil-structure environment.',
  },
  {
    id: 'custom-soundbar-assembly-line',
    title: 'Custom Soundbar Assembly Line Design',
    area: 'Production System Design',
    image: 'media/project-soundbar-assembly-line.jpg',
    imagePosition: '52% 52%',
    summary:
      'Production layout and assembly process design for a made-to-order soundbar product launch.',
    metrics: ['Equipment Procurement', 'Assembly fixtures', 'Work instructions'],
    details: [
      'Designed the production floor plan and workflow for a new bespoke soundbar product with tight launch timing.',
      'Procured tools, racking, planned workspaces, and part flow while coordinating with design, assembly, maintenance, and management teams.',
      'Supported pre-production runs by documenting assembly steps and identifying design for assembly improvements.',
      'Created supporting processes and tooling concepts, including machined-part cleaning, MDF grill routing jigs, and fixtures for accurate grill and end-cap installation.',
    ],
    outcome:
      'Developed a successful assembly process for a new product launch, connecting design with production ready tooling and documentation.',
  },
  {
    id: 'autonomous-collection-robot',
    title: 'Autonomous Collection Robot',
    area: 'Mobile Robotics',
    image: 'media/project-autonomous-car.jpg',
    summary:
      'Autonomous robot with embedded controls, sensors, and custom fabricated parts.',
    metrics: ['Design to assembly', 'ESP32', 'SolidWorks'],
    details: [
      'Built ESP32 control software for autonomous collection and driving.',
      'Integrated sensors and actuators over CAN bus and I2C for item proximity and sorting.',
      'Fabricated custom parts with CAD, 3D printing, and laser cutting.',
    ],
    outcome:
      'Earned 1st place for overall design, performance, and simplicity.',
  },
  {
    id: 'vertical-axis-wind-turbine',
    title: 'Vertical Axis Wind Turbine Prototype',
    area: 'Mechanical Design',
    image: 'media/project-wind-turbine-build.jpg',
    imagePosition: '58% 68%',
    summary:
      'Vertical axis turbine prototype built from calculations, CAD, fabrication, and testing.',
    metrics: ['Project Management', 'CAD modeling', 'Prototype testing'],
    details: [
      'Led team in design, prototyping, fabrication and testing of a novel proof of concept wind turbine for industry client.',
      'performed speed, efficiency and load calculations to support design decisions.',
      'Procured, modelled and fabricated components, presenting final product in a design showcase.',
    ],
    gallery: [
      {
        src: 'media/project-wind-turbine-presentation.jpg',
        alt: 'Vertical axis wind turbine project team presentation',
      },
    ],
    outcome:
      'A physical proof of concept prototype involving engineering analysis, design, fabrication, and presentation.',
  },
  {
    id: 'vancouver-theatre-vibrations',
    title: 'Theatre Balcony Vibration Study',
    area: 'Structural Vibration',
    image: 'media/project-theatre-vibration.jpg',
    summary:
      'Balcony vibration investigation after complaints of perceptible movement during a live concert.',
    metrics: ['Natural frequency', 'Rhytmic activity', 'TMD concept'],
    details: [
      'Measured and assessed the balcony response to determine the natural frequency of the structure.',
      'Compared the measured frequency with the beat of the concert set list and found it aligned with several popular songs from the event.',
      'Prepared preliminary tuned mass damper recommendations to reduce perceptible response during rhythmic crowd and music excitation.',
    ],
    outcome:
      'Identified a plausible resonance mechanism and provided early mitigation direction for future venue upgrades.',
  },
  {
    id: 'collaborative-robot-buffing-cell',
    title: 'Collaborative Robot Buffing Cell',
    area: 'Manufacturing Automation',
    image: 'media/project-cobot-buffing-cell.jpg',
    imagePosition: '48% 48%',
    imageFit: 'contain',
    summary:
      'Collaborative robot workcell implementation for automating a cabinet buffing process in speaker manufacturing.',
    metrics: ['Cobot integration', 'Fixture planning', 'Process validation'],
    details: [
      'Supported procurement and installation of a collaborative robot used to automate cabinet buffing operations.',
      'Contributed to layout planning, robot and cabinet fixture concepts, worker process flow, part movement, and safety considerations.',
      'Helped organize robot installation, setup, programming support, and validation of the planned buffing process after arrival.',
    ],
    outcome:
      'Helped bring one of the company’s early automation workcells into operation while balancing productivity, quality, safety, and worker adoption concerns.',
  },
  {
    id: 'theatre-acoustic-reflector-design',
    title: 'Performing Arts Theatre Design',
    area: 'Architectural Acoustics',
    image: 'media/project-theatre-design.jpg',
    imagePosition: '50% 58%',
    summary:
      'Acoustic modelling studies for performance spaces, using 3D modelling and image-source analysis to control acoustic reflections.',
    metrics: ['3D modelling', 'Image-source mapping', 'Geometry optimization'],
    details: [
      'Built and adjusted 3D theatre models to study how reflector and diffuser geometry directed acoustic energy across audience areas.',
      'Used image-source reflection mapping to evaluate timing, coverage, and reflection paths, then tuned geometric parameters to improve useful early energy.',
      'Wrote scripts to test reflector angles and optimize reflection angle and timing.',
      'Contributed modelling and analysis support for new Kamloops Performing Arts Centre work and University of Alberta Convocation Hall renovation studies.',
    ],
    outcome:
      'Translated acoustic design goals into modelled geometry choices, helping performance spaces balance clarity, coverage, and architectural constraints.',
  },
]

const resumeItems = [
  {
    period: '2024 - 2026',
    role: 'Acoustics and Vibration Engineer, Aercoustics Engineering',
    detail: 'Field testing, vibration analysis, Python tools, technical reports, and mitigation strategies for elevated noise or vibration problems.',
  },
  {
    period: '2023 - 2024',
    role: 'Production Engineering Intern, Paradigm Electronics',
    detail: 'Manufacturing troubleshooting, product testing, tooling improvements, and process design.',
  },
  {
    period: '2019 - 2024',
    role: 'Bachelor of Engineering Science, Western University',
    detail: "Mechanical and Materials Engineering. Dean's Honour List and Western Continuing Admission Scholarship.",
  },
  {
    period: 'Core Toolkit',
    role: 'Engineering Skills',
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
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-ink" href={sectionPath('projects')}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </a>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">{project.area}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl">
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
                className={projectImageClass(project)}
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={`${project.title} technical illustration`}
                style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
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
            {project.video && (
              <article className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
                <div className="aspect-video w-full bg-mist">
                  <iframe
                    className="h-full w-full"
                    src={project.video.embedUrl}
                    title={project.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </article>
            )}
            {project.gallery && (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((item) => (
                  <article key={item.src} className="rounded-lg border border-line bg-white p-4">
                    <img
                      className="aspect-[4/3] w-full rounded-md object-cover"
                      src={`${basePath}${item.src}`}
                      alt={item.alt}
                    />
                  </article>
                ))}
              </div>
            )}
            <article className="rounded-lg bg-ink p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Outcome</p>
              <p className="mt-3 text-sm leading-7 text-white/78">{project.outcome}</p>
            </article>
            <a className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink" href={sectionPath('contact')}>
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

  React.useEffect(() => {
    if (selectedProject) return
    const sectionId = window.location.hash.replace('#', '')
    if (!sectionId || sectionId.startsWith('/')) return

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView()
    })
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-mist text-ink antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href={sectionPath('home')} className="text-sm font-semibold text-signal transition hover:text-ink" onClick={closeMenu} aria-label="Home">
            April Vissers
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.label} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a className="icon-link" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="Open resume PDF">
              <FileText size={18} aria-hidden="true" />
            </a>
            <a className="icon-link" href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>

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
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-3 py-3 text-sm font-semibold text-ink hover:border-signal hover:text-signal" href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
                <FileText size={16} aria-hidden="true" />
                PDF
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-3 py-3 text-sm font-semibold text-ink hover:border-signal hover:text-signal" href={linkedInUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      {selectedProject ? (
        <ProjectPage project={selectedProject} />
      ) : (
      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-mist" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-20">
            <div className="animate-rise">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                Mechanical engineer
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-normal text-ink sm:text-5xl lg:text-[3.5rem]">
                Engineering practical systems that make an <span className="text-signal">impact</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-steel">
                I work across vibration, acoustics, robotics, and hardware builds, turning analysis into tested systems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-signal" href={sectionPath('projects')}>
                  View projects
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-signal hover:text-signal" href={resumeUrl} target="_blank" rel="noreferrer">
                  <Download size={17} aria-hidden="true" />
                  Resume PDF
                </a>
              </div>
            </div>

            <div className="animate-rise-delay">
              <div className="relative overflow-hidden rounded-lg border border-line bg-white p-3 shadow-soft">
                <img
                  className="aspect-[4/5] w-full rounded-md bg-mist object-cover object-[50%_28%]"
                  src={`${basePath}media/headshot.jpg`}
                  alt="Professional headshot of April Vissers"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow">About</p>
                <h2 className="section-title">Engineer with a strong skillset in technical project management, analysis, prototyping, and real-world testing.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-steel">
                <p>
                  I am a mechanical engineering graduate from the University of Western Ontario. I have experience in mechanical design, testing, vibration analysis, manufacturing, and hands-on robotics.
                </p>
                <p>
                  I like work that requires technical expertise, problem solving, and strong technical communication.
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
                <h2 className="section-title max-w-3xl">Selected acoustics, vibration, robotics, and mechanical design projects.</h2>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-ink" href={sectionPath('contact')}>
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
                    className={projectImageClass(project, 'mb-6 ')}
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.title} project illustration`}
                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                  />
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="rounded-md bg-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-signal">{project.area}</span>
                    <ExternalLink className="text-steel transition group-hover:text-signal" size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-6 text-ink">{project.title}</h3>
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
                <a className="mt-6 inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink" href={resumeUrl} target="_blank" rel="noreferrer">
                  <FileText size={17} aria-hidden="true" />
                  Open full resume
                </a>
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
                <a className="contact-row" href={linkedInUrl} target="_blank" rel="noreferrer">
                  <Linkedin size={20} aria-hidden="true" />
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
