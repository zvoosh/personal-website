import DusanIlicCV from "../../assets/DusanIlicCV.jpg";

const Intoduction = () => {
  return (
    <div className="w-100 height-80-vh">
      <div className="hi-image-cont">
        <div className="hi-cont">
          <div className="hi-text">Hi, I'm Dusan Ilic</div>
          <div className="text-gray">
            I'm a graduated Informatics student with 11 months of experience as
            a Junior Front-end Web Developer.
          </div>
        </div>
        <div>
          <img
            id="myImage"
            src={DusanIlicCV}
            className="scale-image"
            alt="Loaded content"
          />
        </div>
      </div>
    </div>
  );
};

export default Intoduction;
