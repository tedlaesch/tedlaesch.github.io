import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bgImage from '../assets/calibg.jpg';

var bgStyle = {
    backgroundImage: `url(${bgImage})`
}

function Home() {
    return (
        <Container fluid className="vh-100 d-flex bgcont" style={bgStyle}>
            <Row className="my-5 mx-auto">
                <Col className="text-center homestyle">
                    <h1 className='text-light'>Ted Laesch</h1>
                    <p>CS Student</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;