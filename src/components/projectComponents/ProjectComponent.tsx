import { Divider } from "antd";
import chinese01 from "../../assets/chinese-culture-01.png";
import hotel01 from "../../assets/hotel-app-01.png";
import plane01 from "../../assets/plane-app-01.png";

const ProjectComponent = () => {
  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <div
          className="flex flex-column"
          style={{
            overflow: "hidden",
            paddingLeft: "8rem",
            paddingRight: "8rem",
          }}
        >
          <div className="mt-3">
            <div className="p-2 font-size-18 pl-1">My Projects</div>
            <div
              className="pl-1 pr-1 font-size-11 text-align-justify flex align-center"
              style={{ height: "20vh" }}
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
            <div className="pl-1 font-size-11">
              A worthy mention would be my 1 year of proffesional experience at
              FactoryWW.
            </div>
            <div className="pl-1 font-size-11 pt-1">
              <a
                href="https://colab.research.google.com/drive/1hqhbojPlZkWETzeyZN3Yb4dKa0TQ48o7?usp=sharing"
                target="_blank"
              >
                Google Colab notebook, Graduation Rate, Artificial Intelligence
              </a>
              <div>
                <a
                  href="https://colab.research.google.com/drive/1f0Fk1C2pDFN_q6Rav3qfDcw_O0G8pn27?usp=sharing"
                  target="_blank"
                >
                  Google Colab notebook, MARS vs AES, Cryptology Two
                </a>
              </div>
              <div>
                <a
                  href="https://colab.research.google.com/drive/12Bz_ZPua-4rCxWfnW6O0UIobUnm4oLrf?usp=sharing"
                  target="_blank"
                >
                  Google Colab notebook, Neural Distinguisher, Cryptology Two
                </a>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row mt-5">
            <div className="w-55 h-100">
              <div
                style={{ height: "50vh" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={chinese01} alt="" style={{ height: "40vh" }} />
              </div>
            </div>
            <div
              className="bg-cornBlue ml-3 w-45 h-100"
              style={{ borderRadius: "2%" }}
            >
              <div style={{ height: "50vh", position: "relative" }}>
                <div className="half-circle-second"></div>
                <div className="half-circle-reverse"></div>
                <div className="w-100 text-white m-3 ml-4">
                  <div className="font-size-12">
                    DEVELOPMENET AND BRIEF HISTORY OF CHINESE CULTURE
                  </div>
                  <div className="mt-1 mr-5">
                    This website is developed in purpose of showcasing Chinese
                    Culture and it's development thourgh the ages. It's design
                    resambles the classical Eastern design with modernized
                    content elements from other open-source outdated websites.
                  </div>
                  <div className="mt-1 mr-5">
                    The website is divided in four main topics with spread
                    content based on age it was inventent in.
                  </div>
                  <div className="mt-1 mr-5">
                    The website does not have a backend storage side. It is
                    composed of React.js and React.js libraries. All states are
                    kept in React.js technologies, for example Route state,
                    Variable state..
                  </div>
                  <div className="mt-1 mr-5 ml-05">
                    The idea to make such a project came from classes of the
                    subject I choose for my graduating thesees.
                  </div>
                  <div className="mt-1 mr-5 ml-1">
                    The project has it's following documentation of 30 pages,
                    covering Coding, Testing, UI Testing, User Requirements and
                    etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row">
            <div className=" w-55 h-100">
              <div
                style={{ height: "50vh" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={hotel01} alt="" style={{ height: "40vh" }} />
              </div>
            </div>
            <div
              className="bg-cornBlue ml-3 w-45 h-100"
              style={{ borderRadius: "2%" }}
            >
              <div style={{ height: "50vh", position: "relative" }}>
                <div className="half-circle-second"></div>
                <div className="half-circle-reverse"></div>
                <div className="w-100 text-white m-3 ml-4">
                  <div className="font-size-12">HOTEL APPLICATION</div>
                  <div className="mt-1 mr-5">
                    This hotel application was made as a finals assignment for a
                    subject called Application Software Development.
                  </div>
                  <div className="mt-1 mr-5">
                    The subject covers modeling methods, agile methods,
                    requirements analysis, ER diagrams, designing the system,
                    UML modelovanje, software implementation, software testing
                    and besides all documentation.
                  </div>
                  <div className="mt-1 mr-5">
                    The project has a backend side writen in Node.js and MongoDB
                    as for the frontend side it's built in Vue.js and styled
                    with Vuetify. Besides it's functions documentation is
                    provided for the project.
                  </div>
                  <div className="mt-1 mr-5 ml-1">
                    Application holds the hotels welcoming page, about page, a
                    page for showcasing rooms and their availability, a page for
                    auditoriums and a profile page
                  </div>
                  <div className="mt-1 mr-5 ml-1">
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
            <div className=" w-55 h-100">
              <div
                style={{ height: "50vh" }}
                className="flex justify-center align-center flex-column"
              >
                <img src={plane01} alt="" style={{ height: "40vh" }} />
              </div>
            </div>
            <div
              className="bg-cornBlue ml-3 w-45 h-100"
              style={{ borderRadius: "2%" }}
            >
              <div style={{ height: "50vh", position: "relative" }}>
                <div className="half-circle-second"></div>
                <div className="half-circle-reverse"></div>
                <div className="w-100 text-white m-3 ml-4">
                  <div className="font-size-12">
                    AIPLANE TICKETS APPLICATION
                  </div>
                  <div className="mt-1 mr-5">
                    Airplane Tickets websites was made in interest of showcasing
                    the RASA chatbot. Website has 3 pages and a login page and
                    is made with a simple design.
                  </div>
                  <div className="mt-1 mr-5">
                    RASA chatbot greets the client and asks for a date to book a
                    flight, client anwsers and the chatbot gives a recomendation
                    for a flight and a link that leads to the flight.
                  </div>
                  <div className="mt-1 mr-5">
                    The backend side of the application is written in Node.js.
                    As for the frontend side the technology used is React.js.
                  </div>
                  <div className="mt-1 mr-5">
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
  );
};

export { ProjectComponent };
