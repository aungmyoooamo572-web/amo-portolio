import type { Project } from "../data/project"

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-6 w-6"
                        aria-hidden="true"
                    >
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <path d="M10 18h4" />
                    </svg>
                </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {project.status}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-700 transition hover:text-blue-600"
      >
        View on GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export default ProjectCard
    
