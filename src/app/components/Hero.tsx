import Image from 'next/image'

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
          Hi, I&apos;m Mallik
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Full Stack Developer
        </p>
        <div>
          <a 
            href="#contact" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="/malliks-profile.jpg" // Make sure your image is in the public folder
            alt="Mallik Narsina"
            fill
            priority
            className="rounded-full object-cover shadow-2xl"
            sizes="(max-width: 768px) 300px, 400px"
          />
        </div>
      </div>
    </section>
  )
}

