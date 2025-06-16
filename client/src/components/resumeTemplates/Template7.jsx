function Template7({ data }) {
  const toListItems = (text = '') =>
    text.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto p-10 bg-gray-900 text-gray-100 rounded-xl shadow-lg font-sans">
      <header className="mb-10 border-b border-gray-700 pb-6">
        <h1 className="text-5xl font-bold text-pink-500">{data.name || 'Your Name'}</h1>
        <p className="mt-2 text-gray-400 text-lg">
          {data.email || 'email@example.com'} &nbsp;|&nbsp; {data.phone || '+1 555 123 4567'}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="uppercase tracking-wide text-pink-500 font-semibold mb-3 border-b border-pink-700 pb-1">
          Professional Summary
        </h2>
        <p className="leading-relaxed whitespace-pre-line">{data.summary || 'Brief career summary...'}</p>
      </section>

      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="uppercase tracking-wide text-pink-500 font-semibold mb-3 border-b border-pink-700 pb-1">
            Experience
          </h2>
          <ul className="list-disc list-inside leading-relaxed">
            {(data.experience || 'Your experience here.').split('\n').map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="uppercase tracking-wide text-pink-500 font-semibold mb-3 border-b border-pink-700 pb-1">
            Education
          </h2>
          <ul className="list-disc list-inside leading-relaxed">
            {(data.education || 'Your education here.').split('\n').map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="uppercase tracking-wide text-pink-500 font-semibold mb-3 border-b border-pink-700 pb-1">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {toListItems(data.skills).length > 0 ? (
            toListItems(data.skills).map((skill, idx) => (
              <span
                key={idx}
                className="bg-pink-700 text-pink-100 rounded-full px-3 py-1 text-sm font-semibold"
              >
                {skill}
              </span>
            ))
          ) : (
            <p>No skills listed.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Template7;
