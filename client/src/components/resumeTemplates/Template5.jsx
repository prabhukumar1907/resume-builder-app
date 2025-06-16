import { FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';

function Template5({ data }) {
  const toListItems = (text = '') =>
    text.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 font-sans text-gray-900">
      <header className="flex items-center mb-8 space-x-6">
        <div className="flex-shrink-0">
          <div className="h-20 w-20 rounded-full bg-pink-600 flex items-center justify-center text-white text-3xl font-bold uppercase">
            {(data.name || 'YN').split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">{data.name || 'Your Name'}</h1>
          <div className="flex space-x-4 mt-2 text-pink-600">
            <div className="flex items-center space-x-1">
              <FaEnvelope />
              <span className="text-sm">{data.email || 'email@example.com'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhone />
              <span className="text-sm">{data.phone || '+1 555 123 4567'}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="flex items-center space-x-2 text-pink-600 text-xl font-semibold border-b border-pink-300 pb-1 mb-3">
          <FaBriefcase />
          <span>Professional Summary</span>
        </h2>
        <p className="text-gray-700 whitespace-pre-line">{data.summary || 'A brief career summary...'}</p>
      </section>

      <section className="mb-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="flex items-center space-x-2 text-pink-600 text-xl font-semibold border-b border-pink-300 pb-1 mb-3">
            <FaBriefcase />
            <span>Experience</span>
          </h2>
          <ul className="list-disc list-inside text-gray-800 whitespace-pre-line">
            {(data.experience || 'Your experience details.').split('\n').map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="flex items-center space-x-2 text-pink-600 text-xl font-semibold border-b border-pink-300 pb-1 mb-3">
            <FaGraduationCap />
            <span>Education</span>
          </h2>
          <ul className="list-disc list-inside text-gray-800 whitespace-pre-line">
            {(data.education || 'Your education background.').split('\n').map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="flex items-center space-x-2 text-pink-600 text-xl font-semibold border-b border-pink-300 pb-1 mb-3">
          <FaTools />
          <span>Skills</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {(data.skills || '').split(',').map((skill, i) => (
            <span key={i} className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full font-semibold text-sm">
              {skill.trim()}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Template5;
