import { useState } from "react";
import {
  handleChange,
  handleDelete,
  handleDeleteItem,
  addItem,
} from "./dataHandler";
import openIcon from "/open.svg";
import removeIcon from "/remove.svg";
import addIcon from "/add.svg";

export default function Form({ formData, setFormData, id, section }) {
  const [visible, setVisible] = useState(true);
  const currentJob = formData[section].find((job) => job.id === id);
  const today = new Date().toISOString().split("T")[0];
  const startDate = currentJob.startDate || "1970-01-01";

  return (
    <div>
      <div className="section-header" onClick={() => setVisible(!visible)}>
        <h2>{currentJob?.title || "Title"}</h2>
        <img
          className={`icon ${visible ? "visible" : ""}`}
          src={openIcon}
          alt="Open Icon"
        />
      </div>
      <form className={`form ${visible ? "visible" : ""}`} id="education-form">
        <div className="input-data">
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
            placeholder="Title"
            id="name"
          />
        </div>
        <div className="input-data">
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

        <div className="input-data">
          <label>Responsibilities</label>
          {currentJob.responsibilities.map((resp) => (
            <div key={resp.id} className="responsibility-item">
              <textarea
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
                placeholder="ex. implemented a new strategy..."
              />
              <button
                type="button"
                onClick={() =>
                  handleDeleteItem(
                    formData,
                    setFormData,
                    section,
                    "responsibilities",
                    id,
                    resp.id
                  )
                }
              >
                <img src={removeIcon} alt="Delete" className="icon" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addItem(formData, setFormData, section, "responsibilities", id)
            }
          >
            <img src={addIcon} alt="Add" className="icon" />
            <span>Add Responsibility</span>
          </button>
        </div>

        <div className="input-data">
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
        <div className="input-data">
          <div className="label-data">
            <label htmlFor="end">End date</label>
            <span> optional </span>
          </div>
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
      </form>
      <button
        type="button"
        onClick={() => handleDelete(formData, setFormData, section, id)}
      >
        <img src={removeIcon} alt="Delete" className="icon" />
        <span>Delete</span>
      </button>
      <hr className="dividing-line" />
    </div>
  );
}
