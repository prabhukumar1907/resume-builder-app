import { useState } from 'react';
import axios from 'axios';

function ATSChecker() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const res = await axios.post('http://localhost:5000/api/ats-checker', {
      resumeText,
      jobDescription
    });
    setResult(res.data);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🎯 ATS Resume Checker</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Paste Resume</label>
        <textarea
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="8"
          value={resumeText}
          onChange={e => setResumeText(e.target.value)}
          placeholder="Paste your resume here..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Paste Job Description</label>
        <textarea
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="8"
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
        />
      </div>

      <button
        onClick={handleCheck}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
      >
        Analyze ATS Match
      </button>

      {result && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-green-700">✅ Match Results</h3>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Match Score:</strong> {result.matchPercentage}%
          </p>
          <p className="text-gray-700">
            <strong>Missing Keywords:</strong> {result.missingKeywords.join(', ') || 'None 🎉'}
          </p>
        </div>
      )}
    </div>
  );
}

export default ATSChecker;
