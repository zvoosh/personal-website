import { CardComponent } from "./CardComponent";
import { PersonComponent } from "./PersonComponent";

const NewHome = () => {
  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <PersonComponent />
        <CardComponent />
        <div>
          <div className="font-size-17 w-100 text-align-center">EDUCATION</div>
        </div>
      </div>
    </div>
  );
};

export { NewHome };
