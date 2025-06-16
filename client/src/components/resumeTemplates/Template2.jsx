function Template2({ data }) {
  // Helper to split skills string into array
  const toListItems = (text = '') =>
    text.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto p-10 bg-white rounded-3xl shadow-lg font-sans text-gray-900">
      <header className="mb-8 border-b-4 border-pink-400 pb-6">
        <h1 className="text-5xl font-extrabold text-pink-600">{data.name || 'Your Name'}</h1>
        <p className="text-pink-500 mt-1 text-lg">
          {data.email || 'email@example.com'} &nbsp;|&nbsp; {data.phone || '+1 555 123 4567'}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="uppercase tracking-wide text-pink-600 font-bold mb-3 text-lg border-b border-pink-300 pb-1">
          Professional Summary
        </h2>
        <p className="text-gray-700">{data.summary || 'Brief summary about your career...'}</p>
      </section>

      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="uppercase tracking-wide text-pink-600 font-bold mb-3 text-lg border-b border-pink-300 pb-1">
            Experience
          </h2>
          <ul className="list-disc list-inside text-gray-800 whitespace-pre-line">
            {toListItems(data.experience).length > 0 ? (
              toListItems(data.experience).map((item, idx) => <li key={idx}>{item}</li>)
            ) : (
              <li>Describe your work experiences here.</li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="uppercase tracking-wide text-pink-600 font-bold mb-3 text-lg border-b border-pink-300 pb-1">
            Education
          </h2>
          <ul className="list-disc list-inside text-gray-800 whitespace-pre-line">
            {toListItems(data.education).length > 0 ? (
              toListItems(data.education).map((item, idx) => <li key={idx}>{item}</li>)
            ) : (
              <li>Your education background details.</li>
            )}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="uppercase tracking-wide text-pink-600 font-bold mb-3 text-lg border-b border-pink-300 pb-1">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {toListItems(data.skills).length > 0 ? (
            toListItems(data.skills).map((skill, idx) => (
              <span
                key={idx}
                className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-gray-600">List your skills here.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Template2;
