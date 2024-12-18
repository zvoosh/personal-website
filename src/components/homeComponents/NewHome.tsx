import { Divider } from "antd";
import { CardComponent, EducationComponent, IntroComponent } from ".";
import { PersonalInformation, WorkExperiance } from "./person";
import { useEffect, useRef } from "react";
import createIntersectionObserver from "../../functions/observer";

const NewHome = ({ primaryColor }: { primaryColor: string }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleIntersect = (element: Element) => {
      element.classList.add("in-view");
    };
    const observer = createIntersectionObserver(handleIntersect);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
    if (certificateRef.current) {
      observer.observe(certificateRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
      if (certificateRef.current) {
        observer.unobserve(certificateRef.current);
      }
    };
  }, []);

  return (
    <div className="w-100 h-100 paper-background">
      <div className="scrollComponent">
        <div className="page-paddings">
          <div className="homeIntroPerson">
            <IntroComponent />
            <Divider />
            <div className="h-50 flex justify-center align-center personal-info-transition">
              <PersonalInformation />
            </div>
            <Divider />
          </div>
          <div
            ref={elementRef}
            className="flex justify-center align-center transition-element"
          >
            <WorkExperiance />
          </div>
          <CardComponent primaryColor={primaryColor} />
          <div ref={educationRef} className="transition-element">
            <EducationComponent />
          </div>
          <div ref={certificateRef}
            style={{
              background: "#d2b48c",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
          >
            <div className="w-100 h-100 p-2 flex justify-start">
              <div>
                <div
                  style={{ color: "black" }}
                  className="font-size-16 pt-3 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text"
                >
                  CERTIFICATES
                </div>
                <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1RyUHuNSFy9zbOc4DtYFRc7kd2jAtMzYm/view?usp=drive_link"
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      React - The Complete Guide 2023
                    </a>
                  </div>
                </div>
                <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1RoZ6kyRX-plMlY9GHXkLVKH0fXBd3vug/view?usp=drive_link"
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      REST APIs with Flask and Python in 2024
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewHome };
