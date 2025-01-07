import { FaCircle } from "react-icons/fa";

const Knowledge = () => {
    return (
        
        <div style={{ width: "100vw", height: "50vh" }}>
        <div className="flex justify-center mb-5">
          <div style={{ textAlign: "center" }}>
            <div
              className="m-1 mt-2"
              style={{ fontSize: "1.4rem", fontWeight: "bold" }}
            >
              Knowledge
            </div>
            <div className="text-gray">Skill ranking</div>
          </div>
        </div>
        <div className="w-100 flex justify-center">
          <div className="grade-cont">
            <div className="flex justify-between m-1">
              <div>React</div>
              <div>
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
              </div>
            </div>
            <div className="flex justify-between m-1">
              <div>Node.js</div>
              <div>
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
              </div>
            </div>
            <div className="flex justify-between m-1">
              <div>Flask</div>
              <div>
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
              </div>
            </div>
            <div className="flex justify-between m-1">
              <div>Angular</div>
              <div>
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
              </div>
            </div>
            <div className="flex justify-between m-1">
              <div>Vue</div>
              <div>
                <FaCircle
                  style={{ color: "yellowgreen", marginRight: ".2rem" }}
                />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
                <FaCircle style={{ marginRight: ".2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Knowledge;