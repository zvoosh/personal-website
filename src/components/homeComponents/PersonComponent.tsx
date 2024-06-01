import DusanIlicCV from "../../assets/Dusan_Ilic_CV.jpg";

const PersonComponent = () => {
    return (
<div style={{ width: "100vw", height: "60vh", marginLeft: '-3rem' }}  className="flex mt-3">
          <div className="w-25 h-100 flex align-center justify-center">
            <img
              src={DusanIlicCV}
              width={250}
              style={{ borderRadius: "10%" }}
            />
          </div>
          <div className="w-75 h-100 flex flex-column align-center">
            <div className="font-size-16">PERSONAL INFORMATION</div>
            <div className="mt-1 font-size-11 text-align-justify">
              {" "}
              Graduated Computer Science professional with 10 months of working
              experience as a Junior Front-end Web Developer in the industry. I
              am a committed, positive, and hard-working individual, always
              striving to complete tasks on time and correctly. I enjoy
              collaborating with teams and continuously learning and expanding
              my knowledge and skills. As a problem-solving and curious person,
              I utilize various technologies and resources to find optimal
              solutions for my tasks.
            </div>
            <div className="font-size-16 mt-2">WORK EXPERIENCE</div>
            <div className="flex justify-between w-100 text-bold"><div >Factory World Wide, Belgrade</div><div>July 2022 - June 2023</div></div>
            <div className="mt-1 font-size-11 text-align-justify">
              As a Junior Software Engineer specializing in Front-end Web
              Development, I utilized React.js technology in combination with
              TypeScript language. During my 11 months of experience, I
              contributed to two pivotal projects: one for the Automotive
              industry and another for the Ministry of Finance. The libraries
              used in these projects include Axios, React-Query, React-Context,
              Redux, React Router, AntD, and various other complementary
              libraries. Additionally, I used Jest.js library for testing my
              code and applications to ensure the quality of my software
              solutions
            </div>
          </div>
        </div>
    )
}

export {PersonComponent}