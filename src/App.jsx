import './styles/App.css'
import { useState } from "react";
import PersonalForm from './components/PersonalForm'
import EducationForm from './components/EducationForm'

import Preview from './components/Preview';

const initialData = {
  personal: {
    name: "Ballerina Capuccina",
    email: "mimimi@mail.com",
    phone: "+39 347 912 3456",
  },
  education: [
    {
      name: "University of Bologna",
      title: "Theatre Arts",
      startDate: "2021-01-01",
      endDate: "2025-06-06",
      id: "uni-1"
    },
  ],
  work: [
    {
      title: "Prima Ballerina",
      place: "Italian Opera",
      responsibilities: ["dancing", "drinking capuccino"],
      startDate: "2025-10-01",
      endDate: null,
      id: "work-1"
    },
  ],
};

function App() {
    const [formData, setFormData] = useState(initialData);

  return (
    <div className="resume-container">
      <div className="resume-editor">
        <section className="personal-section"> 
          <PersonalForm formData={formData} setFormData={setFormData} section="personal"/>
        </section>
        <section className="education-section"> 
           {formData.education.map((uni) => (
             <EducationForm
               key={uni.id}
               formData={formData}
               setFormData={setFormData}
               uniId={uni.id}
               section="education"
             />
            ))}
        </section>
      </div>
      <div className="resume-preview">
        <Preview formData={formData} />
      </div>
    </div>
  )
}

export default App
