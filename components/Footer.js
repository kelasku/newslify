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
Item,
Container,
Row,
Col,
fluid
} from 'react-bootstrap'
import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <React.Fragment>
       <Container fluid className="footer text-center" sticky="bottom">
          <Row>
              <Col sm={12}>
                <Row>
                  <Col className="social-box" sm={12}>
                            <a className="social" href="https://facebook.com/newslifyng">
                            <span>facebook  </span>
                            </a>
                            <a className="social" href="https://instagram.com/newslifyng">
                            <span>   Instagram</span> 
                            </a>
                            <a className="social" href="https://twitter.com/newslifyng">
                            <span>  twitter</span> 
                            </a>
                  </Col>
                  <Col sm={12}>  
                    <hr className="copy"/>
                    <div>
                    &copy;{new Date().getFullYear()} All Right Reserved. Newslify Media.
                    </div>
                  </Col>
                </Row>
              </Col>
          </Row>
       </Container>
    </React.Fragment>

  )
}


export default Footer