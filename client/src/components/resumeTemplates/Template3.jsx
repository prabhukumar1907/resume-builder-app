function Template3({ data }) {
  return (
    <div className="max-w-2xl mx-auto text-gray-900 p-10 font-sans space-y-8 border border-gray-300 rounded-xl shadow-md">
      {/* Header */}
      <header className="border-b border-gray-300 pb-4">
        <h1 className="text-4xl font-bold">{data.name || 'Your Name'}</h1>
        <p className="text-sm text-gray-600 mt-1">
          {data.email || 'email@example.com'} &nbsp;|&nbsp; {data.phone || '+1 555 123 4567'}
        </p>
      </header>

      {/* Summary */}
      <div>
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-200 pb-1">Professional Summary</h2>
        <p className="mt-2 text-sm whitespace-pre-line">
          {data.summary || 'A brief summary about your career and achievements.'}
        </p>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-200 pb-1">Experience</h2>
        <p className="mt-2 text-sm whitespace-pre-line">
          {data.experience || 'Details about your previous roles and contributions.'}
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-200 pb-1">Education</h2>
        <p className="mt-2 text-sm whitespace-pre-line">
          {data.education || 'Academic qualifications, institutions, and dates.'}
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-200 pb-1">Skills</h2>
        <p className="mt-2 text-sm whitespace-pre-line">
          {data.skills || 'List of technical and soft skills.'}
        </p>
      </div>
    </div>
  );
}

export default Template3;
