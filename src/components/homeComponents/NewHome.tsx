import { Divider } from "antd";
import { CardComponent, EducationComponent, IntroComponent } from ".";
import { PersonalInformation, WorkExperiance } from "./person";
import { useEffect, useRef } from "react";
import createIntersectionObserver from "../../functions/observer";

const NewHome = ({ primaryColor }: { primaryColor: string }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleIntersect = (element: Element) => {
      element.classList.add("in-view");
    };
    const observer = createIntersectionObserver(handleIntersect);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
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
          {/* <div className="flex w-100 h-100 pt-2 pb-2 justify-center">
            <div className="w-100 p-2 flex flex-column  justify-center padding-0"> */}
          {/* </div>
          </div> */}
          <CardComponent primaryColor={primaryColor} />
          <EducationComponent />
        </div>
      </div>
    </div>
  );
};

export { NewHome };
