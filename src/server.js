const express = require('express')
const app = express()
import connection from './config/connectDB';

app.get('/', function (req, res) {
    res.send('Hello World ND1')
})

connection();

app.listen(3008, () => console.log('Server is running on port http://localhost:3008'));