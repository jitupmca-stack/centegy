export default function Domains() {
  const domains = [
    {
      icon: '🌐',
      title: 'E-Commerce',
      description: 'Complete online store solutions with payment processing, inventory management, and customer analytics'
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'HIPAA-compliant platforms for telemedicine, patient management, and health record systems'
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Learning management systems, virtual classrooms, and student engagement platforms'
    },
    {
      icon: '🏦',
      title: 'FinTech',
      description: 'Secure financial applications including banking, trading, and investment platforms'
    },
    {
      icon: '🏢',
      title: 'Enterprise',
      description: 'Enterprise resource planning, CRM, and business intelligence solutions for large organizations'
    },
    {
      icon: '🚀',
      title: 'SaaS',
      description: 'Scalable Software-as-a-Service platforms with multi-tenant architecture and analytics'
    },
    {
      icon: '📱',
      title: 'Social Media',
      description: 'Community platforms, networking applications, and content sharing systems'
    },
    {
      icon: '✈️',
      title: 'Travel',
      description: 'Booking platforms, itinerary management, and travel reservation systems'
    },
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'IoT solutions, supply chain management, and production optimization systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Domains We Serve
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2 sm:px-0">
            We have deep expertise across multiple industries and domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4">
                {domain.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {domain.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {domain.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                Domain Expertise
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Years of experience working within specific industries gives us deep understanding of unique challenges and requirements
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                Compliance & Security
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                We ensure all solutions meet industry standards and regulatory requirements for maximum protection
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                Custom Solutions
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Tailored solutions designed specifically for your business needs and growth trajectory
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                Ongoing Support
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Dedicated support and maintenance to ensure your systems run smoothly and efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
