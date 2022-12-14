const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const categories = require('./data/categories.json');

const programming = require('./data/programming.json');


app.get('/programming-categories', (req, res) => {
    res.send(categories)
})

app.get('/main', (req, res) => {
    res.send(categories)
})

app.get('/programming/:id', (req, res) => {
    const id = req.params.id;
    const programmingLanguage = programming.find( prog => prog._id === id)
    res.send(programmingLanguage)
})



app.get('/', (req, res) => {
    res.send('server is running now')
})

app.listen(port, () => {
    console.log('kaj kortese')
})