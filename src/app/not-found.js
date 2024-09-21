import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
          Oops! You seem to have wandered off the path.
        </p>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-3xl opacity-50"></div>
            <div className="relative bg-white rounded-full p-4">
              <svg
                className="h-16 w-16 text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md mt-8 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}