import React from 'react'
import { motion } from 'framer-motion'
import '../styles/startup.css'
import { Col, Container, Row } from 'reactstrap'

import Microsoft from '../assets/images/microsoft.svg'
import Allianz from '../assets/images/allinz.svg'
import Upwork from '../assets/images/upwork.svg'
import Volvo from '../assets/images/volvo.svg'
import Grab from '../assets/images/grab.svg'
import Verizon from '../assets/images/verizon.svg'
import Coinbase from '../assets/images/coinbase.svg'
import Expedia from '../assets/images/expedia.svg'
import Airtable from '../assets/images/airtable.svg'
import Magento from '../assets/images/magento.svg'
import Carrera from '../assets/images/carrera.svg'
import Bonanza from '../assets/images/bonanza.svg'
import Wetransfer from '../assets/images/wetransfer.svg'
import Suzuki from '../assets/images/suzuki.svg'
import Algolia from '../assets/images/algolia.svg'
import Heineken from '../assets/images/heineken.svg'

const Startup = () => {
  return (
    <section className="startup_section">
        <Container>
          <Row>
            <Col lg='12'>
              <div className="startup_title">
                <h3>
                    Findtrend make +1000 Startup grow
                </h3>
              </div>
              <div className="logos">
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Microsoft} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Allianz} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Upwork} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Volvo} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Grab} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Verizon} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Coinbase} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Expedia} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Airtable} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Magento} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Carrera} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Bonanza} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Wetransfer} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Suzuki} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Algolia} alt='' />
                </motion.div>
                <motion.div  whileHover={{scale: 1.02}} className="logo_container">
                    <img src={Heineken} alt='' />
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Startup