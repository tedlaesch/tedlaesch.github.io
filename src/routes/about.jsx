import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons'

function About() {
    return (
        <Container fluid className="vh-100 d-flex">
            <Row>
                <Col className='aboutstyle my-5 mx-5'>
                    <h2 className='text-dark'>About</h2>
                    <hr></hr>
                    <p className='text-muted'>I am a 5<sup>th</sup> year full time student at UMSL in the Computer Science program.
                    I enjoy programming, hiking, studying language, and GMing tabletop games. I love long coding sessions and seeing
                    the final product come together when everything is finished. I got into full-stack development about a year ago
                    and it has quickly become one of my favorite types of projects. I especially love working with Bootstrap, which is
                    what this website is built on!</p>
                    <Row>
                        <Col>
                            <ul className='aboutlist'>
                                <li><Icon.ChevronRight className='abouticon align-text-bottom' color='dark' size={24}/><strong>Degree:</strong> <span>Computer Science</span></li>
                                <li><Icon.ChevronRight className='abouticon align-text-bottom' color='dark' size={24}/><strong>Skills:</strong> <span>Full-Stack, Unix, Agile, LaTeX</span></li>
                                <li><Icon.ChevronRight className='abouticon align-text-bottom' color='dark' size={24}/><strong>Email:</strong> <span>tjl3hy@umsystem.edu</span></li>
                                <li><Icon.ChevronRight className='abouticon align-text-bottom' color='dark' size={24}/><strong>Linkedin:</strong> <a href='https://www.linkedin.com/in/theodore-laesch-9845821b6/'>Ted Laesch</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default About;