function Template4({ data }) {
  const toListItems = (text = '') =>
    text.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg font-serif text-gray-900">
      <header className="mb-8 border-b border-pink-300 pb-6">
        <h1 className="text-4xl font-extrabold text-pink-600">{data.name || 'Your Name'}</h1>
        <p className="text-gray-600 mt-2 text-sm tracking-wide">
          {data.email || 'email@example.com'} &bull; {data.phone || '+1 555 123 4567'}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 border-b-2 border-pink-500 pb-2 text-pink-600 tracking-wide">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {data.summary || 'Brief professional summary about your experience and goals.'}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b-2 border-pink-500 pb-2 text-pink-600 tracking-wide">
          Experience
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
          {toListItems(data.experience).length > 0 ? (
            toListItems(data.experience).map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>Describe your work experience here.</li>
          )}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b-2 border-pink-500 pb-2 text-pink-600 tracking-wide">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
          {toListItems(data.education).length > 0 ? (
            toListItems(data.education).map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>List your education background.</li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 border-b-2 border-pink-500 pb-2 text-pink-600 tracking-wide">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {toListItems(data.skills).length > 0 ? (
            toListItems(data.skills).map((skill, idx) => (
              <span
                key={idx}
                className="bg-pink-200 text-pink-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-gray-600">Your skills here.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Template4;
