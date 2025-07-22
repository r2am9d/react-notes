import { useState } from "react";

const NoteFormComponent = ({ notes, setNotes }) => {
  const defaults = {
    title: "",
    priority: "Low",
    category: "Ideas",
    description: "",
  };
  const [formData, setFormData] = useState(defaults);

  const handleChange = () => (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = () => (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const note = {
      id: Date.now(),
      ...formData,
    };

    setNotes([note, ...notes]);

    setFormData(defaults);
  };

  return (
    <>
      <form className="mb-6" onSubmit={handleSubmit()}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="w-full p-2 border rounded-lg"
            value={formData.title}
            onChange={handleChange()}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block font-semibold">
            Priority
          </label>
          <select
            name="priority"
            type="text"
            className="w-full p-2 border rounded-lg"
            value={formData.priority}
            onChange={handleChange()}
          >
            <option value="Low" id="low">
              🟢 Low
            </option>
            <option value="Medium" id="medium">
              🟡 Medium
            </option>
            <option value="High" id="high">
              🔴 High
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold">
            Category
          </label>
          <select
            name="category"
            type="text"
            className="w-full p-2 border rounded-lg"
            value={formData.category}
            onChange={handleChange()}
          >
            <option value="Ideas" id="ideas">
              💡 Ideas
            </option>
            <option value="Personal" id="personal">
              🏠 Personal
            </option>
            <option value="Work" id="work">
              💼 Work
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            name="description"
            type="text"
            className="w-full p-2 border rounded-lg"
            value={formData.description}
            onChange={handleChange()}
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600">
          Add Note
        </button>
      </form>
    </>
  );
};

export default NoteFormComponent;
