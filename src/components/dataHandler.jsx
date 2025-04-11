export const handleChange = (
  formData,
  setFormData,
  section,
  id,
  field,
  value,
  valueId = null
) => {
  const updatedData = formData[section].map((item) => {
    if (item.id === id) {
      if (valueId) {
        const updatedResponsibilities = item.responsibilities.map((resp) =>
          resp.id === valueId ? { ...resp, text: value } : resp
        );
        return { ...item, responsibilities: updatedResponsibilities };
      }

      return { ...item, [field]: value };
    }
    return item;
  });

  setFormData({
    ...formData,
    [section]: updatedData,
  });
};
export function handleDelete(formData, setFormData, section, id) {
  const updatedData = formData[section].filter((item) => item.id !== id);

  setFormData({
    ...formData,
    [section]: updatedData,
  });
}

export function addSection(
  formData,
  setFormData,
  sectionName,
  newEntryTemplate
) {
  const sectionLength = formData[sectionName].length + 1;
  const newId = `entry-${sectionLength}`;
  const newEntry = { ...newEntryTemplate, id: newId };

  setFormData((prev) => ({
    ...prev,
    [sectionName]: [...prev[sectionName], newEntry],
  }));
}
