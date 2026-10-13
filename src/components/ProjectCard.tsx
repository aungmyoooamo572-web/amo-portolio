
import type { Project } from "../data/project"

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles: Record<string, string> = {
    Completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    "In Progress": "bg-amber-50 text-amber-700 ring-amber-600/20",
    "Practice Project": "bg-blue-50 text-blue-700 ring-blue-600/20",
  }

  const statusClass =
    statusStyles[project.status] ??
    "bg-slate-100 text-slate-600 ring-slate-500/20"

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-y-1 hover:border-blue-200 hover:shadow-slate-200/60 sm:p-6 ">
      {/* Card Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-6 w-6"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M10 18h4" />
          </svg>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusClass}`}
        >
          {project.status}
        </span>
      </div>

      {/* Project Information */}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {project.description}
      </p>

      {/* Technology Stack */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
          Source Code
          <span aria-hidden="true">↗</span>
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            aria-label={`Open ${project.title} live demo`}
          >
            Live Demo
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
