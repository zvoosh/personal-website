import TypewriterComponent from "typewriter-effect";

const PersonalInformation = () => {
  return (
    <div
      className="pt-2 flex justify-center align-center"
      style={{ background: "#FFFBCC", borderRadius: "10px" }}
    >
      <div className="person-padding-3 padding-0">
        <div className="font-size-16 pb-1 mobile-padding-text">
          <TypewriterComponent
            options={{
              strings: [
                "PERSONAL INFORMATION",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>
        <div className="mt-1 font-size-12 text-align-justify text-help mobile-font-paragraph mobile-padding-text">
          I'm a graduated Informatics student with 11 months of experience as a Junior Front-end Web Developer.
          experience as a Junior Front-end Web Developer in the industry. I am a
          committed, positive, and hard-working individual, always striving to
          complete tasks on time and correctly. I enjoy collaborating with teams
          and continuously learning and expanding my knowledge and skills. As a
          problem-solving and curious person, I utilize various technologies and
          resources to find optimal solutions for my tasks.
        </div>
      </div>
    </div>
  );
};

export { PersonalInformation };
