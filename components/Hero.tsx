import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Github, Linkedin, FileText, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center py-12 md:py-0 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                Full-Stack Machine Learning Engineer
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Vishnujan
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Building intelligent systems
                <span className="block text-gray-700 dark:text-gray-300">
                  with real-world impact
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-800 dark:text-gray-300">
                I craft <span className="font-semibold text-blue-700 dark:text-blue-400">
                  end-to-end AI applications
                </span> that transform data into actionable insights and scalable solutions.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="text-gray-800 dark:text-gray-300">Real-time Data Pipelines & Backend Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="text-gray-800 dark:text-gray-300">Production ML Models & MLOps Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="text-gray-800 dark:text-gray-300">Scalable AI Solutions & System Architecture</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl border border-blue-500"
              >
                <span>Explore Projects</span>
                <ArrowDownTrayIcon className="h-4 w-4" />
              </Link>
              
              <a
                href="mailto:narayanan.vishnujan@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                <span>Contact Me</span>
                <EnvelopeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile & Social */}
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative mx-auto">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Vishnujan Narayanan - Full-Stack ML Engineer"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized={true}
                />
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/VishnujanNarayanan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all group shadow-sm"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/vishnujan-narayanan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all group shadow-sm"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              
              <a
                href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all group shadow-sm"
              >
                <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
            
            {/* Contact Quick Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:narayanan.vishnujan@gmail.com"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
              
              <a
                href="tel:+918129688626"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}