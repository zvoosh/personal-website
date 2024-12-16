import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { TbFileCv } from "react-icons/tb";
import { useState } from "react";

const Header = ({primaryColor}:{primaryColor: string}) => {
  const navigate = useNavigate();

  const [isNavigate, setIsNavigate] = useState<boolean>(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  
  return (
    <div className="bg-white w-100 h-100">
      <div className="h-100  flex justify-start align-center" style={{background: primaryColor}}>
        <div className="flex align-center w-100 justify-between">
            <div className="flex ">
          <div className="flex align-center">
            <div className="burger burger-disable" onClick={()=>{
                setIsNavigate((prev: boolean)=>{
                  return !prev;
                })
            }}>
              <CiMenuBurger style={{transform: "scale(1.6)", marginLeft: "1rem", color: "white"}}/>
            </div>
            {isNavigate && (
            <div className="nav">
            <div className="burger" style={{position:"absolute", left: ".5%", top:"49.5%"}} onClick={()=>{
                setIsNavigate((prev: boolean)=>{
                  return !prev;
                })
            }}>
              <CiMenuBurger style={{transform: "scale(1.6)", marginLeft: "1rem", color: "white"}}/>
            </div>

            <div className="flex flex-column">
            <div
              className="text-white font-size-18 pl-4 mr-3"
              style={{ letterSpacing: ".2rem", userSelect: "none" }}
              >
              Dusan Ilic
            </div>
            <div
              className="m-1 text-white p-1 font-size-12 user-select cursor "
              style={{ border: "1px solid white" }}
              onClick={() => {
                  handleNavigation("/");
                  setIsNavigate(false);
                  }}
                  >
              Personal Information
            </div>
            <div
              className="ml-1 mr-1 text-white p-1 font-size-12 user-select cursor"
              style={{ border: "1px solid white" }}
              onClick={() => {
                  handleNavigation("/projects");
                  setIsNavigate(false);
                  }}
                  >
              Projects
            </div>
            </div>
            </div>
            )}
            <div
              className="text-white font-size-18 pl-4 mr-3"
              style={{ letterSpacing: ".2rem", userSelect: "none" }}
              >
              Dusan Ilic
            </div>
            
          </div>
          <div className="flex head-btns">
            <div
              className="m-1 text-white p-1 font-size-12 text-center flex align-center user-select cursor "
              style={{ border: "1px solid white" }}
              onClick={() => {
                  handleNavigation("/");
                  }}
                  >
              Personal Information
            </div>
            <div
              className="m-1 text-white p-1 font-size-12 text-center flex align-center user-select cursor"
              style={{ border: "1px solid white" }}
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
                style={{ textDecoration: "none", color: "black" }}
                >
                <TbFileCv 
                  style={{ transform: "scale(2)" }}
                  className="mr-1 text-white"
                  />
              </a>
                  </div>

                <div className="ml-1" style={{ transform: "scale(1.2)" }}>
              <a
                href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                >
                <FaLinkedin
                  style={{ transform: "scale(2)" }}
                  className="mr-1 text-white"
                  />
              </a>
                  </div>
              <div className="ml-1 pr-3" style={{ transform: "scale(1.2)" }}>
                <a
                  href="https://mail.google.com/mail/u/0/#compose"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  >
                <MdEmail
                  style={{ transform: "scale(2)" }}
                  className="mr-05 text-white"
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
