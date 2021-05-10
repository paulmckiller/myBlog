import React from 'react'
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Content = ({ blog }) => {

    const handleDelete = (e) => {
        console.log(e);
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        }
        fetch(`/blogs/delete/${e}`, requestOptions).then(res => res.json()).catch(err => console.log(err));
        window.location.reload();
    }

    return (
        <Card className="border-0">
            <Dropdown className="py-my-0 h-25 text-right">
                <Dropdown.Toggle variant="flushed" id="dropdown-basic"></Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-2">Add to favorites</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(blog._id)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Link to={`/blog/${blog._id}`} className="text-decoration-none cursor-pointer">
                <Card.Title>{blog.title}</Card.Title>
            </Link>
            <Card.Body>
                <Card.Text className="text-left">{blog.content.substring(0, 200) + "..."}</Card.Text>
                <Card.Footer className="text-muted text-right"> -{blog.author}</Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Content
