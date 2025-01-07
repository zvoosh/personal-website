import { FaReact } from "react-icons/fa";

const Experience = () => {
    return (
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
    )
}

export default Experience;