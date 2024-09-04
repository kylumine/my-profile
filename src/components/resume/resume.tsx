import parse from 'html-react-parser';

// Constants
import { NAME } from 'constants/common';


// Jsons
import Profiles from 'jsons/profiles.json';


// Styles
import './resume.scss';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 flex">
            <div>
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item">
                <h4>{NAME}</h4>
                <ul>
                  {Profiles.data_3.map((item, index) => (
                    <li key={index}>{parse(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="resume-title">Education</h3>
              {Profiles.data_4.map((item, index) => (
                <div key={index} className="resume-item">
                  <h4>{item.title}</h4>
                  <h5>{item.year}</h5>
                  <p>
                    <em>{item.school}</em>
                  </p>
                  <p>{item.address}</p>
                </div>
              ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
