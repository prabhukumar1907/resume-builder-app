function ResumeTemplateSelector({ selected, setSelected }) {
  return (
    <div className="flex gap-4 mt-8">
      {['template1', 'template2', 'template3'].map((template) => (
        <button
          key={template}
          onClick={() => setSelected(template)}
          className={`px-4 py-2 border rounded font-semibold ${
            selected === template
              ? 'bg-pink-600 text-white'
              : 'bg-white text-pink-600 border-pink-600'
          }`}
        >
          {"Template "+template.charAt(template.length - 1).toUpperCase() + template.slice(template.length)} {/* Template 1, 2, 3 */}
        </button>
      ))}
    </div>
  );
}

export default ResumeTemplateSelector;
