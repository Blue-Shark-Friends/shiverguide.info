var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Homepage.html'));
});

app.get('/methodology', (req, res) => {
  res.sendFile(path.join(__dirname, 'Shiver Methodology.html'));
});

app.get('/principles', (req, res) => {
  res.sendFile(path.join(__dirname, 'Shiver Principles.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frequently Asked Questions.html'));
});

app.get('/powerdynamics', (req, res) => {
  res.sendFile(path.join(__dirname, 'Power Dynamics.html'));
});

// end of pages

app.listen(9000, "169.197.80.55");
console.log('Server is listening on 169.197.80.55:9000');
