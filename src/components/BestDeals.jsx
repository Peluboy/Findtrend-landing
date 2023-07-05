import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/bestDeals.css";
import { Col, Container, Row } from "reactstrap";

import Deals from "../../src/assets/images/arrow-4.svg";

const BestDeals = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="deals">
      <Container>
        <Row>
          <Col>
            <div className="best_deals">
              <h3>Get your best Deals</h3>
              <div className="monthly-yearly">
                <h5>Monthly</h5>
                <div className="theme-toggle">
                  <label class="switch">
                    <input
                      type="checkbox"
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
                <h5>Yearly</h5>
                <img src={Deals} alt="" style={{ right: -110, top: -15 }} />
              </div>
              <div className="subscriptions">
                <motion.div className="personal" whileHover={{ scale: 1.03 }}>
                  <div>
                    <h4>Personal</h4>
                    <p>Special first package for all</p>
                    <hr />
                    <div className="amt_monthly">
                      <h4>$8</h4>
                      <p>/ Month</p>
                    </div>
                    <div className="bullet_points">
                      <ul>
                        <li>Up to 5 page each group</li>
                        <li>Up to 10 group pages</li>
                        <li>5 Days group page saved</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Link to="/register">
                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="free_trial"
                      >
                        Start Free Trial
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
                <motion.div className="regular" whileHover={{ scale: 1.03 }}>
                  <div>
                    <h4>Regular</h4>
                    <p>Recommended for personal pro</p>
                    <hr />
                    <div className="amt_monthly">
                      <h4>$20</h4>
                      <p>/ Month</p>
                    </div>
                    <div className="bullet_points">
                      <ul>
                        <li>Up to 15 pages each group</li>
                        <li>Download up to 20 pages</li>
                        <li>Up to 10 group pages</li>
                        <li>15 Days group pages saved</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Link to="/register">
                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="free_trial"
                      >
                        Start Free Trial
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
                <motion.div className="premium" whileHover={{ scale: 1.03 }}>
                  <div>
                    <h4>Premium</h4>
                    <p>Packet of Startup & Company</p>
                    <hr />
                    <div className="amt_monthly">
                      <h4>$48</h4>
                      <p>/ Month</p>
                    </div>
                    <div className="bullet_points">
                      <ul>
                        <li>Unlimited group pages</li>
                        <li>Unlimited download pages</li>
                        <li>Unlimited pages in each group</li>
                        <li>Customize sorting group pages</li>
                        <li>Customize group page name</li>
                        <li>30 Days group pages saved</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Link to="/register">
                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="free_trial"
                      >
                        Start Free Trial
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestDeals;
