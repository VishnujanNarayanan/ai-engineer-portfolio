'use client'

import { useState } from 'react'
import { skills } from '@/lib/data'
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  WrenchIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const skillCategories = [
  {
    icon: CodeBracketIcon,
    title: 'Programming',
    items: skills.programming,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CpuChipIcon,
    title: 'Machine Learning',
    items: skills.ml,
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: WrenchIcon,
    title: 'Tools & Platforms',
    items: skills.tools,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Methodologies',
    items: skills.methodologies,
    color: 'from-orange-500 to-red-500'
  }
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6 shadow-lg">
            <SparklesIcon className="h-5 w-5 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Technical Expertise
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive toolkit for building end-to-end AI systems and scalable applications
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {skillCategories[activeCategory].items.map((skill, index) => (
            <div
              key={skill}
              className={`group p-4 rounded-xl border-2 transition-all duration-500 hover:scale-105 cursor-pointer ${
                activeCategory === 0
                  ? 'border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  : activeCategory === 1
                  ? 'border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  : activeCategory === 2
                  ? 'border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                  : 'border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 dark:text-white">{skill}</span>
                <ArrowPathIcon className="h-4 w-4 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    activeCategory === 0
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      : activeCategory === 1
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : activeCategory === 2
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-orange-500 to-red-500'
                  }`}
                  style={{ width: `${Math.min(80 + (index * 5), 95)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
              <CodeBracketIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">Full-Stack AI Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                From data pipelines to deployed models and scalable infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}