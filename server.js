const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', (request, response) => {
    response.sendFile(path.join(__dirname + '/about.html'));
});

app.post('/send', (request, response) => {
    console.log(request.body);
    response.sendStatus(200);
});

app.listen(port, err => {
    if (err) {
        return console.log('error', err);
    }
    console.log(`server is listening on ${port}`);
})

