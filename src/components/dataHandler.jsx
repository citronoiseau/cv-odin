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

export const handleDeleteItem = (
  formData,
  setFromData,
  section,
  field,
  id,
  itemId
) => {
  const updatedData = formData[section].map((item) => {
    if (item.id === id) {
      const updatedItems = item[field].filter((item) => item.id !== itemId);
      return { ...item, [field]: updatedItems };
    }
    return item;
  });
  setFromData({ ...formData, [section]: updatedData });
};

export function addSection(formData, setFormData, section, template) {
  const sectionLength = formData[section].length + 1;
  const newId = `entry-${sectionLength}`;
  const newEntry = { ...template, id: newId };

  setFormData((prev) => ({
    ...prev,
    [section]: [...prev[section], newEntry],
  }));
}

export function addItem(formData, setFormData, section, field, itemId) {
  const updatedData = formData[section].map((item) => {
    if (item.id === itemId) {
      const fieldLength = item[field].length + 1;
      const newId = `item-${fieldLength}`;
      const newItem = { id: newId, text: "" };
      console.log("Updated item:", {
        ...item,
        [field]: [...item[field], newItem],
      });
      return {
        ...item,
        [field]: [...item[field], newItem],
      };
    }
    return item;
  });
  console.log(updatedData);
  setFormData({
    ...formData,
    [section]: updatedData,
  });
}
