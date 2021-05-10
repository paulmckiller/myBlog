import React from 'react'
import { Jumbotron, Button, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContentScreen = () => {
    const [blog, setBlog] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`/blogs/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.log(err));
        //axios.get(`/blogs/${id}`).then(({data}) => setBlog(data)).catch(err => console.log(err))
        console.log(blog);
    }, [])

    return (
        <Jumbotron className="py-3" key={blog._id}>
            <Nav className="justify-content-end py-0"><Nav.Item><Button variant="primary">Edit</Button></Nav.Item></Nav>
            <h1 className="pt-0">{blog.title}</h1>
            <p className="text-left">{blog.content}</p>
            <Nav className="justify-content-end py-0"><Nav.Item className="text-muted" >-{blog.author}  </Nav.Item></Nav>
        </Jumbotron>
    )
}

export default ContentScreen
