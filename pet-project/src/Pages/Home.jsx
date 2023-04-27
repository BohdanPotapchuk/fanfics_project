import React from 'react'
import { Badge, Container, Card, CardGroup, CardImg, Button, Col, Row, Image } from 'react-bootstrap'
import About from './Liberies'
import image from './../assets/image.png'


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <Container>
            <Row >
                <Col sm={3}>

                    <Row>
                        <h2 className="text-center m-3">Categories</h2>
                        <Button variant="warning" style={{ height: '40px', marginTop: '25px', marginBottom: '10px' }}>
                            First
                        </Button>
                        <Button variant="warning" style={{ height: '40px', marginTop: '10px', marginBottom: '10px' }}>
                            Second
                        </Button>
                        <Button variant="warning" style={{ height: '40px', marginTop: '10px', marginBottom: '10px' }}>
                            Thirth
                        </Button>
                        <Button variant="warning" style={{ height: '40px', marginTop: '10px', marginBottom: '10px' }}>
                            Fourth
                        </Button>
                        <Button variant="warning" style={{ height: '40px', marginTop: '10px', marginBottom: '10px' }}>
                            Fifth
                        </Button>
                        <Button variant="warning" style={{ height: '40px', marginTop: '10px', marginBottom: '10px' }}>
                            Sixth
                        </Button>
                    </Row>
                </Col>
                <Col sm={6}>
                    <h2 className="text-center m-3">New fanfics</h2>
                    <CardGroup>
                        <Row>
                            <Card className="m-4 border-0" bg="light">
                                <Row>
                                    <Col>
                                        <Image
                                            variant="top"
                                            src={image}
                                            fluid={false}
                                        />
                                    </Col>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title>fanfics</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                                                esse cupiditate corrupti est eligendi
                                            </Card.Text>
                                            <Col>
                                                <Button src={About} variant="success">
                                                    About fanfics
                                                </Button>
                                                <Badge className='m-2' bg="secondary"><h6>Likes</h6></Badge>
                                            </Col>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="m-4 border-0" bg="light">
                                <Row>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title>fanfics</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                                                esse cupiditate corrupti est eligendi
                                            </Card.Text>
                                            <Col>
                                                <Button src={About} variant="success">
                                                    About fanfics
                                                </Button>
                                                <Badge className='m-2' bg="secondary"><h6>Likes</h6></Badge>
                                            </Col>
                                        </Card.Body>
                                    </Col>
                                    <Col>
                                        <Image
                                            variant="top"
                                            src={image}
                                            fluid={false}
                                        />
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="m-4 border-0" bg="light">
                                <Row>
                                    <Col>
                                        <Image
                                            variant="top"
                                            src={image}
                                            fluid={false}
                                        />
                                    </Col>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title>fanfics</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                                                esse cupiditate corrupti est eligendi
                                            </Card.Text>
                                            <Col>
                                                <Button src={About} variant="success">
                                                    About fanfics
                                                </Button>
                                                <Badge className='m-2' bg="secondary"><h6>Likes</h6></Badge>
                                            </Col>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>

                    </CardGroup>
                </Col>
                <Col sm={2}>
                </Col>
            </Row>

        </Container>
    )
}
