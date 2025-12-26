import ProjectCard from './ProjectCard'
import { projects } from '@/lib/data'
import Link from 'next/link'

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gray-300 dark:bg-gray-700"></div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                Featured Work
              </span>
              <div className="h-px w-8 bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Selected Projects
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            End-to-end AI solutions from concept to production
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Hover cards to preview • Click to expand
            </span>
          </div>
        </div>

        {/* Projects Grid with wrapper */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="transition-all duration-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard 
                project={project} 
                index={index}
                totalCards={featuredProjects.length}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            <span>View All Projects</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}