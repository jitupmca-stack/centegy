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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Founded in 2020, our company has grown from a small startup to a
              thriving business with a global reach. We're passionate about
              delivering exceptional value to our clients.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Our mission is to transform businesses through innovative solutions
              and dedicated service. We believe in building long-term relationships
              with our clients based on trust and excellence.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              With a team of experienced professionals, we continue to push
              boundaries and set new standards in our industry.
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
                src="/kothari-ceo.jpeg"
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
                src="/jitendra-cto.jpeg"
                alt="CTO"
                className="w-full max-w-xs h-64 object-cover rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Jitendra Upraity
              </h3>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Chief Technology Officer
              </p>
            </div>
            <div className="text-center">
              <img
                src="/saachin.jpg"
                alt="SA"
                className="w-full max-w-xs h-64 object-cover rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Saachin Ahuja
              </h3>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Solution Architect
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
