import React from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      className="group block p-6 border border-neutral-900 hover:border-neutral-700 rounded-lg transition-all duration-200 bg-neutral-950/50"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
        <h3 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4">
          {project.title}
        </h3>
        <span className="text-xs text-neutral-500 tracking-wider">{project.year} ↗</span>
      </div>
      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}