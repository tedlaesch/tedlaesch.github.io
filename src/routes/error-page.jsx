import { useRouteError } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/stylish.css';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container fluid id="error-page" className="vhw-100 d-flex">
            <Row className="my-auto mx-auto">
                <Col className="text-center">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;