'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun, FileDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsOpen(false)
  }

  const handleDownloadResume = () => {
    
    window.open('/resume.pdf', '_blank')
  }

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md' : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
            Mallik Narsina
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
            <NavLink href="#skills" onClick={handleLinkClick}>Skills</NavLink>
            <NavLink href="#projects" onClick={handleLinkClick}>Projects</NavLink>
            <NavLink href="#contact" onClick={handleLinkClick}>Contact</NavLink>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Resume
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 ml-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="container mx-auto px-4 py-2">
            <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
            <NavLink href="#skills" onClick={handleLinkClick}>Skills</NavLink>
            <NavLink href="#projects" onClick={handleLinkClick}>Projects</NavLink>
            <NavLink href="#contact" onClick={handleLinkClick}>Contact</NavLink>
            <button
              onClick={handleDownloadResume}
              className="w-full text-left py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Resume
            </button>
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  {/* Light Mode */}
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  {/* Dark Mode */}
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link
      href={href}
      className="inline-block py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

