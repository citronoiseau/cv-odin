export default function Form({ formData, setFormData, uniId, section }) {
  const currentUni = formData.education.find((uni) => uni.id === uniId);

  const handleChange = (field, value) => {
    const updatedData = formData.education.map((item) =>
      item.id === uniId ? { ...item, [field]: value } : item
    );

    setFormData({
      ...formData,
      [section]: updatedData,
    });
  };

  function handleDelete() {
    const updatedEducation = formData.education.filter(
      (item) => item.id !== uniId
    );

    setFormData({
      ...formData,
      education: updatedEducation,
    });
  }

  const today = new Date().toISOString().split("T")[0];
  const startDate = currentUni.startDate || "1970-01-01";

  return (
    <form id="education-form">
      <label htmlFor="name">School name</label>
      <input
        type="text"
        value={currentUni.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Name"
        id="name"
      />

      <label htmlFor="title">Title of Study</label>
      <input
        type="text"
        value={currentUni.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Title of Study"
        id="title"
      />

      <label htmlFor="start">Start date</label>
      <input
        type="date"
        value={currentUni.startDate}
        onChange={(e) => handleChange("startDate", e.target.value)}
        id="start"
        min="1970-01-01"
        max={today}
      />

      <label htmlFor="end">End date</label>
      <span> opitonal </span>
      <input
        type="date"
        value={currentUni.endDate}
        onChange={(e) => handleChange("endDate", e.target.value)}
        id="end"
        min={startDate}
      />
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
}
