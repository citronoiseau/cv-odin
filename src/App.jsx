import "./styles/App.css";
import { useState } from "react";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import { initialData, sectionTemplates } from "./components/Data";
import Preview from "./components/Preview";

function App() {
  const [formData, setFormData] = useState(initialData);

  function addSection(sectionName, newEntryTemplate) {
    const sectionLength = formData[sectionName].length + 1;
    const newId = `entry-${sectionLength}`;
    const newEntry = { ...newEntryTemplate, id: newId };

    setFormData((prev) => ({
      ...prev,
      [sectionName]: [...prev[sectionName], newEntry],
    }));
  }

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
                uniId={uni.id}
                section="education"
              />
            ))}
          <button
            type="button"
            onClick={() =>
              addSection("education", sectionTemplates["education"])
            }
          >
            {" "}
            Add Education
          </button>
        </section>

        <section className="work-section">
          <h2>Practical Experience</h2>
          {formData.work.length > 0 &&
            formData.work.map((uni) => (
              <EducationForm
                key={uni.id}
                formData={formData}
                setFormData={setFormData}
                uniId={uni.id}
                section="education"
              />
            ))}
          <button
            type="button"
            onClick={() => addSection("work", sectionTemplates["work"])}
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
