const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
// process.ENV.PORT ||
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is running on port')
});

app.get('/categories', (req, res) =>{
    console.log(categories);
    res.send(categories);
})

app.listen(port, () =>{
    console.log(`Dragon is running on port: ${port}`);
})