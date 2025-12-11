import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium mb-6">
              AI Application Engineer
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building Intelligent Systems with
              <span className="block bg-gradient-to-r from-primary-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Real Impact
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Specialized in end-to-end applications with integrated ML features. 
              Experienced in backend APIs, real-time data pipelines, NLP/time-series models, 
              and deploying production AI systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowDownTrayIcon className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="mailto:narayanan.vishnujan@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
              >
                Contact Me
                <EnvelopeIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}