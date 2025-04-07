import '../styles/Preview.css'

export default function Preview({ formData }) {
  return (
    <div>
        <div className="section personal-section">
            <div>{formData.personal.name}</div> 
            <div>{formData.personal.email}</div>
            <div>{formData.personal.phone}</div>
        </div>

        <div className="section education-section">
          {formData.education.map((uni) => (
            <div className="uni" key={uni.id}>
              <div>{uni.name}</div>
              <div>{uni.title}</div>
              <div>
                {new Date(uni.startDate).toLocaleDateString()} –{" "}
                {uni.endDate
                  ? new Date(uni.endDate).toLocaleDateString()
                  : "Present"}
             </div>
            </div>
          ))}
        </div>
      
        <div className="section work-section">
          {formData.work.map((position) => (
            <div className="position" key={position.id}>
              <div>{position.title}</div>
              <div>{position.place}</div>
              <div>
                <ul>
                  {position.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                    {new Date(position.startDate).toLocaleDateString()} –{" "}
                    {position.endDate
                      ? new Date(position.endDate).toLocaleDateString()
                      : "Present"}
             </div>
            </div>
          ))}
        </div>
    </div>
  );
}