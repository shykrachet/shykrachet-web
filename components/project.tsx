"use client";

import React from "react";
import { Project } from "@/data/projects";
import { usePreferences } from "@/components/preferences-provider";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = usePreferences();

  return (
    <a
      href={project.link}
      className="group block rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6 transition-all duration-200 hover:border-[var(--border-strong)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
        <h3 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4">
          {project.title[language]}
        </h3>
        <span className="text-xs text-[var(--subtle)] tracking-wider">{project.year} ↗</span>
      </div>
      <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
        {project.description[language]}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
