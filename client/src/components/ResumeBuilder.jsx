import { useState, useRef } from 'react';

import ResumeTemplateSelector from './resumeTemplates/ResumeTemplateSelector';
import Template1 from './resumeTemplates/Template1';
import Template2 from './resumeTemplates/Template2';
import Template3 from './resumeTemplates/Template3';

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const previewRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Resume Saved! Scroll down for preview.');
    previewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 font-sans text-gray-900">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Form + Template Selector */}
        <section className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col">
          <header className="mb-8 flex items-center gap-3">
            <span className="text-4xl">📝</span>
            <h1 className="text-4xl font-extrabold text-pink-600">Resume Builder</h1>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 flex-grow overflow-auto">
            {[
              { label: 'Full Name', id: 'name', type: 'text', placeholder: 'John Doe' },
              { label: 'Email Address', id: 'email', type: 'email', placeholder: 'john@example.com' },
              { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: '+1 555 123 4567' },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id} className="flex flex-col">
                <label htmlFor={id} className="mb-2 font-semibold text-gray-700">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
                />
              </div>
            ))}

            {[
              { label: 'Professional Summary', id: 'summary', rows: 4, placeholder: 'Brief summary about your career' },
              { label: 'Experience', id: 'experience', rows: 5, placeholder: 'Your job experiences' },
              { label: 'Education', id: 'education', rows: 4, placeholder: 'Your education background' },
            ].map(({ label, id, rows, placeholder }) => (
              <div key={id} className="flex flex-col">
                <label htmlFor={id} className="mb-2 font-semibold text-gray-700">
                  {label}
                </label>
                <textarea
                  id={id}
                  name={id}
                  rows={rows}
                  placeholder={placeholder}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-300 rounded-lg resize-y focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
                />
              </div>
            ))}

            <div className="flex flex-col">
              <label htmlFor="skills" className="mb-2 font-semibold text-gray-700">
                Skills <span className="text-gray-400 text-sm">(comma separated)</span>
              </label>
              <input
                id="skills"
                name="skills"
                placeholder="JavaScript, React, Node.js"
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="mt-auto bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
            >
              Save Resume
            </button>
          </form>

          {/* Template Selector */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Choose Template</h3>
            <ResumeTemplateSelector selected={selectedTemplate} setSelected={setSelectedTemplate} />
          </section>
        </section>

        {/* Preview */}
        <section
          ref={previewRef}
          className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200 max-h-[90vh] overflow-y-auto"
        >
          <header className="mb-8 flex items-center gap-3">
            <span className="text-3xl">🔍</span>
            <h2 className="text-3xl font-bold text-gray-800">Live Preview</h2>
          </header>

          {selectedTemplate === 'template1' && <Template1 data={formData} />}
          {selectedTemplate === 'template2' && <Template2 data={formData} />}
          {selectedTemplate === 'template3' && <Template3 data={formData} />}
        </section>
      </div>
    </div>
  );
}

export default ResumeBuilder;
