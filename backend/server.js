import express from 'express';
import blogs from './data/blogs.js';
import bodyParser from 'body-parser'
const app = express();
const PORT = 5000;


app.listen(PORT,
    console.log('Server is up on ' + PORT)
)

app.get('/',  (req,res)=>
{
    res.json('Api is working')
})

app.get('/blogs', (req,res)=>{
    res.json(blogs);
});

app.get('/blogs/:id', (req,res)=>{
    const blog = blogs.filter(blog => blog.id === req.params.id);
    res.json(blog);
});