function Template1({ data }) {
  return (
    <div className="p-8 max-w-2xl mx-auto border border-pink-300 rounded-2xl bg-white shadow-lg text-gray-900 leading-relaxed font-sans">
      <header className="mb-4">
        <h1 className="text-4xl font-extrabold text-pink-600">{data.name || 'Your Name'}</h1>
        <p className="text-sm text-gray-600 mt-1">
          {data.email || 'email@example.com'} &nbsp;|&nbsp; {data.phone || '+1 555 123 4567'}
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-pink-600 border-b-2 border-pink-400 pb-1 mb-3">
          Professional Summary
        </h2>
        <p className="whitespace-pre-line">{data.summary || 'Brief summary about your career...'}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-pink-600 border-b-2 border-pink-400 pb-1 mb-3">
          Experience
        </h2>
        <p className="whitespace-pre-line">{data.experience || 'Describe your work experiences here.'}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-pink-600 border-b-2 border-pink-400 pb-1 mb-3">
          Education
        </h2>
        <p className="whitespace-pre-line">{data.education || 'Your education background details.'}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-pink-600 border-b-2 border-pink-400 pb-1 mb-3">
          Skills
        </h2>
        <p>{data.skills || 'List your skills here (e.g., JavaScript, React, Node.js)'}</p>
      </section>
    </div>
  );
}

export default Template1;
