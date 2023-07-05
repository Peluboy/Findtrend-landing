import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";

import Research from "../../src/assets/images/arrow-1.svg";
import Twitter from "../../src/assets/images/twitter.svg";
import Pinterest from "../../src/assets/images/pinterest.svg";
import Facebook from "../../src/assets/images/facebook.svg";
import Dribble from "../../src/assets/images/dribble.svg";

import Solutions from "../../src/assets/images/arrow-2.svg";
import Need from "../../src/assets/images/arrow-3.svg";
import Elon from "../../src/assets/images/elon.svg";
import Startup from "../components/Startup";
import Connect from "../components/Connect";
import BestDeals from "../components/BestDeals";

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col>
              <div className="hero_content">
                <h2 className="hero_heading">
                  Minimize the tabs.
                  <br />
                  Find the trend!
                </h2>
                <p className="hero_paragraph">
                  Don't let your computer memory consume all of those browser
                  tabs. Findtrend let you gather all of your favourite websites
                  into one place.
                </p>
                <div className="hero_button">
                  <Link to="/register">
                    <motion.button
                      whileTap={{ scale: 1.1 }}
                      className="get_started"
                    >
                      Get Started 🔥
                    </motion.button>
                  </Link>
                  <img src={Research} alt="" />
                </div>

                <div className="hero_img">
                  <div className="hero_images">
                    <motion.img
                      src={Twitter}
                      alt="twitter"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.img
                      src={Pinterest}
                      alt="pinterest"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.img
                      src={Facebook}
                      alt="facebook"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.img
                      src={Dribble}
                      alt="dribble"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="newTab_section">
        <Container>
          <Row>
            <Col lg="12" md="6">
              <div className="newtab">
                <h2>Open new tabs is sh*t</h2>
                <div className="elon">
                  <img src={Solutions} alt="" />
                  <span>
                    <img src={Elon} alt="" />
                  </span>
                  <img src={Need} alt="" />
                </div>
                <p>
                  A solution for your browser tabs and don't make your device
                  get slower over time. Get ease and faster to discover a trend
                  with just one tab.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="findTrend_section">
        <Container>
          <Row>
            <Col lg="12" md="6">
              <h3 className="findTrend">
                Findtrend helps you to increase your productivity and reduce
                your computer's memory load,
                <span className="typing">
                  {" "}
                  an application that can fulfill your daily browsing needs.
                </span>
              </h3>
            </Col>
          </Row>
        </Container>
      </section>

      <Startup />

      <Connect />

      <BestDeals />

      <section className="join_email">
        <Container>
          <Row>
            <Col lg="12" md="6">
              <h3 className="join">
                Join us on email for<span> more trending topics</span>
              </h3>
              <Link to="/register">
                <motion.button whileTap={{ scale: 1.1 }} className="join_now">
                  Join Now
                </motion.button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
