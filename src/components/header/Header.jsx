import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar className='navbar-wrapper'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Race Cars Commerce</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default Header