//logic to communicate with frontend HTML form to PostgresSQL database

const express = require('express');
const morgan = require('morgan');
const { Postgres } = require('pg');
const bodyParser = require('body-parser');

const app = express(); 
const PORT = process.env.PORT || 8080; //Heroku is going to use the env.PORT

app 
    .use(morgan('dev')) //saves everything in dev mode; put morgan first or will not be able to see http request details in console
    .use(express.static('public')) //will serve any static files in the 'public' folder

    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .post('/api/resoledata', (req, res, next) => {
        res.json(req.body);
    })

    .listen(PORT, () => console.log(`Server listening on port ${PORT}`));

    