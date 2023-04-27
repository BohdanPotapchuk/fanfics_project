import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container
            className="bg-secondary "
            fluid

        >
            <Row className='m-4'>
                <Col>
                    All right reserved
                </Col>
                <Col >
                    Some information
                </Col>
            </Row>
        </Container>
    )
}
