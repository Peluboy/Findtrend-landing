import React, { useState } from 'react'
import '../styles/bestDeals.css'
import { Col, Container, Row } from 'reactstrap'

import Deals from '../../src/assets/images/arrow-4.svg'


const BestDeals = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className='deals'>
        <Container>
            <Row>
                <Col>
                    <div className="best_deals">
                        <h3>Get your best Deals</h3>
                        <div className="monthly-yearly">
                            <h5>Monthly</h5>
                            <div className="theme-toggle">
                                <label class="switch">
                                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <h5>Yearly</h5>
                            <img src={Deals} alt='' />
                        </div>
                        <div className="subscriptions">
                            <div className="personal">
                                <h4>Personal</h4>
                                <p>Special first package for all</p>
                                <span className="divider"></span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default BestDeals
