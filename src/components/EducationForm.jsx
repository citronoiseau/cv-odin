
export default function Form({ formData, setFormData, uniId, section }) {
  const handleChange = (field, value) => {
    const updatedArray = formData.education.map((item) =>
      item.id === uniId ? { ...item, [field]: value } : item
    );
    setFormData({
      ...formData,
      [section]: updatedArray,
    });
  };
  const currentUni = formData.education.find((uni) => uni.id === uniId);

  const today = new Date().toISOString().split("T")[0];
  const startDate = currentUni.startDate || "1970-01-01"; 

  return (
    <form id="education-form"> 
      <h2>Education</h2>

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

      <label htmlFor="start"></label>
      <input
        type="date"
        value={currentUni.startDate}
        onChange={(e) => handleChange("startDate", e.target.value)}
        id="start"
        min="1970-01-01"
        max={today}
      />

      <label htmlFor="end"></label>
      <input
        type="date"
        value={currentUni.endDate}
        onChange={(e) => handleChange("education", "endDate", e.target.value)}
        id="end"
        min={startDate}
      />
    </form>
  );
}
