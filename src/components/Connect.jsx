import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/connect.css'
import { Container, Row, Col } from 'reactstrap'

import Tweet1 from '../assets/images/tweet 1.svg'
import Tweet2 from '../assets/images/tweet 2.svg'
import Tweet3 from '../assets/images/tweet 3.svg'
import SocialButtons from './SocialButtons'

const Connect = () => {

  return (
    <section className='connect'>
        <Container>
            <Row>
                <Col>
                    <h3>All Platform connect to Findtrend</h3>
                    <SocialButtons/>
                    <div className="tweets">
                        <img src={Tweet1} alt='' />
                        <img src={Tweet2} alt='' />
                        <img src={Tweet3} alt='' />
                    </div>
                    <div className="connect_button">
                        <Link to='/'>
                        <motion.button whileTap={{scale: 1.06}}>View More Trends</motion.button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Connect

