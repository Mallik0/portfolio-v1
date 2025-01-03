import { Quote } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">About Me</h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8 relative">
          <Quote className="absolute top-4 left-4 w-12 h-12 text-blue-200 dark:text-blue-900 opacity-50" />
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a passionate full-stack developer, I specialize in crafting robust backend solutions while maintaining a strong grasp on frontend technologies. My journey in the world of coding began with a fascination for creating powerful, scalable server-side applications, and it has evolved into a comprehensive understanding of the entire web development ecosystem.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My core strength lies in backend development, where I excel in designing and implementing efficient server-side architectures, RESTful APIs, and database management systems. This backend prowess is complemented by a solid understanding of frontend technologies, allowing me to create seamless, full-stack applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not immersed in lines of code, you can find me strumming my guitar, watching thought-provoking movies, or diving into insightful podcasts. These diverse interests fuel my creativity and problem-solving skills, allowing me to approach development challenges with a fresh perspective. I&apos;m driven by the ever-evolving nature of web development and the endless opportunities it presents to learn, grow, and innovate in creating powerful digital solutions.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 text-center italic leading-relaxed">
              &ldquo;Building powerful digital experiences that inspire and empower.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

