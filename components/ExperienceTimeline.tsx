import { experiences } from '@/lib/data'
import { CalendarIcon, MapPinIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Timeline dot */}
            <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-8 w-8 rounded-full border-4 border-white dark:border-gray-900 bg-primary-500 ${index === 0 ? 'animate-pulse' : ''}`}></div>
            
            <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {exp.company}
                    </h4>
                  </div>
                  <div className={`flex items-center gap-2 mt-2 md:mt-0 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <MapPinIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-3 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}