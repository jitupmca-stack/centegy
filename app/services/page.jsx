export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'Consulting',
      description: 'Expert advice tailored to your business needs and goals'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android'
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Beautiful UI/UX designs that engage and delight users'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Data-driven insights to help you make better business decisions'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Comprehensive security solutions to protect your digital assets'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2 sm:px-0">
            Comprehensive solutions to help your business succeed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition active:scale-95 text-center"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
