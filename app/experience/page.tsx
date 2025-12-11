import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function ExperiencePage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From internships to full-time roles, building scalable AI systems and data pipelines
          </p>
        </div>

        <ExperienceTimeline />
      </div>
    </section>
  )
}