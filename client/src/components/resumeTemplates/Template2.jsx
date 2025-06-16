function Template2({ data }) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow font-sans text-gray-900">
      <header className="mb-6 border-b border-gray-300 pb-4">
        <h1 className="text-4xl font-extrabold">{data.name}</h1>
        <p className="text-blue-600">{data.email} | {data.phone}</p>
      </header>

      <section className="mb-6">
        <h2 className="uppercase tracking-widest text-xs text-gray-600 font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{data.summary}</p>
      </section>

      <section className="mb-6 grid grid-cols-2 gap-6">
        <div>
          <h2 className="uppercase tracking-widest text-xs text-gray-600 font-semibold mb-2">Experience</h2>
          <p className="whitespace-pre-line">{data.experience}</p>
        </div>
        <div>
          <h2 className="uppercase tracking-widest text-xs text-gray-600 font-semibold mb-2">Education</h2>
          <p className="whitespace-pre-line">{data.education}</p>
        </div>
      </section>

      <section>
        <h2 className="uppercase tracking-widest text-xs text-gray-600 font-semibold mb-2">Skills</h2>
        <p>{data.skills}</p>
      </section>
    </div>
  );
}

export default Template2;
