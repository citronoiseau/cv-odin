import { useState } from "react";
import { handleChange, handleDelete } from "./dataHandler";
import openIcon from "/open.svg";
import removeIcon from "/remove.svg";

export default function Form({ formData, setFormData, id, section }) {
  const [visible, setVisible] = useState(true);
  const currentUni = formData[section].find((uni) => uni.id === id);
  const today = new Date().toISOString().split("T")[0];
  const startDate = currentUni.startDate || "1970-01-01";

  return (
    <div>
      <div className="section-header" onClick={() => setVisible(!visible)}>
        <h2>{currentUni?.school || "School"}</h2>
        <img
          className={`icon ${visible ? "visible" : ""}`}
          src={openIcon}
          alt="Open Icon"
        />
      </div>
      <form className={`form ${visible ? "visible" : ""}`} id="education-form">
        <div className="input-data">
          <label htmlFor="name">School name</label>
          <input
            type="text"
            value={currentUni.school}
            onChange={(e) =>
              handleChange(
                formData,
                setFormData,
                section,
                id,
                "school",
                e.target.value
              )
            }
            placeholder="Name"
            id="name"
          />
        </div>

        <div className="input-data">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            value={currentUni.degree}
            onChange={(e) =>
              handleChange(
                formData,
                setFormData,
                section,
                id,
                "degree",
                e.target.value
              )
            }
            placeholder="Title of Study"
            id="degree"
          />
        </div>

        <div className="input-data">
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

        <div className="input-data">
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
      </form>
      <button
        type="button"
        className="delete-button"
        onClick={() => handleDelete(formData, setFormData, section, id)}
      >
        <img src={removeIcon} alt="Delete" className="icon" />
        <span>Delete</span>
      </button>
      <hr className="dividing-line" />
    </div>
  );
}
