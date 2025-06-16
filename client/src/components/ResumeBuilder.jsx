import { useState, useRef } from "react";

import ResumeTemplateSelector from "./resumeTemplates/ResumeTemplateSelector";
import Template1 from "./resumeTemplates/Template1";
import Template2 from "./resumeTemplates/Template2";
import Template3 from "./resumeTemplates/Template3";
import Template5 from "./resumeTemplates/Template5";
import Template6 from "./resumeTemplates/Template6";
import Template7 from "./resumeTemplates/Template7";
import Template4 from "./resumeTemplates/Template4";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: [], // array of experience objects
    education: "",
    skills: "",
  });

  // Temp state for experience input fields
  const [experienceInput, setExperienceInput] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const previewRef = useRef(null);

  // Handle general form inputs except experience
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle experience input change (nested fields)
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperienceInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add experience entry
  const addExperience = () => {
    // Basic validation: company and position are required
    if (!experienceInput.company.trim() || !experienceInput.position.trim()) {
      alert("Please enter at least Company Name and Position.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, experienceInput],
    }));
    // Clear experience input fields after adding
    setExperienceInput({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  // Remove experience entry by index
  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Resume Saved! Scroll down for preview.");
    previewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Convert experience array of objects to string for templates
  // Format example for each experience:
  // Company (Position) - Location
  // StartDate to EndDate
  // Description
  const experienceString = formData.experience
    .map((exp) => {
      let line1 = `${exp.company} (${exp.position})`;
      if (exp.location) line1 += ` - ${exp.location}`;
      let line2 = "";
      if (exp.startDate || exp.endDate)
        line2 = `${exp.startDate || "?"} to ${exp.endDate || "Present"}`;
      let line3 = exp.description || "";
      return [line1, line2, line3].filter(Boolean).join("\n");
    })
    .join("\n\n");

  // Prepare preview data to pass to templates
  const previewData = {
    ...formData,
    experience: experienceString,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 font-sans text-gray-900">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Form + Template Selector */}
        <section className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col">
          <header className="mb-8 flex items-center gap-3">
            <span className="text-4xl">📝</span>
            <h1 className="text-4xl font-extrabold text-pink-600">
              Resume Builder
            </h1>
          </header>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 flex-grow overflow-auto"
          >
            {/* Basic inputs */}
            {[
              {
                label: "Full Name",
                id: "name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                label: "Email Address",
                id: "email",
                type: "email",
                placeholder: "john@example.com",
              },
              {
                label: "Phone Number",
                id: "phone",
                type: "tel",
                placeholder: "+1 555 123 4567",
              },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id} className="flex flex-col">
                <label
                  htmlFor={id}
                  className="mb-2 font-semibold text-gray-700"
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  onChange={handleChange}
                  value={formData[id]}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
                />
              </div>
            ))}

            {/* Professional Summary */}
            <div className="flex flex-col">
              <label
                htmlFor="summary"
                className="mb-2 font-semibold text-gray-700"
              >
                Professional Summary
              </label>
              <textarea
                id="summary"
                name="summary"
                rows={4}
                placeholder="Brief summary about your career"
                onChange={handleChange}
                value={formData.summary}
                required
                className="p-3 border border-gray-300 rounded-lg resize-y focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
              />
            </div>

            {/* Detailed Experience Inputs */}
            <div className="flex flex-col mb-4 border p-4 rounded-md bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">
                Add Experience
              </h3>

              {[
                { label: "Company Name", id: "company", type: "text", required: true },
                { label: "Position / Title", id: "position", type: "text", required: true },
                { label: "Location", id: "location", type: "text" },
                { label: "Start Date", id: "startDate", type: "month" },
                { label: "End Date", id: "endDate", type: "month" },
              ].map(({ label, id, type, required }) => (
                <div key={id} className="flex flex-col mb-3">
                  <label
                    htmlFor={`exp-${id}`}
                    className="mb-1 font-medium text-gray-700"
                  >
                    {label}{required ? " *" : ""}
                  </label>
                  <input
                    id={`exp-${id}`}
                    name={id}
                    type={type}
                    value={experienceInput[id]}
                    onChange={handleExperienceChange}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
                    required={required}
                  />
                </div>
              ))}

              <div className="flex flex-col mb-3">
                <label
                  htmlFor="description"
                  className="mb-1 font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Describe your responsibilities, achievements..."
                  value={experienceInput.description}
                  onChange={handleExperienceChange}
                  className="p-2 border border-gray-300 rounded-lg resize-y focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
                />
              </div>

              <button
                type="button"
                onClick={addExperience}
                className="self-start bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Add Experience
              </button>
            </div>

            {/* List of added experiences */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Your Experiences</h3>
              {formData.experience.length === 0 && (
                <p className="text-gray-500 italic">No experiences added yet.</p>
              )}
              <ul className="space-y-4 max-h-48 overflow-y-auto border border-gray-300 rounded-md p-4 bg-white">
                {formData.experience.map((exp, idx) => (
                  <li key={idx} className="border border-gray-200 rounded p-3 relative bg-gray-50">
                    <button
                      onClick={() => removeExperience(idx)}
                      className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold"
                      aria-label={`Remove experience ${idx + 1}`}
                    >
                      &times;
                    </button>
                    <p className="font-semibold text-lg">{exp.company} ({exp.position})</p>
                    <p className="text-sm text-gray-600">
                      {exp.location} | {exp.startDate || "?"} - {exp.endDate || "Present"}
                    </p>
                    {exp.description && (
                      <p className="mt-2 whitespace-pre-wrap">{exp.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="flex flex-col">
              <label
                htmlFor="education"
                className="mb-2 font-semibold text-gray-700"
              >
                Education
              </label>
              <textarea
                id="education"
                name="education"
                rows={4}
                placeholder="Your education background"
                onChange={handleChange}
                value={formData.education}
                required
                className="p-3 border border-gray-300 rounded-lg resize-y focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
              />
            </div>

            {/* Skills */}
            <div className="flex flex-col">
              <label
                htmlFor="skills"
                className="mb-2 font-semibold text-gray-700"
              >
                Skills{" "}
                <span className="text-gray-400 text-sm">(comma separated)</span>
              </label>
              <input
                id="skills"
                name="skills"
                placeholder="JavaScript, React, Node.js"
                onChange={handleChange}
                value={formData.skills}
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
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Choose Template
            </h3>
            <ResumeTemplateSelector
              selected={selectedTemplate}
              setSelected={setSelectedTemplate}
            />
          </section>
        </section>

        {/* Preview */}
        <section
          ref={previewRef}
          className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200 max-h-screen overflow-y-auto"
        >
          <header className="mb-8 flex items-center gap-3">
            <span className="text-3xl">🔍</span>
            <h2 className="text-3xl font-bold text-gray-800">Live Preview</h2>
          </header>

          {selectedTemplate === "template1" && <Template1 data={previewData} />}
          {selectedTemplate === "template2" && <Template2 data={previewData} />}
          {selectedTemplate === "template3" && <Template3 data={previewData} />}
          {selectedTemplate === "template4" && <Template4 data={previewData} />}
          {selectedTemplate === "template5" && <Template5 data={previewData} />}
          {selectedTemplate === "template6" && <Template6 data={previewData} />}
          {selectedTemplate === "template7" && <Template7 data={previewData} />}
        </section>
      </div>
    </div>
  );
}

export default ResumeBuilder;
