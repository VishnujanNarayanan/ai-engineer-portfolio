import { skills } from '@/lib/data'
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  WrenchScrewdriverIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

const skillIcons = {
  programming: CodeBracketIcon,
  ml: CpuChipIcon,
  tools: WrenchScrewdriverIcon,
  methodologies: ChartBarIcon
}

const skillTitles = {
  programming: 'Programming & Data',
  ml: 'Machine Learning',
  tools: 'Data Tools',
  methodologies: 'Methodologies'
}

export default function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set covering the entire AI application development lifecycle
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([key, skillList]) => {
            const Icon = skillIcons[key as keyof typeof skillIcons]
            const title = skillTitles[key as keyof typeof skillTitles]
            
            return (
              <div 
                key={key}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {skillList.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}