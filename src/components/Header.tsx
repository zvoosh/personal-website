import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { TbFileCv } from "react-icons/tb";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";

const Header = () => {
  const navigate = useNavigate();

  const [isNavigate, setIsNavigate] = useState<boolean>(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-white w-100 h-100" style={{ height: "10vh" }}>
      <div className="h-100  flex justify-start align-center">
        <div className="flex align-center w-100 justify-between">
          <div className="flex ">
            <div className="flex align-center">
              <div
                className="burger burger-disable"
                onClick={() => {
                  setIsNavigate((prev: boolean) => {
                    return !prev;
                  });
                }}
              >
                <CiMenuBurger
                  style={{
                    transform: "scale(1.6)",
                    marginLeft: "1rem",
                    color: "gray",
                  }}
                />
              </div>
              {isNavigate && (
                <div className="nav">
                  <div
                    className="burger"
                    style={{ position: "absolute", left: ".5%", top: "49.5%" }}
                    onClick={() => {
                      setIsNavigate((prev: boolean) => {
                        return !prev;
                      });
                    }}
                  >
                    <CiMenuBurger
                      style={{
                        transform: "scale(1.6)",
                        marginLeft: "1rem",
                        color: "gray",
                      }}
                    />
                  </div>

                  <div className="flex flex-column">
                    <div
                      className="font-size-18 pl-4 mr-3"
                      style={{
                        letterSpacing: ".2rem",
                        userSelect: "none",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Dusan Ilic
                    </div>
                    <div
                      className="m-1 p-1 font-size-12 user-select cursor "
                      style={{ color: "gray" }}
                      onClick={() => {
                        handleNavigation("/");
                        setIsNavigate(false);
                      }}
                    >
                      <IoPersonOutline style={{marginRight: "1rem"}}/>
                      Personal Information
                    </div>
                    <div
                      className="ml-1 mr-1  p-1 font-size-12 user-select cursor"
                      style={{ color: "gray" }}
                      onClick={() => {
                        handleNavigation("/projects");
                        setIsNavigate(false);
                      }}
                    >
                     <GrProjects  style={{marginRight: "1rem"}}/> Projects
                    </div>
                  </div>
                </div>
              )}
              <div
                className=" font-size-18 pl-4 mr-3"
                style={{
                  letterSpacing: ".2rem",
                  userSelect: "none",
                  color: "gray",
                }}
              >
                Dusan Ilic
              </div>
            </div>
            <div className="flex head-btns">
              <div
                className="m-1 font-size-12 text-center flex align-center user-select cursor "
                style={{ color: "gray" }}
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                Personal Information
              </div>
              <div
                className="m-1 font-size-12 text-center flex align-center user-select cursor"
                style={{ color: "gray" }}
                onClick={() => {
                  handleNavigation("/projects");
                }}
              >
                Projects
              </div>
            </div>
          </div>
          <div className="flex  head-btns">
            <div className="ml-2" style={{ transform: "scale(1.2)" }}>
              <a
                href="https://drive.google.com/file/d/1ioiD-A6oiXxeSPcLN1HdNtZLUESwnWWX/view?usp=drive_link"
                target="_blank"
                download
                style={{ textDecoration: "none", color: "gray" }}
              >
                <TbFileCv
                  style={{ transform: "scale(1.5)" }}
                  className="mr-1 "
                />
              </a>
            </div>

            <div className="ml-1" style={{ transform: "scale(1.2)" }}>
              <a
                href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                target="_blank"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <FaLinkedin
                  style={{ transform: "scale(1.5)" }}
                  className="mr-1 "
                />
              </a>
            </div>
            <div className="ml-1 pr-3" style={{ transform: "scale(1.2)" }}>
              <a
                href="https://mail.google.com/mail/u/0/#compose"
                target="_blank"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <MdEmail
                  style={{ transform: "scale(1.5)" }}
                  className="mr-05 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
