import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddContentScreen = () => {
    return (
        <Form >
            <h2>New Blog</h2>
            <Form.Group className="pt-3" controlId="formBasicEmail">
                <Form.Label >Title</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Blog</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddContentScreen
