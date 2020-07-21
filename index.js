
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require('express-jwt');
require('dotenv').config()

const app = express();
const port = 8000;

const jwtsecret = process.env.JWT_SECRET; // https://randomkeygen.com/

/**
 * Generate tokens with https://jwt.io/
 *
 *
 * */
app.use(cors());
app.get('/', jwt({ secret: jwtsecret, algorithms: ['HS256'] }), (req, res) => {
    //res.send('Hello World!')
    axios.get("https://apis.digital.gob.cl/fl/feriados")
    .then(response => {
        res.json(response.data);
    })
});

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
module.exports.handler = serverless(app);