import React from "react";
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./App.css";
import {
  Button,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Row,
} from "reactstrap";
import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";
import img3 from "./images/img3.svg";
import img4 from "./images/img4.svg";
import img5 from "./images/img5.svg";
import ESlogoCircleWN from "./images/ESlogoCircleWN.svg";
import StudentHome from "./StudentHome";
import {useState } from "react";
// import { SignInWithGoogle } from "./Firebase";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import ProffesorHome from "./ProffesorHome";
import "firebase/auth";

const items = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
];

const googleicon = {
  src: require("./images/white-google-logo.png"),
};

function App() {
  const [email_id, setEmail] = useState("");
  const [data, setData] = useState("");

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      setEmail(email);

      const response = await fetch(
        "https://electiveselector.onrender.com/profVerify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail: email }),
        }
      );
      const ans = await response.json();
      setData(ans.message);
      
      console.log(ans.message);
      // console.log(res);
    } catch (error) {
      console.error(error);
      setData("An Error has occured!");
    }
  };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const mail = email_id;

  return (
    <div className="homebody">
      {data && data === "prof" ? (
        <ProffesorHome emailid={mail} />
      ) : data && data === "student" ? (
        <StudentHome style={{position: "relative", top: "10rem"}} emailid={mail} />
      ) : (
        <div>
          <img className="headingLogo" src={ESlogoCircleWN} alt=""></img>
          <Container>
            <Row className="py-4">
              <Col md={7} className="py-5">
                <h1 style={{ textAlign: "justify", fontWeight: "700" }}>
                  Welcome!!
                </h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  quas consequatur molestiae? Reprehenderit, obcaecati minima
                  dolore perspiciatis aliquid temporibus quae fugiat
                  praesentium! Debitis iste suscipit harum iure perspiciatis
                  temporibus veniam. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Nisi quas consequatur molestiae?
                  Reprehenderit, obcaecati minima dolore perspiciatis aliquid
                  temporibus quae fugiat praesentium! Debitis iste suscipit
                  harum iure perspiciatis temporibus veniam.
                </p>
              </Col>

              <Col md={5}>
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          height="340px"
                          width="510px"
                          className="p-5"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-left" />
                  </a>
                  <a 
                    className="carousel-control-next"
                    data-slide="next"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-right" />
                  </a>
                </Carousel>
              </Col>
            </Row>
          </Container>
          <Button className="btn btn-lg btn-primary" onClick={handleClick}>
            <img src={googleicon.src} alt="" className="icon"></img>
            <span>Continue with Google</span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;