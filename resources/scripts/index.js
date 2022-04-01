//logic to communicate with frontend HTML form to PostgresSQL database

const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express(); 
const port = process.env.PORT || 8080; 

app 
    .use(express.static('public')) //serve files in this folder
    .use(express.static('resources/css'))
    .use(morgan('dev')) //saves everything in dev mode

    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .listen(port, () => console.log(`Server listening on port ${port}`));

    