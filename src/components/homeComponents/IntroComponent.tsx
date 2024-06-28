import DusanIlicCV from "../../assets/Dusan_Ilic_CV.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const IntroComponent = () => {

  const circles = Array.from({ length: 20 }, (_, i) => {
    const size = Math.floor(Math.random() * 20) + 10;
    const positionX = Math.floor(Math.random() * 100);
    const positionY = Math.floor(Math.random() * 80);
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (
      <div
        key={i}
        className="circle"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          top: `${positionY}%`,
          left: `${positionX}%`,
          opacity: ".3"
        }}
      ></div>
    );
  });


  return (
    <div className="pt-2">
      <div className="flex flex-row">
        <div className="w-35 h-100 mt-2 flex align-center justify-center">
          <img src={DusanIlicCV} width={300} style={{ borderRadius: "10%", zIndex: '10' }} />
        </div>
        <div className="w-65 flex flex-column ">

      <div className="circle-container">
        {circles}
      </div>
          <div>
            <div
              style={{
                fontSize: "4.3rem",
                fontWeight: "bold",
                letterSpacing: "1.1rem",
              }}
            >
              DUSAN ILIC
            </div>
            <div
              style={{ fontSize: "1.3rem", letterSpacing: ".7rem" }}
              className="text-gray"
            >
              Software Engineer
            </div>
          </div>
          <div className="w-80 h-100 pt-2 flex flex-column">
            <div className="w-100 h-50 flex">
              <div className="w-50 ">
                <FaPhoneAlt
                  style={{ transform: "scale(1.2)" }}
                  className="mr-05 text-cornBlue"
                />{" "}
                +381 60 3311 553
              </div>
              <div className="w-50">
                <MdEmail
                  style={{ transform: "scale(1.2)" }}
                  className="mr-05 text-cornBlue"
                />
                <a
                  href="https://mail.google.com/mail/u/0/#compose"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >dusan.ilic1999@gmail.com</a>
              </div>
            </div>
            <div className="w-100 h-50 flex">
              <div className="w-50 ">
                <div className="w-100">
                  <FaLinkedin
                    style={{ transform: "scale(1.2)" }}
                    className="mr-05 text-cornBlue"
                  />{" "}
                  <a
                    href="https://www.linkedin.com/in/dusan-ilic0997b4166/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    https://www.linkedin.com/in/dusan-ilic0997b4166/
                  </a>{" "}
                </div>
              </div>
              <div className="w-50 ">
                <FaMapMarkerAlt
                  style={{ transform: "scale(1.2)" }}
                  className="mr-05 text-cornBlue"
                />
                Belgrade, Resavska 8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { IntroComponent };
