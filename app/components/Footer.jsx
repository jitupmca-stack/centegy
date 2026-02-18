"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Centegy Pvt. Ltd.{' '}All rights reserved.
          
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link> |
          <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Services
            </Link> |
            <Link href="/technologies" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Technologies
            </Link> |
            <Link href="/domains" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Domains
            </Link> |
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              About Us
            </Link> |
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Contact
            </Link> |
          </nav>

          <a
            href="https://www.linkedin.com/company/centegypl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            aria-label="Centegy on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5V16.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
