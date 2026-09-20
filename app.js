const express = require('express');
const pool = require('./db');

const PORT = 3000;

const app = express();

app.use(express.json())

app.listen(PORT, () => {
    console.log('Welcome to the server Null Vector');
})