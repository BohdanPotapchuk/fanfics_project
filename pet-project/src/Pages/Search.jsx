import React from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'

export default function Search() {
    return (
        <>
            <Row className='m-3'>
                <Col sm={6}>
                    <Form inline className="m-2">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-sm-2"
                        />
                    </Form>
                </Col>
                <Col sm={2}>
                    <Button className='mt-2' variant="outline-warning">Search</Button>
                </Col>
            </Row>
        </>
    )
}
