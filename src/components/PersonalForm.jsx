export default function Form({ formData, setFormData, section }) {
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          photo: imageUrl,
        },
      }));
    }
  };

  return (
    <form id="personal-form">
      <div className="inputData">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          value={formData.personal.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name"
          id="name"
        />
      </div>

      <div className="inputData">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          value={formData.personal.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
          id="email"
        />
      </div>

      <div className="inputData">
        <label htmlFor="phone">Phone</label>
        <span> optional </span>
        <input
          type="tel"
          value={formData.personal.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="Phone"
          id="phone"
        />
      </div>

      <div className="inputData">
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e)}
          id="photo"
          accept="image/png, image/jpeg"
        />
      </div>
    </form>
  );
}
