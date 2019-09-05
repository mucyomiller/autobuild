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
app.get('/ping', (req, res) => {
    return res.status(200).json({
        status: res.statusCode,
        message: 'API is up and running 👍'
    });
});

app.listen(PORT, () => console.log(`web app is up and running 😎`));