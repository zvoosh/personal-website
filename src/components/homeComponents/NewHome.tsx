import {CardComponent, EducationComponent, IntroComponent, PersonComponent} from '.';

const NewHome = () => {
  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <div style={{paddingRight: "8rem", paddingLeft:"8rem"}}>
        <IntroComponent />
        <PersonComponent />
        <CardComponent />
        <EducationComponent/>
        </div>
      </div>
    </div>
  );
};

export { NewHome };
