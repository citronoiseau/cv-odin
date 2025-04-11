import "../styles/Preview.css";

export default function Preview({ formData }) {
  return (
    <div>
      <div className="section personal-section">
        <div>{formData.personal.name}</div>
        <div>
          <img
            src={formData.personal.photo}
            alt={formData.personal.name}
            className="personal-photo"
          />
        </div>
        <div>{formData.personal.email}</div>
        <div>{formData.personal.phone}</div>
      </div>

      <div className="section education-section">
        {formData.education.map((uni) => (
          <div className="uni" key={uni.id}>
            <div>{uni.name}</div>
            <div>{uni.title}</div>
            {uni.startDate !== "" && (
              <div>
                {new Date(uni.startDate).toLocaleDateString()} –{" "}
                {uni.endDate && new Date(uni.endDate).toLocaleDateString()}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section work-section">
        {formData.work.map((position) => (
          <div className="position" key={position.id}>
            <div>{position.title}</div>
            <div>{position.company}</div>
            <div>
              <ul>
                {position.responsibilities.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </div>
            {position.startDate !== "" && (
              <div>
                {new Date(position.startDate).toLocaleDateString()} –{" "}
                {position.endDate
                  ? new Date(position.endDate).toLocaleDateString()
                  : "Present"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
