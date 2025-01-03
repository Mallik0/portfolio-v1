export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mallik Narsina. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              {/* <span className="sr-only">GitHub</span> */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446
-.127-.003.126 0 0 .853.348 2.8 1.3a9.57 9.57 0 012.5-.34c.85.003 1.705.114 2.5.34 1.947-.952 2.798-1.3 2.798-1.3.443-.253.1-.38-.003-.133.64.7 1.029 1.595 1.029 2.688 0 3.847-2.338 4.694-4.567 4.942.358.31.676.918.676 1.85 0 1.338-.012 2.416-.012 2.74 0 .268.18.581.688.482 3.967-1.324 6.831-5.079 6.831-9.504C22 6.484 17.523 2 12 2z"></path>
            </svg>
            </a>
            </div>
            </div>
            </footer>
          )
      }
  