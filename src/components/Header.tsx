import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-white w-100 h-100">
      <div className="h-100 bg-cornBlue flex justify-start align-center">
        <div className="flex align-center w-100 justify-between">
            <div className="flex ">

          <div className="flex align-center">
            <div
              className="text-white font-size-14 pl-3 mr-3"
              style={{ letterSpacing: ".2rem" }}
              >
              Dusan Ilic
            </div>
            
          </div>
          <div className="flex">
            <div
              className="m-1 text-white p-05 user-select cursor"
              style={{ border: "1px solid white" }}
              onClick={() => {
                  handleNavigation("/");
                  }}
                  >
              Personal Information
            </div>
            <div
              className="m-1 text-white p-05 user-select cursor"
              style={{ border: "1px solid white" }}
              onClick={() => {
                  handleNavigation("/projects");
                  }}
                  >
              Projects
            </div>
          </div>
                </div>
                <div className="flex">

                <div className="ml-2" style={{ transform: "scale(1.2)" }}>
              <a
                href="https://www.linkedin.com/in/dusan-ilic0997b4166/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                >
                <FaLinkedin
                  style={{ transform: "scale(1.4)" }}
                  className="mr-05 text-white"
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
                  style={{ transform: "scale(1.4)" }}
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
