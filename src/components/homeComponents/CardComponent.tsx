import { useEffect, useRef, useState } from "react";
import { Card, Col, Divider, Row } from "antd";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { all } from "../../data/cardsData";

const generateCircles = () => {
  return Array.from({ length: 20 }, (_, i) => {
    const size = Math.floor(Math.random() * 20) + 10;
    const positionX = Math.floor(Math.random() * 100);
    const positionY = Math.floor(Math.random() * 100);
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
          marginTop: "-2rem",
          opacity: ".3",
          position: "absolute",
        }}
      ></div>
    );
  });
};

const CardComponent = ({ primaryColor }: { primaryColor: string }) => {
  const array = [0, 1, 2];
  const [isIndex, setIsIndex] = useState<number>(0);
  const [circles, setCircles] = useState(generateCircles());
  const [fade, setFade] = useState(false);
  const topDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fade) {
      const timeoutId = setTimeout(() => {
        setFade(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isIndex, fade]);

  const scrollToTop = () => {
    if (topDivRef.current) {
      topDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles(generateCircles());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ zIndex: "5" }}>
      <Divider />
      <div className="font-size-17 pt-2 w-100 text-align-center ">SKILLS</div>
      <div>
        <div
          className="circle-container"
          style={{ zIndex: "3", width: "100%", height: "100px" }}
        >
          {circles}
        </div>
        <Row
          gutter={16}
          className="mt-1 pb-2 flex justify-around p-2 tablet-flex"
        >
          <div className="flex align-center disable">
            <span
              className="card-arrow"
              style={{
                borderRadius: "20%",
                marginRight: "2rem",
                padding: ".4rem",
                border: "1px solid gray",
                transform: "scale(1.5)",
              }}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setIsIndex((prev: number): number => {
                    if (prev === 0) {
                      return array.length - 1;
                    } else if (prev > 0) {
                      return prev - 1;
                    } else {
                      return prev;
                    }
                  });
                }, 500);
              }}
            >
              <FaChevronLeft className="flex" />
            </span>
          </div>
          <div
            className={`fade card-flex ${fade ? "fade-out" : "fade-in"}`}
            ref={topDivRef}
          >
            {all.map((item) => {
              return (
                <>
                  <Col className="w-100 card-margin-2">
                    <Card
                      title={item[isIndex].title}
                      style={{
                        boxShadow: "0px 0px 10px gray",
                        userSelect: "none",
                        height: "500px",
                        overflow: "hidden",
                      }}
                      headStyle={{
                        backgroundColor: primaryColor,
                        color: "white",
                        width: "100%",
                      }}
                      bodyStyle={{
                        padding: "2rem",
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        overflowY: "auto",
                        userSelect: "all",
                      }}
                    >
                      {item[isIndex].favicon}
                      <div style={{ zIndex: 2, position: "relative" }}>
                        {item[isIndex].text}
                      </div>
                    </Card>
                  </Col>
                </>
              );
            })}
          </div>
          <div className="flex align-center justify-center mt-2 w-100 big-screen-disable">
            <div className="flex align-center justify-between w-50 big-screen-disable">
              <span
                className="card-arrow"
                style={{
                  borderRadius: "20%",
                  padding: ".4rem",
                  border: "1px solid gray",
                  transform: "scale(1.5)",
                }}
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setIsIndex((prev: number): number => {
                      if (prev === 0) {
                        return array.length - 1;
                      } else if (prev > 0) {
                        return prev - 1;
                      } else {
                        return prev;
                      }
                    });
                  }, 500);
                }}
              >
                <FaChevronLeft className="flex" />
              </span>
            </div>
            <div className="flex align-center big-screen-disable">
              <span
                style={{
                  borderRadius: "20%",
                  padding: ".4rem",
                  border: "1px solid gray",
                  transform: "scale(1.5)",
                }}
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setIsIndex((prev: number) => {
                      if (prev === array.length - 1) {
                        scrollToTop();
                        return 0;
                      }
                      scrollToTop();
                      return prev + 1;
                    });
                  }, 500);
                }}
              >
                <FaChevronRight className="flex" />
              </span>
            </div>
          </div>
          <div className="flex align-center disable ">
            <span
              style={{
                borderRadius: "20%",
                padding: ".4rem",
                marginLeft: "2rem",
                border: "1px solid gray",
                transform: "scale(1.5)",
              }}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setIsIndex((prev: number) => {
                    if (prev === array.length - 1) {
                      return 0;
                    }
                    return prev + 1;
                  });
                }, 500);
              }}
            >
              <FaChevronRight className="flex" />
            </span>
          </div>
        </Row>
      </div>
      <Divider />
    </div>
  );
};

export { CardComponent };
