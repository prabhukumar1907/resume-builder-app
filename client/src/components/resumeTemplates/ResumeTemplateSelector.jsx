function ResumeTemplateSelector({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap gap-4 mt-8 max-w-full">
      {['template1', 'template2', 'template3', 'template4', 'template5', 'template6', 'template7'].map((template, i) => (
        <button
          key={template}
          onClick={() => setSelected(template)}
          className={`px-4 py-2 border rounded font-semibold whitespace-nowrap ${
            selected === template
              ? 'bg-pink-600 text-white border-pink-600'
              : 'bg-white text-pink-600 border-pink-600'
          }`}
        >
          {'Template ' + (i + 1)}
        </button>
      ))}
    </div>
  );
}
export default ResumeTemplateSelector;