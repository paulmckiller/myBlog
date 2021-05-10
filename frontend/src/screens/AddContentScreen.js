import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddContentScreen = () => {

    const handleSubmit = (e) => {
        console.log(e.target.title.value);
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: e.target.title.value, content: e.target.content.value, author: e.target.author.value})
        }

        fetch('/blogs/add', requestOptions)
        .then(res => res.json()).then(() => alert('success'))
        .catch(err => console.log(err));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>New Blog</h2>
            <Form.Group className="pt-3" controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title..." required autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="blogContent">
                <Form.Label>Blog</Form.Label>
                <Form.Control as="textarea" name="content" rows={5} placeholder="Enter your content..." required autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="author">
                <Form.Label >Author</Form.Label>
                <Form.Control type="text" name="author" placeholder="Enter author..." required autoComplete="off" />
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
        </Form>
    )
}

export default AddContentScreen
