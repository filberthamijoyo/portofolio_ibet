import Todo from '@/components/Todo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-gray-600 mb-6">
              This is a simple portfolio website built with Next.js and styled with Tailwind CSS.
              It demonstrates how to create responsive layouts and components with Tailwind's utility classes.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                View Projects
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
                Contact Me
              </button>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Todo App Demo</h2>
          <div className="max-w-md mx-auto">
            <Todo />
          </div>
        </section>
      </div>
    </div>
  );
}
