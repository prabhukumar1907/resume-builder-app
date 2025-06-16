import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Logo & Description */}
        <div className="md:flex-1">
          <h2 className="text-2xl font-bold text-white mb-3">Resume Builder</h2>
          <p className="max-w-sm leading-relaxed">
            Build stunning resumes easily and get noticed by recruiters. Your journey to your dream job starts here.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row gap-8 md:flex-1 justify-center">
          <div>
            <h3 className="font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/builder" className="hover:text-white transition">Resume Builder</Link>
              </li>
              <li>
                <Link to="/ats-checker" className="hover:text-white transition">ATS Checker</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition">Features</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Social & Contact */}
        <div className="md:flex-1 flex flex-col items-center md:items-end gap-6">
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.604-2.665-.304-5.467-1.333-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.123-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.553 3.296-1.23 3.296-1.23.656 1.649.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.104.823 2.228v3.303c0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
            </a>
            {/* Add more social icons here */}
          </div>

          <p className="text-sm select-none">
            &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-gray-700 mt-6"></div>
    </footer>
  );
}

export default Footer;
