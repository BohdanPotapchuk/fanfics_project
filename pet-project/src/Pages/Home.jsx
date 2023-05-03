import React from 'react'
import { Badge, Container, Card, CardGroup, CardImg, Button, Col, Row, Image, ListGroup, ListGroupItem } from 'react-bootstrap'
import About from './Liberies'
import image from './../assets/image.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Liberies from './Liberies';

export default function Home() {

    return (
        <Container fluid>
            <Row className='p-2 m-2'>
                <Col sm={3}>

                    <Row className='px-3'>
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
                            <Card className="mt-4 border-0" bg="light">
                                <Row>
                                    <Col sm={5}>
                                        <Image
                                            variant="top"
                                            src={image}
                                            fluid={false}
                                        />
                                    </Col>
                                    <Col sm={7}>
                                        <Card.Body>
                                            <Card.Title>fanfics</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                                                esse cupiditate corrupti est eligendi
                                            </Card.Text>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <div>Author Author <span>01/01/2023</span></div>
                                                        <Button src={Liberies} variant="success">
                                                            About fanfics
                                                        </Button>
                                                        <Badge className='m-2' bg="secondary"><h6>Likes</h6></Badge>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                </Row>
                                            </Col>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-4 border-0" bg="light">
                                <Row>
                                    <Col sm={5}>
                                        <Image
                                            variant="top"
                                            src={image}
                                            fluid={false}
                                        />
                                    </Col>
                                    <Col sm={7}>
                                        <Card.Body>
                                            <Card.Title>fanfics</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                                                esse cupiditate corrupti est eligendi
                                            </Card.Text>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <div>Author Author <span>01/01/2023</span></div>
                                                        <Button src={About} variant="success">
                                                            About fanfics
                                                        </Button>
                                                        <Badge className='m-2' bg="secondary"><h6>Likes</h6></Badge>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                </Row>
                                            </Col>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-4 border-0" bg="light">
                                <Row>
                                    <Col sm={5}>
                                        <Image
                                            variant="top"
                                            src={image}
                                            fluid={false}
                                        />
                                    </Col>
                                    <Col sm={7}>
                                        <Card.Body>
                                            <Card.Title>fanfics</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Praesentium id quod, qui labore enim odit, dignissimos nesciunt
                                                esse cupiditate corrupti est eligendi
                                            </Card.Text>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <div>Author Author <span>01/01/2023</span></div>
                                                        <Button src={About} variant="success">
                                                            About fanfics
                                                        </Button>
                                                        <Badge className='m-2' bg="secondary"><h6>Likes</h6></Badge>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                </Row>
                                            </Col>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>

                    </CardGroup>
                </Col>
                <Col sm={3}>
                    <h2 className="text-center m-3">Other</h2>
                    <ListGroup className='pt-4'>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    )
}
