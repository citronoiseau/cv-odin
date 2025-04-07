export default function Form({ formData, setFormData }) {
  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  return (
    <form id="personal-form"> 
      <h2>Personal Info</h2>
      <label for="name">Full name</label>
      <input
        type="text"
        value={formData.personal.name}
        onChange={(e) => handleChange("personal", "name", e.target.value)}
        placeholder="Name"
        id="name"
      />
      <label for="email">E-mail</label>
      <input
        type="email"
        value={formData.personal.email}
        onChange={(e) => handleChange("personal", "email", e.target.value)}
        placeholder="Email"
        id="email"
      />
      <label for="phone">Phone</label>
      <input
        type="tel"
        value={formData.personal.phone}
        onChange={(e) => handleChange("personal", "phone", e.target.value)}
        placeholder="Phone"
        id="phone"
      />
    </form>
  );
}
