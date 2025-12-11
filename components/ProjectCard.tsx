'use client'

import { useState } from 'react'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon 
} from '@heroicons/react/24/outline'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
          </div>
          <div className="flex space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="View Code"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
                title="Live Demo"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="mb-4 p-4 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Key Results</h4>
            </div>
            <div className="space-y-1">
              {project.metrics.map((metric, index) => (
                <p key={index} className="text-sm text-gray-700 dark:text-gray-300">
                  • {metric}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Expandable Content */}
        <div className="space-y-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center w-full py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUpIcon className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show Details
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          {expanded && (
            <div className="animate-slide-up space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Project Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}