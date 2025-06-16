import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build Your <span className="text-pink-600">Professional Resume</span> in Minutes
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-12 max-w-xl mx-auto">
            Create a beautiful resume and check your ATS score to stand out in job applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
            <Link
              to="/builder"
              className="px-8 py-3 bg-pink-600 text-white rounded-md font-semibold shadow-md hover:bg-pink-700 transition"
            >
              🛠️ Build Resume
            </Link>
            <Link
              to="/ats-checker"
              className="px-8 py-3 bg-white border border-pink-600 text-pink-600 rounded-md font-semibold shadow-md hover:bg-pink-50 transition"
            >
              📊 ATS Checker
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast & Easy</h3>
            <p className="text-gray-600">Build your resume quickly with our intuitive form and live preview.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Stunning Templates</h3>
            <p className="text-gray-600">Choose from multiple modern templates designed to impress recruiters.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">ATS Ready</h3>
            <p className="text-gray-600">Check your resume’s ATS compatibility to increase your chances of success.</p>
          </div>
        </div>
      </section>

    {/* Redesigned CTA Section with Background Image */}
<section
  className="relative py-20 text-center text-white overflow-hidden"
  style={{
    background:
      'linear-gradient(90deg, #ec4899 0%, #db2777 50%, #be185d 100%)',
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/cubes.png")',
  }}
>
  {/* Overlay for dimming background image */}
  <div className="absolute inset-0 bg-pink opacity-3 pointer-events-none"></div>

  <div className="relative max-w-3xl mx-auto px-6">
    <h2 className="text-xl sm:text-5xl font-extrabold text-black mb-8 drop-shadow-lg">
      Ready to create your winning resume?
    </h2>
    <Link
      to="/builder"
      className="inline-block px-14 py-5 bg-white text-pink-600 font-semibold rounded-xl shadow-xl hover:bg-pink-50 hover:scale-105 transform transition duration-300 ease-in-out"
    >
      Get Started Now
    </Link>
  </div>
</section>


      <Footer/>
    </div>
  );
}

export default Home;
