import "./styles/App.css";
import { useState } from "react";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import { initialData, sectionTemplates } from "./components/Data";
import { addSection } from "./components/dataHandler";
import Preview from "./components/Preview";
import openIcon from "/open.svg";
import addIcon from "/add.svg";

function App() {
  const [formData, setFormData] = useState(initialData);
  const [visible, setVisible] = useState(true);

  return (
    <div className="resume-container">
      <div className="resume-editor">
        <section className="personal">
          <div className="section-header" onClick={() => setVisible(!visible)}>
            <h2>Personal Info</h2>
            <img
              className={`icon ${visible ? "visible" : ""}`}
              src={openIcon}
              alt="Open Icon"
            />
          </div>
          <div className={`personal-content ${visible ? "visible" : ""}`}>
            <PersonalForm
              formData={formData}
              setFormData={setFormData}
              section="personal"
            />
          </div>
        </section>

        <section className="education">
          <h2>Education</h2>
          {formData.education.length > 0 &&
            formData.education.map((uni) => (
              <EducationForm
                key={uni.id}
                formData={formData}
                setFormData={setFormData}
                id={uni.id}
                section="education"
              />
            ))}
          <button
            type="button"
            className="add-button"
            onClick={() =>
              addSection(
                formData,
                setFormData,
                "education",
                sectionTemplates["education"]
              )
            }
          >
            <img src={addIcon} alt="Add" className="icon" />
            <span>Add Experience</span>
          </button>
        </section>

        <section className="work">
          <h2>Practical Experience</h2>
          {formData.work.length > 0 &&
            formData.work.map((job) => (
              <WorkForm
                key={job.id}
                formData={formData}
                setFormData={setFormData}
                id={job.id}
                section="work"
              />
            ))}
          <button
            type="button"
            className="add-button"
            onClick={() =>
              addSection(
                formData,
                setFormData,
                "work",
                sectionTemplates["work"]
              )
            }
          >
            <img src={addIcon} alt="Add" className="icon" />
            <span>Add Experience</span>
          </button>
        </section>
      </div>
      <div className="resume-preview">
        <Preview formData={formData} />
      </div>
    </div>
  );
}

export default App;
