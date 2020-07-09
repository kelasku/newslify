import { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { signout, isAuth } from '../actions/auth';
import{
Navbar,
Nav,
NavDropdown,
Link,
Collapse,
Brand,
Item
} from 'react-bootstrap'
import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <React.Fragment>

      <Navbar id="navb" sticky="top" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
        <img
            className="img img-fluid"
            style={{ maxHeight: '80px', width: '45px' }}
            src='/static/images/shadow.png'
            alt='Newslify.ng'
        />
        </Navbar.Brand>
        <Navbar.Brand href="/">
        <img
            className="img img-fluid"
            style={{ maxHeight: '20px', width: '150px' }}
            src='/static/images/newslify.png'
            alt='Newslify.ng'
        />
        </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link className="text-light" href="blogs"><strong>news</strong></Nav.Link>
            <Nav.Link className="text-light"  href="contact"><strong>contact</strong></Nav.Link>
            {!isAuth() && (
              <React.Fragment>
               <Nav.Link  className="text-light" href="signin"><strong>signin</strong></Nav.Link>
               <Nav.Link  className="text-light" href="signup"><strong>signup</strong></Nav.Link>
              </React.Fragment>
            )}
             {isAuth() && isAuth().role === 0 && (
                <Nav.Link className="text-light" href="/user"><strong>{`${isAuth().name}'s Dashboard`}</strong></Nav.Link>
            )}
             {isAuth() && isAuth().role === 1 && (
              <Nav.Link className="text-light" href="/admin"><srtong>{`${isAuth().name}'s Dashboard`}</srtong></Nav.Link>
            )}
            {isAuth() && (
              <Nav.Link className="text-light" style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
               <strong>Signout</strong>
              </Nav.Link>
            )}
            <Nav.Link className="btn btn-light text-dark" eventKey={2} href="/user/crud/blog">
              <strong>Write a Blog</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Search/>
    </React.Fragment>

  )
}


export default Header