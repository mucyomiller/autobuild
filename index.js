const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const PORT = process.env.PORT || 3000;

const app =  express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    return res.status(200).json({
        status: res.statusCode,
        message: 'API is up and running 👍'
    });
});
app.get('/checkbuild', (req, res) => {
    res.status(200).json({ 
        status: res.statusCode,
        message: 'Hola! review app is working well 👌'
    });
});

app.get('/checkenvs', (req, res) => {
    res.status(200).json({
        status: res.statusCode,
        message: process.env.CHECK_ENV
    });
});

app.get('/ping', (req, res) => {
    return res.status(200).json({
        status: res.statusCode,
        message: 'API is up and running 👍'
    });
});

app.listen(PORT, () => console.log(`web app is up and running 😎`));