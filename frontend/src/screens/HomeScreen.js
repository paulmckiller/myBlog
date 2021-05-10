import React, { useState, useEffect } from 'react'
import { Col, Row, Dropdown } from 'react-bootstrap'
import axios from 'axios';
import Content from '../components/Content';

const HomeScreen = () => {
    const [blogs, setBlogs] = useState([]);
    
   

    useEffect(() => {
        //axios.get('/blogs').then(({data}) => setBlogs(data)).catch((err)=>console.log(err));
        fetch('/blogs', { method: 'GET' })
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err));
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
                    <Col className="py-3" key={blog._id} sm={12} md={6} lg={4} xl={4}>
                        <Content blog={blog} />
                        
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
