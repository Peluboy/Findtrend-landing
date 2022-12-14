import React, { useRef, useEffect } from 'react'
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

  

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop
        > 80){
          headerRef.current.classList.add('sticky_header')
        } else{
          headerRef.current.classList.remove('sticky_header')
        }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={Logo} alt='logo' />
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}> 
              <ul className="menu">

                {
                  nav_links.map(item =>(
                    <li className='nav_items' active>
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
                <span onClick={menuToggle}>
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