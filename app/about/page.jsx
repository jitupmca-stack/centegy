export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <img
              src="/kothari-ceo.jpeg?w=500&h=400&fit=crop"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
             <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Centegy is a technology-driven company specializing in 
              building scalable, secure, and future-ready digital platforms. We empower
               organizations through advanced Web development, Cloud-native engineering, 
               DevOps automation, Big Data analytics, and strategic Solution Architecture.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Our expertise in cloud infrastructure and microservices ensures resilient, 
              high-performance systems that adapt to evolving business needs. By integrating 
              DevOps best practices, we enable continuous delivery, faster innovation, and 
              operational efficiency.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              With strong data engineering and analytics capabilities, Centegy transforms 
              complex data into actionable insights. We design intelligent, cost-optimized, 
              and governance-driven digital ecosystems that accelerate
               growth, enhance agility, and deliver measurable business impact.
            </p>
            
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
            Our leadership team brings together decades of experience and expertise. We're committed to driving innovation and delivering exceptional results for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <img
                src="/Kothari.jpeg"
                alt="CEO"
                className="w-full max-w-xs h-64 object-cover rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Manish Kothari
              </h3>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Chief Executive Officer
              </p>
            </div>
            <div className="text-center">
              <img
                src="/Sachin2.jpeg"
                alt="CTO"
                className="w-full max-w-xs h-64 object-cover rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Saachin Ahuja
              </h3>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Chief Technology Officer
              </p>
            </div>
            <div className="text-center">
              <img
                src="/jitendra2.jpeg"
                alt="SA"
                className="w-full max-w-xs h-64 object-cover rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Jitendra Upraity
              </h3>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Vice President
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3">Integrity</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We operate with honesty and transparency in all our dealings
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We strive for the highest quality in everything we do
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We embrace new ideas and technologies to drive progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
