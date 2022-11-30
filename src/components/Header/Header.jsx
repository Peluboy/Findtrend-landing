import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import Logo from '../../assets/images/Logo.svg'
import { Container, Row } from 'reactstrap'

const nav_links = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'about',
    display:'About'
  },
  {
    path:'features',
    display:'Features'
  },
  {
    path:'pricing',
    display:'Pricing'
  },
  {
    path:'solutions',
    display:'Solutions'
  },
  {
    path:'contact',
    display:'Contact'
  },
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={Logo} alt='logo' />
            </div>

            <div className="navigation"> 
              <ul className="menu">

                {
                  nav_links.map(item =>(
                    <li className='nav_items'>
                      <NavLink to={item.path}>{item.display}</NavLink>
                    </li>
                  ))
                }

              </ul>
            </div>

            <div className="loginRegister">
              <div className="login">
                <ul>
                  <li className="nav_items">
                    <NavLink to='login'>Login</NavLink>
                  </li>
                  <li className="nav_items">
                    <NavLink to='register'>
                      <button>Register</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="mobile_menu">
                <span>
                  <i class='ri-menu-line'></i>
                </span>
              </div>
              
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header