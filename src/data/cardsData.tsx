import { DiMysql } from "react-icons/di";
import { FaAngular, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAlwaysdata,
  SiGooglecolab,
  SiJupyter,
  SiMongodb,
} from "react-icons/si";

export type TSkill = {
  title: JSX.Element;
  text: JSX.Element;
  favicon: JSX.Element;
};

export type TAllSkills = {
  title: JSX.Element;
  text: JSX.Element;
}[][];

const skillsOne = [
  {
    title: (
      <div className="flex justify-center">
        {" "}
        <FaReact
          style={{ transform: "scale(1.5)", margin: "0.2rem 1rem" }}
        />{" "}
        <div style={{ marginRight: "1rem" }}>React.js</div>{" "}
      </div>
    ),
    text: (
      <ul >
        {" "}
        <li>1 year of professional experience</li>{" "}
        <li>2+ years of educational development</li>{" "}
        <li>3+ GitHub repositories</li>{" "}
        <li>2 highly graded University subject projects</li>{" "}
        <li>University thesis written in React.js</li>{" "}
        <li>Finished Udemy certified course</li>{" "}
        <li>Integrated React libraries experience</li>{" "}
        <li>Read a book on React.js</li>
        <li><a href="https://drive.google.com/file/d/1RyUHuNSFy9zbOc4DtYFRc7kd2jAtMzYm/view?usp=drive_link" target="_blank" download style={{textDecoration: "underline"}}>Certificat</a></li>
      </ul>
    ),
    favicon: (
      <FaReact
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
  {
    title: (
      <div className="flex justify-center">
        {" "}
        <FaNodeJs
          style={{ transform: "scale(1.5)", margin: "0.2rem 1rem" }}
        />{" "}
        <div style={{ marginRight: "1rem" }}>Node.js</div>{" "}
      </div>
    ),
    text: (
      <ul >
        {" "}
        <li>3+ years of learning development</li> <li>2 GitHub repositories</li>{" "}
        <li>2 highly graded University subject projects</li>{" "}
        <li>Integrated libraries experience</li>{" "}
      </ul>
    ),
    favicon: (
      <FaNodeJs
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
  {
    title: (
      <div className="flex justify-center">
        {" "}
        <SiMongodb
          style={{ transform: "scale(1.5)", margin: "0.2rem 1rem" }}
        />{" "}
        <div style={{ marginRight: "1rem" }}>Flask</div>{" "}
      </div>
    ),
    text: (
      <ul >
        {" "}
        <li>Udemy certified course finished</li>{" "}
        <li><a href="https://drive.google.com/file/d/1RoZ6kyRX-plMlY9GHXkLVKH0fXBd3vug/view?usp=drive_link" target="_blank" download style={{textDecoration: "underline"}}>Certificat</a></li>
      </ul>
    ),
    favicon: (
      <SiMongodb
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
];

const skillsTwo = [
  {
    title: (
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
    ),
    text: (
      <ul >
        <li>One of my biggest University projects was in Angular</li>
        <li>A whole subject practising UI methods using Angular</li>
        <li>Currently learning from Udemy licenced course</li>
      </ul>
    ),

    favicon: (
      <FaAngular
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
  {
    title: (
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
    ),
    text: (
      <ul >
        <li>3+ years of educational experiance</li>
        <li>University proffesors highly enforce practicing SQL databases</li>
        <li>
          Multiple University books covering storing data in SQL databases
        </li>
        <li>Multiple subjects in demand of SQL database</li>
      </ul>
    ),

    favicon: (
      <DiMysql
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
  {
    title: (
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
    ),
    text: (
      <ul >
        <li>2 years of educational experiance</li>
        <li>
          University subject based on Java programming in Spring Framework
        </li>
        <li>University subject based on Java programming in Android Studio</li>
        <li>
          University subject based on Java programming covering Testing
          libraries
        </li>
      </ul>
    ),

    favicon: (
      <FaJava
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
];

const skillsThree = [
  {
    title: (
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
    ),
    text: (
      <ul >
        <li>2 years of educational experiance</li>
        <li>
          4 separate University subjects futuring data science, data operations,
          data coding and AI
        </li>
        <li>
          Google labs and python were used to distribute data using the
          knowledge of data science and methods of Machine Learning
        </li>
        <li>Multiple open source projects and examples studied</li>
      </ul>
    ),

    favicon: (
      <SiGooglecolab
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
  {
    title: (
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
    ),
    text: (
      <ul >
        <li>2 years of educational experiance</li>
        <li>
          4 separate University subjects futuring data science, data operations,
          data coding and AI
        </li>
        <li>
          Google labs and python were used to distribute data using the
          knowledge of data science and methods of Machine Learning
        </li>
        <li>Multiple open source projects and examples studied</li>
      </ul>
    ),

    favicon: (
      <SiJupyter
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
  {
    title: (
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
    ),
    text: (
      <ul >
        <li>
          Probability and statistics first subject to teach about graph and data
          operations
        </li>
        <li>
          Data coding 1 and 2 using python and data science to decipher coded
          data
        </li>
        <li>
          The coded data had to be prepared for Machine Learning operators for
          decodation using the methods from previous subjects
        </li>
        <li>
          Artificial Intelligence was a subject of the last semestar wraping up
          all previously gained knowledge and adding proffesional knowledge
        </li>
      </ul>
    ),

    favicon: (
      <SiAlwaysdata
        style={{
          margin: "0.2rem 1rem",
          color: "gray",
          zIndex: "1",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-200%, -200%) scale(15)",
          opacity: ".2",
        }}
      />
    ),
  },
];

export const all = [skillsOne, skillsTwo, skillsThree];
