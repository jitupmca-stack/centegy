export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Engineering Scalable Digital Platforms with Cloud & Data Excellence
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0">
            Web | Cloud | DevOps | Big Data | Solution Architecture
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition active:scale-95 text-center"
            >
              Talk to Team
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition active:scale-95 text-center"
            >
              Request Proposal
            </a>
          </div>
        </div>

        {/* Core Service Highlights */}
        <div className="mt-16 sm:mt-24 md:mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 sm:mb-16">
            Core Service Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl mb-4">💻</h3>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Web & Enterprise Application Development
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Building robust, scalable web and enterprise applications tailored to your business needs
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl mb-4">☁️</h3>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Cloud Computing & DevOps Automation
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Streamlining infrastructure management and continuous deployment for optimal performance
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl mb-4">🏗️</h3>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Solution Architecture & Cloud Migration
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Designing future-ready architectures and seamlessly migrating to cloud environments
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl mb-4">📊</h3>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Big Data & Analytics Platforms
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Unlocking insights from large-scale data with advanced analytics and AI solutions
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              🚀 Innovative
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We provide cutting-edge solutions to modern problems
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              💼 Professional
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Our team of experts ensures quality in every project
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              ⭐ Reliable
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Trusted by hundreds of satisfied clients worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
