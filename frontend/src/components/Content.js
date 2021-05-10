import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Content = ({ blog }) => {
    return (
        <Card className="border-0">
            <Card.Body>
                <Link to={`/blog/${blog.id}`} className="text-decoration-none cursor-pointer">
                    <Card.Title>{blog.title}</Card.Title>
                </Link>
                <Card.Text className="text-left">{blog.content.substring(0, 200) + "..."}</Card.Text>
                <Card.Footer className="text-muted text-right"> -{blog.author}</Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Content
