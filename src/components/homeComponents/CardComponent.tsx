import { useState } from "react";
import { Card, Col, Row } from "antd";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaAngular } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import { Divider } from "antd";

const CardComponent =() =>{
  const array = [0,1,2];
  const [isIndex, setIsIndex] = useState<number>(0);

return (
    <div>
        <Divider />
        <div className="font-size-17 pt-2 w-100 text-align-center">SKILLS</div>
        <Row gutter={16} className="mt-1 pb-2 flex justify-around p-2">
          <div className="flex align-center">
            <span
              style={{
                borderRadius: "20%",
                padding: ".4rem",
                border: "1px solid gray",
              }}
              onClick={() => {
                setIsIndex((prev: number): any => {
                  if (prev === 0) {
                    return array.length-1;
                  } else if (prev > 0) {
                    return prev - 1;
                  }
                });
              }}
            >
              <FaChevronLeft className="flex" />
            </span>
          </div>
          {array[isIndex] === 0 && (
            <>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <FaReact
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>React.js</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>1 year of proffesional experience</li>
                    <li>2+ years of educational development</li>
                    <li>3+ github repositories</li>
                    <li>2 highly graded University subject projects</li>
                    <li>University thesis written in React.js</li>
                    <li>Finished Udemy certified course</li>
                    <li>Integrated React libraries expirance</li>
                  </ul>
                </Card>
              </Col>
              {/* style={{transform: 'scale(1.5)', marginLeft:"1rem", marginRight: "1rem", marginTop:'.2rem'}} */}
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <FaNodeJs
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>Node.js</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>3+ years of learning development</li>
                    <li>2 github repositories</li>
                    <li>2 highly graded University subject projects</li>
                    <li>Integrated libraries expirance</li>
                  </ul>
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <SiMongodb
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>MongoDB</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>3+ years of practical basic use</li>
                    <li>Multiple databases</li>
                  </ul>
                </Card>
              </Col>
            </>
          )}
          {array[isIndex] === 1 && (
            <>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <FaJava 
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>Java</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>2 years of educational experiance</li>
                    <li>University subject based on Java programming in Spring Framework</li>
                    <li>University subject based on Java programming in Android Studio</li>
                    <li>University subject based on Java programming covering Testing libraries</li>
                  </ul>
                </Card>
              </Col>
              {/* style={{transform: 'scale(1.5)', marginLeft:"1rem", marginRight: "1rem", marginTop:'.2rem'}} */}
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <DiMysql
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>SQL</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none" }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>3+ years of educational experiance</li>
                    <li>University proffesors highly enforce practicing SQL databases</li>
                    <li>Multiple University books covering storing data in SQL databases</li>
                    <li>Multiple subjects in demand of SQL database</li>
                  </ul>
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <FaAngular
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>Angular</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>One of my biggest University projects was in Angular</li>
                    <li>A whole subject practising UI methods using Angular</li>
                    <li>A video of this project presentation is on this website</li>
                  </ul>
                </Card>
              </Col>
            </>
          )}
          {array[isIndex] === 2 && (
            <>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <SiGooglecolab 
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>Google Labs</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>2 years of educational experiance</li>
                    <li>4 separate University subjects futuring data science, data operations, data coding and AI</li>
                    <li>Google labs and python were used to distribute data using the knowledge of data science and methods of Machine Learning</li>
                    <li>Multiple open source projects and examples studied</li>
                  </ul>
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <SiJupyter 
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>Project Jupyter</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>2 years of educational experiance</li>
                    <li>4 separate University subjects futuring data science, data operations, data coding and AI</li>
                    <li>Google labs and python were used to distribute data using the knowledge of data science and methods of Machine Learning</li>
                    <li>Multiple open source projects and examples studied</li>
                  </ul>
                </Card>
              </Col>
              <Col span={7}>
                <Card
                  title={
                    <div className="flex justify-center">
                      <SiAlwaysdata 
                        style={{
                          transform: "scale(1.5)",
                          marginLeft: "1rem",
                          marginRight: "1rem",
                          marginTop: ".2rem",
                        }}
                      />
                      <div style={{ marginRight: "1rem" }}>Data Science</div>
                    </div>
                  }
                  style={{ boxShadow: "0px 0px 10px gray", userSelect: "none"  }}
                  headStyle={{
                    backgroundColor: "CornflowerBlue",
                    color: "white",
                  }}
                >
                  <ul>
                    <li>Probability and statistics first subject to teach about graph and data operations</li>
                    <li>Data coding 1 and 2 using python and data science to decipher coded data</li>
                    <li>The coded data had to be prepared for Machine Learning operators for decodation using the methods from previous subjects</li>
                    <li>Artificial Intelligence was a subject of the last semestar wraping up all previously gained knowledge and adding proffesional knowledge</li>
                  </ul>
                </Card>
              </Col>
            </>
          )}
          <div className="flex align-center">
            <span
              style={{
                borderRadius: "20%",
                padding: ".4rem",
                border: "1px solid gray",
              }}
              onClick={() => {
                setIsIndex((prev: number): any => {
                  if(prev === array.length-1){
                    return 0;
                  }
                  return prev + 1;
                });
              }}
            >
              <FaChevronRight className="flex" />
            </span>
          </div>
        </Row>
        <Divider />
    </div>
)

}


export {CardComponent}