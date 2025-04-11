import "./styles/App.css";
import { useState } from "react";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import { initialData, sectionTemplates } from "./components/Data";
import { addSection } from "./components/dataHandler";
import Preview from "./components/Preview";

function App() {
  const [formData, setFormData] = useState(initialData);

  return (
    <div className="resume-container">
      <div className="resume-editor">
        <section className="personal-section">
          <h2>Personal Info</h2>
          <PersonalForm
            formData={formData}
            setFormData={setFormData}
            section="personal"
          />
        </section>

        <section className="education-section">
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
            onClick={() =>
              addSection(
                formData,
                setFormData,
                "education",
                sectionTemplates["education"]
              )
            }
          >
            {" "}
            Add Education
          </button>
        </section>

        <section className="work-section">
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
            onClick={() =>
              addSection(
                formData,
                setFormData,
                "work",
                sectionTemplates["work"]
              )
            }
          >
            {" "}
            Add Experience
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
