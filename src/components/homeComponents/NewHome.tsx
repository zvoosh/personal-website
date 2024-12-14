import { Divider } from "antd";
import { CardComponent, EducationComponent, IntroComponent } from ".";
import { PersonalInformation, WorkExperiance } from "./person";
import { useEffect, useRef } from "react";
import createIntersectionObserver from "../../functions/observer";

const NewHome = ({ primaryColor }: { primaryColor: string }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
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
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-100 h-100 bg-white">
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
        </div>
      </div>
    </div>
  );
};

export { NewHome };
