import DusanIlicCV from "../../assets/DusanIlicCV.jpg";
import { useEffect, useRef } from "react";
import createIntersectionObserver from "../../functions/observer";
import { FaCircle, FaReact } from "react-icons/fa";

const NewHome = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleIntersect = (element: Element) => {
      element.classList.add("in-view");
    };
    const observer = createIntersectionObserver(handleIntersect);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
    if (certificateRef.current) {
      observer.observe(certificateRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
      if (certificateRef.current) {
        observer.unobserve(certificateRef.current);
      }
    };
  }, []);

  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <section about="intro">
          {/* Intro start */}
          <div className="w-100 height-80-vh">
            <div className="hi-image-cont">
              <div className="hi-cont">
                <div className="hi-text">Hi, I'm Dusan Ilic</div>
                <div className="text-gray">
                  I'm a graduated Informatics student with 11 months of
                  experience as a Junior Front-end Web Developer.
                </div>
              </div>
              <div>
                <img src={DusanIlicCV} className="scale-image" />
              </div>
            </div>
          </div>
        </section>
        {/* Intro finish */}
        {/* Work start */}

        <section about="work">
          <div className="work-exp-cont">
            <div className="flex justify-center mb-5">
              <div style={{ textAlign: "center" }}>
                <div
                  className="m-1 mt-2"
                  style={{ fontSize: "1.4rem", fontWeight: "bold" }}
                >
                  Work experience
                </div>
                <div className="text-gray">
                  These are my past working places
                </div>
              </div>
            </div>
            <div className="w-100 flex justify-center">
              <div className="job-cont">
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <div
                        className="mb-05"
                        style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                      >
                        Junior Software Developer 1
                      </div>
                      <div style={{ color: "gray" }}>Front-end developer</div>
                    </div>
                    <div>
                      <FaReact
                        style={{
                          color: "gray",
                          transform: "scale(2)",
                          margin: ".5rem",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ color: "#333333" }}>
                    As a front-end web development, I utilized React.js
                    technology with TypeScript. The libraries in the projects
                    include Axios, React-Query, React-Context, Redux, React
                    Router, AntD, and various other complementary libraries.
                    Additionally, I used Jest.js library for testing my code and
                    applications to ensure the quality of my software solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Work Finish */}

        <section about="knowledge">
          <div style={{ width: "100vw", height: "50vh" }}>
            <div className="flex justify-center mb-5">
              <div style={{ textAlign: "center" }}>
                <div
                  className="m-1 mt-2"
                  style={{ fontSize: "1.4rem", fontWeight: "bold" }}
                >
                  Knowledge
                </div>
                <div className="text-gray">Skill ranking</div>
              </div>
            </div>
            <div className="w-100 flex justify-center">
              <div className="grade-cont">
                <div className="flex justify-between m-1">
                  <div>React</div>
                  <div>
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                  </div>
                </div>
                <div className="flex justify-between m-1">
                  <div>Node.js</div>
                  <div>
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                  </div>
                </div>
                <div className="flex justify-between m-1">
                  <div>Flask</div>
                  <div>
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                  </div>
                </div>
                <div className="flex justify-between m-1">
                  <div>Angular</div>
                  <div>
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                  </div>
                </div>
                <div className="flex justify-between m-1">
                  <div>Vue</div>
                  <div>
                    <FaCircle
                      style={{ color: "yellowgreen", marginRight: ".2rem" }}
                    />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                    <FaCircle style={{ marginRight: ".2rem" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { NewHome };
