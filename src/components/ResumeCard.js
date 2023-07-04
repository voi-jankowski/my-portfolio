import React from "react";

const ResumeCard = () => {
  return (
    <div className="resume-card">
      <img src="assets\resume-screenshot.png" alt="Resume" />
      <div className="resume-link">
        <a href="assets/voi-jankowski-resume.pdf" download>
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default ResumeCard;
