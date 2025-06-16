function Template3({ data }) {
  const toListItems = (text = '') =>
    text.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-pink-600 text-white p-8 md:w-1/3">
        <h1 className="text-4xl font-bold mb-2">{data.name || 'Your Name'}</h1>
        <p className="text-pink-200 mb-4">{data.email || 'email@example.com'}</p>
        <p className="text-pink-200">{data.phone || '+1 555 123 4567'}</p>

        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-2 border-b border-pink-400 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {toListItems(data.skills).length > 0 ? (
              toListItems(data.skills).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-pink-300 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-pink-200">Your skills here.</p>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="p-8 md:w-2/3 text-gray-900">
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Professional Summary</h2>
          <p className="whitespace-pre-line">{data.summary || 'Brief summary about your career.'}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Experience</h2>
          <ul className="list-disc list-inside whitespace-pre-line">
            {toListItems(data.experience).length > 0
              ? toListItems(data.experience).map((item, idx) => <li key={idx}>{item}</li>)
              : <li>Your work experience details here.</li>}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Education</h2>
          <ul className="list-disc list-inside whitespace-pre-line">
            {toListItems(data.education).length > 0
              ? toListItems(data.education).map((item, idx) => <li key={idx}>{item}</li>)
              : <li>Your education background here.</li>}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Template3;
