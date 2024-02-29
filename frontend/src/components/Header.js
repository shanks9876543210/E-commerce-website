import React from 'react'
import {Container,Nav,Navbar,Row,Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
function Header({size}) {
  const items=useSelector((state)=>state.cart)
  return (
    <div>
        <Navbar  bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >Wholesale</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link><i className='fas fa-home'> </i> Home</Nav.Link>

            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link> <i className='fas fa-shopping-cart'><sup><span style={{color:'orange'}}>{items.length}</span> </sup></i> Cart </Nav.Link>
              
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link > <i className='fas fa-user'> </i> Login</Nav.Link>
              
            </LinkContainer>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header