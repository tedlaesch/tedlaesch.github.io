import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Outlet, Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

import pfp from '../assets/me.jpg'

function Root() {
  return (
    <Container fluid className="vh-100 d-flex">
      <Row className='vw-100'>
        <Col className='bg-dark navsidebar vh-100'>
            <div className='profile'>
                <img src={pfp} alt='Ted Laesch' className='image-fluid rounded-circle'/>
                <h1 className='text-light'>Ted Laesch</h1>
            </div>

            <nav className='nav-menu navbar'>
                <ul>
                    <li><Link to={''}><Icon.ChevronRight color='white' size={24}/><span>Home</span></Link></li>
                    <li><Link to={'about'}><Icon.ChevronRight color='white' size={24}/><span>About</span></Link></li>
                    <li><Link to={'projects'}><Icon.ChevronRight color='white' size={24}/><span>Projects</span></Link></li>
                </ul>
            </nav>
        </Col>
        <Col className='contentspace'>
            <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Root;
