import { 
  EnvelopeIcon, 
  PhoneIcon, 
  DocumentArrowDownIcon,
  LinkIcon 
} from '@heroicons/react/24/outline'

const contacts = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'narayanan.vishnujan@gmail.com',
    href: 'mailto:narayanan.vishnujan@gmail.com',
    color: 'text-red-500'
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+91 81296 88626',
    href: 'tel:+918129688626',
    color: 'text-green-500'
  },
  {
    icon: DocumentArrowDownIcon,
    label: 'Resume',
    value: 'Download PDF',
    href: 'https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view',
    color: 'text-blue-500'
  },
  {
    icon: LinkIcon,
    label: 'LinkedIn',
    value: 'in/vishnujan-narayanan',
    href: 'https://linkedin.com/in/vishnujan-narayanan',
    color: 'text-blue-600'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Open to discussing AI engineering opportunities, collaborations, and consulting projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${contact.color.replace('text', 'bg')}/10 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${contact.color}`} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {contact.label}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {contact.value}
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/VishnujanNarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/drive/folders/1eqwXBxzuvGUf3kmBHLsL8InS9uiZlAMp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-500 transition-colors font-medium"
            >
              Certificates
            </a>
            <a
              href="https://vishnujan-narayanan.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all font-medium shadow-lg hover:shadow-xl"
            >
              Live Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}