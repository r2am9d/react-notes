import { useState } from "react";
import TextInputComponent from "./inputs/TextInputComponent";
import SelectInputComponent from "./inputs/SelectInputComponent";
import TextAreaComponent from "./inputs/TextAreaComponent";

const NoteFormComponent = ({ notes, setNotes }) => {
  const defaults = {
    title: "",
    priority: "Low",
    category: "Ideas",
    description: "",
  };
  const [formData, setFormData] = useState(defaults);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => (e) => {
    setIsCollapsed(!isCollapsed);
  };

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
      <button
        onClick={toggleCollapse()}
        className="w-full bg-gray-100 border border-gray-300 mb-4 text-blue-800 py-2 rounded-lg cursor-pointer hover:bg-blue-200 hover:border-blue-400 transition"
      >
        {isCollapsed ? "Add New Note ➕" : "Hide Form ➖"}
      </button>
      {!isCollapsed && (
        <form className="mb-6" onSubmit={handleSubmit()}>
          <TextInputComponent
            name="title"
            value={formData.title}
            onChange={handleChange()}
            required
          />
          <SelectInputComponent
            name="priority"
            value={formData.priority}
            onChange={handleChange()}
            options={[
              { value: "Low", label: "🟢 Low" },
              { value: "Medium", label: "🟡 Medium" },
              { value: "High", label: "🔴 High" },
            ]}
          />
          <SelectInputComponent
            name="category"
            value={formData.category}
            onChange={handleChange()}
            options={[
              { value: "Ideas", label: "💡 Ideas" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Work", label: "💼 Work" },
            ]}
          />
          <TextAreaComponent
            name="description"
            value={formData.description}
            onChange={handleChange()}
            required
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteFormComponent;
