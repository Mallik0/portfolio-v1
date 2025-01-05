'use client'

import { useState } from 'react'
import { Send, Instagram, Linkedin, Twitter, Github } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitMessage("Thanks for your message! I'll get back to you soon.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('There was an error submitting the form. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="mb-4">Feel free to reach out! I&apos;d love to hear from you.</p>
              <div className="flex items-center mb-4">
                <Send className="mr-2 h-5 w-5" />
                <span>malliknarsina.folio@gmail.com</span>
              </div>
              <div className="flex items-center mb-8">
                <Send className="mr-2 h-5 w-5" />
                <span>Hyderabad</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://instagram.com/mallikkkk__" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/mallik-narsina-314401233" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/malliknarsina" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://github.com/Mallik0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="md:w-1/2 p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitMessage && (
                <p className="mt-4 text-center text-green-600 dark:text-green-400">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

