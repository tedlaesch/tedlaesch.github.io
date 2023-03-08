import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import MapExample from '../assets/mapexample.png';
import CompilerExample from '../assets/compiler.jpg';

function Projects() {
    return (
        <Container fluid className="vh-100 d-flex">
            <Row>
                <Col className='aboutstyle my-5 mx-5'>
                    <h2 className='text-dark'>Projects</h2>
                    <hr></hr>
                    <p className='text-muted'>A selection of what I've worked on, both in the past and presently.</p>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={MapExample} />
                            <Card.Body>
                                <Card.Title className='cardtexttitle'>We are STL - Map Project</Card.Title>
                                <Card.Text>
                                    An interactive map allowing visitors to place a pin, some text, and an optional image at a location in the St. Louis area and read other visitors' posts. Check it out <a href='https://mappingstl.org/map/map.php'>here.</a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">October 2022</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={CompilerExample} />
                            <Card.Body>
                                <Card.Title className='cardtexttitle'>Custom Compiler Project</Card.Title>
                                <Card.Text>
                                    An ongoing project with the goal of constructing a full compiler for a small programming language.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">January 2023</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <br></br>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;