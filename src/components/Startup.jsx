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

    const startup_logos= [
        {imgUrl: Microsoft},
        {imgUrl: Allianz},
        {imgUrl: Upwork},
        {imgUrl: Volvo},
        {imgUrl: Grab},
        {imgUrl: Verizon},
        {imgUrl: Coinbase},
        {imgUrl: Expedia},
        {imgUrl: Airtable},
        {imgUrl: Magento},
        {imgUrl: Carrera},
        {imgUrl: Bonanza},
        {imgUrl: Wetransfer},
        {imgUrl: Suzuki},
        {imgUrl: Algolia},
        {imgUrl: Heineken},
    ]
    
  return (
    <section className="startup_section">
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="startup_title">
                        <h3>Findtrend make +1000 Startup grow</h3>
                    </div>
                    <div className="logos">
                    {
                        startup_logos.map((item, i) => (
                            <motion.button 
                                whileHover={{scale:1.05}}
                                className="logo_container"
                            >
                            <img src={item.imgUrl} alt=''/>
                            </motion.button>
                        ))
                    }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Startup