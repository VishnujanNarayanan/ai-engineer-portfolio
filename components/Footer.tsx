import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              © {currentYear} Vishnujan Narayanan
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Full-Stack Machine Learning Engineer
            </p>
          </div>

          {/* Center: Tagline */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Building intelligent systems with real-world impact
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VishnujanNarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/vishnujan-narayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href="mailto:narayanan.vishnujan@gmail.com"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            <a
              href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}