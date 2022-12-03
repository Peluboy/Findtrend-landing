import React from 'react'
import './footer.css'
import { Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

import FooterLogo from '../../assets/images/logo-black.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
          <div className="footer_bottom">
          <div className="footer_logo">
              <img src={FooterLogo} alt='logo' />
          </div>
          <div className="footer_links">
            <ul>
              <Link to='#'>
                <li> Privacy Policy</li>
              </Link>
              <Link to='#'>
                <li> Terms and Conditions</li>
              </Link>
              <Link to='#'>
                <li>Career</li>
              </Link>
              <Link to='#'>
                <li> Contact us</li>
              </Link>
            </ul>
          </div>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer