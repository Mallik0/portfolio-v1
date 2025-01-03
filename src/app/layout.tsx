import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mallik Narsina',
  description: 'Portfolio of a Full Stack Developer specializing in backend development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth font-poppins">
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 font-poppins">
        {children}
        <GoogleAnalytics gaId="G-6BHPE8PRWJ" /> {/* Replace with your actual Measurement ID */}
      </body>
    </html>
  )
}

