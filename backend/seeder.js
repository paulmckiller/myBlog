import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import blogs from './data/blogs.js';
import Blog from './models/blogModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Blog.deleteMany();

        const createdBlogs = await Blog.insertMany(blogs);

        console.log('Data imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Blog.deleteMany();

        console.log('Data imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}
else{
    importData();
}