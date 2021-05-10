import express from 'express';
import blogs from './data/blogs.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import Blog from './models/blogModel.js';


const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(
        `Server is up in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
    )
);

app.get('/', (req, res) => {
    res.json('Api is working')
})

app.get('/blogs', (req, res) => {

    Blog.find({}, (err,docs) => {
        if(!err) {
            res.json(docs);
        }
        else {
            res.status(500).json({msg: 'System error'});
            console.log(err);
        }
    })
});

app.get('/blogs/:id', (req, res) => {
    
    Blog.findById(req.params.id, (err,doc) =>{
        if(!err){
            res.json(doc)
        }
        else{
            res.status(404).json({'msg':'Blog cannot found'})
        }
    })
});