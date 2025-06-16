function Template6({ data }) {
  const toListItems = (text = '') =>
    text.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-3xl shadow-xl font-sans text-gray-900">
      <header className="mb-10">
        <h1 className="text-6xl font-extrabold text-pink-600">{data.name || 'Your Name'}</h1>
        <p className="mt-1 text-lg text-gray-600">{data.email || 'email@example.com'} | {data.phone || '+1 555 123 4567'}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section>
          <h2 className="text-3xl font-bold border-b-4 border-pink-400 mb-6 pb-2">Summary</h2>
          <p className="whitespace-pre-line">{data.summary || 'Your professional summary here.'}</p>

          <h2 className="text-3xl font-bold border-b-4 border-pink-400 mt-10 mb-6 pb-2">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            {(data.experience || 'Your experiences here.').split('\n').map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-4 border-pink-400 mb-6 pb-2">Education</h2>
          <ul className="list-disc list-inside space-y-2">
            {(data.education || 'Your education details here.').split('\n').map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold border-b-4 border-pink-400 mt-10 mb-6 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {toListItems(data.skills).map((skill, i) => (
              <span
                key={i}
                className="bg-pink-100 text-pink-700 px-5 py-2 rounded-full text-lg font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template6;
