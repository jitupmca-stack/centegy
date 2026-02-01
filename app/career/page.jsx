export default function Career() {
  const jobs = [
    {
      title: 'Senior React Developer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k'
    },
    {
      title: 'Full Stack Engineer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k'
    },
    {
      title: 'UI/UX Designer',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80k - $120k'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $150k'
    },
    {
      title: 'Product Manager',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$90k - $130k'
    },
    {
      title: 'Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70k - $100k'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Join Our Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We're always looking for talented individuals to join our growing company
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-gray-800 p-6 sm:p-8 rounded-lg mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                Competitive Compensation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Industry-leading salaries and comprehensive benefits packages
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                Growth Opportunities
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Continuous learning and career development programs
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                Flexible Work
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Remote options and flexible schedules to fit your lifestyle
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
          Open Positions
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
                <div className="w-full md:w-auto">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
                    📍 {job.location} • {job.type}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">{job.salary}</span>
                  <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition active:scale-95 w-full sm:w-auto text-sm sm:text-base">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
