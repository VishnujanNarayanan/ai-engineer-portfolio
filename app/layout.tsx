import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Application Engineer | Building Intelligent Systems',
  description: 'AI Application Engineer skilled in building end-to-end apps with integrated ML features. Experienced in backend APIs, real-time data pipelines, and deploying production AI systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container-custom flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AI Engineer
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">Home</a>
              <a href="/projects" className="text-sm font-medium text-gray-700 hover:text-blue-600">Projects</a>
              <a href="/experience" className="text-sm font-medium text-gray-700 hover:text-blue-600">Experience</a>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="border-t border-gray-200 py-8">
          <div className="container-custom text-center text-gray-600">
            <p>© {new Date().getFullYear()} — Built with Next.js 15 & Tailwind CSS</p>
            <p className="mt-2 text-sm">Designed to showcase engineering excellence</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
