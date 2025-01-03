import { Code, Database, Server, PenTool, Globe, Cpu, Box, Coffee, Terminal } from 'lucide-react'

const skills = [
  { name: 'HTML', icon: Globe, category: 'Frontend' },
  { name: 'CSS', icon: PenTool, category: 'Frontend' },
  { name: 'JavaScript', icon: Code, category: 'Frontend' },
  { name: 'React', icon: Code, category: 'Frontend' },
  { name: 'Next.js', icon: Server, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Express', icon: Server, category: 'Backend' },
  { name: 'Flask', icon: Terminal, category: 'Backend' },
  { name: 'Java', icon: Coffee, category: 'Programming Languages' },
  { name: 'Python', icon: Terminal, category: 'Programming Languages' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'Docker', icon: Box, category: 'DevOps' },
  { name: 'Vercel', icon: Server, category: 'DevOps' },
  { name: 'Postman', icon: PenTool, category: 'Tools' },
  { name: 'Prisma', icon: Database, category: 'ORM' },
  { name: 'REST', icon: Server, category: 'API' },
  { name: 'GraphQL', icon: Server, category: 'API' },
]

const categoryOrder = [
  'Programming Languages',
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'API',
  'ORM',
  'Tools'
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOrder.map((category) => (
            <div key={category} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <skill.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

