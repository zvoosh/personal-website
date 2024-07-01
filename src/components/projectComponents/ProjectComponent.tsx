import { Divider } from "antd";
import chinese01 from "../../assets/chinese-culture-01.png";
import hotel01 from "../../assets/hotel-app-01.png";
import plane01 from "../../assets/plane-app-01.png";

const ProjectComponent = () => {
  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <div
          className="project-page-contain"
        >
          <div className=" project-margin-top-3">
            <div className="project-title ">My Projects</div>
            <div
              className="pl-1 pr-1 mb-2 font-size-13 text-align-justify flex align-center project-intro-text-height project-font-paragraph project-padding-text"
            >
              Below are listed some of the projects I worked on my own during my
              tenure 5 years of university student experience. All projects are
              made during my time on university in different technologies using
              React, Vue, Angular, Node, Spring, Mongodb and SQL. The listed
              examples are covering the subjets such as Web development, User
              Interfaces, Java Programming Language, and other sub-subjects.
              Besides the listed examples there were projects including Python
              scripts for Data Science, Virtual Machine scripts, Cloud
              programming, Cryptology one and two and Angular project that
              aren't listen below. Some links for such subjects will be provided
              below. Below are only web development projects I worked on by
              myself during University. Other projects I worked on were made
              during my university are showcased through my GPA.
            </div>
            <div className="pl-1 font-size-13 project-intro-text-height project-font-paragraph project-padding-text">
              A worthy mention would be my 1 year of proffesional experience at
              FactoryWW.
            </div>
            <div className="pl-1 font-size-13 pt-1 mt-05 project-intro-text-height project-font-paragraph project-padding-text">
              Link to Artificial Intelligence: <a
                href="https://colab.research.google.com/drive/1hqhbojPlZkWETzeyZN3Yb4dKa0TQ48o7?usp=sharing"
                target="_blank"
                style={{textDecoration: "none"}}
              >
                Google Colab notebook, Graduation Rate
              </a>
              <div className="mt-05">
              Link to Cryptology: <a
                  href="https://colab.research.google.com/drive/1f0Fk1C2pDFN_q6Rav3qfDcw_O0G8pn27?usp=sharing"
                  target="_blank"
                style={{textDecoration: "none"}}
                >
                  Google Colab notebook, MARS vs AES
                </a>
              </div>
              <div className="mt-05">
                Link to Distinguisher: <a
                  href="https://colab.research.google.com/drive/12Bz_ZPua-4rCxWfnW6O0UIobUnm4oLrf?usp=sharing"
                  target="_blank"
                style={{textDecoration: "none"}}
                >
                  Google Colab notebook, Neural Distinguisher
                </a>
              </div>
            </div>
          </div>
          <div className="project-mobile-disable">
            
          <Divider />
          <div className="flex flex-row mt-5">
            <div className="w-45 h-100">
              <div
                style={{ height: "50vh",userSelect: "none" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={chinese01} alt="" style={{ height: "40vh" }} />
              </div>
            </div>
            <div
              className="w-50 h-100"
              style={{ borderRadius: "2%", border: "1px solid black", color:"black", marginLeft: "8rem" }}
            >
              <div style={{ height: "50vh", position: "relative" }}>
                <div className="half-circle-second" style={{background: "white" , borderBottom: "1px solid black"}}></div>
                <div className="half-circle-reverse" style={{borderBottom: '1px solid black'}}></div>
                <div className="w-100  m-3 ml-4">
                  <div className="font-size-13">
                    THE DEVELOPMENET AND BRIEF HISTORY OF CHINESE CULTURE
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    This website is developed in purpose of showcasing Chinese
                    Culture and it's development thourgh the ages. It's design
                    resambles the classical Eastern design with modernized
                    content elements from other open-source outdated websites.
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    The website is divided in four main topics with spread
                    content based on age it was inventent in.
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    The website does not have a backend storage side. It is
                    composed of React.js and React.js libraries. All states are
                    kept in React.js technologies, for example Route state,
                    Variable state..
                  </div>
                  <div className="mt-1 mr-5 ml-2 font-size-11">
                    The idea to make such a project came from classes of the
                    subject I choose for my graduating thesees.
                  </div>
                  <div className="mt-1 mr-5 ml-2 font-size-11">
                    The project has it's following documentation of 30 pages,
                    covering Coding, Testing, UI Testing, User Requirements and
                    etc.
                  </div>
              <div className="mt-2 ml-2  font-size-11">
                <a
                  href="https://zvoosh.github.io/Chinese-Cultural-Evolution/"
                  target="_blank"
                >
                   DEVELOPMENET AND BRIEF HISTORY OF CHINESE CULTURE
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row">
            <div className=" w-45 h-100">
              <div
                style={{ height: "50vh",userSelect: "none" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={hotel01} alt="" style={{ height: "40vh" }} />
              </div>
            </div>
            <div
              className="ml-3 w-50 h-100"
              style={{ borderRadius: "2%", background: "white" , border: "1px solid black" , marginLeft: "8rem" }}
            >
              <div style={{ height: "50vh", position: "relative" }}>
                <div className="half-circle-second" style={{background: "white", borderBottom: '1px solid black'}}></div>
                <div className="half-circle-reverse" style={{borderBottom: '1px solid black'}}></div>
                <div className="w-100 m-3 ml-4">
                  <div className="font-size-13">HOTEL APPLICATION</div>
                  <div className="mt-1 mr-5 font-size-11">
                    This hotel application was made as a finals assignment for a
                    subject called Application Software Development.
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    The subject covers modeling methods, agile methods,
                    requirements analysis, ER diagrams, designing the system,
                    UML modelovanje, software implementation, software testing
                    and besides all documentation.
                  </div>
                  <div className="mt-1 ml-2 mr-5 font-size-11">
                    The project has a backend side writen in Node.js and MongoDB
                    as for the frontend side it's built in Vue.js and styled
                    with Vuetify. Besides it's functions documentation is
                    provided for the project.
                  </div>
                  <div className="mt-1 mr-5 ml-2 font-size-11">
                    Application holds the hotels welcoming page, about page, a
                    page for showcasing rooms and their availability, a page for
                    auditoriums and a profile page
                  </div>
                  <div className="mt-1 mr-5 ml-2 font-size-11">
                    On the application the client can login, reserve rooms and
                    audiotoriums, and read about hotel and view images taken of
                    it's enterior.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row">
            <div className=" w-45 h-100">
              <div
                style={{ height: "50vh",userSelect: "none" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={plane01} alt="" style={{ height: "40vh" }} />
              </div>
            </div>
            <div
              className="ml-3 w-50 h-100"
              style={{ borderRadius: "2%", background: "white" , border: "1px solid black", marginLeft: "8rem"  }}
            >
              <div style={{ height: "50vh", position: "relative" }}>
                <div className="half-circle-second" style={{background: "white", borderBottom: '1px solid black'}}></div>
                <div className="half-circle-reverse"style={{borderBottom: '1px solid black'}}></div>
                <div className="w-100 m-3 ml-4">
                  <div className="font-size-13">
                    AIPLANE TICKETS APPLICATION
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    Airplane Tickets websites was made in interest of showcasing
                    the RASA chatbot. Website has 3 pages and a login page and
                    is made with a simple design.
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    RASA chatbot greets the client and asks for a date to book a
                    flight, client anwsers and the chatbot gives a recomendation
                    for a flight and a link that leads to the flight.
                  </div>
                  <div className="mt-1 mr-5 font-size-11">
                    The backend side of the application is written in Node.js.
                    As for the frontend side the technology used is React.js.
                  </div>
                  <div className="mt-1 mr-5 ml-2 font-size-11">
                    RASA chatbot is made of python scripts like actions, models,
                    etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          
          </div>

          <div className="project-pc-disable">
          <Divider />
          <div className="flex flex-column ">
            <div className="w-100 h-100">
              <div
                style={{ height: "50vh",userSelect: "none" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={chinese01} alt="" style={{ height: "25vh" }} />
              </div>
            </div>
            <div
              className="w-100 h-100 "
              style={{ borderRadius: "2%", border: "1px solid black", color:"black" }}
            >
              <div style={{ height: "100%", position: "relative" }}>
                <div className="w-100 m-1">
                  <div className="font-size-12 mr-2 text-bold ">
                    THE DEVELOPMENET AND BRIEF HISTORY OF CHINESE CULTURE
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    This website is developed in purpose of showcasing Chinese
                    Culture and it's development thourgh the ages. It's design
                    resambles the classical Eastern design with modernized
                    content elements from other open-source outdated websites.
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    The website is divided in four main topics with spread
                    content based on age it was inventent in.
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    The website does not have a backend storage side. It is
                    composed of React.js and React.js libraries. All states are
                    kept in React.js technologies, for example Route state,
                    Variable state..
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    The idea to make such a project came from classes of the
                    subject I choose for my graduating thesees.
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    The project has it's following documentation of 30 pages,
                    covering Coding, Testing, UI Testing, User Requirements and
                    etc.
                  </div>
                  <div className="mt-2 mr-2 font-size-11">
                    <a
                      href="https://zvoosh.github.io/Chinese-Cultural-Evolution/"
                      target="_blank"
                    >
                      DEVELOPMENET AND BRIEF HISTORY OF CHINESE CULTURE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-column">
            <div className="w-100 h-100">
              <div
                style={{ height: "50vh",userSelect: "none" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={hotel01} alt="" style={{ height: "25vh" }} />
              </div>
            </div>
            <div
              className="w-100 h-100"
              style={{ borderRadius: "2%", background: "white" , border: "1px solid black" }}
            >
              <div style={{ height: "100%", position: "relative" }}>
                <div className="w-100 m-1">
                  <div className="font-size-12 text-bold">HOTEL APPLICATION</div>
                  <div className="mt-1 mr-2 font-size-11">
                    This hotel application was made as a finals assignment for a
                    subject called Application Software Development.
                  </div>
                  <div className="mt-1  mr-2 font-size-11">
                    The subject covers modeling methods, agile methods,
                    requirements analysis, ER diagrams, designing the system,
                    UML modelovanje, software implementation, software testing
                    and besides all documentation.
                  </div>
                  <div className="mt-1  mr-2 font-size-11">
                    The project has a backend side writen in Node.js and MongoDB
                    as for the frontend side it's built in Vue.js and styled
                    with Vuetify. Besides it's functions documentation is
                    provided for the project.
                  </div>
                  <div className="mt-1  mr-2 font-size-11">
                    Application holds the hotels welcoming page, about page, a
                    page for showcasing rooms and their availability, a page for
                    auditoriums and a profile page
                  </div>
                  <div className="mt-1  mr-2 font-size-11">
                    On the application the client can login, reserve rooms and
                    audiotoriums, and read about hotel and view images taken of
                    it's enterior.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-column">
            <div className="w-100 h-100">
              <div
                style={{ height: "50vh",userSelect: "none" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={plane01} alt="" style={{ height: "25vh" }} />
              </div>
            </div>
            <div
              className="w-100 h-100"
              style={{ borderRadius: "2%", background: "white" , border: "1px solid black"  }}
            >
              <div style={{ height: "100%", position: "relative" }}>
                <div className="w-100 m-1">
                  <div className="font-size-12 mr-2 text-bold">
                    AIPLANE TICKETS APPLICATION
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    Airplane Tickets websites was made in interest of showcasing
                    the RASA chatbot. Website has 3 pages and a login page and
                    is made with a simple design.
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    RASA chatbot greets the client and asks for a date to book a
                    flight, client anwsers and the chatbot gives a recomendation
                    for a flight and a link that leads to the flight.
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    The backend side of the application is written in Node.js.
                    As for the frontend side the technology used is React.js.
                  </div>
                  <div className="mt-1 mr-2 font-size-11">
                    RASA chatbot is made of python scripts like actions, models,
                    etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectComponent };
