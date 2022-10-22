import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch(error => console.log(error))
  }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand><Link to ="/">Dragon News</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">All News</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className='d-flex align-items-center'>
                <>
                  {
                    user?.uid ? 
                    <>
                  {user?.displayName}
                  <Button variant="primary" onClick={handleLogOut} className='ms-2'>Log out</Button>
                    </>
                    :
                    <>
                    <Link to = '/login'>Login</Link>
                    <Link to = '/register'>Register</Link>

                    </>

                  }
                  </>
                <Nav.Link eventKey={2} href="#memes">
                  {
                    user?. photoURL?
                    <Image
                    style = {{height: '40px'}} roundedCircle src = {user?.photoURL}
                    ></Image>
                    :
                    <FaUser></FaUser>
                  }
                </Nav.Link>
              </Nav>
              <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };


export default Header;