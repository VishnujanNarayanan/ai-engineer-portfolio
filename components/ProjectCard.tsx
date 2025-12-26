'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BoltIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number // Position in grid (0, 1, 2)
  totalCards: number // Total cards in row (3)
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-700 dark:text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    hover: 'hover:border-blue-400 dark:hover:border-blue-600'
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-700 dark:text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    hover: 'hover:border-purple-400 dark:hover:border-purple-600'
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/10',
    border: 'border-cyan-200 dark:border-cyan-800',
    text: 'text-cyan-700 dark:text-cyan-400',
    gradient: 'from-cyan-500 to-cyan-600',
    hover: 'hover:border-cyan-400 dark:hover:border-cyan-600'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/10',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-700 dark:text-green-400',
    gradient: 'from-green-500 to-green-600',
    hover: 'hover:border-green-400 dark:hover:border-green-600'
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/10',
    border: 'border-orange-200 dark:border-orange-800',
    text: 'text-orange-700 dark:text-orange-400',
    gradient: 'from-orange-500 to-orange-600',
    hover: 'hover:border-orange-400 dark:hover:border-orange-600'
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-900/10',
    border: 'border-pink-200 dark:border-pink-800',
    text: 'text-pink-700 dark:text-pink-400',
    gradient: 'from-pink-500 to-pink-600',
    hover: 'hover:border-pink-400 dark:hover:border-pink-600'
  }
} as const

type ColorKey = keyof typeof colorClasses

export default function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const [primaryColor, setPrimaryColor] = useState<ColorKey>('blue')
  
  // Assign different colors to each project
  useEffect(() => {
    const colors: ColorKey[] = ['blue', 'purple', 'cyan', 'green', 'orange', 'pink']
    const colorIndex = (project.id - 1) % colors.length
    setPrimaryColor(colors[colorIndex])
  }, [project.id])

  const colors = colorClasses[primaryColor]

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // Auto-collapse when mouse leaves expanded card
  const handleMouseLeaveExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false)
    }
  }

  // Calculate expansion direction based on position - REDUCED OVERLAP
  const getExpansionStyles = () => {
    if (!isExpanded) return {}
    
    // Determine card position in grid
    const isLeftEdge = index === 0
    const isRightEdge = index === totalCards - 1
    
    // For 3-column layout (index: 0, 1, 2)
    if (totalCards === 3) {
      if (isLeftEdge) {
        // Leftmost card: Expand ONLY to the right - 80% overlap (reduced from 100%)
        return {
          width: '180%', // Less width expansion
          marginLeft: '0%',
          marginRight: '-80%', // Overlap middle card by 80%
        }
      }
      
      if (isRightEdge) {
        // Rightmost card: Expand ONLY to the left - 80% overlap (reduced from 100%)
        return {
          width: '180%', // Less width expansion
          marginLeft: '-80%', // Overlap middle card by 80%
          marginRight: '0%',
        }
      }
      
      // Middle card: Expand both ways - 45% overlap each side (reduced from 60%)
      return {
        width: '190%', // Less width expansion
        marginLeft: '-45%', // Less overlap on left
        marginRight: '-45%', // Less overlap on right
      }
    }
    
    // For 2-column layout (index: 0, 1)
    if (totalCards === 2) {
      if (isLeftEdge) {
        // Left card: Expand to the right - 60% overlap
        return {
          width: '160%',
          marginLeft: '0%',
          marginRight: '-60%', // Reduced overlap
        }
      }
      
      // Right card: Expand to the left - 60% overlap
      return {
        width: '160%',
        marginLeft: '-60%', // Reduced overlap
        marginRight: '0%',
      }
    }
    
    // Default fallback for other layouts
    return {
      width: '150%',
      marginLeft: '-25%',
      marginRight: '-25%',
    }
  }

  // Scroll into view if expanded card is near bottom
  useEffect(() => {
    if (isExpanded && cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // If card bottom is below viewport, scroll it into view
      if (cardRect.bottom > viewportHeight - 50) {
        cardRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest',
          inline: 'nearest'
        })
      }
    }
  }, [isExpanded])

  return (
    <div 
      className="relative card-wrapper"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Card - COMPACT at rest, expands outward */}
      <div 
        ref={cardRef}
        className={`relative bg-white dark:bg-gray-900 rounded-2xl border ${colors.border} transition-all duration-300 card-transition ${
          isExpanded 
            ? 'scale-105 shadow-2xl min-h-[500px] z-50' 
            : isHovering 
            ? 'scale-[1.02] shadow-lg min-h-[360px]' 
            : 'shadow-sm min-h-[240px]'
        }`}
        style={getExpansionStyles()}
        onMouseLeave={handleMouseLeaveExpanded}
      >
        {/* Top Gradient Accent */}
        <div className={`h-1.5 rounded-t-2xl bg-gradient-to-r ${colors.gradient}`} />
        
        <div className={`p-6 ${isExpanded ? 'px-10' : ''}`}>
          {/* Header - Always Visible */}
          <div className="flex justify-between items-start mb-4">
            <div className={`flex-1 ${isExpanded ? 'pr-12' : 'pr-4'}`}>
              {/* Title with Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <BoltIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className={`font-bold text-gray-900 dark:text-white ${
                  isHovering || isExpanded ? 'line-clamp-none' : 'line-clamp-1'
                }`}>
                  {project.title}
                </h3>
              </div>
              
              {/* Full Description - Always Visible */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Action Buttons - Always Visible */}
            <div className="flex flex-col gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                title="View Code"
              >
                <CodeBracketIcon className="h-5 w-5" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-400 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800/50 dark:hover:to-cyan-800/50 transition-all hover:scale-110"
                  title="Live Demo"
                >
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Technologies Section - Show ALL tools on hover (BEFORE Expansion) */}
          {!isExpanded && isHovering && (
            <div className="mb-6 animate-fade-in">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expanded Content Section - Shows when card is CLICKED */}
          {isExpanded && (
            <div className="space-y-6 animate-slide-up">
              {/* Technologies Section - Full List When Expanded */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Results Section - Only When Expanded */}
              {project.metrics && (
                <div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-100/50 dark:border-blue-800/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">Key Results</span>
                    </div>
                    <div className="space-y-1">
                      {project.metrics.map((metric, index) => (
                        <p key={index} className="text-sm text-gray-600 dark:text-gray-400">
                          • {metric}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Features Section - Uses horizontal space efficiently */}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Expand Button - INSIDE the card content area */}
          {!isExpanded && isHovering && (
            <div className="mt-6">
              <button
                onClick={handleToggleExpand}
                className={`w-full py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-white/50 dark:bg-gray-800/50 animate-fade-in`}
              >
                <ChevronDownIcon className="h-4 w-4" />
                <span>View Full Details</span>
              </button>
            </div>
          )}
        </div>

        {/* Collapse Button - Only Visible After Expansion */}
        {isExpanded && (
          <div className="px-10 pb-6">
            <button
              onClick={handleToggleExpand}
              className={`w-full py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-white/50 dark:bg-gray-800/50 animate-fade-in`}
            >
              <ChevronUpIcon className="h-4 w-4" />
              <span>Collapse</span>
            </button>
          </div>
        )}
      </div>

      {/* Hover Indicator - Shows "Hover to view tools" when NOT hovering */}
      {!isExpanded && !isHovering && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 animate-fade-in">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium shadow-lg">
            <EyeIcon className="h-3 w-3" />
            <span>Hover to view tools</span>
          </div>
        </div>
      )}
    </div>
  )
}