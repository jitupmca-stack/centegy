export default function Technologies() {
  const technologies = [
    {
      category: 'Frontend',
      icon: '🎨',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      tools: ['Node.js', 'Python', 'Java', 'Go', 'PostgreSQL']
    },
    {
      category: 'Mobile',
      icon: '📱',
      tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      tools: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      tools: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'LLMs']
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      tools: ['Git', 'Jenkins', 'Terraform', 'Grafana', 'ELK Stack']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our Technologies
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2 sm:px-0">
            We work with the latest and most reliable technologies to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">{tech.icon}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {tech.category}
                </h2>
              </div>
              <div className="space-y-2">
                {tech.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 rounded-lg text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Our Tech Stack?</h2>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start">
              <span className="mr-3 sm:mr-4">✓</span>
              <span>Proven track record with enterprise-level solutions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 sm:mr-4">✓</span>
              <span>Scalable and secure architectures</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 sm:mr-4">✓</span>
              <span>Continuous integration and deployment capabilities</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 sm:mr-4">✓</span>
              <span>Strong community support and documentation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 sm:mr-4">✓</span>
              <span>Future-proof and regularly updated technologies</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
