'use client';
import { sendContactEmail } from './send-email';
export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    /*const token = await grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: 'contact' }
    );*/

    await sendContactEmail({
      name: e.target.name.value,
      subject: e.target.subject.value,
      email: e.target.email.value,
      message: e.target.message.value,
      //captchaToken: token,
    });

    e.target.reset();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2 sm:px-0">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Address
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Kunti Enclave, 2, Pilikothi RD<br />
              Badi Mukhani, Haldwani 263139<br />
              India
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📞</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Phone
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              +91 8826430505
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✉️</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <a href="mailto:info@centegypl.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 break-all">
                  info@centegypl.com
                </a>
              </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send us a Message
          </h2>
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-900 dark:text-white font-medium mb-2 text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                placeholder="John Doe" name="name"
              />
            </div>

            <div>
              <label className="block text-gray-900 dark:text-white font-medium mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                placeholder="john@example.com" name="email"
              />
            </div>

            <div>
              <label className="block text-gray-900 dark:text-white font-medium mb-2 text-sm sm:text-base">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                placeholder="How can we help?" name="subject"
              />
            </div>

            <div>
              <label className="block text-gray-900 dark:text-white font-medium mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                placeholder="Your message here..." name="message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition active:scale-95 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
