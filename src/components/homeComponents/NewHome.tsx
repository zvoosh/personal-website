import {CardComponent, EducationComponent, IntroComponent, PersonComponent} from '.';

const NewHome = ({primaryColor}:{primaryColor: string}) => {
  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <div className='page-paddings' >
        <IntroComponent />
        <PersonComponent />
        <CardComponent primaryColor={primaryColor}/>
        <EducationComponent/>
        </div>
      </div>
    </div>
  );
};

export { NewHome };
