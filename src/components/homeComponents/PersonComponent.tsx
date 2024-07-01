import { Divider } from "antd";

const PersonComponent = () => {
  return (
    <div>
      <Divider />
      <div className="flex w-100 h-100 pt-2 pb-2 justify-center">
        <div className="w-100 p-2 flex flex-column  justify-center padding-0">
          <div className="font-size-18 pb-1 mobile-padding-text">PERSONAL INFORMATION</div>
          <div className="mt-1 font-size-13 text-align-justify text-help mobile-font-paragraph mobile-padding-text">Graduated Computer Science professional with 10 months of working
            experience as a Junior Front-end Web Developer in the industry. I am
            a committed, positive, and hard-working individual, always striving
            to complete tasks on time and correctly. I enjoy collaborating with
            teams and continuously learning and expanding my knowledge and
            skills. As a problem-solving and curious person, I utilize various
            technologies and resources to find optimal solutions for my tasks.
          </div>
          <div className="font-size-18 pt-5 pb-2 person-padding-title mobile-padding-text">WORK EXPERIENCE</div>
          <div className="font-size-16 pt-1 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">
            Junior Software Engineer
          </div>
          <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex person-padding-title person-flex mobile-padding-text mobile-under-title">
            <div>Factory World Wide, Belgrade</div>
            <div>July 2022 - June 2023</div>
          </div>
          <div className="mt-1 font-size-13 text-align-justify  mobile-font-paragraph mobile-padding-text">
            As a Junior Software Engineer specializing in Front-end Web
            Development, I utilized React.js technology in combination with
            TypeScript language. During m y 11 months of experience, I
            contributed to two pivotal projects: one for the Automotive industry
            and another for the Ministry of Finance. The libraries used in these
            projects include Axios, React-Query, React-Context, Redux, React
            Router, AntD, and various other complementary libraries.
            Additionally, I used Jest.js library for testing my code and
            applications to ensure the quality of my software solutions
          </div>
          <div className="font-size-16 pt-3 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">
            Part-Time Employee
          </div>
          <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex person-padding-title person-flex mobile-padding-text mobile-under-title">
            <div>Part-time Jobs</div>
            <div>2015 - Present Day</div>
          </div>
          <div className="mt-1 font-size-13 text-align-justify  mobile-font-paragraph mobile-padding-text">
            During my enrollment at University and High School, I worked part
            time jobs such as Administration and Database Maintenance,
            Commercial Modeling, TV Production Assistant, and Background Actor
          </div>
        </div>
      </div>
    </div>
  );
};

export { PersonComponent };
