
const skills = ['Java', 'Spring Boot', 'React', 'MySQL', 'Tailwind CSS']

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            AMO<span className="text-blue-600">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a href="#projects" className="transition hover:text-blue-600">
              Projects
            </a>
            <a href="#about" className="transition hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="transition hover:text-blue-600">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-white transition hover:bg-blue-700"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.3fr_0.7fr]"
      >
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Computer Science Student · Developer
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm Aung Myo Oo.
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

          <div id="skills" className="mt-10">
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
        className="border-t border-slate-200 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Work
          </p>
          <h2 className="mt-3 text-3xl font-bold">Featured Projects</h2>
          <p className="mt-3 text-slate-600">
            Projects I've built and the problems I've worked on.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Project cards coming next.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          I'm studying Computer Science at the University of Computer
          Studies, Mandalay, and developing my skills in full-stack
          web development.
        </p>
      </section>

      <footer
        id="contact"
        className="border-t border-slate-200 bg-white px-6 py-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Aung Myo Oo
          </p>
          <a
            href="mailto:aungmyoooamo572@gmail.com"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Get in touch ↗
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
