import "../styles/Preview.css";
import emailIcon from "/mail.svg";
import phoneIcon from "/call.svg";

export default function Preview({ formData }) {
  return (
    <div>
      <div className="section personal-section">
        <div className="personal-photo">
          <img src={formData.personal.photo} alt={formData.personal.name} />
        </div>
        <div className="personal-info">
          <h1 className="personal-name">{formData.personal.name}</h1>

          <div className="personal-contact">
            {formData.personal.email !== "" && (
              <div className="personal-email">
                <img src={emailIcon} alt="Email Icon" />
                <span>{formData.personal.email}</span>
              </div>
            )}

            {formData.personal.phone !== "" && (
              <div className="personal-phone">
                <img src={phoneIcon} alt="Email Icon" />
                <span>{formData.personal.phone}</span>
              </div>
            )}
          </div>
        </div>
        <div className="personal-summary">
          <h2> Summary</h2>
          <div>{formData.personal.summary} </div>
        </div>
      </div>

      <hr className="dividing-line" />

      {formData.education.length > 0 && (
        <div className="section education-section">
          <h2>Education</h2>
          {formData.education.map((uni) => (
            <div className="uni" key={uni.id}>
              <div className="uni-info">
                {uni.degree}
                {uni.degree !== "" && <span>, </span>}
                {uni.school}
              </div>
              {uni.startDate !== "" && (
                <div className="uni-dates">
                  {new Date(uni.startDate).toLocaleDateString()} –{" "}
                  {uni.endDate && new Date(uni.endDate).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <hr className="dividing-line" />

      {formData.work.length > 0 && (
        <div className="section work-section">
          <h2> Practical Experience</h2>
          {formData.work.map((position) => (
            <div className="position" key={position.id}>
              <div className="position-main">
                <div className="position-info">
                  {position.title}
                  {position.title !== "" && <span>, </span>}
                  {position.company}
                </div>
                <div className="position-dates">
                  {position.startDate !== "" && (
                    <div>
                      {new Date(position.startDate).toLocaleDateString()} –{" "}
                      {position.endDate
                        ? new Date(position.endDate).toLocaleDateString()
                        : "Present"}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <ul className="responsibilities">
                  {position.responsibilities.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
