import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md shadow-sm">
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-gray-900 hover:text-pink-600 transition duration-300"
        >
          Resume
          <span className="text-pink-600">Builder</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10 font-semibold text-gray-800">
          {['Home', 'Builder', 'ATS Checker'].map((item) => {
            const path = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link
                key={item}
                to={path === 'home' ? '/' : `/${path}`}
                className="relative group text-gray-800 hover:text-pink-600 transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            );
          })}

          {/* Auth Buttons */}
          {token ? (
            <button
              onClick={handleLogout}
              className="ml-6 px-5 py-2 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 transition duration-300"
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="relative group text-gray-800 hover:text-pink-600 transition duration-300 font-semibold"
              >
                Login
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/signup"
                className="ml-4 relative group px-5 py-2 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 transition duration-300"
              >
                Sign Up
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-300 transition-all group-hover:w-full"></span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
