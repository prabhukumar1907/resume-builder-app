import { useState } from 'react';
import axios from 'axios';

function ATSChecker() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = () => setResumeText(reader.result);
      reader.readAsText(uploadedFile);
    }
  };

  const handleCheck = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/ats-checker', {
        resumeText,
        jobDescription,
        fileName: file?.name,
      });
      setResult(res.data);
    } catch (error) {
      console.error('Error analyzing resume:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">📄 ATS Resume Checker</h2>

      {/* Upload Resume File */}
      <div className="mb-6">
        <label
          htmlFor="resume-upload"
          className="block text-gray-700 font-medium mb-2 cursor-pointer"
        >
          Upload Resume File (PDF, DOCX, TXT)
        </label>
        <input
          type="file"
          id="resume-upload"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer"
        />
      </div>

      {/* Job Description Input */}
      <div className="mb-6">
        <label
          htmlFor="job-description"
          className="block text-gray-700 font-medium mb-2"
        >
          Paste Job Description
        </label>
        <textarea
          id="job-description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={8}
          placeholder="Paste the job description here..."
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleCheck}
        disabled={!resumeText || !jobDescription}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md transition disabled:opacity-50 cursor-pointer"
      >
        Analyze ATS Match
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-green-700">✅ Match Results</h3>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Match Score:</strong> {result.matchPercentage}%
          </p>
          <p className="text-gray-700">
            <strong>Missing Keywords:</strong>{' '}
            {result.missingKeywords.length ? result.missingKeywords.join(', ') : 'None 🎉'}
          </p>
        </div>
      )}
    </div>
  );
}

export default ATSChecker;
