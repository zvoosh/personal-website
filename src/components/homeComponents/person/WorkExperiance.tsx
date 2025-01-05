import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IWorkplace {
  title: string;
  place: string;
  time: string;
  description: string;
}

const workplaces: IWorkplace[] = [
  {
    title: "Junior Software Engineer",
    place: "Factory World Wide, Belgrade",
    time: "July 2022 - June 2023",
    description: `As a Junior Software Engineer specializing in Front-end Web
          Development, I utilized React.js technology with
          TypeScript. During m y 11 months of experience, I contributed
          to two pivotal projects: one for the Automotive industry and another
          for the Ministry of Finance. The libraries used in these projects
          include Axios, React-Query, React-Context, Redux, React Router, AntD,
          and various other complementary libraries. Additionally, I used
          Jest.js library for testing my code and applications to ensure the
          quality of my software solutions`,
  },
  {
    title: "Part-Time Employee",
    place: "Part-time jobs",
    time: "2015 - Present Day",
    description: `During my enrollment at University and High School, I worked part time jobs such as Administration and Database Maintenance, Commercial Modeling, TV Production Assistant, and Background Actor`,
  },
];


const WorkExperiance = () => {
  const [activeWorkplace, setActiveWorkplace] = useState<number>(0);
  const [currentNumberIndex, setCurrentNumberIndex] = useState<number>(0);
  const [fade, setFade] = useState(false);
  const textIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (fade) {
      const timeoutId = setTimeout(() => {
        setFade(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [activeWorkplace, fade]);

  useEffect(() => {

    textIntervalRef.current = setInterval(() => {
      setActiveWorkplace((prev) => (prev + 1) % workplaces.length);
    }, 11000);

    return () => {
      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
      }
    };
  }, [activeWorkplace]);

  const clearIntervals = () => {
    if (textIntervalRef.current) {
      clearInterval(textIntervalRef.current);
    }
  };

  const arrowsFn = ({ left }: { left: boolean }) => {
    setFade(true);
    setTimeout(() => {
      if (left) {
        setActiveWorkplace((prev) => (prev + 1) % workplaces.length);
      } else {
        setActiveWorkplace(
          (prev) => (prev - 1 + workplaces.length) % workplaces.length
        );
      }
    }, 500);
    setCurrentNumberIndex(0);
    clearIntervals();
  };

  return (
    <div
      style={{
        background: "#DAF7A6",
        borderRadius: "10px",
        width: "99%",
        padding: "1rem 0 1rem 0",
      }}
    >
      <div className="person-padding-3">
        <div className="font-size-16 person-padding-title mobile-padding-text flex justify-between">
          <div>
            <span>WORK EXPERIENCE</span>
          </div>
          <div
            className="flex align-center mobile-size"
            style={{ userSelect: "none" }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                arrowsFn({ left: true });
              }}
            >
              <FaChevronLeft className="flex p-1" />
            </div>
            <div>
              {activeWorkplace + 1}/{workplaces.length}
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                arrowsFn({ left: false });
              }}
            >
              <FaChevronRight className="flex p-1" />
            </div>
          </div>
        </div>
        <div className={`fade ${fade ? "fade-out" : "fade-in"}`}>
          <div className="font-size-14 pt-1 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">
            {workplaces[activeWorkplace].title}
          </div>
          <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex person-padding-title person-flex mobile-padding-text mobile-under-title">
            <div>{workplaces[activeWorkplace].place}</div>
            <div>{workplaces[activeWorkplace].time}</div>
          </div>
          <div className="mt-1 font-size-12 text-align-justify  mobile-font-paragraph mobile-padding-text">
            {workplaces[activeWorkplace].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export { WorkExperiance };
