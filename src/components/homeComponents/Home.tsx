import Intoduction from "./Introduction";
import Experience from "./Experience";
import Knowledge from "./Knowledge";

const Home = () => {
  return (
    <div className="w-100 h-100 bg-white">
      <div className="scrollComponent">
        <section about="intro">
          <Intoduction />
        </section>

        <section about="work">
          <Experience />
        </section>

        <section about="knowledge">
          <Knowledge />
        </section>
      </div>
    </div>
  );
};

export default Home;
