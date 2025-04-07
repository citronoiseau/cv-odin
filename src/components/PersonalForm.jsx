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

  return (
    <form id="personal-form"> 
      <h2>Personal Info</h2>

      <label htmlFor="email">Full name</label>
      <input
        type="text"
        value={formData.personal.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Name"
        id="name"
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        value={formData.personal.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
        id="email"
      />
      
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        value={formData.personal.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        placeholder="Phone"
        id="phone"
      />
    </form>
  );
}
