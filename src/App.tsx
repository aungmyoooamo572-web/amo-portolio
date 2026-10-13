import { projects } from "./data/project"
import ProjectCard from "./components/ProjectCard"
import { useState } from "react"

const skills = ['Java', 'Spring Boot', 'React', 'MySQL', 'Tailwind CSS']

function App() {
  const [menuOpen, setMenuOpen ] = useState(false)
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6"
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            AMO<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a href="#projects" className="transition-colors hover:text-blue-600">
              Projects
            </a>
            <a href="#about" className="transition-colors hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-blue-600">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 bg-white px-5 py-4 sm:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {[
                { label: "Projects", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Contact Me", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:py-20"   >
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Computer Science Student · Aspiring Full-Stack Developer
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Hi
            <span className="mt-2 block text-blue-600">
              I build web applications.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I'm a Computer Science student interested in building useful
            web applications with Java, Spring Boot, React and MySQL.
            I enjoy learning, solving problems and writing clean code.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View My Projects ↗
            </a>

            <a
              href="https://github.com/aungmyoooamo572-web"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              GitHub Profile ↗
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Technologies I Use
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Card */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-xs text-slate-400">
                developer.ts
              </span>
            </div>

            <div className="space-y-4 py-6 font-mono text-sm">
              <p className="text-slate-400">// A little about me</p>
              <p>
                <span className="text-violet-600">const</span>{' '}
                <span className="text-blue-600">developer</span> = {'{'}
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-600">'Aung Myo Oo'</span>,
              </p>
              <p className="pl-4">
                backend: <span className="text-emerald-600">'Java'</span>,
              </p>
              <p className="pl-4">
                framework:{' '}
                <span className="text-emerald-600">'Spring Boot'</span>,
              </p>
              <p className="pl-4">
                frontend: <span className="text-emerald-600">'React'</span>,
              </p>
              <p className="pl-4">
                database: <span className="text-emerald-600">'MySQL'</span>,
              </p>
              <p className="pl-4">
                mindset: <span className="text-emerald-600">'Keep learning'</span>
              </p>
              <p>{'}'}</p>
            </div>

            <div className="rounded-xl bg-blue-50 px-4 py-3">
              <p className="text-sm font-medium text-blue-700">
                Turning ideas into working applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections for the next steps */}
      
<section
  id="projects"
  className="border-t border-slate-200 bg-white px-6 py-20 sm:py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
      My Work
    </p>

    <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-slate-600">
          A selection of applications I have built while learning
          backend and frontend development.
        </p>
      </div>

      <a
        href="https://github.com/aungmyoooamo572-web"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Explore GitHub <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</section>


      
      {/* About Section */}
      <section
        id="about"
        className="border-t border-slate-200 bg-white px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building my path as a developer.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              I'm a final-year Computer Science student at the University of
              Computer Studies, Mandalay, with an interest in full-stack web
              development.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              I work with Java and Spring Boot to build backend APIs, and use
              React and TypeScript to develop user interfaces. I also practice
              database design and data management with MySQL.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Through personal and practice projects, I'm improving my
              problem-solving skills, learning to structure maintainable code,
              and preparing to contribute to a development team.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                Backend Development
              </span>
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                Frontend Development
              </span>
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                Database Design
              </span>
            </div>
          </div>
        </div>
      </section>

      
      {/* Skills Section */}
      <section
        id="skills"
        className="border-t border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            My Skills
          </p>

          <div className="mt-3 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Technologies I work with.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Technologies and tools I use while building and learning
              full-stack web development.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14" />
                </svg>
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Backend Development
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Java", "Spring Boot"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Frontend Development
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
                </svg>
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Database & Tools
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {["MySQL", "Git", "GitHub"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      
<section
  id="contact"
  className="border-t border-slate-200 bg-slate-50 px-6 py-20"
>
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
      Get In Touch
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      
      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
        I'm open to entry-level developer opportunities where I can apply my
        skills in Java, Spring Boot, React, and MySQL, learn from experienced
        developers, and contribute to meaningful projects.
      </p>

    </h2>

    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
      I'm looking for opportunities to grow as a developer, learn from
      experienced teams, and contribute to useful software projects.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      
    
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=aungmyoooamo572@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
>
  Email Me
  <span className="ml-2" aria-hidden="true">↗</span>
</a>

      <a
        href="https://github.com/aungmyoooamo572-web"
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
      >
        GitHub Profile ↗
      </a>
    </div>
  </div>
</section>

<footer className="border-t border-slate-200 bg-white px-6 py-6">
  <div className="mx-auto flex max-w-6xl flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
    <p className="text-sm text-slate-500">
      © {new Date().getFullYear()} Aung Myo Oo
    </p>

    <p className="text-sm text-slate-500">
      Built with React, TypeScript and Tailwind CSS.
    </p>
  </div>
</footer>
    </main>
  )
}

export default App
