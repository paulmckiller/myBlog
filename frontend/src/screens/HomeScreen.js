import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import axios from 'axios';

const HomeScreen = () => {
    const [blogs, setBlogs] = useState([
    ]);

    useEffect(() => {
        //axios.get('/blogs').then(({data}) => setBlogs(data)).catch((err)=>console.log(err));
        fetch('/blogs', {
            method: 'GET'
          })
          .then(res => res.json()).then(data => setBlogs(data)).catch(err=>console.log(err));
    }, [])
    return (
        <div>
            <Row className="py-2">
                <Col>
                    <h2>Content</h2>
                </Col>
            </Row>
            <Row>
                {blogs && blogs.map(blog => (
                    <Col className="py-3" key={blog.id} sm={12} md={6} lg={4} xl={4}>
                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.content.substring(0, 200) + "..."}</Card.Text>
                                <Card.Footer className="text-muted text-right"> -{blog.author}</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
