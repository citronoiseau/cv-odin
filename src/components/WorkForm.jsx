import { handleChange, handleDelete } from "./dataHandler";

export default function Form({ formData, setFormData, id, section }) {
  const currentJob = formData[section].find((job) => job.id === id);
  const today = new Date().toISOString().split("T")[0];
  const startDate = currentJob.startDate || "1970-01-01";
  return (
    <form id="education-form">
      <div className="inputData">
        <label htmlFor="title">Job Title</label>
        <input
          type="title"
          value={currentJob.title}
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
          placeholder="Name"
          id="name"
        />
      </div>
      <div className="inputData">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          value={currentJob.company}
          onChange={(e) =>
            handleChange(
              formData,
              setFormData,
              section,
              id,
              "company",
              e.target.value
            )
          }
          placeholder="Company"
          id="company"
        />
      </div>
      <div className="inputData">
        <label>Responsibilities</label>
        {currentJob.responsibilities.map((resp) => (
          <input
            key={resp.id}
            type="text"
            value={resp.text || ""}
            onChange={(e) =>
              handleChange(
                formData,
                setFormData,
                section,
                id,
                "responsibilities",
                e.target.value,
                resp.id
              )
            }
            placeholder="Company"
          />
        ))}
      </div>

      <div className="inputData">
        <label htmlFor="start">Start date</label>
        <input
          type="date"
          value={currentJob.startDate}
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
          value={currentJob.endDate}
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
