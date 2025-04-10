import { handleChange, handleDelete } from "./dataHandler";

export default function Form({ formData, setFormData, id, section }) {
  const currentUni = formData[section].find((uni) => uni.id === id);
  const today = new Date().toISOString().split("T")[0];
  const startDate = currentUni.startDate || "1970-01-01";

  return (
    <form id="education-form">
      <div className="inputData">
        <label htmlFor="name">School name</label>
        <input
          type="text"
          value={currentUni.name}
          onChange={(e) =>
            handleChange(
              formData,
              setFormData,
              section,
              id,
              "name",
              e.target.value
            )
          }
          placeholder="Name"
          id="name"
        />
      </div>

      <div className="inputData">
        <label htmlFor="title">Title of Study</label>
        <input
          type="text"
          value={currentUni.title}
          onChange={(e) =>
            handleChange(
              formData,
              setFormData,
              section,
              id,
              "title",
              e.target.value
            )
          }
          placeholder="Title of Study"
          id="title"
        />
      </div>

      <div className="inputData">
        <label htmlFor="start">Start date</label>
        <input
          type="date"
          value={currentUni.startDate}
          onChange={(e) =>
            handleChange(
              formData,
              setFormData,
              section,
              id,
              "startDate",
              e.target.value
            )
          }
          id="start"
          min="1970-01-01"
          max={today}
        />
      </div>

      <div className="inputData">
        <label htmlFor="end">End date</label>
        <input
          type="date"
          value={currentUni.endDate}
          onChange={(e) =>
            handleChange(
              formData,
              setFormData,
              section,
              id,
              "endDate",
              e.target.value
            )
          }
          id="end"
          min={startDate}
        />
      </div>

      <button
        type="button"
        onClick={() => handleDelete(formData, setFormData, section, id)}
      >
        Delete
      </button>
    </form>
  );
}
